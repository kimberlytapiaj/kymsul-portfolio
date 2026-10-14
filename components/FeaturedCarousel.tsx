'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from './LocaleLink'
import Image from './MediaImage'
import projects from '@/lib/project-summaries.json'
import { carouselSlides } from '@/lib/home-selection'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'
import { caseHref } from '@/lib/locale'

const INTERVAL = 5000

const slides = carouselSlides.map((s) => ({
  ...s,
  name: projects.find((p) => p.id === s.id)?.name ?? s.id,
}))

export default function FeaturedCarousel() {
  const { lang } = useLang()
  const t = tr.hero.carousel
  const total = slides.length
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)
  // Hover, focus and a hidden tab suspend the timer without turning autoplay off.
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [announce, setAnnounce] = useState('')
  const remaining = useRef(INTERVAL)
  const startedAt = useRef(0)
  const running = playing && !hovered && !focused && !hidden

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    setPlaying(!reduced.matches)
    const onReduced = () => reduced.matches && setPlaying(false)
    const onVisibility = () => setHidden(document.hidden)
    reduced.addEventListener('change', onReduced)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      reduced.removeEventListener('change', onReduced)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  useEffect(() => {
    remaining.current = INTERVAL
  }, [current])

  useEffect(() => {
    if (!running) return
    startedAt.current = performance.now()
    const id = window.setTimeout(
      () => setCurrent((c) => (c + 1) % total),
      remaining.current,
    )
    return () => {
      window.clearTimeout(id)
      remaining.current = Math.max(
        0,
        remaining.current - (performance.now() - startedAt.current),
      )
    }
  }, [running, current, total])

  const go = useCallback(
    (index: number) => {
      const next = (index + total) % total
      setPlaying(false)
      setCurrent(next)
      setAnnounce(
        `${slides[next].name}, ${t.project[lang]} ${next + 1} ${t.of[lang]} ${total}`,
      )
    },
    [total, slides, t, lang],
  )


  return (
    <section
      className="hero-carousel"
      aria-roledescription={lang === 'es' ? 'carrusel' : 'carousel'}
      aria-label={t.region[lang]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          go(current + 1)
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          go(current - 1)
        }
      }}
    >
      <h2 className="hero-mono">{t.label[lang]}</h2>
      <div className="hero-slides">
        {slides.map((s, i) => {
          const active = i === current
          return (
            <Link
              key={s.id}
              href={caseHref(s.id)}
              className={`hero-slide${active ? ' is-active' : ''}`}
              aria-label={`${t.view[lang]} ${s.name}`}
              aria-hidden={!active}
              inert={!active}
              tabIndex={active ? 0 : -1}
            >
              <div className="hero-slide-image" style={{ background: s.tone }}>
                <Image
                  src={s.image}
                  alt={s.alt[lang]}
                  priority={i === 0}
                  loading={i === 0 ? undefined : 'eager'}
                  sizes="(max-width: 600px) 92vw, (max-width: 1023px) 48vw, 320px"
                />
              </div>
              <div className="hero-slide-meta">
                <span className="hero-slide-name">{s.name}</span>
                <span className="hero-slide-category">{s.category[lang]}</span>
              </div>
            </Link>
          )
        })}
      </div>
      {/* Visually hidden until keyboard focus; hover also pauses. */}
      <button
        type="button"
        className="hero-pause"
        aria-label={playing ? t.pause[lang] : t.play[lang]}
        onClick={() => setPlaying((p) => !p)}
      >
        {playing ? t.pauseWord[lang] : t.playWord[lang]}
      </button>
      <span className="sr-only" role="status">
        {announce}
      </span>
    </section>
  )
}
