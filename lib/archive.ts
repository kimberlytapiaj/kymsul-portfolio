import { projects } from './projects'
import { projectTranslationsEN } from './project-translations'
import { mediaAsset, mediaUrl } from './media'

export type ArchiveItem = {
  src: string
  /** A carousel: every slide, in order (src is the first). */
  slides?: string[]
  project?: {
    id: string
    name: string
    category: string
    line: { es: string; en: string }
  }
}

/**
 * Loose pieces that don't belong to a case: illustration, animation, photo…
 * Add them here once their originals are in original-assets and prepared with
 * `npm run media:prepare`. `project` is optional.
 */
export const loosePieces: ArchiveItem[] = []

// Only finished work: skip process material (components, iterations, raw
// originals, sketches, "before" versions) and extreme strips.
const PROCESS = /component|iter-|original|sketch|boceto|proceso|process|before|antes|raw|wip|draft|-v\d\b/i

function isFinished(src: string) {
  if (PROCESS.test(src.split('/').pop() ?? '')) return false
  const m = mediaAsset(src)
  const ratio = m?.width && m?.height ? m.width / m.height : 1
  return ratio < 4 && ratio > 0.25
}

type Entry = { src: string; slides?: string[] }

const isMedia = (v: unknown): v is string =>
  typeof v === 'string' && v.startsWith('/assets/') && /\.(png|jpe?g|webp|gif|mp4|webm)$/i.test(v)

function collect(value: unknown, out: Entry[]) {
  if (isMedia(value)) {
    if (isFinished(value)) out.push({ src: value })
  } else if (Array.isArray(value)) value.forEach((v) => collect(v, out))
  else if (value && typeof value === 'object') {
    const o = value as { label?: unknown; carousel?: unknown; type?: unknown; items?: unknown; gallery?: unknown; versions?: unknown }
    // Groups labelled "Antes…" are the before half of a comparison.
    if (typeof o.label === 'string' && /^antes|^before/i.test(o.label)) return
    // A carousel stays one piece in the archive, carrying its slides.
    if (o.carousel === true || o.type === 'carousel') {
      const list = (Array.isArray(o.items) ? o.items : Array.isArray(o.gallery) ? o.gallery : []).filter(isMedia).filter(isFinished)
      if (list.length > 1) {
        out.push({ src: list[0], slides: list })
        if (o.versions) collect(o.versions, out)
        return
      }
    }
    Object.values(value).forEach((v) => collect(v, out))
  }
}

/** Every piece across all cases plus loose pieces, deduplicated by delivered
 *  file and interleaved project by project so the wall feels uncategorised. */
export function archiveItems(): ArchiveItem[] {
  const seen = new Set<string>()
  const lists = projects.map((p) => {
    const entries: Entry[] = []
    // Carousels first, so a slide also used loose elsewhere stays in its carousel.
    collect([p.campaigns, p.gallery, p.image], entries)
    return entries
      .filter(({ src, slides }) => {
        // Placeholder cards (cases still being filled) are not work.
        if (src.includes('/kymsul/kymsul-')) return false
        const keys = (slides ?? [src]).map(mediaUrl)
        if (seen.has(keys[0])) return false
        keys.forEach((k) => seen.add(k))
        return true
      })
      .map(({ src, slides }) => ({
        src,
        slides,
        project: {
          id: p.id,
          name: p.name,
          category: p.category,
          line: { es: p.tagline, en: projectTranslationsEN[p.id]?.tagline ?? p.tagline },
        },
      }))
  })
  const mixed: ArchiveItem[] = []
  for (let i = 0; lists.some((l) => i < l.length); i++)
    for (const l of lists) if (l[i]) mixed.push(l[i])
  return [...loosePieces, ...mixed]
}

/** A varied handful of finished stills for the home teaser row, picked
 *  evenly across the archive (which is already interleaved by project). */
export function teaserPieces(count = 14) {
  // Portrait stills only, so the row weighs evenly.
  const stills = archiveItems().filter((it) => {
    if (/\.(mp4|webm)$/i.test(it.src)) return false
    const m = mediaAsset(it.src)
    const ratio = m?.width && m?.height ? m.width / m.height : 1
    return ratio >= 0.6 && ratio <= 0.85
  })
  const step = Math.max(1, Math.floor(stills.length / count))
  return Array.from({ length: count }, (_, k) => stills[(k * step + 3) % stills.length].src)
}
