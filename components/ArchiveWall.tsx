'use client'
import { useEffect, useRef, useState } from 'react'
import Image from './MediaImage'
import Link from './LocaleLink'
import LazyVideo from './LazyVideo'
import { deliveryUrl, isVideo, mediaAsset } from '@/lib/media'
import { useLang } from '@/lib/lang-context'
import type { ArchiveItem } from '@/lib/archive'
import { caseHref } from '@/lib/locale'

/** Archive as a cosmos: every piece floating on black at three depths, with
 *  slow drift, pointer parallax and drag to explore; a click enlarges the
 *  piece and links to its case. Tiles stay buttons, so Tab walks the cosmos. */
export default function ArchiveWall({ items }: { items: ArchiveItem[] }) {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const triggers = useRef<(HTMLButtonElement | null)[]>([])
  const swipe = useRef(0)

  const isOpen = open !== null
  const last = useRef(0)
  if (open !== null) last.current = open
  // Open/close only when the dialog toggles; stepping keeps it open.
  useEffect(() => {
    if (!isOpen) return
    const el = dialog.current
    if (!el) return
    if (!el.open) el.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
      el.close()
      triggers.current[last.current]?.focus()
    }
  }, [isOpen])

  const current = open === null ? null : items[open]
  // A carousel opens on its first slide; the arrows walk its slides before moving on.
  const [slide, setSlide] = useState(0)
  const show = (i: number) => {
    setSlide(0)
    setOpen(i)
  }
  const step = (d: number) => {
    const n = current?.slides?.length ?? 0
    if (n && slide + d >= 0 && slide + d < n) return setSlide(slide + d)
    setSlide(0)
    setOpen((i) => (i === null ? i : (i + d + items.length) % items.length))
  }
  const shown = current?.slides ? current.slides[slide] : current?.src

  // ── Cosmos layout: deterministic scatter over a plane larger than the view.
  // Loose grid: each piece keeps its own cell (no overlaps), jittered and
  // tilted inside it, so the field reads free but every piece stays visible.
  const CELL_W = 176
  const CELL_H = 226
  const WIDTH = [92, 118, 146] // far · mid · near
  const cols = Math.ceil(Math.sqrt(items.length * 1.9))
  const rows = Math.ceil(items.length / cols)
  const planeW = cols * CELL_W + CELL_W / 2
  const planeH = rows * CELL_H
  const rand = (i: number, k: number) => {
    const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453
    return x - Math.floor(x)
  }
  const placed = items.map((item, i) => {
    const c = i % cols
    const r = Math.floor(i / cols)
    const depth = Math.floor(rand(i, 1) * 3) // 0 far · 1 mid · 2 near
    const w = WIDTH[depth]
    const slackX = CELL_W - w - 16
    const x = c * CELL_W + (r % 2 ? CELL_W / 2 : 0) + 8 + rand(i, 2) * slackX
    const y = r * CELL_H + 8 + rand(i, 3) * 26
    // Entry "boom": every piece starts at the plane centre and flies out,
    // later the farther it lands.
    const fromX = planeW / 2 - x
    const fromY = planeH / 2 - y
    const dist = Math.hypot(fromX, fromY) / Math.hypot(planeW / 2, planeH / 2)
    return { item, i, depth, x, y, rot: (rand(i, 4) - 0.5) * 16, fromX, fromY, delay: dist * 700 + rand(i, 5) * 250 }
  })

  const stage = useRef<HTMLDivElement>(null)
  const layers = useRef<(HTMLDivElement | null)[]>([])
  const pan = useRef({ x: 0, y: 0 })
  const pointer = useRef({ x: 0, y: 0 })
  const drag = useRef<{ x: number; y: number; px: number; py: number; moved: boolean; tile: number | null } | null>(null)
  // Freeze drift and parallax while the pointer rests on a piece or is pressed,
  // so the piece never slides out from under the cursor mid-click.
  const still = useRef(false)
  // While exploring (wheel/drag) the title fades so pieces behind it read and
  // stay clickable; it returns after a short idle.
  const idle = useRef<number | undefined>(undefined)
  const explore = () => {
    stage.current?.setAttribute('data-exploring', 'true')
    window.clearTimeout(idle.current)
    idle.current = window.setTimeout(() => stage.current?.removeAttribute('data-exploring'), 2500)
  }
  // One plane: every piece moves together, so they never slide over each other.
  const PARALLAX = [1, 1, 1]

  const clampPan = (x: number, y: number) => {
    const el = stage.current
    if (!el) return { x, y }
    const minX = -(planeW - el.clientWidth) - 200
    const minY = -(planeH - el.clientHeight) - 200
    return { x: Math.min(200, Math.max(minX, x)), y: Math.min(200, Math.max(minY, y)) }
  }

  useEffect(() => {
    const el = stage.current
    if (!el) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    // Start centred on the plane.
    pan.current = { x: -(planeW - el.clientWidth) / 2, y: -(planeH - el.clientHeight) / 2 }
    let frame = 0
    let t = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!reduced.matches && !drag.current && !still.current) t += dt
      const drift = { x: Math.sin(t / 9) * 40, y: Math.cos(t / 11) * 30 }
      layers.current.forEach((layer, d) => {
        if (!layer) return
        const f = PARALLAX[d]
        const x = pan.current.x * f + drift.x * f - pointer.current.x * 30 * f
        const y = pan.current.y * f + drift.y * f - pointer.current.y * 22 * f
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    // Wheel / trackpad pans the plane; at the bottom edge it lets the page scroll.
    const onWheel = (e: WheelEvent) => {
      const before = pan.current
      const next = clampPan(before.x - e.deltaX, before.y - e.deltaY)
      const stuck = next.x === before.x && next.y === before.y
      if (stuck) return
      e.preventDefault()
      pan.current = next
      explore()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('wheel', onWheel)
      window.clearTimeout(idle.current)
    }
    // Layout constants derive from items, which are static for the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <section
        ref={stage}
        className="cosmos-stage"
        aria-labelledby="archive-title"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const onTile = !!(e.target as HTMLElement).closest('.cosmos-tile')
          still.current = onTile || !!drag.current
          if (!still.current) pointer.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 }
          const d = drag.current
          if (!d) return
          const dx = e.clientX - d.x
          const dy = e.clientY - d.y
          if (!d.moved && Math.hypot(dx, dy) > 10) d.moved = true
          if (d.moved) {
            pan.current = clampPan(d.px + dx, d.py + dy)
            explore()
          }
        }}
        onPointerDown={(e) => {
          const tile = (e.target as HTMLElement).closest<HTMLElement>('.cosmos-tile')
          drag.current = {
            x: e.clientX,
            y: e.clientY,
            px: pan.current.x,
            py: pan.current.y,
            moved: false,
            tile: tile ? Number(tile.dataset.index) : null,
          }
          still.current = true
        }}
        onPointerUp={() => {
          const d = drag.current
          drag.current = null
          // A press that barely moved on a piece opens it.
          if (d && !d.moved && d.tile !== null) show(d.tile)
        }}
        onPointerLeave={() => {
          drag.current = null
          still.current = false
        }}
      >
        <div className="cosmos-head">
          <p className="ed-label">{lang === 'es' ? 'ARCHIVO' : 'ARCHIVE'}</p>
          <h1 id="archive-title" className="ed-title cosmos-title">
            {lang === 'es' ? 'Todo mi' : 'All my'} <strong>{lang === 'es' ? 'trabajo.' : 'work.'}</strong>
          </h1>
        </div>
        <div
          ref={(node) => {
            layers.current[0] = node
          }}
          className="cosmos-layer"
          style={{ width: planeW, height: planeH }}
        >
            {placed.map(({ item, i, depth: d, x, y, rot, fromX, fromY, delay }) => (
                <button
                  key={item.src}
                  ref={(node) => {
                    triggers.current[i] = node
                  }}
                  type="button"
                  className={`cosmos-tile ${item.slides ? 'is-stack' : ''}`}
                  style={
                    {
                      left: `${x.toFixed(1)}px`,
                      top: `${y.toFixed(1)}px`,
                      '--rot': `${rot.toFixed(1)}deg`,
                      '--fx': `${fromX.toFixed(0)}px`,
                      '--fy': `${fromY.toFixed(0)}px`,
                      '--delay': `${delay.toFixed(0)}ms`,
                    } as React.CSSProperties
                  }
                  data-index={i}
                  data-depth={d}
                  onClick={(e) => {
                    // Pointer presses open on pointer-up; this path is keyboard (detail 0).
                    if (e.detail === 0) show(i)
                  }}
                  onFocus={() => {
                    // Bring the focused piece into view.
                    const el = stage.current
                    if (!el) return
                    const f = PARALLAX[d]
                    pan.current = { x: (el.clientWidth / 2 - x) / f, y: (el.clientHeight / 2 - y) / f }
                  }}
                  aria-label={`${lang === 'es' ? 'Ampliar' : 'Expand'}: ${item.project ? `${item.project.name}, ${item.project.line[lang]}` : i + 1}`}
                >
                  {isVideo(item.src) ? (
                    <span className="archive-video">
                      {mediaAsset(item.src)?.poster && (
                        <img
                          src={deliveryUrl(mediaAsset(item.src)!.poster!)}
                          width={mediaAsset(item.src)!.width}
                          height={mediaAsset(item.src)!.height}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                      )}
                      <span className="archive-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg></span>
                    </span>
                  ) : (
                    <Image src={item.src} alt="" sizes="240px" draggable={false} />
                  )}
                  {item.project && (
                    <span className="cosmos-card" aria-hidden="true">
                      <span className="cosmos-card-name">{item.project.name}</span>
                      <span className="cosmos-card-cat">
                        {item.slides ? `${lang === 'es' ? 'Carrusel' : 'Carousel'} · ${item.slides.length} ${lang === 'es' ? 'láminas' : 'slides'}` : item.project.category}
                      </span>
                      <span className="cosmos-card-line">{item.project.line[lang]}</span>
                    </span>
                  )}
                </button>
              ))}
        </div>
      </section>

      {current && (
        <dialog
          ref={dialog}
          className="viewer"
          aria-label={current.project?.name ?? (lang === 'es' ? 'Pieza' : 'Piece')}
          onCancel={() => setOpen(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('viewer-stage')) setOpen(null)
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') step(1)
            if (e.key === 'ArrowLeft') step(-1)
          }}
          onTouchStart={(e) => (swipe.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - swipe.current
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
          }}
        >
          <div className="viewer-top">
            <span />
            <button type="button" className="viewer-close" onClick={() => setOpen(null)} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="viewer-stage">
            <button type="button" className="viewer-arrow viewer-prev" onClick={() => step(-1)} aria-label={lang === 'es' ? 'Anterior' : 'Previous'}>
              ←
            </button>
            <figure key={shown} className="viewer-figure">
              {isVideo(shown!) ? (
                <LazyVideo src={shown!} className="viewer-media" />
              ) : (
                <Image
                  src={shown!}
                  alt={current.project ? `${current.project.name} · ${open! + 1}` : ''}
                  sizes="90vw"
                  className="viewer-media"
                />
              )}
            </figure>
            <button type="button" className="viewer-arrow viewer-next" onClick={() => step(1)} aria-label={lang === 'es' ? 'Siguiente' : 'Next'}>
              →
            </button>
          </div>

          {current.project && (
            <div key={`i-${current.src}`} className="viewer-info viewer-info-quiet">
              <Link href={caseHref(current.project.id)} className="viewer-name-link">
                {current.project.name} <span aria-hidden="true">⟶</span>
              </Link>
              <p className="viewer-cat">
                {current.slides
                  ? `${lang === 'es' ? 'Carrusel' : 'Carousel'} · ${current.slides.length} ${lang === 'es' ? 'láminas' : 'slides'}`
                  : current.project.category}
              </p>
            </div>
          )}
        </dialog>
      )}
    </>
  )
}
