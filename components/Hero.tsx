const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-24 pt-16 pb-0">

      {/* Eyebrow + badge */}
      <div className="flex items-center justify-between mb-10">
        <p className="font-mono text-[11px] text-muted2 tracking-[1.76px]">
          MOTION · BRAND · IA
        </p>
        <div className="flex items-center gap-[7px] border border-[rgba(13,13,13,0.12)] rounded-full px-[10px] py-[6px]">
          <img src="/assets/dot-green.svg" alt="" className="w-[7px] h-[7px]" />
          <span className="font-sans text-[12px] text-muted">Disponible</span>
        </div>
      </div>

      {/* Headline — 3 líneas, contraste tipográfico */}
      <div className="leading-[0.88] mb-12">
        <p
          className="text-[144px] text-dark leading-[0.88] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
        >
          Marcas que
        </p>
        <p
          className="font-fraunces font-light text-[144px] text-dark leading-[0.88] whitespace-nowrap"
          style={WONK}
        >
          evolucionan
        </p>
        <p
          className="font-fraunces font-light italic text-[144px] text-dark leading-[0.88] whitespace-nowrap"
          style={WONK}
        >
          con intención.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(13,13,13,0.1)] mb-8" />

      {/* Sub-copy + CTA */}
      <div className="flex items-start justify-between gap-16 pb-24">
        <p className="font-sans text-[17px] text-muted leading-[1.6] max-w-[480px]">
          Diseño como sistema. Motion como lenguaje.<br />
          IA como expansión creativa.
        </p>
        <a
          href="#portafolio"
          className="shrink-0 inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
        >
          Ver proyectos →
        </a>
      </div>

    </section>
  )
}
