import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const capacidades = [
  { cat: 'BRANDING', items: ['Brand strategy', 'Naming', 'Identity systems', 'Art direction', 'Character design', 'Packaging design', 'Papelería · Print', 'Brand guidelines'] },
  { cat: 'MOTION',   items: ['Reels · Templates', 'Motion graphics', 'Animación 2D', 'Video editing', 'Kinetic typography', 'Color grading'] },
  { cat: 'CONTENT',  items: ['Content strategy', 'Content design', 'Paid media', 'Social media visuals', 'Calendarios editoriales', 'Visual storytelling'] },
  { cat: 'IA',       items: ['Producción IA-native', 'Vibe coding · Frontend', 'Claude Code · Codex', 'Claude Design', 'Remotion', 'Gemini · Imagen 2', 'Veo · Higgsfield', 'Adobe Firefly'] },
  { cat: 'SOFTWARE', items: ['Adobe Suite', 'Figma · Canva', 'CapCut', 'Obsidian', 'ClickUp · Notion · Asana', 'Vercel · GitHub'] },
]

const trayectoria = [
  { year: '2020',    title: 'Motion para streamers',      detail: 'Overlays · Emotes · Starting screens · Puebla' },
  { year: '2021',    title: 'Primeras comisiones',        detail: 'Clientes reales · Motion + Diseño de marca' },
  { year: '2022',    title: 'IA en el flujo',             detail: 'Primeras exploraciones · Midjourney' },
  { year: '2023',    title: 'Kymsul',                     detail: 'Lanzamiento · Pivote a branding · Primeros clientes de marca' },
  { year: '2024–25', title: 'Directora de Arte · Zealix', detail: 'Naming · Identidad visual · SaaS' },
  { year: '2026 →',  title: 'NexLaunch',                  detail: 'Brand & Content Designer · Producción creativa multimarca' },
]

const formacion = [
  { inst: 'Universidad del Valle de México', degree: 'Licenciatura en Diseño Digital',                period: '2023 – 2026', note: 'En curso' },
  { inst: 'Universidad Anáhuac México',      degree: 'Diplomado en Diseño Multimedia',                period: '2023 – 2024', note: '' },
  { inst: 'Amerike, Puebla',                 degree: 'Lic. Comunicación y Producción Audiovisual',    period: '2026 →',      note: 'Próximamente' },
]

const certificaciones = [
  { course: 'Storytelling and Influencing: Communicate with Impact', inst: 'Macquarie University · Coursera', year: '2025' },
  { course: 'Business Analytics',                                     inst: 'Campus BBVA · Coursera',          year: '2025' },
  { course: 'Script Writing: Write a Pilot Episode for TV or Web Series', inst: 'Michigan State University · Coursera', year: '2026' },
  { course: 'Write a Feature Length Screenplay for Film or Television',   inst: 'Michigan State University · Coursera', year: '2026' },
  { course: 'Creative Writing: The Craft of Character',              inst: 'Wesleyan University · Coursera',   year: '2026' },
  { course: 'Creative Writing: The Craft of Setting and Description', inst: 'Wesleyan University · Coursera',  year: '2026' },
]

