import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function CTABand() {
  return (
    <section className="bg-dark w-full overflow-hidden" style={{ minHeight: 480 }}>
      <div className="max-w-[1440px] mx-auto px-24 relative" style={{ minHeight: 480 }}>
        {/* Left heading */}
        <div className="absolute" style={{ left: 96, top: 96 }}>
          <p
            className="font-fraunces font-light text-white leading-[0.9] text-[112px]"
            style={WONK}
          >
            ¿Tienes una
          </p>
          <p
            className="font-fraunces italic text-lav leading-[0.9] text-[112px]"
            style={WONK}
          >
            idea?
          </p>
        </div>

        {/* Right content */}
        <div className="absolute" style={{ left: 694, top: 140 }}>
          <p className="font-sans text-[18px] text-[rgba(255,255,255,0.72)] leading-normal mb-10 max-w-[440px]">
            Cuéntame qué estás construyendo.<br />
            Reviso cada solicitud personalmente<br />
            y respondo en menos de 48 horas.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="bg-lav text-dark font-sans text-[13px] rounded-full px-8 h-[50px] inline-flex items-center hover:opacity-90 transition-opacity"
            >
              Trabajemos juntos →
            </Link>
            <Link
              href="/sobre-mi"
              className="border border-[rgba(255,255,255,0.3)] text-white font-sans text-[13px] rounded-full px-8 h-[50px] inline-flex items-center hover:border-white/60 transition-colors"
            >
              Conóceme
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
