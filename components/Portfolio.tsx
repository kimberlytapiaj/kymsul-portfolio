'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects, getProject } from '@/lib/projects'

type Discipline = 'todos' | 'branding' | 'motion' | 'social'

const FILTERS: { label: string; value: Discipline }[] = [
  { label: 'TODOS', value: 'todos' },
  { label: 'BRANDING', value: 'branding' },
  { label: 'MOTION', value: 'motion' },
  { label: 'SOCIAL MEDIA', value: 'social' },
]

const DISCIPLINES: Record<string, Discipline[]> = {
  'zealix':           ['branding', 'social'],
  'brainy':           ['branding'],
  'beatness':         ['motion', 'social'],
  'kop':              ['motion', 'social'],
  'casta-real':       ['motion', 'social'],
  'nerdheart':        ['motion'],
  'bwl':              ['motion', 'social'],
  'nomada':           ['branding'],
  'activated-decor':  ['branding', 'motion'],
}

export default function Portfolio() {
  const [active, setActive] = useState<Discipline>('todos')

  const zealix          = getProject('zealix')!
  const brainy          = getProject('brainy')!
  const beatness        = getProject('beatness')!
  const kop             = getProject('kop')!
  const nerdheart       = getProject('nerdheart')!
  const activatedDecor  = getProject('activated-decor')!
  const bwl             = getProject('bwl')!

  const filtered = projects.filter(p =>
    active === 'todos' || (DISCIPLINES[p.id] ?? []).includes(active)
  )

  return (
    <section id="portafolio" className="px-24 pt-16 pb-0">
      {/* Header + filtros */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-mono text-[11px] text-muted2 tracking-[1.76px]">
          PORTAFOLIO
        </p>
        <div className="flex items-center gap-2">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-[10px] tracking-[1.4px] rounded-full px-4 py-[7px] transition-colors cursor-pointer ${
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

      {/* Bento — vista completa */}
      {active === 'todos' && (
        <motion.div key="bento" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <div className="flex gap-6 mb-6">
            <ProjectCard {...zealix}    className="flex-[728_1_0%] h-[524px]" sizes="(max-width: 1440px) 57vw, 742px" />
            <ProjectCard {...brainy}    className="flex-[496_1_0%] h-[524px]" sizes="(max-width: 1440px) 39vw, 505px" />
          </div>
          <div className="mb-6">
            <ProjectCard {...beatness}  className="w-full h-[604px]" sizes="(max-width: 1440px) 87vw, 1248px" />
          </div>
          <div className="flex gap-6 mb-6">
            <ProjectCard {...kop}           className="flex-[496_1_0%] h-[524px]" sizes="(max-width: 1440px) 39vw, 505px" />
            <ProjectCard {...nerdheart}     className="flex-[728_1_0%] h-[524px]" sizes="(max-width: 1440px) 57vw, 742px" />
          </div>
          <div className="flex gap-6 mb-6">
            <ProjectCard {...activatedDecor} className="flex-[496_1_0%] h-[524px]" sizes="(max-width: 1440px) 39vw, 505px" />
            <ProjectCard {...bwl}            className="flex-[728_1_0%] h-[524px]" sizes="(max-width: 1440px) 57vw, 742px" />
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
          className="grid grid-cols-3 gap-6"
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
                className="h-[420px]"
                sizes="(max-width: 1440px) 30vw, 400px"
              />
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-3 text-center font-mono text-[11px] text-muted2 tracking-[1.76px] py-24">
              SIN PROYECTOS
            </p>
          )}
        </motion.div>
      )}
    </section>
  )
}
