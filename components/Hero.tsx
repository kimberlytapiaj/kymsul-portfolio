'use client'

import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function Hero() {
  const { lang } = useLang()
  const h = tr.hero

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-12 lg:pt-16 pb-8 lg:pb-20">

      {/* Eyebrow */}
      <div className="mb-10 lg:mb-14">
        <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">
          {h.eyebrow[lang]}
        </p>
      </div>

      {/* Headline */}
      <div className="mb-6 lg:mb-14">
        <p
          className="text-[clamp(34px,7.5vw,108px)] leading-[0.88] text-dark"
          style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
        >
          {h.line1[lang]}
        </p>
        <p
          className="font-fraunces font-light text-[clamp(28px,7.5vw,100px)] leading-[0.88] text-dark"
          style={WONK}
        >
          {h.line2[lang]}
        </p>
        <p
          className="font-fraunces font-light italic text-[clamp(22px,7.5vw,90px)] leading-[0.88] text-lav"
          style={WONK}
        >
          {h.line3[lang]}
        </p>
      </div>

      {/* Footer: sub izquierda, CTA derecha */}
      <div className="border-t border-[rgba(13,13,13,0.1)] pt-6 lg:pt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-2">
            {h.tag[lang]}
          </p>
          <p className="font-sans text-[15px] lg:text-[17px] text-muted leading-[1.5] max-w-[540px]">
            {h.sub[lang]}
          </p>
        </div>
        <a
          href="#portafolio"
          className="self-start lg:self-end shrink-0 inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
        >
          {h.cta[lang]}
        </a>
      </div>

    </section>
  )
}
