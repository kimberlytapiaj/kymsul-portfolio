'use client'

import FadeIn from './FadeIn'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function Specialization() {
  const { lang } = useLang()
  const s = tr.spec
  const specs = s.cards[lang]

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-16 lg:pt-24 pb-16 lg:pb-24">

      {/* Header */}
      <FadeIn>
        <div className="mb-16 lg:mb-24">
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-5">
            {s.eyebrow[lang]}
          </p>
          <p
            className="font-fraunces font-light text-[clamp(40px,5.5vw,72px)] text-dark leading-[1.0]"
            style={WONK}
          >
            {s.h1[lang]}
          </p>
          <p
            className="font-fraunces font-light text-[clamp(40px,5.5vw,72px)] text-dark leading-[1.0]"
            style={WONK}
          >
            {s.h2[lang]}
          </p>
        </div>
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
        {specs.map((spec, i) => (
          <FadeIn key={spec.num} delay={i * 0.1}>
            <div className="h-px bg-dark mb-4" />
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              — {spec.num}
            </p>
            <p className="text-[clamp(28px,3.5vw,42px)] text-dark leading-[1.05] mb-6" style={WONK}>
              <span className="font-fraunces font-light block">{spec.light}</span>
              <span className="font-fraunces font-semibold block">{spec.bold}</span>
            </p>
            <p className="font-sans text-[14px] text-muted leading-normal">
              {spec.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
