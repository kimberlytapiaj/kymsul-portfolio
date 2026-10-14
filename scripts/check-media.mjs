import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'
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
  for (let i = 0; i < files.length; i += 8) {
    await Promise.all(
      files.slice(i, i + 8).map(async (file) => {
        try {
          const response = await fetch(base + file, {
            method: 'HEAD',
            signal: AbortSignal.timeout(15000),
          })
          if (!response.ok) failures.push(`${response.status} ${file}`)
        } catch (e) {
          failures.push(`${file}: ${e.message}`)
        }
      }),
    )
  }
  // Videos need byte-range support so the browser can seek without a full download.
  const video = files.find((f) => f.endsWith('.mp4'))
  if (video) {
    const response = await fetch(base + video, {
      headers: { Range: 'bytes=0-1' },
      signal: AbortSignal.timeout(15000),
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
