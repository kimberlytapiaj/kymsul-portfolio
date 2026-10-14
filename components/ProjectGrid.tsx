'use client'
import { Suspense, type CSSProperties } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from './MediaImage'
import Link from './LocaleLink'
import projects from '@/lib/project-summaries.json'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'
import { mediaAsset } from '@/lib/media'
import MotionBrands from './MotionBrands'
import { MOTION_PICKS, VIDEO_PICKS } from '@/lib/motion'
import NameArrow from '@/components/NameArrow'
const disciplines: Record<string, string[]> = {
  'ai-creative': ['mas'],
  zealix: ['branding', 'social'],
  brainy: ['branding'],
  beatness: ['motion', 'social'],
  kop: ['motion', 'social'],
  'kings-tavern': ['motion', 'social'],
  bwl: ['motion', 'social'],
  'activated-decor': ['branding', 'motion'],
  'corazon-mixteco': ['social'],
  amorcito: ['social', 'motion'],
  procyon: ['branding', 'motion', 'social'],
  retrato: ['mas'],
  kymsul: ['mas', 'motion'],
  bardana: ['branding'],
  'motion-centre': ['branding'],
  'sin-yolanda': ['social', 'motion'],
  aseguramax: ['social', 'motion'],
  iamonemind: ['social', 'motion'],
  nexlaunch: ['social', 'motion'],
}
// Where the work was made: agencies first, then freelance (no agency).
// Dates from Kimberly's LinkedIn (11 oct 2026); freelance counts from Kymsul, nov 2023.
// The AI system is a method used across them, so it closes the page instead.
const groups = [
  { key: 'nexlaunch', agency: 'NexLaunch', note: { es: 'Mar 2026 — hoy', en: 'Mar 2026 — present' } },
  { key: 'mensaje-clave', agency: 'Mensaje Clave', note: { es: 'Ene — Mar 2026', en: 'Jan — Mar 2026' } },
  { key: 'freelance', agency: undefined, note: { es: '2023 — hoy', en: '2023 — present' }, title: 'Freelance' },
] as const
const METHOD = 'ai-creative'

/**
 * One project = its cover tilted over its brand's colour plate, and its name.
 * Same language as the "More with…" band that closes each case.
 */
type Summary = (typeof projects)[number] & { plate?: string; agency?: string }
// Freelance shares one light purple plate (Kimberly, 11 oct 2026); agencies keep each brand's colour.
const SOFT_PLATE = 'linear-gradient(157deg, #f1ecff 0%, #ddd0fb 45%, #c4aef2 100%)'
function ProjectTile({ p, soft = false }: { p: Summary; soft?: boolean }) {
  // A landscape cover shows whole (wider, shorter) instead of being cropped.
  const m = mediaAsset(p.image)
  const wide = !!(m?.width && m?.height && m.width > m.height * 1.1)
  return (
    <Link href={`/proyectos/${p.id}`} className={`related-card work-tile ${wide ? 'is-wide' : ''}`}>
      <span className="related-media" style={p.plate && !soft ? ({ '--plate': p.plate } as CSSProperties) : soft ? ({ '--plate': SOFT_PLATE } as CSSProperties) : undefined}>
        <Image src={p.image} alt="" sizes="(max-width: 767px) 44vw, 260px" />
      </span>
      <span className="related-name">
        <NameArrow name={p.name} />
      </span>
    </Link>
  )
}

// The AI system gets its own chapter: one card like any project, opening /ia.
const AI_PLATE = 'linear-gradient(157deg, #e9dcff 0%, #b79cf0 50%, #6f4fb8 100%)'
const AI_COVER = '/assets/ia/ia-avance-qq-despues.png'
function AITile() {
  const { lang } = useLang()
  return (
    <li>
      <Link href="/ia" className="related-card work-tile">
        <span className="related-media" style={{ '--plate': AI_PLATE } as CSSProperties}>
          <Image src={AI_COVER} alt="" sizes="(max-width: 767px) 44vw, 260px" />
        </span>
        <span className="related-name">
          <NameArrow name={lang === 'es' ? 'Mi sistema con IA' : 'My AI system'} />
        </span>
      </Link>
    </li>
  )
}
function AIChapter() {
  const { lang } = useLang()
  return (
    <section id="ia" className="chapter" aria-labelledby="group-ia">
      <header className="chapter-head">
        <h2 id="group-ia" className="chapter-title">{lang === 'es' ? 'IA' : 'AI'}</h2>
        <p className="ed-label">{lang === 'es' ? 'En todos los proyectos' : 'Across every project'}</p>
      </header>
      <ul className="work-tiles">
        <AITile />
      </ul>
    </section>
  )
}

// Area links arrive as /proyectos?area=branding|motion|social|… (also via the
// short links /branding, /motion, /contenido). The address is the filter state.
function areaFrom(value: string | null) {
  // Older links to the areas now inside MÁS.
  if (value === 'ia' || value === 'foto' || value === 'ilustracion') return 'mas'
  return value && tr.portfolio.filters.es.some((f) => f.value === value) ? value : 'todos'
}

