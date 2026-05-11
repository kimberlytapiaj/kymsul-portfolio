'use client'
import { useRef, useState, useEffect } from 'react'

type Props = {
  gallery: string[]
  name: string
  className?: string
  compact?: boolean
  fill?: boolean
}

export default function CampaignCarousel({ gallery, name, className, compact, fill }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' })
  }

  const scroll = (dir: 1 | -1) =>
    scrollTo(Math.max(0, Math.min(gallery.length - 1, current + dir)))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const handler = () => {
      setCurrent(Math.round(track.scrollLeft / track.clientWidth))
    }
    track.addEventListener('scroll', handler, { passive: true })
    return () => track.removeEventListener('scroll', handler)
  }, [])

  if (fill) {
    return (
      <div className={`relative h-full overflow-hidden ${className ?? ''}`}>
        <div
          ref={trackRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {gallery.map((src, i) => (
            <div key={i} className="snap-center shrink-0 w-full h-full">
              {src.endsWith('.mp4') ? (
                <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <img src={src} alt={`${name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              )}
            </div>
          ))}
        </div>

        {gallery.length > 1 && (
          <>
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center font-mono text-[12px] text-white hover:bg-black/50 transition-colors z-10"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center font-mono text-[12px] text-white hover:bg-black/50 transition-colors z-10"
            >
              →
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === current ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className ?? 'max-w-[560px] mx-auto'}`}>
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {gallery.map((src, i) =>
          src.endsWith('.mp4') ? (
            compact ? (
              <div key={i} className="snap-center shrink-0 w-full aspect-[9/16]">
                <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-sm" />
              </div>
            ) : (
              <div key={i} className="snap-center shrink-0 w-full flex items-center justify-center h-[520px]">
                <video src={src} autoPlay loop muted playsInline className="h-full w-auto rounded-sm" />
              </div>
            )
          ) : (
            <div key={i} className="snap-center shrink-0 w-full">
              <img src={src} alt={`${name} ${i + 1}`} className="w-full rounded-sm" loading="lazy" />
            </div>
          )
        )}
      </div>

      {gallery.length > 1 && (
        <>
          <button
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center font-mono text-[13px] hover:bg-white transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center font-mono text-[13px] hover:bg-white transition-colors z-10"
          >
            →
          </button>
        </>
      )}

      {gallery.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? 'bg-dark' : 'bg-[rgba(13,13,13,0.2)]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
