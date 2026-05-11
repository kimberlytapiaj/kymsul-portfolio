import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const skills = [
  {
    cat: 'MOTION',
    items: ['After Effects', 'Premiere Pro', 'Remotion', 'CapCut'],
  },
  {
    cat: 'DISEÑO',
    items: ['Figma', 'Illustrator', 'Photoshop', 'Canva'],
  },
  {
    cat: 'IA GENERATIVA',
    items: ['Midjourney', 'Runway', 'Stable Diffusion', 'Veo', 'ComfyUI'],
  },
]

const stats = [
  { num: '5+', label: 'años activa' },
  { num: '30+', label: 'proyectos' },
  { num: '3', label: 'disciplinas' },
]

const process = [
  {
    num: '01',
    title: 'Escucho primero',
    desc: 'Cada proyecto empieza con una sesión de diagnóstico. Entiendo el negocio, el público y el objetivo antes de tocar ningún archivo.',
  },
  {
    num: '02',
    title: 'Diseño el sistema',
    desc: 'No piezas sueltas: construyo sistemas que pueden crecer. Identidad, motion, IA — todo conectado desde el inicio.',
  },
  {
    num: '03',
    title: 'Itero en vivo',
    desc: 'Trabajo de forma transparente. Comparto avances en cada etapa y ajusto en tiempo real con el cliente o equipo.',
  },
  {
    num: '04',
    title: 'Entrego con contexto',
    desc: 'Los archivos vienen documentados: guías de uso, prompts, templates editables. Para que el sistema viva más allá del proyecto.',
  },
]

export default function SobreMiPage() {
  return (
    <PageLayout>
      {/* ── Header ────────────────────────────── */}
      <section className="px-24 pt-20 pb-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            SOBRE MÍ
          </p>
          <p
            className="text-[96px] text-dark leading-[0.9]"
            style={{ fontFamily: 'var(--font-franklin-cond)' }}
          >
            Diseño que
          </p>
          <p
            className="font-fraunces font-light italic text-[96px] text-dark leading-[0.9]"
            style={WONK}
          >
            mueve marcas.
          </p>
        </div>
      </section>

      {/* ── Perfil ────────────────────────────── */}
      <section className="px-24 py-20 border-b border-[rgba(13,13,13,0.08)]">
        <div
          className="max-w-[1440px] mx-auto grid gap-24 items-start"
          style={{ gridTemplateColumns: '1fr 400px' }}
        >
          {/* Left */}
          <div>
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-8">
              — PERFIL
            </p>

            <p className="font-sans text-[20px] text-dark leading-[1.5] mb-6 max-w-[580px]">
              Soy diseñadora de marca y directora de motion con base en Puebla,
              México. Trabajo en la intersección entre identidad visual,
              movimiento e inteligencia artificial para construir marcas que no
              solo se ven bien — sino que escalan.
            </p>
            <p className="font-sans text-[16px] text-muted leading-[1.65] mb-10 max-w-[580px]">
              Co-fundadora de{' '}
              <span className="text-dark font-medium">Axomy Studio</span>, estudio
              especializado en branding estratégico y producción de contenido. Mi
              enfoque parte siempre del posicionamiento: entender qué dice una
              marca antes de decidir cómo se ve o cómo se mueve.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center gap-2 border border-[rgba(13,13,13,0.12)] rounded-full px-4 py-2">
                <img src="/assets/dot-green.svg" alt="" className="w-[7px] h-[7px]" />
                <span className="font-mono text-[10px] text-muted2 tracking-[1.4px]">DISPONIBLE</span>
              </div>
              <span className="font-sans text-[13px] text-muted2">
                Freelance · Colaboración con agencias · Tiempo completo
              </span>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center bg-dark text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-80 transition-opacity"
            >
              Hablemos →
            </Link>
          </div>

          {/* Right — visual + stats */}
          <div>
            <div className="relative w-full aspect-square mb-10">
              <img src="/assets/hero-ring.svg" alt="" className="absolute inset-0 w-full h-full" />
              <img
                src="/assets/hero-orb-lav.svg"
                alt=""
                className="absolute"
                style={{ left: '14%', top: '18%', width: '52%', height: '52%' }}
              />
              <img
                src="/assets/hero-orb-blue.svg"
                alt=""
                className="absolute"
                style={{ left: '34%', top: '29%', width: '36%', height: '36%' }}
              />
              <p
                className="absolute font-fraunces font-light italic text-dark text-[13%] leading-none"
                style={{ left: '12%', top: '37%', ...WONK }}
              >
                kymsul.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ num, label }) => (
                <div key={label} className="border-t border-dark pt-4">
                  <p
                    className="text-[40px] text-dark leading-none mb-1"
                    style={{ fontFamily: 'var(--font-franklin-cond)' }}
                  >
                    {num}
                  </p>
                  <p className="font-sans text-[12px] text-muted2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Herramientas ──────────────────────── */}
      <section className="px-24 py-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-12">
            — HERRAMIENTAS
          </p>
          <div className="grid grid-cols-3 gap-6">
            {skills.map(({ cat, items }) => (
              <div key={cat} className="border-t border-[rgba(13,13,13,0.12)] pt-8">
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-6">
                  {cat}
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-[15px] text-muted">
                      <span className="w-1 h-1 rounded-full bg-muted2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ───────────────────────────── */}
      <section className="px-24 py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
                — PROCESO
              </p>
              <p
                className="font-fraunces font-light text-[56px] text-dark leading-[1]"
                style={WONK}
              >
                Cómo trabajo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {process.map(({ num, title, desc }) => (
              <div key={num}>
                <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-4">
                  — {num}
                </p>
                <div className="h-px bg-dark mb-6" />
                <p className="font-sans font-medium text-[16px] text-dark mb-3">{title}</p>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
