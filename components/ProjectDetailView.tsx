'use client'

import React from 'react'
import Image from '@/components/MediaImage'
import Link from '@/components/LocaleLink'
import PageLayout from '@/components/PageLayout'
import CampaignCarousel from '@/components/CampaignCarousel'
import MediaCell from '@/components/MediaCell'
import LazyVideo from '@/components/LazyVideo'
import Viewer from '@/components/Viewer'
import BrandBoard from '@/components/BrandBoard'
import type { Project, SubProject, Section, SectionGroup } from '@/lib/projects'
import projects from '@/lib/project-summaries.json'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'
import { deliveryUrl, mediaAsset, mediaUrl } from '@/lib/media'

function Tags({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`ed-tags ${className}`}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

/** First sentence of a long field, used for the quick-read summary. */
function firstSentence(text: string) {
  let depth = 0
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (c === '«' || c === '“') depth++
    else if (c === '»' || c === '”') depth = Math.max(0, depth - 1)
    else if (c === '"') depth = depth ? 0 : 1
    else if (/[.!?]/.test(c) && depth === 0 && (i + 1 === text.length || /\s/.test(text[i + 1]))) return text.slice(0, i + 1)
  }
  return text
}

/** Opening collage: pieces at their own proportions, overlapped and tilted. */
function CaseCollage({ pieces, name }: { pieces: string[]; name: string }) {
  return (
    <div className="case-collage" data-count={pieces.length}>
      {pieces.map((src, i) => {
        const m = mediaAsset(src)
        return (
          <figure key={src} className={`case-piece case-piece-${i + 1}`}>
            <Image
              src={src}
              alt={i === 0 ? name : ''}
              priority={i === 0}
              width={m?.width}
              height={m?.height}
              sizes={i === 0 ? '(max-width: 1023px) 80vw, 520px' : '(max-width: 1023px) 45vw, 300px'}
            />
          </figure>
        )
      })}
    </div>
  )
}

/** Three key pieces fanned (left, centre, right) over a plate in the brand's colour. */
function CaseFan({ pieces, name, plate }: { pieces: string[]; name: string; plate?: string }) {
  return (
    <div className="case-fan" style={plate ? ({ '--plate': plate } as React.CSSProperties) : undefined}>
      {pieces.map((src, i) => {
        const m = mediaAsset(src)
        return (
          <figure key={src} className="case-fan-piece">
            <Image
              src={src}
              alt={i === 1 ? name : ''}
              priority={i === 1}
              width={m?.width}
              height={m?.height}
              sizes={i === 1 ? '(max-width: 1023px) 50vw, 360px' : '(max-width: 1023px) 34vw, 260px'}
            />
          </figure>
        )
      })}
    </div>
  )
}

