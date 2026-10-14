import index from './media-index.json'
export type MediaAsset = {
  src: string
  poster?: string
  width?: number
  height?: number
  variants?: { src: string; width: number }[]
}
// Compact index generated from media-manifest.json by scripts/media-index.mjs.
const entries = index as Record<string, string>
const cache = new Map<string, MediaAsset | undefined>()
const base = (process.env.NEXT_PUBLIC_MEDIA_BASE_URL || '').replace(/\/$/, '')
export function deliveryUrl(path: string) {
  return path.startsWith('/media/') ? base + path : path
}
export function mediaAsset(src: string): MediaAsset | undefined {
  if (cache.has(src)) return cache.get(src)
  const raw = src.startsWith('/assets/') ? entries[src.slice(8)] : undefined
  let asset: MediaAsset | undefined
  if (raw) {
    const [file, w, h, widths, poster] = raw.split('|')
    const [hash] = file.split(/[-.]/)
    const ext = file.split('.').pop()
    asset = {
      src: '/media/' + file,
      width: w ? Number(w) : undefined,
      height: h ? Number(h) : undefined,
      variants: widths
        ? widths.split(',').map((width) => ({ src: `/media/${hash}-${width}.${ext}`, width: Number(width) }))
        : undefined,
      poster: poster ? '/media/' + poster : undefined,
    }
  }
  cache.set(src, asset)
  return asset
}
export function mediaUrl(src: string) {
  return deliveryUrl(mediaAsset(src)?.src || src)
}
export const isVideo = (src: string) => /\.(mp4|webm)(\?.*)?$/i.test(src)
