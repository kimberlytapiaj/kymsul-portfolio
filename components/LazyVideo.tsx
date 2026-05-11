'use client'
import { useRef, useEffect } from 'react'

type Props = {
  src: string
  className?: string
  loop?: boolean
  controls?: boolean
}

export default function LazyVideo({ src, className, loop = true, controls = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? el.play().catch(() => {}) : el.pause() },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      loop={loop}
      muted
      playsInline
      preload="none"
      controls={controls}
      className={className}
    />
  )
}
