'use client'
import { useEffect, useRef, useState } from 'react'
import Image from './MediaImage'
import LazyVideo from './LazyVideo'
import CompareSlider from './CompareSlider'
import { useLang } from '@/lib/lang-context'

/**
 * Full-screen dark viewer for before/after examples: both sides at once,
 * side by side, so the change reads in one look. Arrows (and ←/→, swipe)
 * move between examples; Esc or a click on the backdrop closes.
 */
export type CompareExample = {
  label: string
  before: { src: string; caption: string }
  after: { src: string; caption: string }[]
}

const isVideo = (s: string) => /\.(mp4|webm)$/i.test(s)

function Media({ src, alt }: { src: string; alt: string }) {
  return isVideo(src) ? (
    <LazyVideo src={src} className="compare-media" />
  ) : (
    <Image src={src} alt={alt} sizes="(max-width: 1023px) 46vw, 560px" className="compare-media" />
  )
}

export default function CompareViewer({
  examples,
  start = 0,
  title,
  onClose,
}: {
  examples: CompareExample[]
  start?: number
  title: string
  onClose: () => void
}) {
  const { lang } = useLang()
  const dialog = useRef<HTMLDialogElement>(null)
  const [at, setAt] = useState(start)
  const swipe = useRef<number | null>(null)
  const many = examples.length > 1
  const step = (d: 1 | -1) => setAt((i) => (i + d + examples.length) % examples.length)

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

  const ex = examples[at]
  const [main, ...rest] = ex.after
  return (
    <dialog
      ref={dialog}
      className="viewer compare"
      aria-label={title}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('viewer-stage')) onClose()
      }}
      onKeyDown={(e) => {
        if (!many) return
        if (e.key === 'ArrowRight') step(1)
        if (e.key === 'ArrowLeft') step(-1)
      }}
      onPointerDown={(e) => (swipe.current = e.clientX)}
      onPointerUp={(e) => {
        if (!many || swipe.current === null) return
        const dx = e.clientX - swipe.current
        swipe.current = null
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
      }}
    >
      <div className="viewer-top">
        <span className="viewer-count">
          {many ? `${String(at + 1).padStart(2, '0')} / ${String(examples.length).padStart(2, '0')}` : ''}
        </span>
        <button type="button" className="viewer-close" onClick={onClose} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="viewer-stage">
        {many && (
          <button type="button" className="disc-arrow is-prev is-viewer" onClick={() => step(-1)} aria-label={lang === 'es' ? 'Anterior' : 'Previous'}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
        )}
        {!isVideo(ex.before.src) && main && !isVideo(main.src) && rest.length === 0 ? (
          // Two stills: one frame, drag to go from before to after.
          <div key={at} className="compare-slide">
            <CompareSlider before={ex.before.src} after={main.src} label={ex.label} maxH="66vh" />
            <p className="compare-slide-caption">
              {ex.before.caption} <span aria-hidden="true">⟶</span> {main.caption}
            </p>
          </div>
        ) : (
        <div key={at} className="compare-pair">
          <figure className="compare-side">
            <p className="compare-tag">{lang === 'es' ? 'Antes' : 'Before'}</p>
            <Media src={ex.before.src} alt={ex.before.caption} />
            <figcaption>{ex.before.caption}</figcaption>
          </figure>
          <span className="compare-arrow" aria-hidden="true">⟶</span>
          <figure className="compare-side">
            <p className="compare-tag is-after">{lang === 'es' ? 'Después' : 'After'}</p>
            {main && <Media src={main.src} alt={main.caption} />}
            {rest.length > 0 && (
              <div className="compare-more">
                {rest.map((r) => (
                  <Media key={r.src} src={r.src} alt={r.caption} />
                ))}
              </div>
            )}
            <figcaption>{ex.after.map((a) => a.caption).join(' · ')}</figcaption>
          </figure>
        </div>
        )}
        {many && (
          <button type="button" className="disc-arrow is-next is-viewer" onClick={() => step(1)} aria-label={lang === 'es' ? 'Siguiente' : 'Next'}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
      <div className="viewer-info viewer-info-center">
        <p className="viewer-cat">{title}</p>
        <p className="viewer-format">{ex.label}</p>
      </div>
    </dialog>
  )
}
