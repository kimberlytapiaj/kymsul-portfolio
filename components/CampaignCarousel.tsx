'use client'
import { useRef, useState, useEffect } from 'react'

type Props = { gallery: string[]; name: string }

export default function CampaignCarousel({ gallery, name }: Props) {
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

  return (
    <div className="relative">
      {/* Track — one slide per view */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {gallery.map((src, i) => (
          <div key={i} className="snap-center shrink-0 w-full">
            <img
              src={src}
              alt={`${name} ${i + 1}`}
              className="w-full rounded-sm"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
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

      {/* Dots */}
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
