'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import CampaignCarousel from '@/components/CampaignCarousel'
import MediaCell from '@/components/MediaCell'
import LazyVideo from '@/components/LazyVideo'
import { projects, type Project, type SubProject, type Section, type SectionGroup } from '@/lib/projects'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'
import { projectTranslationsEN } from '@/lib/project-translations'

// Deep-merge EN translations into the project object when lang === 'en'
function applyTranslation(project: Project, lang: 'es' | 'en'): Project {
  if (lang === 'es') return project
  const t = projectTranslationsEN[project.id]
  if (!t) return project

  const p: Project = {
    ...project,
    ...(t.name       && { name: t.name }),
    ...(t.tagline    && { tagline: t.tagline }),
    ...(t.tags       && { tags: t.tags }),
    ...(t.overview   && { overview: t.overview }),
    ...(t.role       && { role: t.role }),
    ...(t.challenge  && { challenge: t.challenge }),
    ...(t.process    && { process: t.process }),
    ...(t.result     && { result: t.result }),
    ...(t.campaignsLabel !== undefined && { campaignsLabel: t.campaignsLabel }),
  }

  if (t.campaigns && project.campaigns) {
    p.campaigns = project.campaigns.map((campaign, i) => {
      const tc = t.campaigns![i]
      if (!tc) return campaign
      const c: SubProject = {
        ...campaign,
        ...(tc.name      && { name: tc.name }),
        ...(tc.objective && { objective: tc.objective }),
        ...(tc.formats   && { formats: tc.formats }),
      }
      if (tc.subCampaigns && campaign.subCampaigns) {
        c.subCampaigns = campaign.subCampaigns.map((sub, j) => {
          const ts = tc.subCampaigns![j]
          if (!ts) return sub
          return {
            ...sub,
            ...(ts.name      && { name: ts.name }),
            ...(ts.objective && { objective: ts.objective }),
            ...(ts.formats   && { formats: ts.formats }),
          }
        })
      }
      return c
    })
  }

  return p
}

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

