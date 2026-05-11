import PageLayout from '@/components/PageLayout'
import ProjectCard from '@/components/ProjectCard'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const projects = [
  {
    id: 'zealix',
    name: 'Zealix',
    category: 'BRANDING',
    year: '2025',
    image: '/assets/thumbnail-zealix.png',
    accentColor: 'white',
    desc: 'Sistema de identidad completo para startup fintech. Naming, logotipo, paleta, tipografía y guías de uso para equipos de diseño y marketing.',
    tags: ['Identidad visual', 'Brand guidelines', 'Naming'],
  },
  {
    id: 'brainy',
    name: 'BrainyBudzz',
    category: 'BRANDING · UX UI',
    year: '2025',
    image: '/assets/thumbnail-brainy.png',
    accentColor: 'white',
    desc: 'Marca y experiencia de usuario para plataforma EdTech. Desde el posicionamiento hasta los componentes de interfaz en Figma.',
    tags: ['Branding', 'UI Design', 'Design System'],
  },
  {
    id: 'beatness',
    name: 'Beatness',
    category: 'SOCIAL MEDIA',
    year: '2024',
    image: '/assets/thumbnail-beatness.png',
    accentColor: 'white',
    desc: 'Dirección de arte y producción de contenido para marca de fitness. Pack de templates animados, reels y estrategia visual para redes.',
    tags: ['Motion', 'Social media', 'Dirección de arte'],
    full: true,
  },
  {
    id: 'nerdheart',
    name: 'NerdHeart',
    category: 'MOTION',
    year: '2024',
    image: '/assets/thumbnail-tierra.png',
    accentColor: '#d6cc94',
    desc: 'Identidad en movimiento para marca de cultura pop. Stings, loops y sistema de animación reutilizable en After Effects.',
    tags: ['Motion graphics', 'Brand animation', 'After Effects'],
  },
  {
    id: 'nomada',
    name: 'Nómada',
    category: 'BRAND · WEB',
    year: '2024',
    image: '/assets/thumbnail-nomada.png',
    accentColor: '#c7b8ff',
    desc: 'Reposicionamiento de restaurante con enfoque en experiencia. Sistema visual, fotografía de producto y presencia web.',
    tags: ['Branding', 'Web design', 'Fotografía'],
  },
]

export default function ProyectosPage() {
  const [zealix, brainy, beatness, nerdheart, nomada] = projects

  return (
    <PageLayout>
      {/* Header */}
      <section className="px-24 pt-20 pb-16 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            PROYECTOS
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-[96px] text-dark leading-[0.9]"
                style={{ fontFamily: 'var(--font-franklin-cond)' }}
              >
                Todo el
              </p>
              <p
                className="font-fraunces font-light italic text-[96px] text-dark leading-[0.9]"
                style={WONK}
              >
                trabajo.
              </p>
            </div>
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] pb-4">
              {projects.length} PROYECTOS · 2024—2025
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-24 pt-16 pb-24">
        <div className="max-w-[1440px] mx-auto">

          {/* Row 1 — Zealix + BrainyBudzz */}
          <div className="flex gap-6 mb-16">
            <div className="flex-[728_1_0%]">
              <ProjectCard {...zealix} className="h-[460px]" />
              <ProjectMeta project={zealix} />
            </div>
            <div className="flex-[496_1_0%]">
              <ProjectCard {...brainy} className="h-[460px]" />
              <ProjectMeta project={brainy} />
            </div>
          </div>

          {/* Row 2 — Beatness full width */}
          <div className="mb-16">
            <ProjectCard {...beatness} className="w-full h-[500px]" />
            <ProjectMeta project={beatness} wide />
          </div>

          {/* Row 3 — NerdHeart + Nómada */}
          <div className="flex gap-6">
            <div className="flex-[496_1_0%]">
              <ProjectCard {...nerdheart} className="h-[460px]" />
              <ProjectMeta project={nerdheart} />
            </div>
            <div className="flex-[728_1_0%]">
              <ProjectCard {...nomada} className="h-[460px]" />
              <ProjectMeta project={nomada} />
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  )
}

type ProjectMetaProps = {
  project: (typeof projects)[number]
  wide?: boolean
}

function ProjectMeta({ project, wide }: ProjectMetaProps) {
  return (
    <div className={`mt-6 ${wide ? 'grid grid-cols-2 gap-12' : ''}`}>
      <p className="font-sans text-[14px] text-muted leading-[1.6] max-w-[480px]">
        {project.desc}
      </p>
      <div className={`flex flex-wrap gap-2 ${wide ? 'items-start content-start' : 'mt-3'}`}>
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
