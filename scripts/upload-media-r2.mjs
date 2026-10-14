/**
 * Upload the generated delivery files (public/media) to a Cloudflare R2 bucket.
 * Zero dependencies: S3-compatible API signed with AWS Signature V4 (node:crypto).
 *
 *   node scripts/upload-media-r2.mjs --dry-run   # list what would be uploaded
 *   node scripts/upload-media-r2.mjs             # upload missing objects
 *
 * Credentials come from the environment or an ignored .env.local file:
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 * Never commit them. Only files referenced by lib/media-manifest.json are sent.
 * Existing objects with the same size are skipped; an existing object with a
 * different size aborts the run, because hashed names must never change bytes.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
createRequire(require.resolve('next/package.json'))('@next/env').loadEnvConfig(
  process.cwd(),
)

const TYPES = {
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
}
const CACHE = 'public, max-age=31536000, immutable'

const sha256 = (data) => crypto.createHash('sha256').update(data).digest('hex')
const hmac = (key, data) => crypto.createHmac('sha256', key).update(data).digest()
const encodePath = (p) =>
  p
    .split('/')
    .map((s) =>
      encodeURIComponent(s).replace(
        /[!'()*]/g,
        (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase(),
      ),
    )
    .join('/')

/** AWS Signature V4 for a single request; returns the headers to send. */
export function sign({ method, host, pathname, headers = {}, payloadHash, accessKeyId, secretAccessKey, region = 'auto', service = 's3', date = new Date() }) {
  const amzDate = date.toISOString().replace(/[:-]|\.\d{3}/g, '')
  const day = amzDate.slice(0, 8)
  const all = {
    ...Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), String(v).trim()])),
    host,
    'x-amz-content-sha256': payloadHash,
    'x-amz-date': amzDate,
  }
  const names = Object.keys(all).sort()
  const canonical = [
    method,
    encodePath(pathname),
    '',
    names.map((n) => `${n}:${all[n]}\n`).join(''),
    names.join(';'),
    payloadHash,
  ].join('\n')
  const scope = `${day}/${region}/${service}/aws4_request`
  const toSign = ['AWS4-HMAC-SHA256', amzDate, scope, sha256(canonical)].join('\n')
  let key = hmac('AWS4' + secretAccessKey, day)
  for (const part of [region, service, 'aws4_request']) key = hmac(key, part)
  const signature = crypto.createHmac('sha256', key).update(toSign).digest('hex')
  const { host: _host, ...rest } = all
  return {
    ...rest,
    authorization: `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${scope}, SignedHeaders=${names.join(';')}, Signature=${signature}`,
  }
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const env = (name) => {
    const value = process.env[name]
    if (!value && !dryRun) throw new Error(`Missing ${name}. Put it in .env.local (ignored by Git).`)
    return value
  }
  const account = env('R2_ACCOUNT_ID')
  const bucket = env('R2_BUCKET')
  const accessKeyId = env('R2_ACCESS_KEY_ID')
  const secretAccessKey = env('R2_SECRET_ACCESS_KEY')
  const host = `${account}.r2.cloudflarestorage.com`

  const manifest = JSON.parse(await fs.readFile('lib/media-manifest.json', 'utf8'))
  const files = [
    ...new Set(
      Object.values(manifest).flatMap((m) => [
        m.src,
        ...(m.poster ? [m.poster] : []),
        ...(m.variants || []).map((v) => v.src),
      ]),
    ),
  ].filter((f) => f.startsWith('/media/'))

  let uploaded = 0
  let skipped = 0
  let bytes = 0
  const problems = []

  async function request(method, key, { body, headers } = {}) {
    const pathname = `/${bucket}/${key}`
    const payloadHash = body ? sha256(body) : sha256('')
    const signed = sign({ method, host, pathname, headers, payloadHash, accessKeyId, secretAccessKey })
    return fetch(`https://${host}${encodePath(pathname)}`, {
      method,
      headers: signed,
      body,
      signal: AbortSignal.timeout(120000),
    })
  }

  async function handle(file) {
    const local = path.join('public', file)
    const key = file.slice(1) // "media/<hash>.<ext>" at the bucket root
    const type = TYPES[path.extname(file).toLowerCase()]
    if (!type) return problems.push(`Unknown type: ${file}`)
    let stat
    try {
      stat = await fs.stat(local)
    } catch {
      return problems.push(`Missing locally: ${local}`)
    }
    if (dryRun) {
      bytes += stat.size
      uploaded++
      return
    }
    // Compressed SVG responses can omit Content-Length. Compare stored sizes.
    const head = await request('HEAD', key, {
      headers: { 'accept-encoding': 'identity' },
    })
    if (head.ok) {
      const remote = Number(head.headers.get('content-length'))
      if (remote === stat.size) return skipped++
      return problems.push(`Different bytes already published, not overwritten: ${key}`)
    }
    if (head.status !== 404) return problems.push(`HEAD ${head.status} ${key}`)
    const body = await fs.readFile(local)
    const put = await request('PUT', key, {
      body,
      headers: { 'content-type': type, 'cache-control': CACHE },
    })
    if (!put.ok) return problems.push(`PUT ${put.status} ${key}: ${(await put.text()).slice(0, 200)}`)
    uploaded++
    bytes += body.length
  }

  for (let i = 0; i < files.length; i += 6) {
    await Promise.all(files.slice(i, i + 6).map(handle))
    if (!dryRun) process.stdout.write(`\r${Math.min(i + 6, files.length)}/${files.length}`)
  }
  if (!dryRun) process.stdout.write('\n')
  const mb = (bytes / 1e6).toFixed(1)
  console.log(
    dryRun
      ? `Dry run: ${uploaded} files (${mb} MB) would be checked/uploaded to ${bucket || '<R2_BUCKET>'} under media/.`
      : `Uploaded ${uploaded} (${mb} MB), already present ${skipped}, problems ${problems.length}.`,
  )
  if (problems.length) {
    console.error(problems.slice(0, 20).join('\n'))
    process.exit(1)
  }
}

if (process.argv[1] === new URL(import.meta.url).pathname) await main()
