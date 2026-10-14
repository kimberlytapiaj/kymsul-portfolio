import PageLayout from '@/components/PageLayout'
import Link from '@/components/LocaleLink'
import Image from '@/components/MediaImage'
import { tr, type Lang } from '@/lib/translations'
import CTABand from '@/components/CTABand'
import { type CSSProperties } from 'react'
import NameArrow from '@/components/NameArrow'

type L = { es: string; en: string }

// My story in pieces: each stage is a tile like the ones in Proyectos.
// Roles and dates from Kimberly's LinkedIn (11 oct 2026).
const STORY: { when: L; name: string; role: string; line: L; image: string; plate: string; href: string }[] = [
  {
    when: { es: '2023', en: '2023' },
    name: 'Kymsul',
    role: 'Independent Creative Designer',
    line: { es: 'Empecé desde cero con comisiones de ilustración y animación: más de 80 clientes.', en: 'I started from scratch with illustration and animation commissions: over 80 clients.' },
    image: '/assets/kymsul/kymsul-portada.png',
    plate: 'linear-gradient(157deg, #f1ecff 0%, #c4aef2 50%, #6b4aa8 100%)',
    href: '/proyectos/kymsul',
  },
  {
    when: { es: '2024', en: '2024' },
    name: 'Zealix',
    role: 'Brand Design & Visual Lead',
    line: { es: 'Naming e identidad visual de un SaaS, desde cero.', en: 'Naming and visual identity for a SaaS, from scratch.' },
    image: '/assets/thumbnail-zealix.jpg',
    plate: 'linear-gradient(157deg, #c9b6ff 0%, #6d35e8 46%, #1a1030 100%)',
    href: '/proyectos/zealix',
  },
  {
    when: { es: 'Ene 2026', en: 'Jan 2026' },
    name: 'Mensaje Clave',
    role: 'Graphic Designer & Content Producer',
    line: { es: 'Piezas digitales, motion e impresos para varias marcas de la agencia.', en: 'Digital, motion and print pieces for several of the agency’s brands.' },
    image: '/assets/beatness/beatness-01.jpg',
    plate: 'linear-gradient(157deg, #4ff0e6 0%, #8a7cf6 50%, #1b1236 100%)',
    href: '/proyectos#mensaje-clave',
  },
  {
    when: { es: 'Mar 2026 →', en: 'Mar 2026 →' },
    name: 'NexLaunch',
    role: 'Brand & Content Designer',
    line: { es: 'Contenido orgánico y paid media para siete marcas, casi todo con mi sistema de IA.', en: 'Organic content and paid media for seven brands, almost all of it with my AI system.' },
    image: '/assets/kop/kop-kt-sports-spurs.png',
    plate: 'linear-gradient(157deg, #8b5cc4 0%, #4e2585 50%, #2a1247 100%)',
    href: '/proyectos#nexlaunch',
  },
]

// What I do: four areas, a few items each (trimmed from the long capabilities list).
const DO: { title: L; items: L[] }[] = [
  { title: { es: 'Branding', en: 'Branding' }, items: [{ es: 'Identidad visual', en: 'Visual identity' }, { es: 'Naming', en: 'Naming' }, { es: 'Dirección de arte', en: 'Art direction' }, { es: 'Manuales de marca', en: 'Brand guidelines' }] },
  { title: { es: 'Motion', en: 'Motion' }, items: [{ es: 'Motion graphics', en: 'Motion graphics' }, { es: 'Animación 2D', en: '2D animation' }, { es: 'Edición de video', en: 'Video editing' }] },
  { title: { es: 'Contenido', en: 'Content' }, items: [{ es: 'Social media', en: 'Social media' }, { es: 'Paid media', en: 'Paid media' }, { es: 'Storytelling visual', en: 'Visual storytelling' }] },
  { title: { es: 'IA', en: 'AI' }, items: [{ es: 'Workflows con IA', en: 'AI workflows' }, { es: 'Imagen y video generativo', en: 'Generative image and video' }, { es: 'Automatización creativa', en: 'Creative automation' }] },
]
const TOOLS = 'Adobe Suite · Figma · Claude Code · Codex · Remotion · Gemini · Veo · Higgsfield'

// Certificates grouped by theme so the block reads in three lines.
const CERTS: { title: L; meta: string }[] = [
  { title: { es: 'Storytelling and Influencing', en: 'Storytelling and Influencing' }, meta: 'Macquarie University · Coursera · 2025' },
  { title: { es: 'Business Analytics', en: 'Business Analytics' }, meta: 'Campus BBVA · Coursera · 2025' },
  { title: { es: 'Guion y escritura creativa · 4 cursos', en: 'Screenwriting and creative writing · 4 courses' }, meta: 'Michigan State · Wesleyan · Coursera · 2026' },
]

