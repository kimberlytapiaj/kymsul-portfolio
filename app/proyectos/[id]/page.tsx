import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { projects, getProject, type SubProject } from '@/lib/projects'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

type Props = { params: Promise<{ id: string }> }

export default async function CasoPage({ params }: Props) {
  const { id } = await params
  const project = getProject(id)
  if (!project) notFound()

  return (
    <PageLayout>
      {/* Hero */}
      <section className="px-24 pt-20 pb-16 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <Link
            href="/proyectos"
            className="font-mono text-[11px] text-muted2 tracking-[1.76px] hover:text-dark transition-colors"
          >
            ← PROYECTOS
          </Link>
          <div className="mt-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-4">
                {project.category} · {project.year}
              </p>
              <h1
                className="text-[80px] text-dark leading-[0.9]"
                style={{ fontFamily: 'var(--font-franklin-cond)' }}
              >
                {project.name}
              </h1>
              <p
                className="font-fraunces font-light italic text-[48px] text-muted leading-[1.1] mt-2"
                style={WONK}
              >
                {project.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 max-w-[320px] justify-end pb-2">
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
        </div>
      </section>

      {/* Cover image */}
      <div className="w-full aspect-[16/7] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="px-24 py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-[1fr_2fr] gap-24">

            {/* Left: meta */}
            <div className="space-y-10">
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">ROL</p>
                <p className="font-sans text-[14px] text-muted leading-[1.7]">{project.role}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">AÑO</p>
                <p className="font-sans text-[14px] text-muted">{project.year}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">DISCIPLINA</p>
                <p className="font-sans text-[14px] text-muted">{project.category}</p>
              </div>
            </div>

            {/* Right: case study text */}
            <div className="space-y-14">
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">CONTEXTO</p>
                <p className="font-sans text-[18px] text-dark leading-[1.7]">{project.overview}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">EL RETO</p>
                <p className="font-sans text-[16px] text-muted leading-[1.7]">{project.challenge}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">PROCESO</p>
                <p className="font-sans text-[16px] text-muted leading-[1.7]">{project.process}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">RESULTADO</p>
                <p className="font-sans text-[16px] text-muted leading-[1.7]">{project.result}</p>
              </div>
            </div>

          </div>

          {/* Main gallery */}
          {project.gallery.length > 1 && (
            <div className="mt-24 columns-2 gap-4">
              {project.gallery.map((src, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <GalleryItem src={src} alt={`${project.name} ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Campaigns / Sub-projects */}
      {project.campaigns && project.campaigns.length > 0 && (
        <section className="border-t border-[rgba(13,13,13,0.08)] px-24 py-24 bg-[rgba(13,13,13,0.02)]">
          <div className="max-w-[1440px] mx-auto">
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-16">CAMPAÑAS</p>
            <div className="space-y-24">
              {project.campaigns.map((campaign, i) => (
                <CampaignBlock key={i} campaign={campaign} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project nav */}
      <NextProject currentId={id} />
    </PageLayout>
  )
}

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  if (src.endsWith('.mp4')) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-sm"
      />
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover rounded-sm"
      loading="lazy"
    />
  )
}

function CampaignBlock({ campaign }: { campaign: SubProject }) {
  const hasVideo = campaign.gallery.some((s) => s.endsWith('.mp4'))

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-[rgba(13,13,13,0.08)]">
        <div>
          <p
            className="text-[32px] text-dark leading-[1] mb-3"
            style={{ fontFamily: 'var(--font-franklin-cond)' }}
          >
            {campaign.name}
          </p>
          <p className="font-sans text-[14px] text-muted leading-[1.6] max-w-[560px]">
            {campaign.objective}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end max-w-[280px]">
          {campaign.formats.map((f) => (
            <span
              key={f}
              className="bg-[rgba(13,13,13,0.06)] rounded-full px-3 py-1 font-mono text-[10px] text-muted2 tracking-[1.2px]"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Grid — videos 1 col, images adaptive */}
      {hasVideo ? (
        <div className="grid grid-cols-3 gap-4">
          {campaign.gallery.map((src, i) => (
            <video
              key={i}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-sm"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-3">
          {campaign.gallery.map((src, i) => (
            <div key={i} className="h-[280px] bg-[rgba(13,13,13,0.04)] rounded-sm flex items-center justify-center p-2">
              <img
                src={src}
                alt={`${campaign.name} ${i + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function NextProject({ currentId }: { currentId: string }) {
  const idx = projects.findIndex((p) => p.id === currentId)
  const next = projects[(idx + 1) % projects.length]

  return (
    <section className="border-t border-[rgba(13,13,13,0.08)] px-24 py-16">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <p className="font-mono text-[11px] text-muted2 tracking-[1.76px]">SIGUIENTE PROYECTO</p>
        <Link
          href={`/proyectos/${next.id}`}
          className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
        >
          <p className="font-fraunces text-[32px] text-dark" style={WONK}>
            {next.name}
          </p>
          <span className="font-mono text-[11px] text-muted2 tracking-[1.4px] group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
