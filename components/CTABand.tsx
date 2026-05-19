import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function CTABand() {
  return (
    <section className="bg-dark w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-16 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

        {/* Heading */}
        <div className="shrink-0">
          <p
            className="font-fraunces font-light text-white leading-[0.9] text-[clamp(36px,4.5vw,56px)]"
            style={WONK}
          >
            Las marcas con esencia
          </p>
          <p
            className="font-fraunces italic text-lav leading-[0.9] text-[clamp(36px,4.5vw,56px)]"
            style={WONK}
          >
            no se construyen solas.
          </p>
        </div>

        {/* Right content */}
        <div>
          <Link
            href="/contacto"
            className="bg-lav text-dark font-sans text-[13px] rounded-full px-8 h-[50px] inline-flex items-center hover:opacity-90 transition-opacity"
          >
            Trabajemos juntos
          </Link>
        </div>

      </div>
    </section>
  )
}
