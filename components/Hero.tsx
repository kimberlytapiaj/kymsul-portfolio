const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-10 lg:pt-16 pb-10 lg:pb-14">

      {/* Eyebrow */}
      <div className="mb-4 lg:mb-5">
        <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">
          BRAND · CONTENIDO · IA
        </p>
      </div>

      {/* Headline — 3 líneas, tipo como masa visual */}
      <div className="leading-[0.88] mb-10 lg:mb-14">
        <p
          className="text-[clamp(64px,13vw,190px)] text-dark leading-[0.88]"
          style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
        >
          Marcas
        </p>
        <p
          className="text-[clamp(64px,13vw,190px)] text-dark leading-[0.88]"
          style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
        >
          construidas
        </p>
        <p
          className="font-fraunces font-light italic text-[clamp(64px,13vw,190px)] text-dark leading-[0.88]"
          style={WONK}
        >
          para crecer.
        </p>
      </div>

      {/* Divider + Sub-copy + CTA */}
      <div className="border-t border-[rgba(13,13,13,0.1)] pt-6 lg:pt-7">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-16">
          <p className="font-sans text-[15px] lg:text-[17px] text-muted leading-[1.6] max-w-[520px]">
            Brand identity, contenido y producción con IA — todo desde un sistema, no desde piezas sueltas.
          </p>
          <a
            href="#portafolio"
            className="self-start shrink-0 inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
          >
            Ver proyectos →
          </a>
        </div>
      </div>

    </section>
  )
}
