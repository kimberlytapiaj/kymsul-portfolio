'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from './MediaImage'
import LazyVideo from './LazyVideo'
import { isVideo, mediaAsset } from '@/lib/media'
import { useLang } from '@/lib/lang-context'
type Props = {
  gallery: string[]
  name: string
  start?: number // enlarged view: slide to open on
  captions?: string[] // enlarged view: a small label under each slide (e.g. its format)
  className?: string
  compact?: boolean
  fill?: boolean
  contain?: boolean
}
const HOVER_STEP = 1100 // ms per slide while the pointer rests on it

/**
 * In the case grid (fill): one slide at a time. Resting the pointer on it plays
 * the slides one after another with a soft fade, then it returns to the first.
 * No arrows, counter or bar; a click enlarges it (handled by MediaCell).
 * Enlarged: a swipeable track with thin arrows on hover and arrow keys.
 */
export default function CampaignCarousel(props: Props) {
  return props.fill ? <HoverDeck {...props} /> : <Track {...props} />
}

function Slide({ src, name, i, n, sizes, cover }: { src: string; name: string; i: number; n: number; sizes: string; cover?: boolean }) {
  return isVideo(src) ? (
    <LazyVideo src={src} className="w-full h-full object-contain" />
  ) : (
    <Image
      src={src}
      alt={`${name} · ${i + 1} / ${n}`}
      fill
      sizes={sizes}
      className={cover ? 'object-cover' : 'object-contain'}
    />
  )
}

/** Glass disc arrow, the same family as the video play cue. */
function DiscArrow({ dir, off, onClick, label }: { dir: 1 | -1; off?: boolean; onClick: (e: React.MouseEvent) => void; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`disc-arrow ${dir < 0 ? 'is-prev' : 'is-next'}`}
      data-off={off || undefined}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {dir > 0 ? <path d="M9 5l7 7-7 7" /> : <path d="M15 5l-7 7 7 7" />}
      </svg>
    </button>
  )
}

function HoverDeck({ gallery, name, contain }: Props) {
  const { lang } = useLang()
  const [current, setCurrent] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
  }, [])
  const play = () => {
    if (gallery.length < 2 || timer.current) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setCurrent((i) => (i + 1) % gallery.length)
    timer.current = setInterval(() => setCurrent((i) => (i + 1) % gallery.length), HOVER_STEP)
  }
  useEffect(() => stop, [stop])
  if (!gallery.length) return null
  // Arrows take over: autoplay stops and the reader moves at their own pace.
  const step = (dir: 1 | -1) => (e: React.MouseEvent) => {
    e.stopPropagation()
    stop()
    setCurrent((i) => (i + dir + gallery.length) % gallery.length)
  }
  return (
    <div
      role="group"
      aria-roledescription={lang === 'es' ? 'carrusel' : 'carousel'}
      aria-label={`${name} · ${gallery.length} ${lang === 'es' ? 'láminas' : 'slides'}`}
      className="slide-deck absolute inset-0"
      onPointerEnter={(e) => e.pointerType === 'mouse' && play()}
      onPointerLeave={() => {
        stop()
        setCurrent(0)
      }}
    >
      {gallery.map((src, i) => (
        <div key={src} className="slide-deck-item" data-on={i === current || undefined} aria-hidden={i !== current}>
          <Slide
            src={src}
            name={name}
            i={i}
            n={gallery.length}
            cover={!contain}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
          />
        </div>
      ))}
      {gallery.length > 1 && (
        <>
          <DiscArrow dir={-1} onClick={step(-1)} label={lang === 'es' ? 'Lámina anterior' : 'Previous slide'} />
          <DiscArrow dir={1} onClick={step(1)} label={lang === 'es' ? 'Lámina siguiente' : 'Next slide'} />
        </>
      )}
    </div>
  )
}

function Track({ gallery, name, className = '', start = 0, captions }: Props) {
  const { lang } = useLang()
  const track = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })
  const [at, setAt] = useState(start)
  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 })
    setAt(Math.round(el.scrollLeft / el.clientWidth))
  }, [])
  useEffect(() => {
    const el = track.current
    if (el && start) el.scrollLeft = start * el.clientWidth
    update()
    el?.focus({ preventScroll: true })
  }, [update, start])
  if (!gallery.length) return null
  const asset = mediaAsset(gallery[0])
  const ratio = asset?.width && asset?.height ? `${asset.width}/${asset.height}` : '4/5'
  const many = gallery.length > 1
  const step = (dir: 1 | -1) => (e: React.MouseEvent) => {
    e.stopPropagation()
    const el = track.current
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }
  const arrow = (dir: 1 | -1) => (
    <DiscArrow
      dir={dir}
      off={dir < 0 ? edge.start : edge.end}
      onClick={step(dir)}
      label={dir < 0 ? (lang === 'es' ? 'Lámina anterior' : 'Previous slide') : (lang === 'es' ? 'Lámina siguiente' : 'Next slide')}
    />
  )
  return (
    <div className={`slide-wrap relative ${className}`}>
      <div
        ref={track}
        role="region"
        aria-roledescription={lang === 'es' ? 'carrusel' : 'carousel'}
        aria-label={`${name} · ${gallery.length} ${lang === 'es' ? 'láminas' : 'slides'}`}
        tabIndex={many ? 0 : undefined}
        className="slide-track"
        onScroll={update}
      >
        {gallery.map((src, i) => (
          <div
            key={src}
            className={captions ? 'slide slide-fixed' : 'slide'}
            style={captions ? undefined : { aspectRatio: ratio, maxHeight: '78dvh' }}
          >
            <Slide src={src} name={captions?.[i] ? `${name} · ${captions[i]}` : name} i={i} n={gallery.length} sizes="(max-width: 1024px) 90vw, 1000px" />
          </div>
        ))}
      </div>
      {many && arrow(-1)}
      {many && arrow(1)}
      {captions && (
        <p className="slide-caption" aria-live="polite">
          {captions[at] ?? ''}
        </p>
      )}
    </div>
  )
}
