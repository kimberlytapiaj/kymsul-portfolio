import Image from 'next/image'
import PageLayout from '@/components/PageLayout'
import LazyVideo from '@/components/LazyVideo'
import CTABand from '@/components/CTABand'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const STATS = [
  { num: '10+', desc: 'proyectos documentados en código' },
  { num: '307', desc: 'líneas de JSX generadas en un prompt' },
  { num: '22s', desc: 'reel de paid media producido con script' },
  { num: '5',   desc: 'formatos desde un solo brief' },
  { num: '0',   desc: 'sesiones fotográficas para posts IA' },
  { num: '48h', desc: 'tiempo de respuesta garantizado' },
]

export default function IAPage() {
  return (
    <PageLayout>

      {/* ── Hero ─────────────────────────────── */}
      <section className="px-6 lg:px-24 pt-12 lg:pt-20 pb-12 lg:pb-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-6">
            SISTEMA CREATIVO IA
          </p>
          <div className="mb-8 lg:mb-12">
            <p
              className="text-[clamp(40px,7.5vw,108px)] text-dark leading-[0.88]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
            >
              Del prompt
            </p>
            <p
              className="font-fraunces font-light italic text-[clamp(36px,7.5vw,100px)] text-dark leading-[0.88]"
              style={WONK}
            >
              al entregable.
            </p>
            <p
              className="text-[clamp(36px,7.5vw,100px)] text-lav leading-[0.88]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
            >
              Sin fricción.
            </p>
          </div>
          <div className="border-t border-[rgba(13,13,13,0.1)] pt-6 lg:pt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <p className="font-sans text-[15px] lg:text-[17px] text-muted leading-[1.6] max-w-[580px]">
              Un pipeline de producción creativa donde la documentación, la imagen generativa,
              los scripts de automatización y el código operan como un solo sistema.
            </p>
            <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] shrink-0">
              Gemini · Runway · Claude Code · AE · PS
            </p>
          </div>
        </div>
      </section>

      {/* ── Flujo overview — dark ────────────── */}
      <section className="bg-dark px-6 lg:px-24 py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.76px] mb-10 lg:mb-14">
            EL FLUJO
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
            {[
              { num: '01', label: 'Documentación',    sub: 'Obsidian · Claude Code' },
              { num: '02', label: 'Imagen generativa', sub: 'Gemini · Runway · Higgsfield' },
              { num: '03', label: 'Scripts',           sub: 'After Effects · Photoshop' },
              { num: '04', label: 'Diseño & frontend', sub: 'Next.js · Tailwind · Vercel' },
            ].map((step) => (
              <div
                key={step.num}
                className="lg:border-r lg:border-[rgba(255,255,255,0.08)] lg:last:border-r-0 lg:pr-10 lg:mr-10 lg:last:pr-0 lg:last:mr-0"
              >
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] mb-4">
                  — {step.num}
                </p>
                <p className="font-sans text-[15px] lg:text-[16px] text-bg font-medium leading-[1.2] mb-1.5">
                  {step.label}
                </p>
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.1px] leading-[1.6]">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 · Documentación ──────────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:w-[400px] shrink-0">
            <p className="font-mono text-[10px] text-muted2 tracking-[1.76px] mb-6">— 01 · DOCUMENTACIÓN</p>
            <p
              className="text-dark leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)' }}
            >
              El sistema sabe quién es la marca.
            </p>
            <p className="font-sans text-[15px] text-muted leading-[1.7] mb-8">
              Los brand guidelines de cada cliente viven en Obsidian — tipografía, paleta, tono,
              reglas visuales. Antes de generar una sola imagen o escribir una línea de código,
              Claude Code lee ese contexto. El output no es genérico: está calibrado a la marca
              desde el primer prompt.
            </p>
            <p className="font-sans text-[15px] text-muted leading-[1.7] mb-8">
              La misma documentación que alimenta la producción también se entrega al cliente
              como activo — un sistema vivo que escala con la marca.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Obsidian como base de conocimiento de marca',
                'Claude Code lee guidelines antes de ejecutar',
                'Coherencia garantizada desde el origen',
                'Documentación entregada como activo al cliente',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-[13px] text-muted">
                  <span className="w-1 h-1 rounded-full bg-lav mt-[7px] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Obsidian', 'Claude Code'].map((t) => (
                <span key={t} className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: terminal visual */}
          <div className="flex-1 bg-dark rounded-sm p-7 lg:p-10 font-mono text-[12px] leading-[1.9] overflow-hidden">
            <p className="text-[rgba(255,255,255,0.25)] tracking-[1.4px] text-[9px] mb-5">
              BRAND FILE · OBSIDIAN
            </p>
            <p className="text-[#A89EF5]">## Colores</p>
            <p className="text-[rgba(255,255,255,0.55)]">
              Primario: <span className="text-bg">#4945e9</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              Secundario: <span className="text-bg">#9a15e9</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              Tipografía: <span className="text-bg">Ivypresto · LibreFranklin</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              Tono: <span className="text-bg">Estratégico · Directo · Editorial</span>
            </p>
            <p className="text-[rgba(255,255,255,0.55)]">
              Nunca: <span className="text-bg">freelancer energy · genérico · trend-chasing</span>
            </p>

            <div className="my-6 border-t border-[rgba(255,255,255,0.08)]" />

            <p className="text-[rgba(255,255,255,0.25)] tracking-[1.4px] text-[9px] mb-5">
              CLAUDE CODE · LEE EL CONTEXTO
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {'>'} Leyendo{' '}
              <span className="text-[#A89EF5]">Axomy Studio — Brand Guidelines.md</span>
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {'>'} Cargando paleta · tipografía · reglas visuales...
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              {'>'} Generando script calibrado a la marca
            </p>

            <div className="my-6 border-t border-[rgba(255,255,255,0.08)]" />

            <p className="text-[rgba(255,255,255,0.25)] tracking-[1.4px] text-[9px] mb-3">
              OUTPUT
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              Script AE · <span className="text-bg">307 líneas</span>
            </p>
            <p className="text-[rgba(255,255,255,0.45)]">
              Coherente con marca →{' '}
              <span className="text-[#A89EF5]">aprobado en primera revisión</span>
            </p>
          </div>

        </div>
      </section>

      {/* ── 02 · Imagen generativa ──────────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            — 02 · IMAGEN GENERATIVA
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[400px] shrink-0">
              <p
                className="text-dark leading-[1.05] mb-6"
                style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)' }}
              >
                Fotografía de escena sin sesión.
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.7] mb-6">
                Imagen de producto, lifestyle y composiciones generadas con IA — calibradas con
                prompt engineering para que el resultado no rompa la identidad visual del cliente.
                Lo que antes requería locación, modelos y horas de edición ahora es iteración de
                prompts con dirección de arte.
              </p>
              <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-3">
                PROMPT REAL · KOP KINGS TAVERN
              </p>
              <div className="bg-[rgba(13,13,13,0.04)] border border-[rgba(13,13,13,0.06)] rounded-sm p-5 font-mono text-[11px] text-muted leading-[1.7] mb-8">
                "Top-down view of the food on a soccer field. Artificial grass, white field lines,
                post-match atmosphere. Don't change any beverage or meal, just add the soccer court."
              </div>
              <div className="flex flex-wrap gap-2">
                {['Gemini', 'Runway', 'Higgsfield', 'ChatGPT'].map((t) => (
                  <span key={t} className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: before/after + BWL clips */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                    FOTO ORIGINAL · IPHONE
                  </p>
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-[rgba(13,13,13,0.04)]">
                    <Image
                      src="/assets/kop/kop-kt-original-01.jpg"
                      alt="Foto original iPhone"
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                    RESULTADO · GEMINI
                  </p>
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-[rgba(13,13,13,0.04)]">
                    <Image
                      src="/assets/kop/kop-kt-184.png"
                      alt="Resultado Gemini"
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                  CLIPS GENERADOS → REEL FINAL · BWL
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <LazyVideo
                    src="/assets/bwl/bwl-71-ai-mod-web.mp4"
                    className="w-full rounded-sm aspect-[4/5] object-cover bg-[rgba(13,13,13,0.04)]"
                  />
                  <LazyVideo
                    src="/assets/bwl/bwl-post-71-en-web.mp4"
                    className="w-full rounded-sm aspect-[4/5] object-cover bg-[rgba(13,13,13,0.04)]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 03 · Scripts de producción ──────── */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-muted2 tracking-[1.76px] mb-10 lg:mb-16">
            — 03 · SCRIPTS DE PRODUCCIÓN
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[400px] shrink-0">
              <p
                className="text-dark leading-[1.05] mb-6"
                style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)' }}
              >
                Un reel completo en un clic.
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.7] mb-8">
                Scripts de After Effects y Photoshop generados con Claude Code que automatizan
                el montaje: timeline, textos, escalado, end card, redimensiones. El director de
                arte interviene para seleccionar cortes y afinar detalles — no para hacer
                trabajo mecánico.
              </p>
              <div className="space-y-5 mb-8">
                <div className="border-t border-[rgba(13,13,13,0.08)] pt-5">
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">
                    SCRIPT AE · KOP PAID MEDIA
                  </p>
                  <p className="font-sans text-[14px] text-muted leading-[1.6]">
                    Brief + carpeta de clips → Claude Code lee el brand file y genera 307 líneas
                    de JSX → reel de 22s listo para renderizar en After Effects.
                  </p>
                </div>
                <div className="border-t border-[rgba(13,13,13,0.08)] pt-5">
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-2">
                    SCRIPT PS · WORLD CUP 2026
                  </p>
                  <p className="font-sans text-[14px] text-muted leading-[1.6]">
                    Flyer aprobado → script de Photoshop lo redimensiona a 5 formatos (post,
                    story, TV, banner, flyer imprimible) sin intervención manual.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['After Effects', 'Photoshop', 'Claude Code', 'Remotion'].map((t) => (
                  <span key={t} className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 space-y-6">
              <div>
                <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-2">
                  REEL 22S · PAID MEDIA · KOP
                </p>
                <LazyVideo
                  src="/assets/kop/kop-paidmedia-01.mp4"
                  className="rounded-sm max-w-[280px] w-full"
                />
              </div>
              <div>
                <p className="font-mono text-[9px] text-muted2 tracking-[1.2px] mb-3">
                  5 FORMATOS DESDE 1 BRIEF · WORLD CUP 2026
                </p>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {[
                    { src: '/assets/kop/kop-wc-post.png',   label: 'Post' },
                    { src: '/assets/kop/kop-wc-story.png',  label: 'Story' },
                    { src: '/assets/kop/kop-wc-flyer.png',  label: 'Flyer' },
                    { src: '/assets/kop/kop-wc-tv.png',     label: 'TV Screen' },
                    { src: '/assets/kop/kop-wc-banner.png', label: 'Banner App' },
                  ].map(({ src, label }) => (
                    <div key={label} className="shrink-0 text-center">
                      <div className="relative w-[100px] h-[100px] rounded-sm overflow-hidden bg-[rgba(13,13,13,0.04)] mb-1.5">
                        <Image src={src} alt={label} fill className="object-contain" sizes="100px" />
                      </div>
                      <p className="font-mono text-[8px] text-muted2 tracking-[1px]">{label.toUpperCase()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 · Este portafolio — dark ─────── */}
      <section className="bg-dark px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1.76px] mb-10 lg:mb-16">
            — 04 · DISEÑO & FRONTEND
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[420px] shrink-0">
              <p
                className="text-bg leading-[0.95] mb-2"
                style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(32px,4vw,52px)' }}
              >
                Este portafolio,
              </p>
              <p
                className="font-fraunces font-light italic text-lav leading-[0.95] mb-8"
                style={{ ...WONK, fontSize: 'clamp(32px,4vw,52px)' }}
              >
                construido con el mismo sistema.
              </p>
              <p className="font-sans text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.7] mb-10">
                Diseñado en conversación con Claude Code: sistema tipográfico, paleta, estructura
                de información, componentes React, animaciones, responsive. Sin boilerplate manual,
                sin horas en un editor de código. El diseñador dirige la visión — la IA ejecuta.
                Lo que estás viendo es el resultado.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { label: 'DISEÑO',      val: 'Sistema tipográfico, paleta, layout, spacing' },
                  { label: 'COMPONENTES', val: 'React + Tailwind CSS generados por conversación' },
                  { label: 'DATOS',       val: 'projects.ts — caso de estudio estructurado en código' },
                  { label: 'ANIMACIÓN',   val: 'Framer Motion · transiciones de página' },
                  { label: 'DEPLOY',      val: 'Vercel · CI/CD automático desde GitHub' },
                ].map(({ label, val }) => (
                  <div key={label} className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                    <p className="font-mono text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-[13px] text-[rgba(255,255,255,0.6)]">{val}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Claude Code', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'].map((t) => (
                  <span key={t} className="border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1 font-mono text-[10px] text-[rgba(255,255,255,0.4)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="flex-1 grid grid-cols-2 gap-3 content-start">
              {STATS.map(({ num, desc }) => (
                <div
                  key={num}
                  className="border border-[rgba(255,255,255,0.06)] rounded-sm p-5 lg:p-6"
                >
                  <p
                    className="text-lav leading-[1] mb-2"
                    style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700, fontSize: 'clamp(32px,3.5vw,52px)' }}
                  >
                    {num}
                  </p>
                  <p className="font-sans text-[12px] text-[rgba(255,255,255,0.4)] leading-[1.4]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  )
}
