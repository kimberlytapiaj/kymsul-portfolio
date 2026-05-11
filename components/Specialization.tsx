import FadeIn from './FadeIn'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const specs = [
  {
    num: '01',
    light: 'Motion',
    bold: 'graphics',
    desc: 'Identidades en movimiento, stings, loops para redes y producción audiovisual end-to-end.',
  },
  {
    num: '02',
    light: 'IA',
    bold: 'aplicada',
    desc: 'Pipelines creativos con modelos generativos. Stable Diffusion, Runway, Veo, Midjourney.',
  },
  {
    num: '03',
    light: 'Branding',
    bold: 'estratégico',
    desc: 'Sistemas de marca completos: posicionamiento, sistema visual, guías y aplicaciones.',
  },
]

export default function Specialization() {
  return (
    <section className="px-24 pt-24 pb-24">
      <FadeIn>
        <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
          ESPECIALIZACIÓN
        </p>
        <p
          className="font-fraunces font-light text-[64px] text-dark leading-[1.02] mb-24 max-w-[500px]"
          style={WONK}
        >
          Tres sistemas<br />
          que se potencian<br />
          entre sí.
        </p>
      </FadeIn>

      <div className="grid grid-cols-3 gap-6">
        {specs.map((spec, i) => (
          <FadeIn key={spec.num} delay={i * 0.1}>
            <div className="h-px bg-dark mb-4" />
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              — {spec.num}
            </p>
            <p className="text-[42px] text-dark leading-normal mb-6" style={WONK}>
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
