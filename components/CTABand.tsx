'use client'

import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function CTABand() {
  const { lang } = useLang()
  const c = tr.cta

  return (
    <section className="bg-dark w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-16 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

        {/* Heading */}
        <div className="shrink-0">
          <p
            className="font-fraunces font-light text-white leading-[0.9] text-[clamp(36px,4.5vw,56px)]"
            style={WONK}
          >
            {c.line1[lang]}
          </p>
          <p
            className="font-fraunces italic text-lav leading-[0.9] text-[clamp(36px,4.5vw,56px)]"
            style={WONK}
          >
            {c.line2[lang]}
          </p>
        </div>

        {/* Right content */}
        <div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:kimberly.tapiaj@gmail.com?subject=Proyecto"
              className="bg-lav text-dark font-sans text-[13px] rounded-full px-8 h-[50px] inline-flex items-center hover:opacity-90 transition-opacity"
            >
              {c.btn[lang]}
            </a>
            <a
              href="https://www.linkedin.com/in/kimberly-tapia-rubio-39a35828a/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[rgba(255,255,255,0.2)] text-white font-sans text-[13px] rounded-full px-8 h-[50px] inline-flex items-center hover:border-[rgba(255,255,255,0.5)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
