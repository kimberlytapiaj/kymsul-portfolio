import PageLayout from '@/components/PageLayout'
import CTABand from '@/components/CTABand'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const services = [
  {
    num: '01',
    light: 'Motion',
    bold: 'graphics',
    tagline: 'Tu marca, en movimiento.',
    desc: 'Produzco identidades audiovisuales completas: desde el concepto hasta la entrega final. Stings de marca, loops para redes, openers de YouTube, reels y contenido animado adaptado a cada plataforma.',
    deliverables: [
      'Sting / logo animado',
      'Pack de templates para redes',
      'Intro & outro para video',
      'Motion guidelines',
      'Archivos fuente editables',
    ],
    tools: ['After Effects', 'Premiere Pro', 'Remotion', 'CapCut'],
  },
  {
    num: '02',
    light: 'IA',
    bold: 'aplicada',
    tagline: 'Creatividad aumentada, no reemplazada.',
    desc: 'Integro modelos de IA generativa en flujos de trabajo creativos reales. Desde generación de conceptos visuales hasta pipelines de producción automatizados que reducen tiempos y amplían posibilidades.',
    deliverables: [
      'Conceptualización con IA',
      'Generación de assets visuales',
      'Pipeline de producción custom',
      'Prompts y workflows documentados',
      'Integración en tu flujo actual',
    ],
    tools: ['Midjourney', 'Runway', 'Stable Diffusion', 'Veo', 'ComfyUI'],
  },
  {
    num: '03',
    light: 'Branding',
    bold: 'estratégico',
    tagline: 'Sistemas de marca que escalan.',
    desc: 'Diseño sistemas de identidad visual completos, desde el posicionamiento estratégico hasta las guías de uso. No solo un logo: una marca con voz, estética y coherencia en todos sus puntos de contacto.',
    deliverables: [
      'Naming & posicionamiento',
      'Identidad visual completa',
      'Manual de marca',
      'Sistema tipográfico y de color',
      'Aplicaciones y mockups',
    ],
    tools: ['Figma', 'Illustrator', 'Photoshop', 'Canva'],
  },
]

export default function ServiciosPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="px-24 pt-20 pb-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            SERVICIOS
          </p>
          <p
            className="text-[96px] text-dark leading-[0.9]"
            style={{ fontFamily: 'var(--font-franklin-cond)' }}
          >
            Tres disciplinas,
          </p>
          <p
            className="font-fraunces font-light italic text-[96px] text-dark leading-[0.9]"
            style={WONK}
          >
            un sistema.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="px-24 py-0">
        <div className="max-w-[1440px] mx-auto">
          {services.map((s) => (
            <div
              key={s.num}
              className="py-20 border-b border-[rgba(13,13,13,0.08)] grid gap-16"
              style={{ gridTemplateColumns: '1fr 1fr' }}
            >
              {/* Left */}
              <div>
                <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
                  — {s.num}
                </p>
                <p className="text-[56px] text-dark leading-none mb-2" style={WONK}>
                  <span className="font-fraunces font-light">{s.light} </span>
                  <span className="font-fraunces font-semibold">{s.bold}</span>
                </p>
                <p
                  className="font-fraunces font-light italic text-[20px] text-muted2 mb-8"
                  style={WONK}
                >
                  {s.tagline}
                </p>
                <p className="font-sans text-[16px] text-muted leading-[1.6]">
                  {s.desc}
                </p>
              </div>

              {/* Right */}
              <div className="pl-16">
                <div className="mb-10">
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-4">
                    ENTREGABLES
                  </p>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 font-sans text-[14px] text-muted">
                        <span className="w-1 h-1 rounded-full bg-muted2 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-4">
                    HERRAMIENTAS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-sans text-[12px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </PageLayout>
  )
}
