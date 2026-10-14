'use client'
import { useEffect, useRef, useState } from 'react'
import Image from './MediaImage'
import CompareViewer, { type CompareExample } from './CompareViewer'
import { deliveryUrl, mediaAsset } from '@/lib/media'
import { useLang } from '@/lib/lang-context'
import NameArrow from '@/components/NameArrow'

/**
 * The AI flows as small piles, like the brands in the BWL case: each pile is
 * a little fan of its finished pieces; a click opens a dark board with every
 * example of that flow, each one a before → after fan; a click on one opens
 * the side-by-side comparison.
 */
export type FlowPile = {
  name: string
  line: string
  tools: string[]
  examples: CompareExample[]
}

const isVideo = (s: string) => /\.(mp4|webm)$/i.test(s)

function Still({ src, sizes }: { src: string; sizes: string }) {
  if (isVideo(src)) {
    const m = mediaAsset(src)
    const poster = m?.poster
    return (
      <span className="fp-still">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {poster && <img src={deliveryUrl(poster)} width={m?.width} height={m?.height} alt="" loading="lazy" />}
        <span className="board-play" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg>
        </span>
      </span>
    )
  }
  return (
    <span className="fp-still">
      <Image src={src} alt="" sizes={sizes} />
    </span>
  )
}

function Board({ pile, onClose }: { pile: FlowPile; onClose: () => void }) {
  const { lang } = useLang()
  const dialog = useRef<HTMLDialogElement>(null)
  const [zoom, setZoom] = useState<number | null>(null)
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
      aria-label={pile.name}
      onCancel={(e) => {
        e.preventDefault()
        if (zoom === null) onClose()
      }}
    >
      <div className="viewer-top board-top">
        <div className="board-head">
          <p className="board-title">{pile.name}</p>
          <p className="board-note">{pile.line}</p>
        </div>
        <button type="button" className="viewer-close" onClick={onClose} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="board-scroll">
        <ul className="fp-board">
          {pile.examples.map((ex, i) => (
            <li key={ex.before.src}>
              <button type="button" className="fp-pair" onClick={() => setZoom(i)} aria-label={`${pile.name} · ${ex.label}`}>
                <span className="fp-pair-fan">
                  <span className="fp-pair-before">
                    <Still src={ex.before.src} sizes="(max-width: 767px) 40vw, 200px" />
                  </span>
                  <span className="fp-pair-after">
                    <Still src={ex.after[0].src} sizes="(max-width: 767px) 40vw, 220px" />
                  </span>
                </span>
                <span className="fp-pair-label">
                  <span>{ex.label}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {zoom !== null && <CompareViewer title={pile.name} start={zoom} examples={pile.examples} onClose={() => setZoom(null)} />}
    </dialog>
  )
}

export default function FlowPiles({ piles }: { piles: FlowPile[] }) {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <ul className="fp-grid">
        {piles.map((p, i) => {
          // The pile shows up to three finished pieces from different examples.
          const fronts = p.examples.slice(0, 3).map((e) => e.after[0].src)
          return (
            <li key={p.name}>
              <button type="button" className="fp-card" onClick={() => setOpen(i)}>
                <span className="fp-fan" data-n={fronts.length}>
                  {fronts.map((src) => (
                    <Still key={src} src={src} sizes="(max-width: 767px) 30vw, 160px" />
                  ))}
                </span>
                <span className="fp-name">
                  <NameArrow name={p.name} />
                </span>
                <span className="fp-line">{p.line}</span>
                <span className="fp-count ed-label">
                  {p.tools.join(' · ')}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      {open !== null && <Board pile={piles[open]} onClose={() => setOpen(null)} />}
    </>
  )
}
