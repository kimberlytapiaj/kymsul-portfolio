'use client'

import PageLayout from '@/components/PageLayout'
import LazyVideo from '@/components/LazyVideo'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const certificaciones = [
  { course: 'Storytelling and Influencing: Communicate with Impact', inst: 'Macquarie University · Coursera', year: '2025' },
  { course: 'Business Analytics',                                     inst: 'Campus BBVA · Coursera',          year: '2025' },
  { course: 'Script Writing: Write a Pilot Episode for TV or Web Series', inst: 'Michigan State University · Coursera', year: '2026' },
  { course: 'Write a Feature Length Screenplay for Film or Television',   inst: 'Michigan State University · Coursera', year: '2026' },
  { course: 'Creative Writing: The Craft of Character',              inst: 'Wesleyan University · Coursera',   year: '2026' },
  { course: 'Creative Writing: The Craft of Setting and Description', inst: 'Wesleyan University · Coursera',  year: '2026' },
]

export default function SobreMiPage() {
  const { lang } = useLang()
  const s = tr.sobreMi

  const capacidades = s.capacidades.cats[lang]
  const trayectoria = (s.trayectoria.entries[lang] as unknown) as { year: string; title: string; detail: string; current?: boolean }[]
  const formacion = s.formacion.entries[lang]
  const idiomas = s.idiomas.entries[lang]

  return (
    <PageLayout>

      {/* ── Hero — dark editorial ─────────── */}
      <section className="bg-dark overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:min-h-[680px]">

          {/* Foto — full height, left column */}
          <div className="relative w-full lg:w-[40%] shrink-0 aspect-[4/5] max-h-[320px] lg:max-h-none lg:aspect-auto">
            <Image
              src="/assets/kym-foto.jpg"
              alt="Kimberly Tapia Rubio"
              fill
              quality={90}
              className="object-cover object-top grayscale contrast-110"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Nombre + datos — distribuido top→bottom */}
          <div className="flex-1 flex flex-col justify-between px-8 lg:px-16 py-10 lg:py-14">

            {/* Eyebrow top */}
            <p className="font-mono text-[10px] text-[rgba(255,255,255,0.35)] tracking-[2px]">
              {s.eyebrow[lang]}
            </p>

            {/* Nombre + bio centro */}
            <div>
              <div className="mb-6 lg:mb-8 leading-[0.88]">
                <p className="text-[clamp(52px,9vw,96px)] text-bg" style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}>
                  Kimberly
                </p>
                <p className="text-[clamp(52px,9vw,96px)] text-bg" style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 400 }}>
                  Tapia
                </p>
                <p className="font-fraunces font-light italic text-[clamp(52px,9vw,96px)] text-lav leading-[1]" style={WONK}>
                  Rubio.
                </p>
              </div>

              <p className="font-sans text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.7] max-w-[420px]">
                {s.bio[lang]}
              </p>
            </div>

            {/* Stats — fijados al fondo */}
            <div className="flex flex-wrap gap-10 lg:gap-14 border-t border-[rgba(255,255,255,0.08)] pt-6">
              <div>
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.6px] mb-2">{s.rolLabel[lang]}</p>
                <p className="font-sans text-[14px] text-bg">{s.rolValue[lang]}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.6px] mb-2">{s.baseLabel[lang]}</p>
                <p className="font-sans text-[14px] text-bg">{s.baseValue[lang]}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.6px] mb-2">{s.desdeLabel[lang]}</p>
                <p className="font-sans text-[14px] text-bg">{s.desdeValue[lang]}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Práctica ─────────────────────── */}
      <section className="bg-dark border-t border-[rgba(255,255,255,0.06)] px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="flex-[1_1_0%]">
            <p className="font-mono text-[11px] text-[rgba(255,255,255,0.35)] tracking-[1.76px] mb-8">
              {s.practica.eyebrow[lang]}
            </p>
            <p className="text-bg leading-[1]" style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 700 }}>
              {s.practica.h1[lang]}{' '}
              <span className="text-lav">{s.practica.h1span[lang]}</span>
            </p>
            <p className="text-bg leading-[1]" style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 700 }}>
              {s.practica.h2[lang]}
            </p>
          </div>
          <div className="flex-[1_1_0%] space-y-5 pt-0 lg:pt-2">
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.7]">
              {s.practica.p1[lang]}
            </p>
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.7]">
              {s.practica.p2[lang]}
            </p>
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.7]">
              {s.practica.p3[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* ── Producción multimedia — Proyecto de egreso ─── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            {lang === 'es' ? 'PROYECTO DE EGRESO — PRODUCCIÓN MULTIMEDIA' : 'GRADUATION PROJECT — MULTIMEDIA'}
          </p>
          <p className="text-dark leading-[1.05] mb-4" style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700 }}>
            {lang === 'es' ? 'Piezas que ' : 'Pieces that '}
            <span className="text-lav">{lang === 'es' ? 'me definen.' : 'define me.'}</span>
          </p>
          <p className="font-sans text-[15px] text-muted leading-[1.7] max-w-[560px] mb-12 lg:mb-16">
            {lang === 'es'
              ? 'Producción audiovisual y gráfica desarrollada durante mi formación, aplicando mi marca personal a motion, animación y fotografía.'
              : 'Audiovisual and graphic production developed during my training, applying my personal brand to motion, animation, and photography.'}
          </p>

          {/* Videos — 16:9 */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Identidad gráfica animada */}
            <figure>
              <div className="aspect-video rounded-2xl overflow-hidden bg-dark">
                <LazyVideo src="/assets/egreso/identidad-animada.mp4" loop className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-4">
                <p className="font-mono text-[10px] text-lav tracking-[1.4px] mb-1">
                  {lang === 'es' ? 'IDENTIDAD GRÁFICA ANIMADA' : 'ANIMATED BRAND IDENTITY'}
                </p>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">
                  {lang === 'es'
                    ? 'Animación del logotipo y elementos de mi marca personal kymsul.'
                    : 'Logo and personal-brand elements of kymsul in motion.'}
                </p>
              </figcaption>
            </figure>

            {/* Learning to Be Me — práctica de animación */}
            <figure>
              <div className="aspect-video rounded-2xl overflow-hidden bg-dark">
                <video
                  src="/assets/egreso/learning-to-be-me.mp4"
                  poster="/assets/egreso/learning-to-be-me-poster.jpg"
                  controls
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-mono text-[10px] text-lav tracking-[1.4px] mb-1">
                  {lang === 'es' ? 'PRÁCTICA DE ANIMACIÓN' : 'ANIMATION PRACTICE'}
                </p>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">
                  {lang === 'es'
                    ? '“Learning to Be Me” — cortometraje de motion graphics (con audio).'
                    : '“Learning to Be Me” — motion graphics short film (with audio).'}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Producción fotográfica + Infografía propósito de vida */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 items-start">
            {/* Producción fotográfica — retrato 4:5 */}
            <figure>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark">
                <Image
                  src="/assets/egreso/produccion-fotografica.jpg"
                  alt={lang === 'es' ? 'Producción fotográfica — retrato conceptual' : 'Photography production — conceptual portrait'}
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-mono text-[10px] text-lav tracking-[1.4px] mb-1">
                  {lang === 'es' ? 'PRODUCCIÓN FOTOGRÁFICA' : 'PHOTOGRAPHY PRODUCTION'}
                </p>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">
                  {lang === 'es'
                    ? 'Retrato conceptual con efecto de dispersión, en la paleta de mi marca.'
                    : 'Conceptual portrait with a dispersion effect, in my brand palette.'}
                </p>
              </figcaption>
            </figure>

            {/* Infografía propósito de vida */}
            <figure>
              <a
                href="/assets/egreso/infografia-proposito.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#f4f1ea] border border-[rgba(13,13,13,0.08)]"
              >
                <Image
                  src="/assets/egreso/infografia-proposito.png"
                  alt={lang === 'es' ? 'Infografía: propósito de vida (IKIGAI)' : 'Infographic: life purpose (IKIGAI)'}
                  fill
                  quality={90}
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <figcaption className="mt-4">
                <p className="font-mono text-[10px] text-lav tracking-[1.4px] mb-1">
                  {lang === 'es' ? 'INFOGRAFÍA — PROPÓSITO DE VIDA' : 'INFOGRAPHIC — LIFE PURPOSE'}
                </p>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">
                  {lang === 'es'
                    ? 'Mi propósito a partir del método IKIGAI. '
                    : 'My purpose mapped through the IKIGAI method. '}
                  <a
                    href="/assets/egreso/infografia-proposito.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark underline underline-offset-2 hover:text-lav transition-colors"
                  >
                    {lang === 'es' ? 'Ver completa ↗' : 'View full ↗'}
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Capacidades ──────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            {s.capacidades.eyebrow[lang]}
          </p>
          <p className="font-sans text-[clamp(28px,5vw,48px)] text-dark leading-[1.1] mb-12 lg:mb-16 max-w-[600px]">
            {s.capacidades.headline[lang]} <strong>{s.capacidades.headlineBold[lang]}</strong>
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {capacidades.map(({ cat, items }) => (
              <div key={cat} className="border-t-2 border-[#0d0d0d] pt-6 lg:pt-8">
                <p className="font-mono text-[10px] text-lav tracking-[1.4px] mb-5 lg:mb-6">
                  {cat}
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="font-sans text-[13px] lg:text-[14px] text-muted leading-[1.5]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trayectoria ──────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-8">
            {s.idiomas.eyebrow[lang]}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-[720px]">
            {idiomas.map(({ lang: idioma, level }) => (
              <div
                key={idioma}
                className="border-t-2 border-[#0d0d0d] pt-5"
              >
                <p className="font-sans text-[17px] text-dark mb-1">{idioma}</p>
                <p className="font-mono text-[11px] text-muted2 tracking-[1.2px]">{level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-[rgba(255,255,255,0.35)] tracking-[1.76px] mb-10 lg:mb-16">
            {s.trayectoria.eyebrow[lang]}
          </p>
          <div>
            {trayectoria.map(({ year, title, detail, current }, i) => (
              <div
                key={year}
                className={`flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-12 py-5 ${i < trayectoria.length - 1 ? 'border-b border-[rgba(255,255,255,0.07)]' : ''}`}
              >
                <p className={`font-mono text-[11px] tracking-[1.4px] lg:w-[80px] shrink-0 ${current ? 'text-lav' : 'text-[rgba(255,255,255,0.35)]'}`}>
                  {year}
                </p>
                <p className={`font-sans text-[17px] lg:text-[18px] flex-1 ${current ? 'text-bg' : 'text-[rgba(255,255,255,0.75)]'}`}>
                  {title}
                </p>
                <p className="font-mono text-[10px] lg:text-[11px] text-[rgba(255,255,255,0.3)] tracking-[1.2px] lg:text-right">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formación ────────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            {s.formacion.eyebrow[lang]}
          </p>
          <div>
            {formacion.map(({ inst, degree, period, note }, i) => (
              <div
                key={inst}
                className={`flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-12 py-5 ${i < formacion.length - 1 ? 'border-b border-[rgba(13,13,13,0.08)]' : ''}`}
              >
                <p className="font-mono text-[11px] text-muted2 tracking-[1.4px] lg:w-[80px] shrink-0">
                  {period}
                </p>
                <div className="flex-1">
                  <p className="font-sans text-[16px] lg:text-[18px] text-dark">{degree}</p>
                  <p className="font-mono text-[11px] text-muted2 tracking-[1.2px] mt-1">{inst}</p>
                </div>
                {note && (
                  <span className="self-start font-mono text-[10px] text-lav tracking-[1.2px] border border-[rgba(198,184,255,0.4)] rounded-full px-3 py-1">
                    {note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificaciones ─────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            {s.certEyebrow[lang]}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
            {certificaciones.map(({ course, inst, year }) => (
              <div
                key={course}
                className="flex flex-col gap-1 py-5 border-b border-[rgba(13,13,13,0.08)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-sans text-[15px] lg:text-[16px] text-dark">{course}</p>
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.2px] shrink-0">{year}</p>
                </div>
                <p className="font-mono text-[11px] text-muted2 tracking-[1.2px]">{inst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────── */}
      <section className="bg-dark px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <p
              className="text-bg leading-[0.9]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(48px,8vw,72px)', fontWeight: 700 }}
            >
              {s.cta.h[lang]}
            </p>
            <p className="font-fraunces font-light italic text-lav leading-[0.9]" style={{ ...WONK, fontSize: 'clamp(48px,8vw,72px)' }}>
              {s.cta.hItalic[lang]}
            </p>
          </div>
          <div className="lg:max-w-[320px]">
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.65] mb-8">
              {s.cta.desc[lang]}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center bg-lav text-dark font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-90 transition-opacity"
              >
                {s.cta.primary[lang]}
              </Link>
              <a
                href="https://www.linkedin.com/in/kimberly-tapia-rubio-39a35828a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[rgba(255,255,255,0.2)] text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:border-[rgba(255,255,255,0.5)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
