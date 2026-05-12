import PageLayout from '@/components/PageLayout'
import ProyectosGrid from './ProyectosGrid'
import { projects } from '@/lib/projects'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function ProyectosPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="px-6 lg:px-24 pt-12 lg:pt-20 pb-10 lg:pb-16 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px] mb-6">
            PROYECTOS
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[clamp(52px,10vw,96px)] text-dark leading-[0.9]" style={{ fontFamily: 'var(--font-franklin-cond)' }}>
                Todo el
              </p>
              <p className="font-fraunces font-light italic text-[clamp(52px,10vw,96px)] text-dark leading-[0.9]" style={WONK}>
                trabajo.
              </p>
            </div>
            <p className="hidden sm:block font-mono text-[11px] text-muted2 tracking-[1.76px] pb-4">
              {projects.length} PROYECTOS · 2024—2026
            </p>
          </div>
        </div>
      </section>

      <ProyectosGrid />
    </PageLayout>
  )
}