export default function ProjectGrid() {
  // The static page renders «todos»; the area from the address applies on hydration.
  return (
    <Suspense fallback={<FilteredGrid active="todos" />}>
      <GridFromAddress />
    </Suspense>
  )
}

function GridFromAddress() {
  return <FilteredGrid active={areaFrom(useSearchParams().get('area'))} />
}

function FilteredGrid({ active }: { active: string }) {
  const { lang } = useLang()
  // Choosing an area updates the address, so it can be copied and shared;
  // Next syncs replaceState with useSearchParams.
  const choose = (value: string) => {
    const url = new URL(location.href)
    if (value === 'todos') url.searchParams.delete('area')
    else url.searchParams.set('area', value)
    history.replaceState(null, '', url)
  }
  const filtered = projects.filter(
    (p) => active === 'todos' || disciplines[p.id]?.includes(active),
  )
  const areaLabel = tr.portfolio.filters[lang].find((f) => f.value === active)?.label ?? ''
  const pp = tr.proyectos
  return (
    <>
    <section className="ed-wrap pt-16 lg:pt-24 pb-4">
      <p className="ed-label mb-6">
        {pp.eyebrow[lang]}
      </p>
      <div className="flex items-end justify-between gap-6">
        {active === 'todos' ? (
          <h1 className="area-page-title">
            {pp.h1[lang]} {pp.h2[lang]}
          </h1>
        ) : (
          // Someone arrived for one area: the page is titled by it.
          <h1 className="area-page-title">{areaLabel.charAt(0) + areaLabel.slice(1).toLowerCase()}.</h1>
        )}
      </div>
    </section>
    <section className="ed-wrap pt-10 pb-24 lg:pb-32">
      <div
        className="flex flex-wrap items-center gap-x-2 -ml-3 mb-12 lg:mb-16"
        role="group"
        aria-label={lang === 'es' ? 'Filtrar proyectos' : 'Filter projects'}
      >
        {tr.portfolio.filters[lang]
          // An area only shows up once some project belongs to it (e.g. Ilustración
          // stays hidden until the Kymsul template is filled in).
          .filter(({ value }) => ['todos', 'motion', 'video'].includes(value) || projects.some((p) => disciplines[p.id]?.includes(value)))
          .map(({ label, value }) => (
          <button
            key={value}
            type="button"
            aria-pressed={active === value}
            onClick={() => choose(value)}
            className={`project-filter min-h-11 px-3 font-mono text-[11px] tracking-[.045em] uppercase transition-colors ${value === 'mas' ? 'text-[#8a5cf0] hover:text-[#6f3fe0]' : active === value ? 'text-[#73509e]' : 'text-[#65635e] hover:text-[#151514]'}`}
          >
            {value === 'mas' && <span className="filter-plus" aria-hidden="true">+</span>}
            {label}
          </button>
        ))}
      </div>
      {active === 'motion' && <MotionBrands picks={MOTION_PICKS} label={{ es: 'Motion', en: 'Motion' }} />}
      {active === 'video' && <MotionBrands picks={VIDEO_PICKS} label={{ es: 'Edición de video', en: 'Video editing' }} />}
      {active !== 'todos' && active !== 'motion' && active !== 'video' && (
        // One area: everything in it together, no split by agency or brand.
        <ul className="work-tiles">
          {filtered
            .filter((p) => p.id !== METHOD)
            .map((p) => (
              <li key={`${active}-${p.id}`}>
                <ProjectTile p={p as Summary} />
              </li>
            ))}
          {active === 'mas' && <AITile />}
        </ul>
      )}
      {active === 'todos' &&
        groups.map((g) => {
          const items = filtered.filter((p) => p.id !== METHOD && p.agency === g.agency)
          if (!items.length) return null
          return (
            <section key={g.key} id={g.key} className="chapter" aria-labelledby={`group-${g.key}`}>
              <header className="chapter-head">
                <h2 id={`group-${g.key}`} className="chapter-title">
                  {'title' in g ? g.title : g.agency}
                </h2>
                <p className="ed-label">{g.note[lang]}</p>
              </header>
              <ul className="work-tiles">
                {items.map((p) => (
                  <li key={p.id}>
                    <ProjectTile p={p as Summary} soft={g.key === 'freelance'} />
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      {active === 'todos' && <AIChapter />}
      {active !== 'todos' && (
        <p className="work-method">
          <button type="button" className="area-more" onClick={() => choose('todos')}>
            <span className="area-more-text">{lang === 'es' ? 'Ver todos los proyectos' : 'See all projects'}</span>
            <span className="area-more-arrow" aria-hidden="true">⟶</span>
          </button>
        </p>
      )}
      <p role="status" className="sr-only">
        {filtered.length} {lang === 'es' ? 'proyectos' : 'projects'}
      </p>
    </section>
    </>
  )
}
