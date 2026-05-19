import FadeIn from './FadeIn'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const specs = [
  {
    num: '01',
    light: 'Branding',
    bold: 'estratégico',
    desc: 'Identidad visual completa: posicionamiento, sistema visual, guidelines y aplicaciones. La marca como base de todo lo demás.',
  },
  {
    num: '02',
    light: 'Producción',
    bold: 'IA‑native',
    desc: 'Generación de imagen y video, flujos automatizados y sistemas de conocimiento integrados al proceso creativo. IA como ventaja de producción, sin perder el criterio.',
  },
  {
    num: '03',
    light: 'Contenido &',
    bold: 'motion visual',
    desc: 'Sistemas de contenido para redes con motion como herramienta: reels, templates y piezas que comunican con coherencia de marca en cada formato.',
  },
]

export default function Specialization() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-16 lg:pt-24 pb-16 lg:pb-24">

      {/* Header — título izquierda, contexto derecha */}
      <FadeIn>
        <div className="mb-16 lg:mb-24">
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-5">
            ESPECIALIZACIÓN
          </p>
          <p
            className="font-fraunces font-light text-[clamp(40px,5.5vw,72px)] text-dark leading-[1.0]"
            style={WONK}
          >
            Tres servicios.
          </p>
          <p
            className="font-fraunces font-light text-[clamp(40px,5.5vw,72px)] text-dark leading-[1.0]"
            style={WONK}
          >
            Un sistema.
          </p>
        </div>
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
        {specs.map((spec, i) => (
          <FadeIn key={spec.num} delay={i * 0.1}>
            <div className="h-px bg-dark mb-4" />
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              — {spec.num}
            </p>
            <p className="text-[clamp(28px,3.5vw,42px)] text-dark leading-[1.05] mb-6" style={WONK}>
              <span className="font-fraunces font-light block">{spec.light}</span>
              <span className="font-fraunces font-semibold block">{spec.bold}</span>
            </p>
            <p className="font-sans text-[14px] text-muted leading-normal">
              {spec.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
