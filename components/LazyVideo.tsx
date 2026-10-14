'use client'
import { useRef, useState, useEffect } from 'react'
import { deliveryUrl, mediaAsset, mediaUrl } from '@/lib/media'
import { useLang } from '@/lib/lang-context'
type Props = {
  src: string
  className?: string
  loop?: boolean
  controls?: boolean
}
export default function LazyVideo({
  src,
  className = '',
  loop = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [error, setError] = useState(false)
  const { lang } = useLang()
  const asset = mediaAsset(src)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) el.pause()
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])
  return (
    <div
      className={`relative overflow-hidden bg-black/5 ${className}`}
      style={{
        aspectRatio:
          asset?.width && asset?.height
            ? `${asset.width}/${asset.height}`
            : undefined,
      }}
    >
      {started ? (
        <video
          ref={ref}
          src={mediaUrl(src)}
          poster={asset?.poster ? deliveryUrl(asset.poster) : undefined}
          autoPlay
          controls
          loop={loop}
          playsInline
          preload="none"
          onError={() => setError(true)}
          className={`w-full h-full ${className.includes('object-cover') ? 'object-cover' : 'object-contain'}`}
        />
      ) : (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setStarted(true)
          }}
          aria-label={lang === 'es' ? 'Reproducir video' : 'Play video'}
          className="relative block w-full h-full min-h-40 group cursor-pointer"
        >
          {asset?.poster && (
            <img
              src={deliveryUrl(asset.poster)}
              width={asset.width}
              height={asset.height}
              alt=""
              loading="lazy"
              className={`w-full h-full ${className.includes('object-cover') ? 'object-cover' : 'object-contain'}`}
            />
          )}
          <span className="play-cue" aria-hidden="true">
            <span className="play-cue-disc">
              <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg>
            </span>
            <span className="play-cue-label">{lang === 'es' ? 'Ver video' : 'Watch'}</span>
          </span>
        </button>
      )}
      {error && (
        <p role="alert" className="absolute bottom-0 bg-white p-3 text-sm">
          {lang === 'es'
            ? 'No se pudo cargar el video.'
            : 'Video could not load.'}{' '}
          <a className="underline" href={mediaUrl(src)}>
            {lang === 'es' ? 'Abrir archivo' : 'Open file'}
          </a>
        </p>
      )}
    </div>
  )
}