// How I work, in three short ideas.
const WAYS: { n: string; title: L; line: L }[] = [
  { n: '01', title: { es: 'Encuentro la idea', en: 'I find the idea' }, line: { es: 'Antes de diseñar busco el concepto que sostiene a la marca.', en: 'Before designing I look for the concept that holds the brand up.' } },
  { n: '02', title: { es: 'La vuelvo sistema', en: 'I turn it into a system' }, line: { es: 'Identidad, contenido y motion salen de esa misma idea.', en: 'Identity, content and motion all come from that same idea.' } },
  { n: '03', title: { es: 'La produzco con IA', en: 'I produce it with AI' }, line: { es: 'Mi sistema acelera la producción; el criterio decide qué sale.', en: 'My system speeds up production; judgment decides what ships.' } },
]


// Server component: only the interactive pieces inside ship as client code.
export default async function SobreMiPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const s = tr.sobreMi
  const formacion = s.formacion.entries[lang]
  const idiomas = s.idiomas.entries[lang]

  return (
    <PageLayout>
      {/* ── Hero: the name across the full width; below, the portrait tilted on its plate and the line ── */}
      <section className="ed-wrap about-hero">
        <p className="ed-label">{s.eyebrow[lang]}</p>
        <h1 className="about-name">Kimberly Tapia Rubio</h1>
        <div className="about-hero-row">
          <span className="related-media about-photo" style={{ '--plate': 'linear-gradient(157deg, #f1ecff 0%, #b9a0ed 45%, #5b3a9a 100%)' } as CSSProperties}>
            <Image src="/assets/kym-foto.jpg" alt="Kimberly Tapia Rubio" priority sizes="(max-width: 767px) 70vw, 360px" />
          </span>
          <div className="about-hero-text">
            <p className="ai-hero-line">{s.bio[lang]}</p>
            <dl className="about-facts">
              <div>
                <dt>{s.rolLabel[lang]}</dt>
                <dd>{s.rolValue[lang]}</dd>
              </div>
              <div>
                <dt>{s.baseLabel[lang]}</dt>
                <dd>{s.baseValue[lang]}</dd>
              </div>
              <div>
                <dt>{s.desdeLabel[lang]}</dt>
                <dd>{s.desdeValue[lang]}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── 01 · My story, in pieces ── */}
      <section className="ed-wrap ai-block">
        <header className="ai-head">
          <p className="chapter-case-num">01</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Mi historia' : 'My story'}</h2>
        </header>
        <ul className="work-tiles">
          {STORY.map((st) => (
            <li key={st.name}>
              <Link href={st.href} className="related-card work-tile about-stage">
                <span className="related-media" style={{ '--plate': st.plate } as CSSProperties}>
                  <Image src={st.image} alt="" sizes="(max-width: 767px) 44vw, 260px" />
                </span>
                <span className="ed-label about-when">{st.when[lang]}</span>
                <span className="related-name">
                  <NameArrow name={st.name} />
                </span>
                <span className="about-role">{st.role}</span>
                <span className="about-line">{st.line[lang]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 02 · How I work, on the light purple band ── */}
      <section className="ed-wrap ai-block ai-rules-band">
        <div>
          <header className="ai-head">
            <p className="chapter-case-num">02</p>
            <h2 className="chapter-case-title">{lang === 'es' ? 'Cómo trabajo' : 'How I work'}</h2>
          </header>
          <ol className="about-ways">
            {WAYS.map((w) => (
              <li key={w.n}>
                <p className="about-way-title">{w.title[lang]}</p>
                <p className="about-way-line">{w.line[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 03 · What I do ── */}
      <section className="ed-wrap ai-block">
        <header className="ai-head">
          <p className="chapter-case-num">03</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Lo que hago' : 'What I do'}</h2>
        </header>
        <div className="about-skills">
          {DO.map((d) => (
            <div key={d.title.es}>
              <h3 className="about-col-title">{d.title[lang]}</h3>
              <ul className="about-list">
                {d.items.map((it) => (
                  <li key={it.es}>{it[lang]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="about-tools">
          <span className="ed-label">{lang === 'es' ? 'Herramientas' : 'Tools'}</span> {TOOLS}
        </p>
      </section>

      {/* ── 04 · Education, languages and certificates, light ── */}
      <section className="ed-wrap ai-block ai-end">
        <header className="ai-head">
          <p className="chapter-case-num">04</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Formación' : 'Education'}</h2>
        </header>
        <div className="about-edu">
          <div>
            <p className="ed-label about-sub">{lang === 'es' ? 'Estudios' : 'Studies'}</p>
            <ul className="about-rows">
              {formacion.map(({ inst, degree, period, note }) => (
                <li key={inst}>
                  <p className="about-item">{degree}</p>
                  <p className="ed-label">
                    {inst} · {period}
                    {note && <span className="text-[#73509e]"> · {note}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ed-label about-sub">{lang === 'es' ? 'Certificaciones' : 'Certificates'}</p>
            <ul className="about-rows">
              {CERTS.map((c) => (
                <li key={c.meta}>
                  <p className="about-item">{c.title[lang]}</p>
                  <p className="ed-label">{c.meta}</p>
                </li>
              ))}
            </ul>
            <p className="ed-label about-sub about-sub-gap">{s.idiomas.eyebrow[lang]}</p>
            <ul className="about-rows">
              {idiomas.map(({ lang: idioma, level }) => (
                <li key={idioma}>
                  <p className="about-item">{idioma}</p>
                  <p className="ed-label">{level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  )
}
