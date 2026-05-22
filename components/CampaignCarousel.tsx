'use client'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import LazyVideo from './LazyVideo'

type Props = {
  gallery: string[]
  name: string
  className?: string
  compact?: boolean
  fill?: boolean
  contain?: boolean
}

export default function CampaignCarousel({ gallery, name, className, compact, fill, contain }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' })
  }

  const scroll = (e: React.MouseEvent, dir: 1 | -1) => {
    e.stopPropagation()
    scrollTo(Math.max(0, Math.min(gallery.length - 1, current + dir)))
  }

  const scrollToIndex = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    scrollTo(index)
  }

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
            <div key={i} className="relative snap-center shrink-0 w-full h-full">
              {src.endsWith('.mp4') ? (
                <LazyVideo src={src} className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'}`} />
              ) : (
                <Image
                  src={src}
                  alt={`${name} ${i + 1}`}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className={contain ? 'object-contain' : 'object-cover'}
                />
              )}
            </div>
          ))}
        </div>

        {gallery.length > 1 && (
          <>
            <button
              onClick={(e) => scroll(e, -1)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center font-mono text-[12px] text-white hover:bg-black/50 transition-colors z-10"
            >
              ←
            </button>
            <button
              onClick={(e) => scroll(e, 1)}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center font-mono text-[12px] text-white hover:bg-black/50 transition-colors z-10"
            >
              →
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => scrollToIndex(e, i)}
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
                <LazyVideo src={src} className="w-full h-full object-cover rounded-sm" />
              </div>
            ) : (
              <div key={i} className="snap-center shrink-0 w-full flex items-center justify-center h-[520px]">
                <LazyVideo src={src} className="h-full w-auto rounded-sm" />
              </div>
            )
          ) : (
            <div key={i} className="snap-center shrink-0 w-full">
              <Image
                src={src}
                alt={`${name} ${i + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 560px"
                style={{ width: '100%', height: 'auto' }}
                className="rounded-sm"
              />
            </div>
          )
        )}
      </div>

      {gallery.length > 1 && (
        <>
          <button
            onClick={(e) => scroll(e, -1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center font-mono text-[13px] hover:bg-white transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={(e) => scroll(e, 1)}
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
              onClick={(e) => scrollToIndex(e, i)}
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
