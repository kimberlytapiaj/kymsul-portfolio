'use client'
import { useState, useEffect, useCallback } from 'react'
import CampaignCarousel from './CampaignCarousel'

type BentoItem =
  | { kind: 'video-carousel'; sources: string[] }
  | { kind: 'image-carousel'; sources: string[] }
  | { kind: 'video'; src: string }
  | { kind: 'image'; src: string }

type Props = BentoItem & {
  name: string
  index: number
  isPaidMedia?: boolean
  contain?: boolean
  natural?: boolean
}

export default function MediaCell(props: Props) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [open, close])

  const cellClass = props.natural ? 'w-full' : 'aspect-[4/5]'

  return (
    <>
      <div
        className={`${cellClass} overflow-hidden rounded-sm bg-[#f5f3ee] relative group cursor-zoom-in`}
        onClick={() => setOpen(true)}
      >
        <Thumbnail {...props} />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.06] transition-colors pointer-events-none" />
        <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[9px] text-white tracking-[1.2px] bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full pointer-events-none">
          VER ↗
        </span>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={close}
        >
          <button
            className="absolute top-5 right-6 font-mono text-[10px] text-white/50 hover:text-white tracking-[1.6px] transition-colors"
            onClick={close}
          >
            ESC ×
          </button>
          <div
            className="max-w-[92vw] max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContent {...props} />
          </div>
        </div>
      )}
    </>
  )
}

function Thumbnail(props: Props) {
  if (props.natural) {
    if (props.kind === 'video-carousel' || props.kind === 'image-carousel') {
      return <CampaignCarousel gallery={props.sources} name={props.name} fill />
    }
    if (props.kind === 'video') {
      return <video src={props.src} autoPlay loop muted playsInline className="w-full aspect-[9/16] object-cover" />
    }
    return <img src={props.src} alt={`${props.name} ${props.index + 1}`} className="w-full max-h-[220px] object-contain block" loading="lazy" />
  }

  const imgClass = props.contain ? 'w-full h-full object-contain' : 'w-full h-full object-cover'

  if (props.kind === 'video-carousel' || props.kind === 'image-carousel') {
    return <CampaignCarousel gallery={props.sources} name={props.name} fill />
  }
  if (props.kind === 'video') {
    return <video src={props.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
  }
  return <img src={props.src} alt={`${props.name} ${props.index + 1}`} className={imgClass} loading="lazy" />
}

function ModalContent(props: Props) {
  if (props.kind === 'video-carousel' || props.kind === 'image-carousel') {
    return (
      <div className="w-[min(480px,90vw)]">
        <CampaignCarousel gallery={props.sources} name={props.name} />
      </div>
    )
  }
  if (props.kind === 'video') {
    return (
      <video
        src={props.src}
        autoPlay
        controls
        playsInline
        className="max-h-[88vh] w-auto rounded-sm"
      />
    )
  }
  return (
    <img
      src={props.src}
      alt={`${props.name} ${props.index + 1}`}
      className="max-h-[88vh] max-w-[88vw] object-contain rounded-sm"
    />
  )
}
