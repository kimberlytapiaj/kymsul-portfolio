'use client'
import { useEffect, useRef, useState } from 'react'
import Image from './MediaImage'
import Viewer, { type ViewerItem } from './Viewer'
import { deliveryUrl, isVideo, mediaAsset } from '@/lib/media'
import { useLang } from '@/lib/lang-context'

/**
 * A brand's whole body of work at a glance: a dark board with every piece in
 * justified rows (a puzzle: each piece whole at its own proportion, no gaps),
 * no clicking through one by one. One "EN / 中文" switch at the top
 * swaps every translated piece at once; a click opens that piece large.
 */
export type BoardGroup = { items: ViewerItem[] }

const ratioOf = (src: string) => {
  const m = mediaAsset(src)
  return m?.width && m?.height ? m.width / m.height : 0.75
}

/** Splits pieces into rows of similar summed proportion, keeping their order. */
function justify(ratios: number[], width: number, target: number) {
  const rows: number[][] = []
  if (width <= 0) return rows
  const total = ratios.reduce((a, r) => a + r, 0)
  const k = Math.max(1, Math.round((total * target) / width))
  const per = total / k
  let row: number[] = []
  let sum = 0
  ratios.forEach((r, i) => {
    if (row.length && sum + r / 2 > per && rows.length < k - 1) {
      rows.push(row)
      row = []
      sum = 0
    }
    row.push(i)
    sum += r
  })
  if (row.length) rows.push(row)
  return rows
}

/** One tile per piece; a carousel stays one tile whose slides play on hover. */
function Tile({ group, langAt, label, onOpen }: { group: BoardGroup; langAt: number; label: string; onOpen: () => void }) {
  const [at, setAt] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const many = group.items.length > 1
  const stop = () => {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
    setAt(0)
  }
  useEffect(() => () => { if (timer.current) clearInterval(timer.current) }, [])
  const play = () => {
    if (!many || timer.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setAt(1 % group.items.length)
    timer.current = setInterval(() => setAt((i) => (i + 1) % group.items.length), 1100)
  }
  const srcOf = (it: ViewerItem) => it.versions?.[langAt]?.src ?? it.src
  const first = srcOf(group.items[0])
  const poster = isVideo(first) ? mediaAsset(first)?.poster : undefined
  return (
    <button
      type="button"
      className={`board-tile ${many ? 'is-stack' : ''}`}
      onClick={onOpen}
      onPointerEnter={(e) => e.pointerType === 'mouse' && play()}
      onPointerLeave={stop}
      aria-label={label}
    >
      {poster ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={deliveryUrl(poster)} width={mediaAsset(first)?.width} height={mediaAsset(first)?.height} alt="" loading="lazy" />
          <span className="board-play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
        </>
      ) : (
        <span className="board-deck">
          {group.items.map((it, i) => (
            <span key={`${it.src}-${i}`} className="board-slide" data-on={i === at || undefined}>
              <Image src={srcOf(it)} alt="" sizes="(max-width: 767px) 46vw, 300px" />
            </span>
          ))}
        </span>
      )}
    </button>
  )
}

export default function BrandBoard({
  title,
  note,
  groups,
  onClose,
}: {
  title: string
  note?: string
  groups: BoardGroup[]
  onClose: () => void
}) {
  const { lang } = useLang()
  const grid = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = grid.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const dialog = useRef<HTMLDialogElement>(null)
  const [langAt, setLangAt] = useState(0)
  const [zoom, setZoom] = useState<number | null>(null)
  const labels = groups.flatMap((g) => g.items).find((it) => it.versions && it.versions.length > 1)?.versions?.map((v) => v.label)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    el.showModal()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
      el.close()
    }
  }, [])

  return (
    <dialog
      ref={dialog}
      className="viewer board"
      aria-label={title}
      onCancel={(e) => {
        e.preventDefault()
        if (zoom === null) onClose()
      }}
    >
      <div className="viewer-top board-top">
        <div className="board-head">
          <p className="board-title">{title}</p>
          {note && <p className="board-note">{note}</p>}
        </div>
        <div className="board-tools">
          {labels && (
            <div className="lang-switch viewer-lang" role="group" aria-label={lang === 'es' ? 'Idioma de las piezas' : 'Pieces language'}>
              {labels.map((label, i) => (
                <span key={label} className="contents">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <button type="button" aria-pressed={langAt === i} onClick={() => setLangAt(i)}>
                    {label}
                  </button>
                </span>
              ))}
            </div>
          )}
          <button type="button" className="viewer-close" onClick={onClose} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
          <span aria-hidden="true">×</span>
        </button>
        </div>
      </div>
      <div className="board-scroll">
        <div ref={grid} className="board-puzzle">
          {(() => {
            const ratios = groups.map((g) => ratioOf(g.items[0].src))
            const gap = width < 768 ? 10 : 18
            const target = width < 768 ? 170 : Math.min(360, Math.max(240, width * 0.22))
            return justify(ratios, width, target).map((row, ri) => {
              const sum = row.reduce((a, i) => a + ratios[i], 0)
              // A short last row keeps the target height instead of stretching.
              const h = Math.min((width - gap * (row.length - 1)) / sum, target * 1.25)
              return (
                <ul key={ri} className="board-row" style={{ gap }}>
                  {row.map((i) => (
                    <li key={`${groups[i].items[0].src}-${i}`} style={{ width: h * ratios[i], height: h }}>
                      <Tile
                        group={groups[i]}
                        langAt={langAt}
                        onOpen={() => setZoom(i)}
                        label={`${lang === 'es' ? 'Ver en grande' : 'View large'} · ${title} ${i + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              )
            })
          })()}
        </div>
      </div>
      {zoom !== null && (
        <Viewer
          title={title}
          startLang={langAt}
          items={groups[zoom].items}
          onClose={() => setZoom(null)}
        />
      )}
    </dialog>
  )
}