export default function ProjectDetailView({ project }: { project: Project }) {
  const { lang } = useLang()
  const c = tr.caso
  const p = applyTranslation(project, lang)

  return (
    <PageLayout>
      {/* Hero */}
      <section className="px-6 lg:px-24 pt-12 lg:pt-20 pb-10 lg:pb-16 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <Link
            href="/proyectos"
            className="font-mono text-[11px] text-muted2 tracking-[1.76px] hover:text-dark transition-colors"
          >
            {c.back[lang]}
          </Link>
          <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-4">
                {p.category} · {p.year}
              </p>
              <h1
                className="text-[clamp(40px,7vw,80px)] text-dark leading-[0.9]"
                style={{ fontFamily: 'var(--font-franklin-cond)' }}
              >
                {p.name}
              </h1>
              <p
                className="font-fraunces font-light italic text-[clamp(24px,4vw,48px)] text-muted leading-[1.1] mt-2"
                style={WONK}
              >
                {p.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-[320px] lg:justify-end pb-2">
              {p.tags.map((tag) => (
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
      <div className="relative w-full aspect-[16/7] overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <section className="px-6 lg:px-24 py-12 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-24">

            {/* Left: meta */}
            <div className="space-y-10">
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">{c.rol[lang]}</p>
                <p className="font-sans text-[14px] text-muted leading-[1.7]">{p.role}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">{c.año[lang]}</p>
                <p className="font-sans text-[14px] text-muted">{p.year}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">{c.disciplina[lang]}</p>
                <p className="font-sans text-[14px] text-muted">{p.category}</p>
              </div>
              {p.agency && (
                <div>
                  <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-3">{c.agencia[lang]}</p>
                  <p className="font-sans text-[14px] text-muted">{p.agency}</p>
                </div>
              )}
            </div>

            {/* Right: case study text */}
            <div className="space-y-14">
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">{c.contexto[lang]}</p>
                <p className="font-sans text-[15px] lg:text-[18px] text-dark leading-[1.7]">{p.overview}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">{c.reto[lang]}</p>
                <p className="font-sans text-[14px] lg:text-[16px] text-muted leading-[1.7]">{p.challenge}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">{c.proceso[lang]}</p>
                <p className="font-sans text-[14px] lg:text-[16px] text-muted leading-[1.7]">{p.process}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] mb-4">{c.resultado[lang]}</p>
                <p className="font-sans text-[14px] lg:text-[16px] text-muted leading-[1.7]">{p.result}</p>
              </div>
            </div>

          </div>

          {/* Main gallery */}
          {p.gallery.length > 1 && (
            <div className="mt-12 lg:mt-24 columns-1 lg:columns-2 gap-4">
              {p.gallery.map((src, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <GalleryItem src={src} alt={`${p.name} ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Campaigns / Sub-projects */}
      {p.campaigns && p.campaigns.length > 0 && (
        <section className="border-t border-[rgba(13,13,13,0.08)] px-6 lg:px-24 py-12 lg:py-20 bg-[rgba(13,13,13,0.02)]">
          <div className="max-w-[1440px] mx-auto">
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-16">
              {p.campaignsLabel ?? c.campanas[lang]}
            </p>
            <div className="space-y-20">
              {p.campaigns.map((campaign, i) => (
                <CampaignBlock key={i} campaign={campaign} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project nav */}
      <NextProject currentId={project.id} lang={lang} />
    </PageLayout>
  )
}

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  if (src.endsWith('.mp4')) {
    return <LazyVideo src={src} className="w-full rounded-sm" />
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="(max-width: 1440px) 50vw, 700px"
      style={{ width: '100%', height: 'auto' }}
      className="rounded-sm"
    />
  )
}

type BentoItem =
  | { kind: 'video-carousel'; sources: string[]; contain?: boolean; wide?: boolean; span?: number; label?: string }
  | { kind: 'image-carousel'; sources: string[]; contain?: boolean; wide?: boolean; span?: number; label?: string }
  | { kind: 'video'; src: string; contain?: boolean; wide?: boolean; span?: number; label?: string }
  | { kind: 'image'; src: string; contain?: boolean; wide?: boolean; span?: number; label?: string }

function LabelChip({ label }: { label: string }) {
  const isAfter = label.toLowerCase().includes('después') || label.toLowerCase().includes('after')
  return (
    <div className={`inline-flex items-center gap-1.5 mb-2.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-[1.4px] uppercase ${
      isAfter
        ? 'bg-[rgba(13,13,13,0.82)] text-white'
        : 'bg-[rgba(13,13,13,0.07)] text-[rgba(13,13,13,0.5)] border border-[rgba(13,13,13,0.10)]'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isAfter ? 'bg-white' : 'bg-[rgba(13,13,13,0.35)]'}`} />
      {label}
    </div>
  )
}

const isVideo = (s: string) => s.endsWith('.mp4') || s.endsWith('.webm')

function SplitGroupContent({ group, name, isPaidMedia }: { group: SectionGroup; name: string; isPaidMedia: boolean }) {
  if (group.carousel) {
    const hasVideo = group.items.some(isVideo)
    const it: BentoItem = { kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: group.items }
    return <MediaCell {...it} name={name} index={0} isPaidMedia={isPaidMedia} />
  }
  return (
    <div className="space-y-3">
      {group.items.map((src, ii) => {
        const it: BentoItem = isVideo(src) ? { kind: 'video', src } : { kind: 'image', src }
        return <MediaCell key={ii} {...it} name={name} index={ii} isPaidMedia={isPaidMedia} />
      })}
    </div>
  )
}

function extractSectionItems(section: Section): BentoItem[] {
  const out: BentoItem[] = []
  if (section.groups) {
    for (const group of section.groups) {
      if (group.carousel) {
        const hasVideo = group.items.some(isVideo)
        out.push({ kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: group.items, contain: group.contain, wide: group.wide, span: group.span, label: group.label })
      } else {
        for (const src of group.items) {
          out.push(isVideo(src)
            ? { kind: 'video', src, wide: group.wide, contain: group.contain, span: group.span, label: group.label }
            : { kind: 'image', src, wide: group.wide, contain: group.contain, span: group.span, label: group.label })
        }
      }
    }
  } else if (section.type === 'carousel') {
    const hasVideo = section.items!.some(isVideo)
    out.push({ kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: section.items! })
  } else {
    for (const src of (section.items ?? [])) {
      out.push(isVideo(src) ? { kind: 'video', src } : { kind: 'image', src })
    }
  }
  return out
}

function extractBentoItems(campaign: SubProject): BentoItem[] {
  const out: BentoItem[] = []
  const sections = campaign.sections ?? []

  if (sections.length === 0) {
    for (const src of campaign.gallery) {
      out.push(isVideo(src) ? { kind: 'video', src } : { kind: 'image', src })
    }
    return out
  }

  for (const section of sections) {
    if (section.groups) {
      for (const group of section.groups) {
        if (group.carousel) {
          const hasVideo = group.items.some(isVideo)
          out.push({ kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: group.items, contain: group.contain, wide: group.wide, span: group.span })
        } else {
          for (const src of group.items) {
            out.push(isVideo(src)
              ? { kind: 'video', src, wide: group.wide, contain: group.contain, span: group.span }
              : { kind: 'image', src, wide: group.wide, contain: group.contain, span: group.span })
          }
        }
      }
    } else if (section.type === 'carousel') {
      const hasVideo = section.items!.some(isVideo)
      out.push({ kind: hasVideo ? 'video-carousel' : 'image-carousel', sources: section.items! })
    } else {
      for (const src of (section.items ?? [])) {
        out.push(isVideo(src) ? { kind: 'video', src } : { kind: 'image', src })
      }
    }
  }
  return out
}

function CampaignBlock({ campaign }: { campaign: SubProject }) {
  // Parent campaign with sub-campaigns: accordion layout
  if (campaign.subCampaigns && campaign.subCampaigns.length > 0) {
    const subList = (
      <div className="divide-y divide-[rgba(13,13,13,0.08)]">
        {campaign.subCampaigns.map((sub, i) => (
          <SubCampaignItem key={i} campaign={sub} />
        ))}
      </div>
    )
    if (campaign.collapsible) {
      return (
        <details className="group">
          <summary className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-0 pb-6 border-b border-[rgba(13,13,13,0.08)] cursor-pointer list-none select-none">
            <div>
              <p className="text-[24px] lg:text-[32px] text-dark leading-[1] mb-3" style={{ fontFamily: 'var(--font-franklin-cond)' }}>
                {campaign.name}
              </p>
              <p className="font-sans text-[13px] lg:text-[14px] text-muted leading-[1.6] max-w-[560px]">
                {campaign.objective}
              </p>
            </div>
            <div className="flex items-center gap-4 lg:shrink-0 lg:ml-8">
              <div className="flex flex-wrap gap-2">
                {campaign.formats.map((f) => (
                  <span key={f} className="bg-[rgba(13,13,13,0.06)] rounded-full px-3 py-1 font-mono text-[10px] text-muted2 tracking-[1.2px]">{f}</span>
                ))}
              </div>
              <span className="font-mono text-[12px] text-muted2 inline-block transition-transform duration-200 group-open:rotate-180">↓</span>
            </div>
          </summary>
          <div className="pt-8">{subList}</div>
        </details>
      )
    }
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
        {subList}
      </div>
    )
  }

  const isPaidMedia = campaign.formats.some(f => f.toLowerCase().includes('paid'))
  const sections = campaign.sections ?? []

  const campaignHeader = (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 pb-6 border-b border-[rgba(13,13,13,0.08)] gap-4 lg:gap-0">
      <div>
        <p className="text-[24px] lg:text-[32px] text-dark leading-[1] mb-3" style={{ fontFamily: 'var(--font-franklin-cond)' }}>
          {campaign.name}
        </p>
        <p className="font-sans text-[13px] lg:text-[14px] text-muted leading-[1.6] max-w-[560px]">
          {campaign.objective}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-[280px]">
        {campaign.formats.map((f) => (
          <span key={f} className="bg-[rgba(13,13,13,0.06)] rounded-full px-3 py-1 font-mono text-[10px] text-muted2 tracking-[1.2px]">
            {f}
          </span>
        ))}
      </div>
    </div>
  )

  // Multi-section or single split section: renders with per-section layout logic
  if (sections.length > 1 || (sections.length === 1 && sections[0].split)) {
    if (campaign.collapsible) {
      return (
        <details className="group">
          <summary className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-0 pb-6 border-b border-[rgba(13,13,13,0.08)] cursor-pointer list-none select-none">
            <div>
              <p className="text-[24px] lg:text-[32px] text-dark leading-[1] mb-3" style={{ fontFamily: 'var(--font-franklin-cond)' }}>
                {campaign.name}
              </p>
              <p className="font-sans text-[13px] lg:text-[14px] text-muted leading-[1.6] max-w-[560px]">
                {campaign.objective}
              </p>
            </div>
            <div className="flex items-center gap-4 lg:shrink-0 lg:ml-8">
              <div className="flex flex-wrap gap-2">
                {campaign.formats.map((f) => (
                  <span key={f} className="bg-[rgba(13,13,13,0.06)] rounded-full px-3 py-1 font-mono text-[10px] text-muted2 tracking-[1.2px]">
                    {f}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[12px] text-muted2 inline-block transition-transform duration-200 group-open:rotate-180">↓</span>
            </div>
          </summary>
          <div className="pt-8">
            <SectionsContent sections={sections} name={campaign.name} isPaidMedia={isPaidMedia} />
          </div>
        </details>
      )
    }
    return (
      <div>
        {campaignHeader}
        <SectionsContent sections={sections} name={campaign.name} isPaidMedia={isPaidMedia} />
      </div>
    )
  }

  // Single-section: existing flat grid layout
  const items = extractBentoItems(campaign)
  const n = items.length
  const hasWide = items.some(it => it.wide || (it.span && it.span > 1))
  const gridCols =
    hasWide ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
    n === 1 ? '' :
    n === 2 ? 'grid-cols-1 sm:grid-cols-2' :
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  const gridStyle: React.CSSProperties =
    n === 1 ? { maxWidth: '380px', margin: '0 auto' } :
    n === 2 ? { maxWidth: '760px', margin: '0 auto' } : {}

  const spanClass = (item: BentoItem) => {
    if (item.wide) return 'col-span-3'
    if (item.span === 2) return 'col-span-2'
    return ''
  }

  return (
    <div>
      {campaignHeader}
      <div className={`grid gap-3 items-start ${gridCols}`} style={gridStyle}>
        {items.map((item, i) => (
          <div key={i} className={spanClass(item)}>
            <MediaCell {...item} name={campaign.name} index={i} isPaidMedia={isPaidMedia} />
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionsContent({ sections, name, isPaidMedia }: { sections: Section[]; name: string; isPaidMedia: boolean }) {
  return (
    <div className="space-y-10">
      {sections.map((section, si) => {
        if (section.split && section.groups && section.groups.length >= 2) {
          const [leftGroup, rightGroup] = section.groups
          const isAfterLabel = (lbl?: string) =>
            lbl?.toLowerCase().includes('después') || lbl?.toLowerCase().includes('after')
          const ColHeader = ({ group }: { group: typeof leftGroup }) => {
            const after = isAfterLabel(group.label)
            return (
              <div className={`flex items-center gap-2 pb-3 mb-4 ${after ? 'border-b-2 border-[rgba(13,13,13,0.75)]' : 'border-b border-[rgba(13,13,13,0.10)]'}`}>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${after ? 'bg-[rgba(13,13,13,0.8)]' : 'border border-[rgba(13,13,13,0.35)] bg-transparent'}`} />
                <span className={`font-mono text-[10px] tracking-[1.5px] uppercase ${after ? 'text-dark font-semibold' : 'text-muted2'}`}>
                  {group.label}
                </span>
              </div>
            )
          }
          return (
            <div key={si}>
              {section.label && (
                <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] uppercase mb-5">
                  {section.label}
                </p>
              )}
              <div className="relative grid grid-cols-2">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[rgba(13,13,13,0.12)] pointer-events-none" />
                <div className="pr-6">
                  {leftGroup.label && <ColHeader group={leftGroup} />}
                  <SplitGroupContent group={leftGroup} name={name} isPaidMedia={isPaidMedia} />
                </div>
                <div className="pl-6">
                  {rightGroup.label && <ColHeader group={rightGroup} />}
                  <SplitGroupContent group={rightGroup} name={name} isPaidMedia={isPaidMedia} />
                </div>
              </div>
            </div>
          )
        }
        const sectionItems = extractSectionItems(section)
        const sn = sectionItems.length
        const sHasWide = sectionItems.some(it => it.wide || (it.span && it.span > 1))
        const sCols =
          sHasWide ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
          sn === 1 ? '' :
          sn === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        const sStyle: React.CSSProperties =
          sn === 1 ? { maxWidth: '560px', margin: '0 auto' } :
          sn === 2 ? { maxWidth: '760px', margin: '0 auto' } : {}
        const sSpanClass = (item: BentoItem) => item.wide ? 'col-span-3' : item.span === 2 ? 'col-span-2' : ''
        const hasLabels = sectionItems.some(it => it.label)
        return (
          <div key={si}>
            {section.label && (
              <p className="font-mono text-[10px] text-muted2 tracking-[1.6px] uppercase mb-4 pb-3 border-b border-[rgba(13,13,13,0.08)]">
                {section.label}
              </p>
            )}
            <div className={`grid gap-3 ${sCols}`} style={{ ...sStyle, alignItems: hasLabels ? 'end' : 'start' }}>
              {sectionItems.map((item, i) => (
                <div key={i} className={sSpanClass(item)}>
                  {item.label && <LabelChip label={item.label} />}
                  <MediaCell {...item} name={name} index={i} isPaidMedia={isPaidMedia} />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function SubCampaignItem({ campaign }: { campaign: SubProject }) {
  const isPaidMedia = campaign.formats.some(f => f.toLowerCase().includes('paid'))
  const sections = campaign.sections ?? []
  const hasSections = sections.length > 0

  const items = hasSections ? [] : extractBentoItems(campaign)
  const hasImages = items.some(it => it.kind === 'image')

  return (
    <details className="group">
      <summary className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-5 gap-3 lg:gap-0 cursor-pointer list-none select-none">
        <div>
          <p className="font-sans text-[16px] text-dark font-medium leading-[1]">
            {campaign.name}
          </p>
          <p className="font-sans text-[13px] text-muted mt-1.5 leading-[1.5] max-w-[500px]">
            {campaign.objective}
          </p>
        </div>
        <div className="flex items-center gap-4 lg:shrink-0 lg:ml-8">
          <div className="flex flex-wrap gap-1.5">
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
        {hasSections
          ? <SectionsContent sections={sections} name={campaign.name} isPaidMedia={isPaidMedia} />
          : <BentoGrid items={items} name={campaign.name} isPaidMedia={isPaidMedia} contain={hasImages} />
        }
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
  const gridCols = n === 1 ? '' :
    n === 2 ? 'grid-cols-1 sm:grid-cols-2' :
    n === 4 ? 'grid-cols-2' :
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  const style: React.CSSProperties = n === 1
    ? { maxWidth: '380px', margin: '0 auto' }
    : n === 2
    ? { maxWidth: '760px', margin: '0 auto' }
    : {}

  return (
    <div className={`grid gap-3 ${gridCols}`} style={style}>
      {items.map((item, i) => (
        <MediaCell key={i} {...item} name={name} index={i} isPaidMedia={isPaidMedia} contain={contain} />
      ))}
    </div>
  )
}

function NextProject({ currentId, lang }: { currentId: string; lang: 'es' | 'en' }) {
  const idx = projects.findIndex((p) => p.id === currentId)
  const next = projects[(idx + 1) % projects.length]

  return (
    <section className="border-t border-[rgba(13,13,13,0.08)] px-6 lg:px-24 py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <p className="font-mono text-[11px] text-muted2 tracking-[1.76px]">{tr.caso.siguiente[lang]}</p>
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
