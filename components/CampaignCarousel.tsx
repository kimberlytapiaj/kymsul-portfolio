'use client'
import { useRef, useState, useEffect } from 'react'

type Props = { gallery: string[]; name: string }

export default function CampaignCarousel({ gallery, name }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const item = track.children[index] as HTMLElement
    if (item) track.scrollTo({ left: item.offsetLeft, behavior: 'smooth' })
  }

  const scroll = (dir: 1 | -1) => scrollTo(Math.max(0, Math.min(gallery.length - 1, current + dir)))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const handler = () => {
      let closest = 0
      let minDist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs((child as HTMLElement).offsetLeft - track.scrollLeft)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setCurrent(closest)
    }
    track.addEventListener('scroll', handler, { passive: true })
    return () => track.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto gap-3 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {gallery.map((src, i) => (
          <CarouselItem key={i} src={src} alt={`${name} ${i + 1}`} />
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
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-dark' : 'bg-[rgba(13,13,13,0.2)]'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function CarouselItem({ src, alt }: { src: string; alt: string }) {
  if (src.endsWith('.mp4')) {
    return (
      <div className="snap-center shrink-0 h-[520px] flex items-center">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-auto max-w-[700px] rounded-sm"
        />
      </div>
    )
  }
  return (
    <div className="snap-center shrink-0 h-[520px] max-w-[700px] bg-[rgba(13,13,13,0.03)] rounded-sm flex items-center justify-center p-4">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  )
}
