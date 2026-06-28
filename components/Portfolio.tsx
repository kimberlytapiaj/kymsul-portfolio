'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects, getProject } from '@/lib/projects'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

type Discipline = 'todos' | 'branding' | 'motion' | 'social' | 'ia'

const DISCIPLINES: Record<string, Discipline[]> = {
  'ai-creative':     ['ia', 'motion', 'social'],
  'zealix':          ['branding', 'social'],
  'brainy':          ['branding'],
  'beatness':        ['motion', 'social'],
  'kop':             ['motion', 'social'],
  'bwl':             ['motion', 'social'],
  'activated-decor': ['branding', 'motion'],
  'corazon-mixteco': ['social'],
  'amorcito':        ['social'],
  'procyon':         ['branding', 'motion', 'social'],
}

export default function Portfolio() {
  const [active, setActive] = useState<Discipline>('todos')
  const { lang } = useLang()
  const FILTERS = (tr.portfolio.filters[lang] as unknown) as { label: string; value: Discipline }[]

  const aiCreative = getProject('ai-creative')!
  const zealix     = getProject('zealix')!
  const kop        = getProject('kop')!
  const bwl        = getProject('bwl')!
  const amorcito   = getProject('amorcito')!

  const filtered = projects.filter(p =>
    active === 'todos' || (DISCIPLINES[p.id] ?? []).includes(active)
  )

  const ctaLabel = tr.portfolio.verCaso[lang]

  return (
    <section id="portafolio" className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-12 lg:pt-16 pb-0">

      {/* Header + filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">
          {tr.portfolio.label[lang]}
        </p>
        <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto flex-nowrap pb-1 sm:flex-wrap sm:overflow-visible after:pointer-events-none after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-[rgba(250,250,248,1)] after:to-transparent sm:after:hidden">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`whitespace-nowrap font-mono text-[10px] tracking-[1.4px] rounded-full px-3 lg:px-4 py-[7px] transition-colors cursor-pointer ${
                active === value
                  ? 'bg-dark text-bg'
                  : 'text-muted2 border border-[rgba(13,13,13,0.15)] hover:text-dark hover:border-dark/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        </div>
      </div>

      {/* Bento — desktop / columna única en mobile */}
      {active === 'todos' && (
        <motion.div key="bento" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>

          {/* Mobile: columna única */}
          <div className="flex flex-col gap-4 lg:hidden">
            {[aiCreative, zealix, kop, bwl, amorcito].map((p, i) => (
              <ProjectCard key={p.id} {...p} className="w-full h-[260px]" sizes="95vw" ctaLabel={ctaLabel} priority={i === 0} />
            ))}
          </div>

          {/* Desktop: bento */}
          <div className="hidden lg:block">
            <div className="flex gap-6 mb-6">
              <ProjectCard {...aiCreative} className="flex-[728_1_0%] h-[524px]" sizes="(max-width: 1440px) 57vw, 742px" ctaLabel={ctaLabel} priority />
              <ProjectCard {...kop}        className="flex-[496_1_0%] h-[524px]" sizes="(max-width: 1440px) 39vw, 505px" ctaLabel={ctaLabel} />
            </div>
            <div className="mb-6">
              <ProjectCard {...bwl}        className="w-full h-[604px]" sizes="(max-width: 1440px) 87vw, 1248px" ctaLabel={ctaLabel} />
            </div>
            <div className="flex gap-6 mb-6">
              <ProjectCard {...amorcito}   className="flex-[496_1_0%] h-[524px]" sizes="(max-width: 1440px) 39vw, 505px" ctaLabel={ctaLabel} />
              <ProjectCard {...zealix}     className="flex-[728_1_0%] h-[524px]" sizes="(max-width: 1440px) 57vw, 742px" ctaLabel={ctaLabel} />
            </div>
          </div>

        </motion.div>
      )}

      {/* Grid filtrada */}
      {active !== 'todos' && (
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ProjectCard
                {...project}
                className="h-[260px] sm:h-[320px] lg:h-[420px]"
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                ctaLabel={ctaLabel}
              />
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center font-mono text-[11px] text-muted2 tracking-[1.76px] py-24">
              {tr.portfolio.noProjects[lang]}
            </p>
          )}
        </motion.div>
      )}
    </section>
  )
}