export default function ProjectDetailView({ project }: { project: Project }) {
  const { lang } = useLang()
  const c = tr.caso
  const p = project
  // Cover + two more still pieces from the gallery for the opening collage.
  // Dedupe by delivered file: the same picture can live under two names.
  const seen = new Set<string>()
  // Chapters count too, for cases whose work lives only in campaigns.
  const chapterStills = (p.campaigns ?? []).flatMap((cp) =>
    (cp.sections ?? []).flatMap((sec) => (sec.groups ?? []).map((g) => g.items[0])),
  )
  const collage = [p.image, ...p.gallery, ...chapterStills]
    .filter((src) => src && !isVideo(src))
    .filter((src) => {
      const key = mediaUrl(src)
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    .slice(0, 3)

  return (
    <PageLayout>
      {/* Hero: name + one line, beside the key pieces fanned over a plate
          in the brand's colour (the lavender plate of the home, per brand). */}
      <section className="ed-wrap pt-12 lg:pt-16 pb-10 lg:pb-16">
        {/* Where this case lives: back to the list, or straight to its chapter. */}
        <nav className="case-crumbs" aria-label={lang === 'es' ? 'Ruta' : 'Breadcrumb'}>
          <Link href="/proyectos" className="case-crumb case-crumb-back">
            <span aria-hidden="true" className="case-crumb-arrow">
              <svg viewBox="0 0 24 24"><path d="M14 6l-6 6 6 6" /></svg>
            </span>
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </Link>
          <span aria-hidden="true" className="case-crumb-sep">/</span>
          <Link
            href={`/proyectos#${p.agency ? p.agency.toLowerCase().replace(/\s+/g, '-') : 'freelance'}`}
            className="case-crumb"
          >
            {p.agency ?? 'Freelance'}
          </Link>
        </nav>
        <div className="case-hero">
          <div className="case-hero-text">
            {/* A long single word can't wrap, so it steps down a size to clear the fan. */}
            <h1 className={`case-name ${p.name.split(' ').some((w) => w.length > 8) ? 'is-long' : ''}`}>{p.name}</h1>
            <p className="case-line">{p.tagline}</p>
            {p.brand?.palette && (
              <ul className="case-palette" aria-label={lang === 'es' ? 'Paleta de la marca' : 'Brand palette'}>
                {p.brand.palette.map((hex) => (
                  <li key={hex} style={{ background: hex }} title={hex} />
                ))}
              </ul>
            )}
            <dl className="case-facts">
              <div>
                <dt>{p.agency ? (lang === 'es' ? 'Agencia' : 'Agency') : (lang === 'es' ? 'Proyecto' : 'Project')}</dt>
                <dd>{p.agency ?? 'Freelance'}</dd>
              </div>
              <div>
                <dt>{lang === 'es' ? 'Disciplina' : 'Discipline'}</dt>
                <dd>{p.category.split(' · ').map((d) => d.charAt(0) + d.slice(1).toLowerCase()).join(' · ')}</dd>
              </div>
              <div>
                <dt>{lang === 'es' ? 'Año' : 'Year'}</dt>
                <dd>{p.year}</dd>
              </div>
            </dl>
          </div>
          {p.brand?.pieces ? (
            <CaseFan pieces={p.brand.pieces} name={p.name} plate={p.brand.plate} />
          ) : (
            <CaseCollage pieces={collage} name={p.name} />
          )}
        </div>
      </section>

      {/* In short: the case in three quick reads */}
      <section className="ed-wrap pb-20 lg:pb-28">
        <p className="ed-label mb-10">{lang === 'es' ? 'En corto' : 'In short'}</p>
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* Placeholder copy stays hidden until the real text is in. */}
          {!/^(Texto en preparación|Text in progress)\.?$/.test(p.challenge.trim()) && (
            <div>
              <dt className="ed-h3 text-[22px] mb-3">{lang === 'es' ? 'El reto' : 'The challenge'}</dt>
              <dd className="ed-body text-[15px] m-0">{firstSentence(p.challenge)}</dd>
            </div>
          )}
          <div>
            <dt className="ed-h3 text-[22px] mb-3">{lang === 'es' ? 'Lo que hice' : 'What I did'}</dt>
            <dd className="ed-body text-[15px] m-0">{p.role}</dd>
          </div>
          <div>
            <dt className="ed-h3 text-[22px] mb-3">{lang === 'es' ? 'Entregables' : 'Deliverables'}</dt>
            <dd className="m-0">
              <Tags items={p.tags} />
            </dd>
          </div>
        </dl>
      </section>

      {/* The work */}
      {p.gallery.length > 0 && (
        <section className="ed-wrap pb-20 lg:pb-28">
          <div className="columns-1 lg:columns-2 gap-6">
            {p.gallery.map((src, i) => (
              <div key={i} className="break-inside-avoid mb-6">
                <GalleryItem src={src} alt={`${p.name} ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Campaigns / Sub-projects */}
      {p.campaigns && p.campaigns.length > 0 && (
        <section className="case-chapters">
          <div className="ed-wrap ed-section pt-0">
            <h2 className="sr-only">{p.campaignsLabel ?? c.campanas[lang]}</h2>
            <div className="space-y-24 lg:space-y-32">
              {p.campaigns.map((campaign, i) => (
                <CampaignBlock key={i} campaign={campaign} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related cases: same agency first, then same discipline */}
      <RelatedProjects currentId={project.id} lang={lang} />
    </PageLayout>
  )
}

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return <LazyVideo src={src} className="w-full" />
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 700px"
      style={{ width: '100%', height: 'auto' }}
    />
  )
}

type BentoItem =
  | {
      kind: 'video-carousel'
      sources: string[]
      contain?: boolean
      wide?: boolean
      span?: number
      label?: string
      versions?: { label: string; items: string[] }[]
    }
  | {
      kind: 'image-carousel'
      sources: string[]
      contain?: boolean
      wide?: boolean
      span?: number
      label?: string
      versions?: { label: string; items: string[] }[]
    }
  | {
      kind: 'video'
      src: string
      contain?: boolean
      wide?: boolean
      span?: number
      label?: string
      versions?: { label: string; items: string[] }[]
    }
  | {
      kind: 'image'
      src: string
      contain?: boolean
      wide?: boolean
      span?: number
      label?: string
      versions?: { label: string; items: string[] }[]
    }

function LabelChip({ label }: { label: string }) {
  const isAfter =
    label.toLowerCase().includes('después') ||
    label.toLowerCase().includes('after')
  return (
    <p className={`ed-label mb-3 ${isAfter ? 'text-[#151514] font-semibold' : ''}`}>
      {label}
    </p>
  )
}

const isVideo = (s: string) => s.endsWith('.mp4') || s.endsWith('.webm')

function SplitGroupContent({
  group,
  name,
  isPaidMedia,
}: {
  group: SectionGroup
  name: string
  isPaidMedia: boolean
}) {
  if (group.carousel) {
    const hasVideo = group.items.some(isVideo)
    const it: BentoItem = {
      kind: hasVideo ? 'video-carousel' : 'image-carousel',
      sources: group.items,
    }
    return <MediaCell {...it} name={name} index={0} isPaidMedia={isPaidMedia} />
  }
  return (
    <div className="space-y-3">
      {group.items.map((src, ii) => {
        const it: BentoItem = isVideo(src)
          ? { kind: 'video', src }
          : { kind: 'image', src }
        return (
          <MediaCell
            key={ii}
            {...it}
            name={name}
            index={ii}
            isPaidMedia={isPaidMedia}
          />
        )
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
        out.push({
          kind: hasVideo ? 'video-carousel' : 'image-carousel',
          sources: group.items,
          contain: group.contain,
          wide: group.wide,
          span: group.span,
          label: group.label,
        })
      } else {
        for (const src of group.items) {
          out.push(
            isVideo(src)
              ? {
                  kind: 'video',
                  src,
                  wide: group.wide,
                  contain: group.contain,
                  span: group.span,
                  label: group.label,
                }
              : {
                  kind: 'image',
                  src,
                  wide: group.wide,
                  contain: group.contain,
                  span: group.span,
                  label: group.label,
                },
          )
        }
      }
    }
  } else if (section.type === 'carousel') {
    const hasVideo = section.items!.some(isVideo)
    out.push({
      kind: hasVideo ? 'video-carousel' : 'image-carousel',
      sources: section.items!,
    })
  } else {
    for (const src of section.items ?? []) {
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
          out.push({
            kind: hasVideo ? 'video-carousel' : 'image-carousel',
            sources: group.items,
            contain: group.contain,
            wide: group.wide,
            span: group.span,
            versions: group.versions,
          })
        } else {
          for (const src of group.items) {
            out.push(
              isVideo(src)
                ? {
                    kind: 'video',
                    src,
                    wide: group.wide,
                    contain: group.contain,
                    span: group.span,
                    versions: group.versions,
                  }
                : {
                    kind: 'image',
                    src,
                    wide: group.wide,
                    contain: group.contain,
                    span: group.span,
                    versions: group.versions,
                  },
            )
          }
        }
      }
    } else if (section.type === 'carousel') {
      const hasVideo = section.items!.some(isVideo)
      out.push({
        kind: hasVideo ? 'video-carousel' : 'image-carousel',
        sources: section.items!,
      })
    } else {
      for (const src of section.items ?? []) {
        out.push(isVideo(src) ? { kind: 'video', src } : { kind: 'image', src })
      }
    }
  }
  return out
}

/** Chapter header: number and condensed title on the left; what it is and its
 *  formats on the right, both sitting on the same baseline. */
function CampaignHead({
  campaign,
  index,
  toggle,
  showFormats = true,
}: {
  campaign: SubProject
  index?: number
  toggle?: boolean
  showFormats?: boolean
}) {
  return (
    <div className="chapter-case-head">
      <div className="flex items-end justify-between gap-6">
        <h3 className="chapter-case-title">
          {index !== undefined && (
            <span className="chapter-case-num">{String(index + 1).padStart(2, '0')}</span>
          )}
          {campaign.name}
        </h3>
        {toggle && (
          <span
            aria-hidden="true"
            className="font-mono text-[14px] text-[#73509e] shrink-0 inline-flex items-center justify-center min-w-11 min-h-11 transition-transform duration-200 group-open:rotate-180"
          >
            ↓
          </span>
        )}
      </div>
      <div className="chapter-case-note">
        <p>{campaign.objective}</p>
        {showFormats && campaign.formats.length > 0 && <Tags items={campaign.formats} className="mt-3" />}
      </div>
    </div>
  )
}

function CampaignBlock({ campaign, index }: { campaign: SubProject; index?: number }) {
  // Parent campaign with sub-campaigns: accordion layout
  if (campaign.subCampaigns && campaign.subCampaigns.length > 0) {
    const asCards = campaign.subCampaigns.every((sub) => requestKind(sub) !== null)
    const subList = asCards ? (
      <div className="request-grid">
        {campaign.subCampaigns.map((sub, i) => (
          <RequestCard key={i} campaign={sub} ar={Math.max(...campaign.subCampaigns!.map(pileRatio))} />
        ))}
      </div>
    ) : (
      <div className="space-y-4">
        {campaign.subCampaigns.map((sub, i) => (
          <SubCampaignItem key={i} campaign={sub} />
        ))}
      </div>
    )
    if (campaign.collapsible) {
      return (
        <details className="group">
          <summary className="cursor-pointer list-none select-none">
            <CampaignHead index={index} campaign={campaign} toggle />
          </summary>
          <div className="pt-12">{subList}</div>
        </details>
      )
    }
    return (
      <div>
        <CampaignHead index={index} campaign={campaign} showFormats={false} />
        <div className={asCards ? 'mt-16 lg:mt-24' : 'mt-10'}>{subList}</div>
      </div>
    )
  }

  const isPaidMedia = campaign.formats.some((f) =>
    f.toLowerCase().includes('paid'),
  )
  const sections = campaign.sections ?? []

  const campaignHeader = (
    <div className="mb-12">
      <CampaignHead index={index} campaign={campaign} />
    </div>
  )

  // Photos of mixed proportions: one justified puzzle, every piece whole.
  if (campaign.puzzle) {
    const srcs = sections.flatMap((sec) => (sec.groups ?? []).flatMap((g) => g.items))
    return (
      <div>
        {campaignHeader}
        <PuzzleRows srcs={srcs} name={campaign.name} />
      </div>
    )
  }

  // Multi-section or single split section: renders with per-section layout logic
  if (sections.length > 1 || (sections.length === 1 && sections[0].split)) {
    if (campaign.collapsible) {
      return (
        <details className="group">
          <summary className="cursor-pointer list-none select-none">
            <CampaignHead index={index} campaign={campaign} toggle />
          </summary>
          <div className="pt-12">
            <SectionsContent
              sections={sections}
              name={campaign.name}
              isPaidMedia={isPaidMedia}
            />
          </div>
        </details>
      )
    }
    return (
      <div>
        {campaignHeader}
        <SectionsContent
          sections={sections}
          name={campaign.name}
          isPaidMedia={isPaidMedia}
        />
      </div>
    )
  }

  // Single-section: existing flat grid layout
  const items = extractBentoItems(campaign)
  const n = items.length
  const hasWide = items.some((it) => it.wide || (it.span && it.span > 1))
  const gridCols = hasWide
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : n === 1
      ? ''
      : n === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : n === 4 || n === 8
          ? 'grid-cols-2 lg:grid-cols-4' // fours read as full rows (no gap left in a row of three)
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  const gridStyle: React.CSSProperties =
    n === 1
      ? { maxWidth: '380px', margin: '0 auto' }
      : n === 2
        ? { maxWidth: '760px', margin: '0 auto' }
        : {}

  const spanClass = (item: BentoItem) => {
    if (item.wide) return 'col-span-full'
    if (item.span === 2) return 'sm:col-span-2'
    return ''
  }

  return (
    <div>
      {campaignHeader}
      <div className={`grid gap-5 items-start ${gridCols}`} style={gridStyle}>
        {items.map((item, i) => (
          <div key={i} className={spanClass(item)}>
            <MediaCell
              {...item}
              name={campaign.name}
              index={i}
              isPaidMedia={isPaidMedia}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Justified rows: the photos are split into rows with similar total width
 * (number of rows from a target height), and each row is scaled to fill the
 * container exactly. Every piece keeps its proportion and every row, the last
 * one too, ends flush. Click enlarges.
 */
function PuzzleRows({ srcs, name }: { srcs: string[]; name: string }) {
  const [open, setOpen] = React.useState<number | null>(null)
  const box = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const ratios = srcs.map((src) => {
    const m = mediaAsset(src)
    return m?.width && m?.height ? m.width / m.height : 0.75
  })
  // Before the first measure (server HTML) rows are cut for a desktop width;
  // CSS sizes them, so they render without waiting for JavaScript.
  const w = width || 1200
  const gap = w < 768 ? 8 : 16
  const target = w < 768 ? 160 : Math.min(380, Math.max(240, w * 0.24))
  // Split into k rows of roughly equal summed ratio, keeping the order.
  const rows: number[][] = []
  {
    const total = ratios.reduce((a, r) => a + r, 0)
    const k = Math.max(1, Math.round((total * target) / w))
    const per = total / k
    let row: number[] = []
    let sum = 0
    ratios.forEach((r, i) => {
      if (row.length && sum + r / 2 > per && rows.length < k - 1) {
        rows.push(row)
        row = []
        sum = 0
      }
      row.push(i)
      sum += r
    })
    if (row.length) rows.push(row)
  }
  return (
    <>
      <div ref={box} className="photo-puzzle">
        {rows.map((row, ri) => {
          // Each piece grows by its ratio and keeps it: the row fills the
          // width and every piece in it ends up the same height.
          const sum = row.reduce((a, i) => a + ratios[i], 0)
          const h = (w - gap * (row.length - 1)) / sum
          return (
            <div key={ri} className="photo-puzzle-row" style={{ gap }}>
              {row.map((i) => (
                <button
                  key={srcs[i]}
                  type="button"
                  className="photo-puzzle-item"
                  style={{ flex: `${ratios[i]} 1 0`, aspectRatio: String(ratios[i]) }}
                  onClick={() => setOpen(i)}
                  aria-label={`${name} · ${i + 1}`}
                >
                  {isVideo(srcs[i]) ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {mediaAsset(srcs[i])?.poster && <img src={deliveryUrl(mediaAsset(srcs[i])!.poster!)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
                      <span className="board-play" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg>
                      </span>
                    </>
                  ) : (
                    <Image src={srcs[i]} alt="" fill sizes={`${Math.round(h * ratios[i])}px`} className="object-cover" />
                  )}
                </button>
              ))}
            </div>
          )
        })}
      </div>
      {open !== null && (
        <Viewer title={name} start={open} items={srcs.map((src) => ({ src }))} onClose={() => setOpen(null)} />
      )}
    </>
  )
}

function SectionsContent({
  sections,
  name,
  isPaidMedia,
}: {
  sections: Section[]
  name: string
  isPaidMedia: boolean
}) {
  return (
    <div className="space-y-16 lg:space-y-20">
      {sections.map((section, si) => {
        if (section.split && section.groups && section.groups.length >= 2) {
          const [leftGroup, rightGroup] = section.groups
          const isAfterLabel = (lbl?: string) =>
            lbl?.toLowerCase().includes('después') ||
            lbl?.toLowerCase().includes('after')
          const ColHeader = ({ group }: { group: typeof leftGroup }) => {
            const after = isAfterLabel(group.label)
            return (
              <p
                className={`ed-label mb-4 ${after ? 'text-[#151514] font-semibold' : ''}`}
              >
                {group.label}
              </p>
            )
          }
          return (
            <div key={si}>
              {section.label && (
                <p className="ed-label mb-6">
                  {section.label}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 lg:gap-x-16">
                <div>
                  {leftGroup.label && <ColHeader group={leftGroup} />}
                  <SplitGroupContent
                    group={leftGroup}
                    name={name}
                    isPaidMedia={isPaidMedia}
                  />
                </div>
                <div>
                  {rightGroup.label && <ColHeader group={rightGroup} />}
                  <SplitGroupContent
                    group={rightGroup}
                    name={name}
                    isPaidMedia={isPaidMedia}
                  />
                </div>
              </div>
            </div>
          )
        }
        const sectionItems = extractSectionItems(section)
        const sn = sectionItems.length
        const sHasWide = sectionItems.some(
          (it) => it.wide || (it.span && it.span > 1),
        )
        const sCols = sHasWide
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : sn === 1
            ? ''
            : sn === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : sn === 4 || sn === 8
                ? 'grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        const sStyle: React.CSSProperties =
          sn === 1
            ? { maxWidth: '560px', margin: '0 auto' }
            : sn === 2
              ? { maxWidth: '760px', margin: '0 auto' }
              : {}
        const sSpanClass = (item: BentoItem) =>
          item.wide ? 'col-span-full' : item.span === 2 ? 'sm:col-span-2' : ''
        const hasLabels = sectionItems.some((it) => it.label)
        return (
          <div key={si}>
            {section.label && (
              <p className="ed-label mb-6">
                {section.label}
              </p>
            )}
            <div
              className={`grid gap-5 ${sCols}`}
              style={{ ...sStyle, alignItems: hasLabels ? 'end' : 'start' }}
            >
              {sectionItems.map((item, i) => (
                <div key={i} className={sSpanClass(item)}>
                  {item.label && <LabelChip label={item.label} />}
                  <MediaCell
                    {...item}
                    name={name}
                    index={i}
                    isPaidMedia={isPaidMedia}
                  />
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
  const isPaidMedia = campaign.formats.some((f) =>
    f.toLowerCase().includes('paid'),
  )
  const sections = campaign.sections ?? []
  const hasSections = sections.length > 0

  const items = hasSections ? [] : extractBentoItems(campaign)
  const hasImages = items.some((it) => it.kind === 'image')

  // Shown open: the work comes first, nothing to unfold.
  return (
    <div>
      <div className="py-4">
        <p className="ed-h3">{campaign.name}</p>
        <p className="ed-body text-[15px] mt-2 max-w-[56ch]">
          {campaign.objective}
        </p>
        <Tags items={campaign.formats} className="mt-3" />
      </div>
      <div className="pb-12 pt-6">
        {hasSections ? (
          <SectionsContent
            sections={sections}
            name={campaign.name}
            isPaidMedia={isPaidMedia}
          />
        ) : (
          <BentoGrid
            items={items}
            name={campaign.name}
            isPaidMedia={isPaidMedia}
            contain={hasImages}
          />
        )}
      </div>
    </div>
  )
}

/** A request that reads as a card: several formats of one design, or one video. */
function requestKind(c: SubProject): 'formats' | 'video' | 'set' | null {
  if (c.gallery.length > 1 && c.formats.length === c.gallery.length && !c.gallery.some(isVideo)) return 'formats'
  const groups = (c.sections ?? []).flatMap((sec) => sec.groups ?? [])
  const items = groups.flatMap((g) => g.items)
  if (items.length === 1 && isVideo(items[0])) return 'video'
  // A brand's whole body of work (posts, carousels, reels) shown as one pile.
  if (c.pile && groups.length >= 1) return 'set'
  return null
}

/** Sum of width/height of the upright pieces a pile shows (sizes the fan). */
function pileRatio(c: SubProject) {
  const kind = requestKind(c)
  const srcs =
    kind === 'formats'
      ? c.gallery
      : kind === 'set'
        ? (c.sections ?? []).flatMap((sec) => sec.groups ?? []).map((g) => g.items[0]).slice(0, 5)
        : []
  return srcs.reduce((sum, src) => {
    const m = mediaAsset(src)
    const r = m?.width && m?.height ? m.width / m.height : 0.75
    return r > 1 ? sum : sum + r
  }, 0)
}

/**
 * One request as a small pile, in the same language as the case opening: the
 * upright formats fanned, the screen formats leaning in front. It opens a bit
 * on hover; any piece enlarges on click. Name and formats sit underneath.
 */
function RequestCard({ campaign, ar }: { campaign: SubProject; ar?: number }) {
  const kind = requestKind(campaign)
  const { lang } = useLang()
  const [open, setOpen] = React.useState<number | null>(null)
  // In a set, every group (post, carousel, reel) opens the viewer at its first piece.
  const groups = (campaign.sections ?? []).flatMap((sec) => sec.groups ?? [])
  // Where each group starts in the brand's run of pieces (opens the board).
  const groupStart = (gi: number) =>
    groups.slice(0, gi).reduce((n, g) => n + (g.versions && g.versions.length > 1 ? g.versions[0].items.length : g.items.length), 0)
  const piece = (p: { src: string; i: number }) => {
    const poster = isVideo(p.src) ? mediaAsset(p.src)?.poster : undefined
    return (
      <button
        type="button"
        className="pile-open"
        onClick={() => setOpen(p.i)}
        aria-label={`${lang === 'es' ? 'Ver' : 'View'} ${campaign.name}${kind === 'formats' ? ` · ${campaign.formats[p.i]}` : ''}`}
      >
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={deliveryUrl(poster)} width={mediaAsset(p.src)?.width} height={mediaAsset(p.src)?.height} alt="" loading="lazy" />
        ) : (
          <Image src={p.src} alt="" sizes="(max-width: 1023px) 40vw, 220px" />
        )}
      </button>
    )
  }
  let visual: React.ReactNode = null
  if (kind === 'formats' || kind === 'set') {
    const parts = (kind === 'formats'
      ? campaign.gallery.map((src, i) => ({ src, i }))
      : groups.map((g, gi) => ({ src: g.items[0], i: groupStart(gi) })).slice(0, 5)
    ).map(({ src, i }) => {
      const m = mediaAsset(src)
      return { src, i, wide: (m?.width ?? 4) > (m?.height ?? 5) }
    })
    const upright = parts.filter((p) => !p.wide)
    const screens = parts.filter((p) => p.wide)
    visual = (
      <div
        className="pile"
        style={{
          '--n': upright.length,
          // One ratio for every pile in the row (the widest one), so all pieces share a height.
          '--ar': Math.max(1, ar ?? pileRatio(campaign)).toFixed(2),
        } as React.CSSProperties}
      >
        <div className="pile-fan">
          {upright.map((p) => (
            <div key={p.src} className="pile-piece">{piece(p)}</div>
          ))}
        </div>
        {screens.length > 0 && (
          <div className="pile-front">
            {screens.map((p) => (
              <div key={p.src} className="pile-piece">{piece(p)}</div>
            ))}
          </div>
        )}
      </div>
    )
  } else if (kind === 'video') {
    const src = (campaign.sections ?? []).flatMap((sec) => sec.groups ?? [])[0].items[0]
    visual = (
      <div className="pile pile-video">
        <LazyVideo src={src} className="w-full h-auto" />
      </div>
    )
  }
  return (
    <article className="request-card">
      {visual}
      <h4 className="request-name">{campaign.name}</h4>
      <p className="request-note">{campaign.objective}</p>
      <Tags items={campaign.formats} className="mt-3" />
      {open !== null && kind === 'formats' && (
        <Viewer
          title={campaign.name}
          start={open}
          items={campaign.gallery.map((src, i) => ({ src, caption: campaign.formats[i] }))}
          onClose={() => setOpen(null)}
        />
      )}
      {/* A brand's set opens as a board: everything at a glance, no clicking through. */}
      {open !== null && kind === 'set' && (
        <BrandBoard
          title={campaign.name}
          note={campaign.objective}
          groups={groups.map((g) => ({
            items:
              g.versions && g.versions.length > 1
                ? g.versions[0].items.map((src, j) => ({ src, versions: g.versions!.map((v) => ({ label: v.label, src: v.items[j] ?? v.items[0] })) }))
                : g.items.map((src) => ({ src })),
          }))}
          onClose={() => setOpen(null)}
        />
      )}
    </article>
  )
}

function BentoGrid({
  items,
  name,
  isPaidMedia,
  contain,
}: {
  items: ReturnType<typeof extractBentoItems>
  name: string
  isPaidMedia: boolean
  contain: boolean
}) {
  const n = items.length
  const hasImages = items.some((it) => it.kind === 'image')

  if (hasImages && n >= 3) {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {items.map((item, i) => (
          <div key={i} className="break-inside-avoid mb-6">
            <MediaCell
              {...item}
              name={name}
              index={i}
              isPaidMedia={isPaidMedia}
              natural
            />
          </div>
        ))}
      </div>
    )
  }

  // Videos or small sets: uniform aspect-[4/5] grid
  const gridCols =
    n === 1
      ? ''
      : n === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : n === 4
          ? 'grid-cols-2'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  const style: React.CSSProperties =
    n === 1
      ? { maxWidth: '380px', margin: '0 auto' }
      : n === 2
        ? { maxWidth: '760px', margin: '0 auto' }
        : {}

  return (
    <div className={`grid gap-5 ${gridCols}`} style={style}>
      {items.map((item, i) => (
        <MediaCell
          key={i}
          {...item}
          name={name}
          index={i}
          isPaidMedia={isPaidMedia}
          contain={contain}
        />
      ))}
    </div>
  )
}

/** Three related cases (same agency first, then same discipline), each a small
 *  cover leaning on its brand plate with its name in the condensed type. */
function RelatedProjects({ currentId, lang }: { currentId: string; lang: 'es' | 'en' }) {
  type Summary = (typeof projects)[number] & { plate?: string; agency?: string }
  const all = projects as Summary[]
  const me = all.find((p) => p.id === currentId)
  if (!me) return null
  const first = (c: string) => c.split(' · ')[0]
  const others = all.filter((p) => p.id !== currentId && p.id !== 'ai-creative')
  const picked = [
    ...others.filter((p) => me.agency && p.agency === me.agency),
    ...others.filter((p) => !(me.agency && p.agency === me.agency) && first(p.category) === first(me.category)),
    ...others,
  ].filter((p, i, list) => list.findIndex((q) => q.id === p.id) === i).slice(0, 3)
  const label = me.agency
    ? (lang === 'es' ? `Más con ${me.agency}` : `More with ${me.agency}`)
    : lang === 'es' ? 'Proyectos relacionados' : 'Related projects'
  return (
    <section className="related-band" aria-labelledby="related-title">
      <div className="ed-wrap related-wrap">
      <h2 id="related-title" className="ed-label">{label}</h2>
      <ul className="related">
        {picked.map((p) => (
          <li key={p.id}>
            <Link href={`/proyectos/${p.id}`} className="related-card">
              <span className="related-media" style={p.plate ? ({ '--plate': p.plate } as React.CSSProperties) : undefined}>
                <Image src={p.image} alt="" sizes="(max-width: 767px) 40vw, 220px" />
              </span>
              <span className="related-name">
                {p.name} <span aria-hidden="true" className="related-arrow">⟶</span>
              </span>
              <span className="related-line">{lang === 'en' ? p.taglineEN : p.tagline}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Way out to the whole portfolio, so nobody has to go back step by step. */}
      <p className="related-more">
        <Link href="/proyectos" className="area-more">
          <span className="area-more-text">{lang === 'es' ? 'Ver todos los proyectos' : 'See all projects'}</span>
          <span className="area-more-arrow" aria-hidden="true">⟶</span>
        </Link>
      </p>
      </div>
    </section>
  )
}
