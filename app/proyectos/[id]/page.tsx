import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import CampaignCarousel from '@/components/CampaignCarousel'
import MediaCell from '@/components/MediaCell'
import { projects, getProject, type SubProject, type Section, type SectionGroup } from '@/lib/projects'

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
        <section className="border-t border-[rgba(13,13,13,0.08)] px-24 py-20 bg-[rgba(13,13,13,0.02)]">
          <div className="max-w-[1440px] mx-auto">
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-16">CAMPAÑAS</p>
            <div className="space-y-20">
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

type BentoItem =
  | { kind: 'video-carousel'; sources: string[] }
  | { kind: 'image-carousel'; sources: string[] }
  | { kind: 'video'; src: string }
  | { kind: 'image'; src: string }

function extractBentoItems(campaign: SubProject): BentoItem[] {
  const out: BentoItem[] = []
  const sections = campaign.sections ?? []

  if (sections.length === 0) {
    for (const src of campaign.gallery) {
      out.push(src.endsWith('.mp4') ? { kind: 'video', src } : { kind: 'image', src })
    }
    return out
  }

  for (const section of sections) {
    if (section.groups) {
      for (const group of section.groups) {
        if (group.carousel) {
          const hasVideo = group.items.some(s => s.endsWith('.mp4'))
          out.push({ kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: group.items })
        } else {
          for (const src of group.items) {
            out.push(src.endsWith('.mp4') ? { kind: 'video', src } : { kind: 'image', src })
          }
        }
      }
    } else if (section.type === 'carousel') {
      const hasVideo = section.items!.some(s => s.endsWith('.mp4'))
      out.push({ kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: section.items! })
    } else {
      for (const src of (section.items ?? [])) {
        out.push(src.endsWith('.mp4') ? { kind: 'video', src } : { kind: 'image', src })
      }
    }
  }
  return out
}

