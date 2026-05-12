const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-10 lg:pt-16 pb-0">

      {/* Eyebrow */}
      <div className="mb-8 lg:mb-10">
        <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">
          MOTION · BRAND · IA
        </p>
      </div>

      {/* Headline */}
      <div className="leading-[0.88] mb-8 lg:mb-12">
        <p
          className="text-[clamp(52px,10vw,144px)] text-dark leading-[0.88]"
          style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
        >
          Marcas que
        </p>
        <p
          className="font-fraunces font-light text-[clamp(52px,10vw,144px)] text-dark leading-[0.88]"
          style={WONK}
        >
          evolucionan
        </p>
        <p
          className="font-fraunces font-light italic text-[clamp(52px,10vw,144px)] text-dark leading-[0.88]"
          style={WONK}
        >
          con intención.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(13,13,13,0.1)] mb-6 lg:mb-8" />

      {/* Sub-copy + CTA */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-16 pb-12 lg:pb-24">
        <p className="font-sans text-[15px] lg:text-[17px] text-muted leading-[1.6] max-w-[480px]">
          Diseño como sistema. Motion como lenguaje.<br />
          IA como expansión creativa.
        </p>
        <a
          href="#portafolio"
          className="self-start shrink-0 inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
        >
          Ver proyectos →
        </a>
      </div>

    </section>
  )
}
