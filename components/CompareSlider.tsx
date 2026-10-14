'use client'
import { useEffect, useRef, useState, type PointerEvent as RPointerEvent } from 'react'
import Image from './MediaImage'
import { deliveryUrl, mediaAsset, mediaUrl } from '@/lib/media'
import { useLang } from '@/lib/lang-context'

/** Before/after of two images in one frame: drag the handle to compare. */
const isVideo = (s: string) => /\.(mp4|webm)$/i.test(s)

/** `after` may be a video: it plays muted on loop under the still `before`. */
export default function CompareSlider({
  before,
  after,
  label,
  maxH = '72vh',
  beforePosition = '50% 50%',
}: {
  before: string
  after: string
  label: string
  maxH?: string
  beforePosition?: string
}) {
  const { lang } = useLang()
  const box = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [pos, setPos] = useState(50)
  // The clip only downloads and plays while the slider is on screen.
  useEffect(() => {
    const v = video.current
    if (!v) return
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !still) v.play().catch(() => {})
      else v.pause()
    }, { rootMargin: '200px 0px' })
    io.observe(v)
    return () => io.disconnect()
  }, [after])
  const m = mediaAsset(after) ?? mediaAsset(before)
  const ratio = m?.width && m?.height ? m.width / m.height : 4 / 5
  const move = (e: RPointerEvent) => {
    const r = box.current?.getBoundingClientRect()
    if (!r) return
    setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)))
  }
  return (
    <div
      ref={box}
      className="fs-compare"
      style={{ aspectRatio: String(ratio), width: `min(100%, calc(${maxH} * ${ratio.toFixed(3)}))` }}
      onPointerDown={(e) => {
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        move(e)
      }}
      onPointerMove={(e) => e.buttons && move(e)}
    >
      {isVideo(after) ? (
        <video
          src={mediaUrl(after)}
          poster={m?.poster ? deliveryUrl(m.poster) : undefined}
          aria-label={label}
          ref={video}
          preload="none"
          muted
          loop
          playsInline
          className="fs-compare-video"
        />
      ) : (
        <Image src={after} alt={label} fill sizes="(max-width: 767px) 92vw, 560px" className="object-cover" />
      )}
      <div className="fs-compare-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt="" fill sizes="(max-width: 767px) 92vw, 560px" className="object-cover" style={{ objectPosition: beforePosition }} />
      </div>
      <span className="fs-compare-tag is-before">{lang === 'es' ? 'Antes' : 'Before'}</span>
      <span className="fs-compare-tag is-after">{lang === 'es' ? 'Después' : 'After'}</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="fs-compare-range"
        aria-label={lang === 'es' ? 'Comparar antes y después' : 'Compare before and after'}
      />
      <span className="fs-compare-handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span>⟷</span>
      </span>
    </div>
  )
}