function CampaignBlock({ campaign }: { campaign: SubProject }) {
  // Parent campaign with sub-campaigns: accordion layout
  if (campaign.subCampaigns && campaign.subCampaigns.length > 0) {
    return (
      <div>
        <div className="mb-6 pb-6 border-b border-[rgba(13,13,13,0.08)]">
          <p className="text-[32px] text-dark leading-[1] mb-3" style={{ fontFamily: 'var(--font-franklin-cond)' }}>
            {campaign.name}
          </p>
          <p className="font-sans text-[14px] text-muted leading-[1.6] max-w-[560px]">
            {campaign.objective}
          </p>
        </div>
        <div className="divide-y divide-[rgba(13,13,13,0.08)]">
          {campaign.subCampaigns.map((sub, i) => (
            <SubCampaignItem key={i} campaign={sub} />
          ))}
        </div>
      </div>
    )
  }

  // Regular campaign: existing layout
  const items = extractBentoItems(campaign)
  const n = items.length
  const isPaidMedia = campaign.formats.some(f => f.toLowerCase().includes('paid'))
  const gridStyle: React.CSSProperties = (() => {
    if (n === 1) return { maxWidth: '380px', margin: '0 auto' }
    if (n === 2) return { gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '760px', margin: '0 auto' }
    return { gridTemplateColumns: 'repeat(3, 1fr)' }
  })()

  return (
    <div>
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-[rgba(13,13,13,0.08)]">
        <div>
          <p className="text-[32px] text-dark leading-[1] mb-3" style={{ fontFamily: 'var(--font-franklin-cond)' }}>
            {campaign.name}
          </p>
          <p className="font-sans text-[14px] text-muted leading-[1.6] max-w-[560px]">
            {campaign.objective}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end max-w-[280px]">
          {campaign.formats.map((f) => (
            <span key={f} className="bg-[rgba(13,13,13,0.06)] rounded-full px-3 py-1 font-mono text-[10px] text-muted2 tracking-[1.2px]">
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-3 items-start" style={gridStyle}>
        {items.map((item, i) => (
          <MediaCell key={i} {...item} name={campaign.name} index={i} isPaidMedia={isPaidMedia} />
        ))}
      </div>
    </div>
  )
}

function SubCampaignItem({ campaign }: { campaign: SubProject }) {
  const items = extractBentoItems(campaign)
  const n = items.length
  const isPaidMedia = campaign.formats.some(f => f.toLowerCase().includes('paid'))
  const hasImages = items.some(it => it.kind === 'image')

  return (
    <details className="group">
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none select-none">
        <div>
          <p className="font-sans text-[16px] text-dark font-medium leading-[1]">
            {campaign.name}
          </p>
          <p className="font-sans text-[13px] text-muted mt-1.5 leading-[1.5] max-w-[500px]">
            {campaign.objective}
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-8">
          <div className="flex flex-wrap gap-1.5 justify-end max-w-[260px]">
            {campaign.formats.map((f) => (
              <span key={f} className="bg-[rgba(13,13,13,0.06)] rounded-full px-2.5 py-0.5 font-mono text-[9px] text-muted2 tracking-[1.2px]">
                {f}
              </span>
            ))}
          </div>
          <span className="font-mono text-[12px] text-muted2 inline-block transition-transform duration-200 group-open:rotate-180">↓</span>
        </div>
      </summary>
      <div className="pb-8 pt-2">
        <BentoGrid items={items} name={campaign.name} isPaidMedia={isPaidMedia} contain={hasImages} />
      </div>
    </details>
  )
}

function BentoGrid({ items, name, isPaidMedia, contain }: {
  items: ReturnType<typeof extractBentoItems>
  name: string
  isPaidMedia: boolean
  contain: boolean
}) {
  const n = items.length
  const hasImages = items.some(it => it.kind === 'image')

  // Mixed-format campaigns: flex-column masonry so every image shows at natural ratio
  if (hasImages && n >= 3) {
    const numCols = n <= 3 ? 3 : n === 4 ? 4 : 5
    const cols: (typeof items)[] = Array.from({ length: numCols }, () => [])
    items.forEach((item, i) => cols[i % numCols].push(item))
    return (
      <div className="flex gap-3 w-full">
        {cols.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-3 flex-1 min-w-0">
            {col.map((item, ii) => {
              const idx = ci + ii * numCols
              return (
                <MediaCell key={idx} {...item} name={name} index={idx} isPaidMedia={isPaidMedia} natural />
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  // Videos or small sets: uniform aspect-[4/5] grid
  const style: React.CSSProperties = n === 1
    ? { maxWidth: '380px', margin: '0 auto' }
    : n === 2
    ? { gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '760px', margin: '0 auto' }
    : n === 4
    ? { gridTemplateColumns: 'repeat(2, 1fr)' }
    : { gridTemplateColumns: 'repeat(3, 1fr)' }

  return (
    <div className="grid gap-3" style={style}>
      {items.map((item, i) => (
        <MediaCell key={i} {...item} name={name} index={i} isPaidMedia={isPaidMedia} contain={contain} />
      ))}
    </div>
  )
}

function CampaignGrid({ gallery, name }: { gallery: string[]; name: string }) {
  const hasVideo = gallery.some((s) => s.endsWith('.mp4'))

  if (hasVideo) {
    if (gallery.length === 1 && gallery[0].endsWith('.mp4')) {
      return (
        <div className="flex justify-center">
          <video src={gallery[0]} autoPlay loop muted playsInline className="max-h-[560px] w-auto rounded-sm" />
        </div>
      )
    }
    return (
      <div className="grid grid-cols-3 gap-4">
        {gallery.map((src, i) => (
          <div key={i} className="h-[420px] bg-[rgba(13,13,13,0.04)] rounded-sm flex items-center justify-center overflow-hidden">
            {src.endsWith('.mp4') ? (
              <video src={src} autoPlay loop muted playsInline className="h-full w-auto max-w-full" />
            ) : (
              <img src={src} alt={`${name} ${i + 1}`} className="max-w-full max-h-full object-contain p-3" loading="lazy" />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-5 gap-3">
      {gallery.map((src, i) => (
        <div key={i} className="h-[280px] bg-[rgba(13,13,13,0.04)] rounded-sm flex items-center justify-center p-2">
          <img src={src} alt={`${name} ${i + 1}`} className="max-w-full max-h-full object-contain" loading="lazy" />
        </div>
      ))}
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
