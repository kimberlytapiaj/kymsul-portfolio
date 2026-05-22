'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects, getProject } from '@/lib/projects'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

type Discipline = 'todos' | 'branding' | 'motion' | 'social' | 'ia'

const DISCIPLINES: Record<string, Discipline[]> = {
  'zealix':          ['branding', 'social'],
  'brainy':          ['branding'],
  'beatness':        ['motion', 'social'],
  'kop':             ['motion', 'social'],
  'activated-decor': ['branding', 'motion'],
  'bwl':             ['motion', 'social', 'ia'],
  'ai-creative':     ['ia', 'motion', 'social'],
  'corazon-mixteco': ['social'],
  'amorcito':        ['social'],
}

type ProjectMetaProps = {
  project: (typeof projects)[number]
  wide?: boolean
}

function ProjectMeta({ project, wide }: ProjectMetaProps) {
  return (
    <div className={`mt-5 lg:mt-6 ${wide ? 'lg:grid lg:grid-cols-2 lg:gap-12' : ''}`}>
      <p className="font-sans text-[13px] lg:text-[14px] text-muted leading-[1.6] max-w-[480px]">
        {project.overview}
      </p>
      <div className={`flex flex-wrap gap-2 mt-3 ${wide ? 'lg:mt-0 lg:items-start lg:content-start' : ''}`}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-[rgba(13,13,13,0.12)] rounded-full px-3 py-1 font-mono text-[10px] text-muted2 tracking-[1.2px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProyectosGrid() {
  const [active, setActive] = useState<Discipline>('todos')
  const { lang } = useLang()
  const FILTERS = (tr.proyectos.filters[lang] as unknown) as { label: string; value: Discipline }[]
  const ctaLabel = tr.portfolio.verCaso[lang]

  const zealix         = getProject('zealix')!
  const brainy         = getProject('brainy')!
  const beatness       = getProject('beatness')!
  const kop            = getProject('kop')!
  const activatedDecor = getProject('activated-decor')!
  const bwl            = getProject('bwl')!
  const amorcito       = getProject('amorcito')!
  const corazonMixteco = getProject('corazon-mixteco')!
  const aiCreative     = getProject('ai-creative')!

  const filtered = projects.filter(p =>
    active === 'todos' || (DISCIPLINES[p.id] ?? []).includes(active)
  )

  return (
    <section className="px-6 lg:px-24 pt-10 lg:pt-16 pb-16 lg:pb-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-2 mb-10 lg:mb-12">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-[10px] tracking-[1.4px] rounded-full px-3 lg:px-4 py-[7px] transition-colors cursor-pointer ${
                active === value
                  ? 'bg-dark text-bg'
                  : 'text-muted2 border border-[rgba(13,13,13,0.15)] hover:text-dark hover:border-dark/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Layout completo */}
        {active === 'todos' && (
          <motion.div key="todos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>

            {/* Mobile: columna única */}
            <div className="flex flex-col gap-10 lg:hidden">
              {[zealix, brainy, kop, bwl, beatness, amorcito, corazonMixteco, activatedDecor, aiCreative].map(p => (
                <div key={p.id}>
                  <ProjectCard {...p} className="w-full h-[260px]" sizes="95vw" ctaLabel={ctaLabel} />
                  <ProjectMeta project={p} />
                </div>
              ))}
            </div>

            {/* Desktop: layout editorial */}
            <div className="hidden lg:block">
              <div className="flex gap-6 mb-16">
                <div className="flex-[728_1_0%]">
                  <ProjectCard {...zealix} className="h-[460px]" ctaLabel={ctaLabel} />
                  <ProjectMeta project={zealix} />
                </div>
                <div className="flex-[496_1_0%]">
                  <ProjectCard {...brainy} className="h-[460px]" ctaLabel={ctaLabel} />
                  <ProjectMeta project={brainy} />
                </div>
              </div>

              <div className="flex gap-6 mb-16">
                <div className="flex-[496_1_0%]">
                  <ProjectCard {...kop} className="h-[460px]" ctaLabel={ctaLabel} />
                  <ProjectMeta project={kop} />
                </div>
                <div className="flex-[728_1_0%]">
                  <ProjectCard {...bwl} className="h-[460px]" ctaLabel={ctaLabel} />
                  <ProjectMeta project={bwl} />
                </div>
              </div>

              <div className="mb-16">
                <ProjectCard {...beatness} className="w-full h-[500px]" ctaLabel={ctaLabel} />
                <ProjectMeta project={beatness} wide />
              </div>

              <div className="flex gap-6 mb-16">
                <div className="flex-[728_1_0%]">
                  <ProjectCard {...amorcito} className="h-[460px]" ctaLabel={ctaLabel} />
                  <ProjectMeta project={amorcito} />
                </div>
                <div className="flex-[496_1_0%]">
                  <ProjectCard {...corazonMixteco} className="h-[460px]" ctaLabel={ctaLabel} />
                  <ProjectMeta project={corazonMixteco} />
                </div>
              </div>

              <div className="mb-16">
                <ProjectCard {...activatedDecor} className="w-full h-[500px]" ctaLabel={ctaLabel} />
                <ProjectMeta project={activatedDecor} wide />
              </div>

              <div>
                <ProjectCard {...aiCreative} className="w-full h-[500px]" ctaLabel={ctaLabel} />
                <ProjectMeta project={aiCreative} wide />
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6"
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
                <ProjectMeta project={project} />
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center font-mono text-[11px] text-muted2 tracking-[1.76px] py-24">
                {tr.proyectos.noProjects[lang]}
              </p>
            )}
          </motion.div>
        )}

      </div>
    </section>
  )
}
