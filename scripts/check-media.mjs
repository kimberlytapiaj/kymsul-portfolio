import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'
import { setTimeout as delay } from 'node:timers/promises'
const require = createRequire(import.meta.url)
createRequire(require.resolve('next/package.json'))('@next/env').loadEnvConfig(
  process.cwd(),
)
const manifest = JSON.parse(
  await fs.readFile('lib/media-manifest.json', 'utf8'),
)
const files = [
  ...new Set(
    Object.values(manifest).flatMap((m) => [
      m.src,
      ...(m.poster ? [m.poster] : []),
      ...(m.variants || []).map((v) => v.src),
    ]),
  ),
]
const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, '')
let failures = []
if (base) {
  const url = new URL(base)
  if (url.protocol !== 'https:') throw new Error('Media CDN must use HTTPS.')
  const developmentUrl = url.hostname.endsWith('.r2.dev')
  const concurrency = developmentUrl ? 2 : 8
  let nextRequestAt = 0
  async function request(file, options = {}) {
    for (let attempt = 0; attempt < 6; attempt++) {
      if (developmentUrl) {
        const wait = Math.max(0, nextRequestAt - Date.now())
        nextRequestAt = Date.now() + wait + 250
        await delay(wait)
      }
      const response = await fetch(base + file, {
        ...options,
        signal: AbortSignal.timeout(15000),
      })
      if (![429, 500, 502, 503, 504].includes(response.status) || attempt === 5)
        return response
      const retryAfter = response.headers.get('retry-after')
      const retryMs = retryAfter === null
        ? NaN
        : /^\d+$/.test(retryAfter)
          ? Number(retryAfter) * 1000
          : Date.parse(retryAfter) - Date.now()
      const wait = Math.max(1000, Number.isFinite(retryMs) ? retryMs : 2000 * 2 ** attempt)
      console.log(`CDN returned ${response.status}; retrying in ${Math.ceil(wait / 1000)}s.`)
      await response.body?.cancel()
      await delay(wait)
    }
  }
  for (let i = 0; i < files.length; i += concurrency) {
    await Promise.all(
      files.slice(i, i + concurrency).map(async (file) => {
        try {
          const response = await request(file, { method: 'HEAD' })
          if (!response.ok) failures.push(`${response.status} ${file}`)
        } catch (e) {
          failures.push(`${file}: ${e.message}`)
        }
      }),
    )
    if ((i + concurrency) % 200 === 0)
      console.log(`Checked ${Math.min(i + concurrency, files.length)}/${files.length} media files.`)
  }
  // Videos need byte-range support so the browser can seek without a full download.
  const video = files.find((f) => f.endsWith('.mp4'))
  if (video) {
    const response = await request(video, {
      headers: { Range: 'bytes=0-1' },
    })
    if (response.status !== 206)
      failures.push(`Range requests not supported (${response.status}) ${video}`)
    await response.body?.cancel()
  }
} else {
  for (const file of files) {
    try {
      await fs.access(path.join('public', file))
    } catch {
      failures.push(file)
    }
  }
}
if (failures.length)
  throw new Error(
    `Missing media (${failures.length}). Configure NEXT_PUBLIC_MEDIA_BASE_URL after uploading the media/ folder, or generate local files with media:prepare.\n${failures.slice(0, 12).join('\n')}`,
  )
console.log(
  `Verified ${files.length} media files (${base ? 'CDN' : 'local fallback'}).`,
)
