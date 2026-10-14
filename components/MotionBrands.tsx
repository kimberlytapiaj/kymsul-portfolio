'use client'
import { useRef, useState, type CSSProperties } from 'react'
import BrandBoard from './BrandBoard'
import projects from '@/lib/project-summaries.json'
import { deliveryUrl, mediaAsset, mediaUrl } from '@/lib/media'
import { useLang } from '@/lib/lang-context'
import NameArrow from '@/components/NameArrow'

type Summary = (typeof projects)[number] & { plate?: string }

/**
 * Motion by brand, same tiles as the other areas: the brand's first motion
 * piece on its colour plate (it plays, silent, while the cursor is on it);
 * a click opens the board with only that brand's motion pieces.
 */
function AreaTile({ p, srcs, onOpen }: { p: Summary; srcs: string[]; onOpen: () => void }) {
  const video = useRef<HTMLVideoElement>(null)
  const [live, setLive] = useState(false)
  const m = mediaAsset(srcs[0])
  const poster = m?.poster
  const r = m?.width && m?.height ? m.width / m.height : 9 / 16
  const shape = r > 1.1 ? 'is-wide' : r > 0.9 ? 'is-square' : ''
  return (
    <button
      type="button"
      className={`related-card work-tile motion-tile ${shape}`}
      onClick={onOpen}
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse') return
        setLive(true)
        requestAnimationFrame(() => video.current?.play().catch(() => {}))
      }}
      onPointerLeave={() => {
        video.current?.pause()
        setLive(false)
      }}
    >
      <span className="related-media" style={p.plate ? ({ '--plate': p.plate } as CSSProperties) : undefined}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {poster && <img src={deliveryUrl(poster)} width={m?.width} height={m?.height} alt="" loading="lazy" />}
        {live && <video ref={video} src={mediaUrl(srcs[0])} muted loop playsInline className="motion-tile-preview" />}
      </span>
      <span className="related-name">
        <NameArrow name={p.name} />
      </span>
    </button>
  )
}

/** Motion and Video areas: one tile per brand, from a brand → pieces map. */
export default function MotionBrands({ picks, label }: { picks: Record<string, string[]>; label: { es: string; en: string } }) {
  const { lang } = useLang()
  const [open, setOpen] = useState<string | null>(null)
  // Agency brands first, in the order of the map.
  const all = projects as Summary[]
  const brands = Object.keys(picks).map((id) => all.find((p) => p.id === id)).filter((p): p is Summary => !!p)
  const current = brands.find((p) => p.id === open)
  return (
    <>
      <ul className="work-tiles">
        {brands.map((p) => (
          <li key={p.id}>
            <AreaTile p={p} srcs={picks[p.id]} onOpen={() => setOpen(p.id)} />
          </li>
        ))}
      </ul>
      {current && (
        <BrandBoard
          title={current.name}
          note={label[lang]}
          groups={picks[current.id].map((src) => ({ items: [{ src }] }))}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  )
}
