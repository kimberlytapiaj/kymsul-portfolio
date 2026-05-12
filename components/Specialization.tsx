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
    light: 'Motion &',
    bold: 'contenido visual',
    desc: 'Reels, motion graphics y sistemas de contenido para redes — piezas que comunican con movimiento y mantienen coherencia de marca.',
  },
  {
    num: '03',
    light: 'Producción',
    bold: 'con IA',
    desc: 'Flujos creativos con modelos generativos que escalan la producción sin escalar el equipo. Gemini, Runway, Stable Diffusion.',
  },
]

export default function Specialization() {
  return (
    <section className="px-6 lg:px-24 pt-16 lg:pt-24 pb-16 lg:pb-24">
      <FadeIn>
        <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-6">
          ESPECIALIZACIÓN
        </p>
        <p
          className="font-fraunces font-light text-[clamp(36px,6vw,64px)] text-dark leading-[1.02] mb-16 lg:mb-24 max-w-[500px]"
          style={WONK}
        >
          Tres servicios<br />
          que se construyen<br />
          entre sí.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
        {specs.map((spec, i) => (
          <FadeIn key={spec.num} delay={i * 0.1}>
            <div className="h-px bg-dark mb-4" />
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              — {spec.num}
            </p>
            <p className="text-[clamp(28px,5vw,42px)] text-dark leading-[1.05] mb-6" style={WONK}>
              <span className="font-fraunces font-light">{spec.light} </span>
              <span className="font-fraunces font-semibold">{spec.bold}</span>
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
