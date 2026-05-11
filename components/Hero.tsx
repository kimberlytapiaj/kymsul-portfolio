const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function Hero() {
  return (
    <section className="relative max-w-[1440px] mx-auto" style={{ height: 720 }}>
      {/* Badge — Disponible */}
      <div className="absolute top-[58px] right-[296px] flex items-center gap-[7px] border border-[rgba(13,13,13,0.12)] rounded-full px-[10px] py-[6px]">
        <img src="/assets/dot-green.svg" alt="" className="w-[7px] h-[7px]" />
        <span className="font-sans text-[12px] text-muted">Disponible</span>
      </div>

      {/* Left content */}
      <div className="absolute left-24 top-[62px]">
        {/* Label */}
        <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-[42px]">
          MOTION · BRAND · IA
        </p>

        {/* Heading */}
        <div className="leading-[0.9]">
          <p
            className="text-[144px] text-dark leading-[0.9] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-franklin-cond)' }}
          >
            Marcas que
          </p>
          <p
            className="font-fraunces font-light text-[144px] text-dark leading-[0.9] whitespace-nowrap"
            style={WONK}
          >
            evolucionan
          </p>
          <p
            className="font-fraunces font-light italic text-[144px] text-dark leading-[0.9] whitespace-nowrap"
            style={WONK}
          >
            con intención.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-[120px]">
          <a
            href="#portafolio"
            className="inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
          >
            Ver proyectos →
          </a>
        </div>
      </div>

      {/* Hero Visual — right */}
      <div className="absolute top-[40px]" style={{ left: 880, width: 560, height: 560 }}>
        <div className="relative w-full h-full">
          <img
            src="/assets/hero-ring.svg"
            alt=""
            className="absolute"
            style={{ left: 20, top: 20, width: 520, height: 520 }}
          />
          <img
            src="/assets/hero-orb-lav.svg"
            alt=""
            className="absolute"
            style={{ left: 80, top: 100, width: 290, height: 290 }}
          />
          <img
            src="/assets/hero-orb-blue.svg"
            alt=""
            className="absolute"
            style={{ left: 190, top: 160, width: 200, height: 200 }}
          />
          <p
            className="absolute font-fraunces font-light italic text-[88px] text-dark leading-normal"
            style={{ left: 68, top: 210, ...WONK }}
          >
            kymsul.
          </p>
        </div>
      </div>

      {/* Description — bottom right */}
      <p
        className="absolute font-sans text-[18px] text-[#828282] text-right leading-normal"
        style={{ left: 958, top: 550, width: 420 }}
      >
        Diseño como sistema.<br />
        Motion como lenguaje.<br />
        <span className="text-[#828282]">IA como expansión creativa</span>.
      </p>
    </section>
  )
}
