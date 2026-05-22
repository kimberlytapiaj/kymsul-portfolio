'use client'

import Image from 'next/image'
import PageLayout from '@/components/PageLayout'
import LazyVideo from '@/components/LazyVideo'
import CTABand from '@/components/CTABand'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function IAPage() {
  const { lang } = useLang()
  const ia = tr.ia

  const STATS = ia.stats[lang]

  return (
    <PageLayout>

      {/* ── Hero ─────────────────────────────── */}
      <section className="px-6 lg:px-24 pt-12 lg:pt-20 pb-12 lg:pb-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-6">
            {ia.hero.eyebrow[lang]}
          </p>
          <div className="mb-8 lg:mb-12">
            <p
              className="text-[clamp(40px,7.5vw,108px)] text-dark leading-[0.88]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
            >
              {ia.hero.line1[lang]}
            </p>
            <p
              className="font-fraunces font-light italic text-[clamp(36px,7.5vw,100px)] text-dark leading-[0.88]"
              style={WONK}
            >
              {ia.hero.line2[lang]}
            </p>
            <p
              className="text-[clamp(36px,7.5vw,100px)] text-lav leading-[0.88]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
            >
              {ia.hero.line3[lang]}
            </p>
          </div>
          <div className="border-t border-[rgba(13,13,13,0.1)] pt-6 lg:pt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <p className="font-sans text-[15px] lg:text-[17px] text-muted leading-[1.6] max-w-[580px]">
              {ia.hero.sub[lang]}
            </p>
            <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] shrink-0">
              {ia.hero.tools[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* ── Flujo overview — dark ────────────── */}
      <section className="bg-dark px-6 lg:px-24 py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.76px] mb-10 lg:mb-14">
            {ia.flujo.eyebrow[lang]}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
            {ia.flujo.steps[lang].map((step) => (
              <div
                key={step.num}
                className="lg:border-r lg:border-[rgba(255,255,255,0.08)] lg:last:border-r-0 lg:pr-10 lg:mr-10 lg:last:pr-0 lg:last:mr-0"
              >
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] mb-4">
                  — {step.num}
                </p>
                <p className="font-sans text-[15px] lg:text-[16px] text-bg font-medium leading-[1.2] mb-1.5">
                  {step.label}
                </p>
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.1px] leading-[1.6]">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 · Documentación ──────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:w-[400px] shrink-0">
            <p className="font-mono text-[10px] text-muted2 tracking-[1.76px] mb-6">{ia.doc.eyebrow[lang]}</p>
            <p
              className="text-dark leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)' }}
            >
              {ia.doc.h[lang]}
            </p>
            <p className="font-sans text-[15px] text-muted leading-[1.7] mb-8">
              {ia.doc.p1[lang]}
            </p>
            <p className="font-sans text-[15px] text-muted leading-[1.7] mb-8">
              {ia.doc.p2[lang]}
            </p>
            <ul className="space-y-3 mb-8">
              {ia.doc.bullets[lang].map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-[13px] text-muted">
                  <span className="w-1 h-1 rounded-full bg-lav mt-[7px] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Obsidian', 'Claude Code'].map((t) => (
                <span key={t} className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: terminal visual */}
          <div className="flex-1 bg-dark rounded-sm p-7 lg:p-10 font-mono text-[12px] leading-[1.9] overflow-hidden">
            <p className="text-[rgba(255,255,255,0.25)] tracking-[1.4px] text-[9px] mb-5">
              {ia.doc.terminalLabel1[lang]}
            </p>
            <p className="text-lav">## Colores</p>
            <p className="text-[rgba(255,255,255,0.55)]">
              {ia.doc.terminalPrimary[lang]}: <span className="text-bg">#4945e9</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              {ia.doc.terminalSecondary[lang]}: <span className="text-bg">#9a15e9</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              {ia.doc.terminalTypo[lang]}: <span className="text-bg">Ivypresto · LibreFranklin</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              {ia.doc.terminalTone[lang]}: <span className="text-bg">Estratégico · Directo · Editorial</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              {ia.doc.terminalNever[lang]}: <span className="text-bg">freelancer energy · genérico · trend-chasing</span>
            </p>

            <div className="my-6 border-t border-[rgba(255,255,255,0.08)]" />

            <p className="text-[rgba(255,255,255,0.25)] tracking-[1.4px] text-[9px] mb-5">
              {ia.doc.terminalLabel2[lang]}
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {ia.doc.terminalRead[lang]}{' '}
              <span className="text-lav">Axomy Studio — Brand Guidelines.md</span>
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {ia.doc.terminalLoading[lang]}
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {ia.doc.terminalGen[lang]}
            </p>

            <div className="my-6 border-t border-[rgba(255,255,255,0.08)]" />

            <p className="text-[rgba(255,255,255,0.25)] tracking-[1.4px] text-[9px] mb-3">
              {ia.doc.terminalOutput[lang]}
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {ia.doc.terminalOutputLine1[lang]} <span className="text-bg">{ia.doc.terminalOutputLine1val[lang]}</span>
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {ia.doc.terminalOutputLine2[lang]}{' '}
              <span className="text-lav">{ia.doc.terminalOutputLine2val[lang]}</span>
            </p>
          </div>

        </div>
      </section>

      {/* ── 02 · Imagen generativa ──────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            {ia.imagen.eyebrow[lang]}
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[400px] shrink-0">
              <p
                className="text-dark leading-[1.05] mb-6"
                style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)' }}
              >
                {ia.imagen.h[lang]}
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.7] mb-6">
                {ia.imagen.p[lang]}
              </p>
              <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-3">
                {ia.imagen.promptLabel[lang]}
              </p>
              <div className="bg-[rgba(13,13,13,0.04)] border border-[rgba(13,13,13,0.06)] rounded-sm p-5 font-mono text-[11px] text-muted leading-[1.7] mb-8">
                "Top-down view of the food on a soccer field. Artificial grass, white field lines,
                post-match atmosphere. Don't change any beverage or meal, just add the soccer court."
              </div>
              <div className="flex flex-wrap gap-2">
                {['Gemini', 'Runway', 'Higgsfield', 'ChatGPT'].map((t) => (
                  <span key={t} className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: before/after + BWL clips */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                    {ia.imagen.beforeLabel[lang]}
                  </p>
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-[rgba(13,13,13,0.04)]">
                    <Image
                      src="/assets/kop/kop-kt-original-01.jpg"
                      alt="Foto original iPhone"
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                    {ia.imagen.afterLabel[lang]}
                  </p>
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-[rgba(13,13,13,0.04)]">
                    <Image
                      src="/assets/kop/kop-kt-184.png"
                      alt="Resultado Gemini"
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                  {ia.imagen.clipsLabel[lang]}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <LazyVideo
                    src="/assets/bwl/bwl-71-ai-mod-web.mp4"
                    className="w-full rounded-sm aspect-[4/5] object-cover bg-[rgba(13,13,13,0.04)]"
                  />
                  <LazyVideo
                    src="/assets/bwl/bwl-post-71-en-web.mp4"
                    className="w-full rounded-sm aspect-[4/5] object-cover bg-[rgba(13,13,13,0.04)]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 03 · Scripts de producción ──────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            {ia.scripts.eyebrow[lang]}
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[400px] shrink-0">
              <p
                className="text-dark leading-[1.05] mb-6"
                style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)' }}
              >
                {ia.scripts.h[lang]}
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.7] mb-8">
                {ia.scripts.p[lang]}
              </p>
              <div className="space-y-5 mb-8">
                <div className="border-t border-[rgba(13,13,13,0.08)] pt-5">
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">
                    {ia.scripts.case1label[lang]}
                  </p>
                  <p className="font-sans text-[14px] text-muted leading-[1.6]">
                    {ia.scripts.case1[lang]}
                  </p>
                </div>
                <div className="border-t border-[rgba(13,13,13,0.08)] pt-5">
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">
                    {ia.scripts.case2label[lang]}
                  </p>
                  <p className="font-sans text-[14px] text-muted leading-[1.6]">
                    {ia.scripts.case2[lang]}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['After Effects', 'Photoshop', 'Claude Code', 'Remotion'].map((t) => (
                  <span key={t} className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 space-y-6">
              <div>
                <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                  {ia.scripts.reelLabel[lang]}
                </p>
                <LazyVideo
                  src="/assets/kop/kop-paidmedia-01.mp4"
                  className="rounded-sm max-w-[280px] w-full"
                />
              </div>
              <div>
                <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-3">
                  {ia.scripts.formatsLabel[lang]}
                </p>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {[
                    { src: '/assets/kop/kop-wc-post.png',   label: 'Post' },
                    { src: '/assets/kop/kop-wc-story.png',  label: 'Story' },
                    { src: '/assets/kop/kop-wc-flyer.png',  label: 'Flyer' },
                    { src: '/assets/kop/kop-wc-tv.png',     label: 'TV Screen' },
                    { src: '/assets/kop/kop-wc-banner.png', label: 'Banner App' },
                  ].map(({ src, label }) => (
                    <div key={label} className="shrink-0 text-center">
                      <div className="relative w-[100px] h-[100px] rounded-sm overflow-hidden bg-[rgba(13,13,13,0.04)] mb-1.5">
                        <Image src={src} alt={label} fill className="object-contain" sizes="100px" />
                      </div>
                      <p className="font-mono text-[8px] text-muted2 tracking-[1px]">{label.toUpperCase()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 · Este portafolio — dark ─────── */}
      <section className="bg-dark px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.76px] mb-10 lg:mb-16">
            {ia.frontend.eyebrow[lang]}
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[420px] shrink-0">
              <p
                className="text-bg leading-[0.95] mb-2"
                style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(32px,4vw,52px)' }}
              >
                {ia.frontend.h1[lang]}
              </p>
              <p
                className="font-fraunces font-light italic text-lav leading-[0.95] mb-8"
                style={{ ...WONK, fontSize: 'clamp(32px,4vw,52px)' }}
              >
                {ia.frontend.h2[lang]}
              </p>
              <p className="font-sans text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.7] mb-10">
                {ia.frontend.p[lang]}
              </p>
              <div className="space-y-4 mb-10">
                {ia.frontend.details[lang].map(({ label, val }) => (
                  <div key={label} className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                    <p className="font-mono text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-[13px] text-[rgba(255,255,255,0.6)]">{val}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Claude Code', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'].map((t) => (
                  <span key={t} className="border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1 font-mono text-[10px] text-[rgba(255,255,255,0.4)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="flex-1 grid grid-cols-2 gap-3 content-start">
              {STATS.map(({ num, desc }) => (
                <div
                  key={num}
                  className="border border-[rgba(255,255,255,0.06)] rounded-sm p-5 lg:p-6"
                >
                  <p
                    className="text-lav leading-[1] mb-2"
                    style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(32px,3.5vw,52px)' }}
                  >
                    {num}
                  </p>
                  <p className="font-sans text-[12px] text-[rgba(255,255,255,0.4)] leading-[1.4]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  )
}
