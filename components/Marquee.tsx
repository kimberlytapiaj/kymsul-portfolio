'use client'

import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

function MarqueeDot() {
  return <img src="/assets/marquee-dot.svg" alt="" className="w-[6px] h-[6px] shrink-0" />
}

function MarqueeSet({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 shrink-0">
          <span
            className="font-fraunces italic font-light text-[16px] lg:text-[26px] text-dark whitespace-nowrap"
            style={WONK}
          >
            {item}
          </span>
          <MarqueeDot />
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  const { lang } = useLang()
  const items = tr.marquee.items[lang]

  return (
    <div className="border-t border-b border-[rgba(13,13,13,0.12)] h-[44px] lg:h-[72px] overflow-hidden flex items-center">
      <div className="marquee-track flex items-center gap-6 w-max">
        <MarqueeSet items={items} />
        <MarqueeSet items={items} />
        <MarqueeSet items={items} />
        <MarqueeSet items={items} />
      </div>
    </div>
  )
}
