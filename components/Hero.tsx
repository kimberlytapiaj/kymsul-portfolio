const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

// PROPUESTA C refinada — Headline grande, sub + CTA en footer spread
export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-12 lg:pt-16 pb-16 lg:pb-20">

      {/* Eyebrow */}
      <div className="mb-10 lg:mb-14">
        <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">
          BRAND & MOTION DESIGNER
        </p>
      </div>

      {/* Headline — tamaño controlado para no partir el lav */}
      <div className="mb-10 lg:mb-14">
        <p
          className="text-[clamp(40px,7.5vw,108px)] leading-[0.88] text-dark"
          style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
        >
          Brand identity,
        </p>
        <p
          className="font-fraunces font-light text-[clamp(40px,7.5vw,108px)] leading-[0.88] text-dark"
          style={WONK}
        >
          contenido visual
        </p>
        <p
          className="font-fraunces font-light italic text-[clamp(40px,7.5vw,108px)] leading-[0.88] text-lav"
          style={WONK}
        >
          producción{' '}<br className="lg:hidden" />IA-native.
        </p>
      </div>

      {/* Footer: sub izquierda, CTA derecha */}
      <div className="border-t border-[rgba(13,13,13,0.1)] pt-6 lg:pt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-2">
            DESDE UNA SOLA DIRECCIÓN CREATIVA
          </p>
          <p className="font-sans text-[15px] lg:text-[17px] text-muted leading-[1.5] max-w-[540px]">
            Todo lo que tu marca necesita para verse, moverse e impactar.
          </p>
        </div>
        <a
          href="#portafolio"
          className="self-start lg:self-end shrink-0 inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
        >
          Ver proyectos →
        </a>
      </div>

    </section>
  )
}
