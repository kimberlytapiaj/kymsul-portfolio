const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const items = ['Brand identity', 'Contenido', 'IA', 'Dirección creativa']

function MarqueeDot() {
  return <img src="/assets/marquee-dot.svg" alt="" className="w-[6px] h-[6px] shrink-0" />
}

function MarqueeSet() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 shrink-0">
          <span
            className="font-fraunces italic font-light text-[26px] text-dark whitespace-nowrap"
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
  return (
    <div className="border-t border-b border-[rgba(13,13,13,0.12)] h-[72px] overflow-hidden flex items-center">
      <div className="marquee-track flex items-center gap-6 w-max">
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  )
}
