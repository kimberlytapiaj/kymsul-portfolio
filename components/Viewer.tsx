'use client'
import { useEffect, useRef, useState } from 'react'
import Image from './MediaImage'
import LazyVideo from './LazyVideo'
import { isVideo } from '@/lib/media'
import { useLang } from '@/lib/lang-context'

export type ViewerItem = { src: string; caption?: string; versions?: { label: string; src: string }[] }

/**
 * Full-screen dark viewer, the same one as the Archive: the piece centred at
 * its own proportion, glass-disc arrows, close at the top and a quiet caption
 * below. Arrow keys and swipe move; Esc or a click on the backdrop closes.
 */
export default function Viewer({
  items,
  start = 0,
  startLang = 0,
  title,
  onClose,
}: {
  items: ViewerItem[]
  start?: number
  startLang?: number
  title: string
  onClose: () => void
}) {
  const { lang } = useLang()
  const dialog = useRef<HTMLDialogElement>(null)
  const [at, setAt] = useState(start)
  // Language chosen for translated pieces; it carries over as you move on.
  const [langAt, setLangAt] = useState(startLang)
  const swipe = useRef<number | null>(null)
  const many = items.length > 1
  const step = (dir: 1 | -1) => setAt((i) => (i + dir + items.length) % items.length)

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

  const item = items[at]
  const shown = item.versions?.[langAt] ?? item.versions?.[0]
  const current = { ...item, src: shown?.src ?? item.src }
  return (
    <dialog
      ref={dialog}
      className="viewer"
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
          {many ? `${String(at + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}` : ''}
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
        <figure key={current.src} className="viewer-figure">
          {isVideo(current.src) ? (
            <LazyVideo src={current.src} className="viewer-media" />
          ) : (
            <Image src={current.src} alt={current.caption ? `${title} · ${current.caption}` : title} sizes="(max-width: 1023px) 92vw, 1100px" className="viewer-media" />
          )}
        </figure>
        {many && (
          <button type="button" className="disc-arrow is-next is-viewer" onClick={() => step(1)} aria-label={lang === 'es' ? 'Siguiente' : 'Next'}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
      <div key={`c-${current.src}`} className="viewer-info viewer-info-center">
        <p className="viewer-cat">{title}</p>
        {current.caption && <p className="viewer-format">{current.caption}</p>}
        {item.versions && item.versions.length > 1 && (
          <div className="lang-switch viewer-lang" role="group" aria-label={lang === 'es' ? 'Idioma de la pieza' : 'Piece language'}>
            {item.versions.map((ver, i) => (
              <span key={ver.label} className="contents">
                {i > 0 && <span aria-hidden="true">/</span>}
                <button type="button" aria-pressed={(item.versions![langAt] ? langAt : 0) === i} onClick={() => setLangAt(i)}>
                  {ver.label}
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </dialog>
  )
}