export default function SobreMiPage() {
  return (
    <PageLayout>

      {/* ── Hero — Foto + Nombre ─────────────── */}
      <section className="px-6 lg:px-24 pt-12 lg:pt-20 pb-12 lg:pb-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Foto */}
          <div className="relative w-full lg:w-[320px] shrink-0 aspect-[3/4] lg:aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/assets/kym-foto.jpg"
              alt="Kimberly Tapia Rubio"
              fill
              quality={90}
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>

          {/* Nombre + datos */}
          <div className="flex-1 pt-0 lg:pt-2">
            <div className="mb-6 lg:mb-8 leading-[0.9]">
              <p className="text-[clamp(52px,12vw,88px)] text-dark" style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}>
                Kimberly
              </p>
              <p className="text-[clamp(52px,12vw,88px)] text-dark" style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 400 }}>
                Tapia
              </p>
              <p className="font-fraunces font-light italic text-[clamp(52px,12vw,88px)] text-dark" style={WONK}>
                Rubio.
              </p>
            </div>

            <p className="font-sans text-[15px] lg:text-[16px] text-muted leading-[1.65] max-w-[480px] mb-8 lg:mb-10">
              Diseñadora digital enfocada en la construcción de sistemas visuales. Integro branding, motion y contenido digital para desarrollar identidades con intención.
            </p>

            <div className="flex flex-wrap gap-8 lg:gap-12 border-t border-[rgba(13,13,13,0.08)] pt-6 lg:pt-8">
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">ROL</p>
                <p className="font-sans text-[14px] text-dark">Brand & Content Designer</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">BASE</p>
                <p className="font-sans text-[14px] text-dark">Puebla, MX</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">DESDE</p>
                <p className="font-sans text-[14px] text-dark">2020</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Práctica — sección negra ─────────── */}
      <section className="bg-dark px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="flex-[1_1_0%]">
            <p className="font-mono text-[11px] text-[rgba(255,255,255,0.4)] tracking-[1.76px] mb-8">
              PRÁCTICA
            </p>
            <p className="text-bg leading-[1]" style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 700 }}>
              Diseño desde{' '}
              <span className="text-lav">sistema,</span>
            </p>
            <p className="text-bg leading-[1]" style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 700 }}>
              no desde piezas.
            </p>
          </div>
          <div className="flex-[1_1_0%] space-y-5 pt-0 lg:pt-2">
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.7]">
              Mi enfoque parte de entender el diseño como un sistema que conecta identidad, comunicación y experiencia.
            </p>
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.7]">
              Trabajo desde lo visual, pero también desde la estructura: narrativa, movimiento y lógica detrás de cada decisión.
            </p>
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.7]">
              Busco colaborar con marcas y creadores que entienden el valor de construir con intención, no solo de verse bien.
            </p>
          </div>
        </div>
      </section>

      {/* ── Capacidades ──────────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            CAPACIDADES
          </p>
          <p className="font-sans text-[clamp(28px,5vw,48px)] text-dark leading-[1.1] mb-12 lg:mb-16 max-w-[600px]">
            La herramienta sigue a la <strong>intención.</strong>
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {capacidades.map(({ cat, items }) => (
              <div key={cat} className="border-t border-[rgba(13,13,13,0.12)] pt-6 lg:pt-8">
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-5 lg:mb-6">
                  {cat}
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="font-sans text-[13px] lg:text-[14px] text-muted leading-[1.5]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formación ────────────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            FORMACIÓN
          </p>
          <div>
            {formacion.map(({ inst, degree, period, note }, i) => (
              <div
                key={inst}
                className={`flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-12 py-5 ${i < formacion.length - 1 ? 'border-b border-[rgba(13,13,13,0.08)]' : ''}`}
              >
                <p className="font-mono text-[11px] text-muted2 tracking-[1.4px] lg:w-[80px] shrink-0">
                  {period}
                </p>
                <div className="flex-1">
                  <p className="font-sans text-[16px] lg:text-[18px] text-dark">{degree}</p>
                  <p className="font-mono text-[11px] text-muted2 tracking-[1.2px] mt-1">{inst}</p>
                </div>
                {note && (
                  <span className="self-start font-mono text-[10px] text-muted2 tracking-[1.2px] border border-[rgba(13,13,13,0.15)] rounded-full px-3 py-1">
                    {note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificaciones ─────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            CERTIFICACIONES
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
            {certificaciones.map(({ course, inst, year }, i) => (
              <div
                key={course}
                className={`flex flex-col gap-1 py-5 border-b border-[rgba(13,13,13,0.08)]`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-sans text-[15px] lg:text-[16px] text-dark">{course}</p>
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.2px] shrink-0">{year}</p>
                </div>
                <p className="font-mono text-[11px] text-muted2 tracking-[1.2px]">{inst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trayectoria ──────────────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            TRAYECTORIA
          </p>
          <div>
            {trayectoria.map(({ year, title, detail }, i) => (
              <div
                key={year}
                className={`flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-12 py-5 ${i < trayectoria.length - 1 ? 'border-b border-[rgba(13,13,13,0.08)]' : ''}`}
              >
                <p className="font-mono text-[11px] text-muted2 tracking-[1.4px] lg:w-[80px] shrink-0">
                  {year}
                </p>
                <p className="font-sans text-[17px] lg:text-[18px] text-dark flex-1">
                  {title}
                </p>
                <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.2px] lg:text-right">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="bg-dark px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <p
              className="text-bg leading-[0.9]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontSize: 'clamp(48px,8vw,72px)', fontWeight: 700 }}
            >
              ¿Tienes una
            </p>
            <p className="font-fraunces font-light italic text-lav leading-[0.9]" style={{ ...WONK, fontSize: 'clamp(48px,8vw,72px)' }}>
              idea?
            </p>
          </div>
          <div className="lg:max-w-[320px]">
            <p className="font-sans text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.65] mb-8">
              Cuéntame qué estás construyendo. Reviso cada solicitud personalmente y respondo en menos de 48 horas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center bg-[#A89EF5] text-dark font-sans text-[13px] rounded-full px-6 py-[14px] hover:opacity-90 transition-opacity"
              >
                Trabajemos juntos →
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center border border-[rgba(255,255,255,0.2)] text-bg font-sans text-[13px] rounded-full px-6 py-[14px] hover:border-[rgba(255,255,255,0.5)] transition-colors"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
