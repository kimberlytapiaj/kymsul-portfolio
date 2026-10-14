/** Generate web delivery files; original files must live outside the deployment. */
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
const require = createRequire(import.meta.url)
const sharp = createRequire(require.resolve('next/package.json'))('sharp')
const root = process.cwd()
const source = process.argv[2]
if (!source)
  throw new Error(
    'Usage: node scripts/prepare-media.mjs /absolute/path/to/original-assets',
  )
const ffmpeg = process.env.FFMPEG_PATH || 'ffmpeg'
async function walk(dir) {
  return (
    await Promise.all(
      (await fs.readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat()
}
const code = (
  await Promise.all(
    (
      await Promise.all(
        ['app', 'components', 'lib'].map((p) => walk(path.join(root, p))),
      )
    )
      .flat()
      .filter((p) => /\.tsx?$/.test(p))
      .map((p) => fs.readFile(p, 'utf8')),
  )
).join('\n')
const patterns = [...code.matchAll(/\/assets\/([^'"`\s<>]+)/g)].map((m) => m[1])
const referenced = (file) =>
  patterns.some(
    (p) =>
      p === file ||
      (p.includes('${') &&
        file.startsWith(p.split('${')[0]) &&
        file.endsWith(p.split('}').pop())),
  )
const output = path.join(root, 'public/media')
await fs.mkdir(output, { recursive: true })
const manifest = {}
const unused = []
let before = 0,
  after = 0
for (const file of await walk(source)) {
  const rel = path.relative(source, file).split(path.sep).join('/')
  if (!referenced(rel)) {
    unused.push(rel)
    continue
  }
  const data = await fs.readFile(file)
  before += data.length
  const hash = crypto
    .createHash('sha256')
    .update(data)
    .update('web-v1')
    .digest('hex')
    .slice(0, 16)
  const ext = path.extname(file).toLowerCase()
  const key = '/assets/' + rel
  if (/\.(mp4|webm)$/.test(ext)) {
    const dest = path.join(output, hash + '.mp4')
    try {
      await fs.access(dest)
    } catch {
      execFileSync(
        ffmpeg,
        [
          '-hide_banner',
          '-loglevel',
          'error',
          '-y',
          '-i',
          file,
          '-vf',
          "scale='min(1280,iw)':'min(1280,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2",
          '-c:v',
          'libx264',
          '-preset',
          'medium',
          '-crf',
          '25',
          '-pix_fmt',
          'yuv420p',
          '-c:a',
          'aac',
          '-b:a',
          '96k',
          '-movflags',
          '+faststart',
          dest,
        ],
        { stdio: 'pipe' },
      )
    }
    const poster = path.join(output, hash + '-poster.webp')
    try {
      await fs.access(poster)
    } catch {
      execFileSync(
        ffmpeg,
        [
          '-hide_banner',
          '-loglevel',
          'error',
          '-y',
          '-i',
          dest,
          '-frames:v',
          '1',
          '-vf',
          'scale=640:-1',
          '-quality',
          '78',
          poster,
        ],
        { stdio: 'pipe' },
      )
    }
    const meta = await sharp(poster).metadata()
    const bytes = (await fs.stat(dest)).size + (await fs.stat(poster)).size
    after += bytes
    manifest[key] = {
      src: '/media/' + hash + '.mp4',
      poster: '/media/' + hash + '-poster.webp',
      width: meta.width,
      height: meta.height,
      bytes,
    }
  } else if (/\.(png|jpe?g|gif|webp)$/.test(ext)) {
    const meta = await sharp(data, { animated: ext === '.gif' }).metadata()
    const variants = []
    let bytes = 0
    for (const width of [
      ...new Set(
        [480, 960, 1600, 2400].map((w) => Math.min(w, meta.width || w)),
      ),
    ]) {
      const name = `${hash}-${width}.webp`
      const dest = path.join(output, name)
      try {
        await fs.access(dest)
      } catch {
        await sharp(data, { animated: ext === '.gif' })
          .rotate()
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 82, effort: 5 })
          .toFile(dest)
      }
      bytes += (await fs.stat(dest)).size
      variants.push({ src: '/media/' + name, width })
    }
    after += bytes
    manifest[key] = {
      src: variants.at(-1).src,
      width: meta.width,
      height: meta.pageHeight || meta.height,
      variants,
      bytes,
    }
  } else {
    const name = hash + ext
    await fs.copyFile(file, path.join(output, name))
    after += data.length
    manifest[key] = { src: '/media/' + name, bytes: data.length }
  }
  console.log(`${Object.keys(manifest).length} ${rel}`)
}
await fs.writeFile(
  path.join(root, 'lib/media-manifest.json'),
  JSON.stringify(manifest),
)
console.log(
  JSON.stringify({
    referenced: Object.keys(manifest).length,
    unused: unused.length,
    sourceBytes: before,
    deliveryBytes: after,
  }),
)
await fs.writeFile(
  path.join(root, 'scripts/media-inventory.json'),
  JSON.stringify(
    { sourceBytes: before, deliveryBytes: after, unused },
    null,
    2,
  ),
)
