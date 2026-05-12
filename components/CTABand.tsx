import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function CTABand() {
  return (
    <section className="bg-dark w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-16 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

        {/* Heading */}
        <div className="shrink-0">
          <p
            className="font-fraunces font-light text-white leading-[0.9] text-[clamp(52px,8vw,80px)]"
            style={WONK}
          >
            ¿Tienes una
          </p>
          <p
            className="font-fraunces italic text-lav leading-[0.9] text-[clamp(52px,8vw,80px)]"
            style={WONK}
          >
            idea?
          </p>
        </div>

        {/* Right content */}
        <div className="lg:max-w-[440px]">
          <p className="font-sans text-[15px] lg:text-[18px] text-[rgba(255,255,255,0.72)] leading-normal mb-8">
            Cuéntame qué estás construyendo.<br />
            Reviso cada solicitud personalmente<br />
            y respondo en menos de 48 horas.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="bg-lav text-dark font-sans text-[13px] rounded-full px-6 lg:px-8 h-[50px] inline-flex items-center hover:opacity-90 transition-opacity"
            >
              Trabajemos juntos →
            </Link>
            <Link
              href="/sobre-mi"
              className="border border-[rgba(255,255,255,0.3)] text-white font-sans text-[13px] rounded-full px-6 lg:px-8 h-[50px] inline-flex items-center hover:border-white/60 transition-colors"
            >
              Conóceme
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
