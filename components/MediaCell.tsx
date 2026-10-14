'use client'
import { useRef, useState } from 'react'
import Image from './MediaImage'
import CampaignCarousel from './CampaignCarousel'
import LazyVideo from './LazyVideo'
import Viewer from './Viewer'
import { useLang } from '@/lib/lang-context'
import { mediaAsset } from '@/lib/media'
type Item =
  | { kind: 'video-carousel' | 'image-carousel'; sources: string[] }
  | { kind: 'video' | 'image'; src: string }
type Props = Item & {
  name: string
  index: number
  isPaidMedia?: boolean
  contain?: boolean
  natural?: boolean
  wide?: boolean
  versions?: { label: string; items: string[] }[]
}
export default function MediaCell(props: Props) {
  const trigger = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [v, setV] = useState(0)
  const { lang } = useLang()
  // A piece with translations shows the chosen language; the switch swaps it.
  const version = props.versions?.[v]
  const sources = version ? version.items : 'sources' in props ? props.sources : [props.src]
  const isCarousel = 'sources' in props
  // A square or landscape piece (a logo, a manual spread) keeps its own proportion
  // instead of being cropped into the 4:5 cell.
  const m = props.kind !== 'video' ? mediaAsset(sources[0]) : undefined
  const ratio = m?.width && m?.height ? m.width / m.height : 0
  const landscape = !props.wide && !props.natural && ratio > 0.95
  const content = (modal = false) =>
    isCarousel ? (
      <CampaignCarousel
        key={v}
        gallery={sources}
        name={props.name}
        fill={!modal}
        contain={props.contain || modal}
      />
    ) : props.kind === 'video' ? (
      <LazyVideo key={v} src={sources[0]} className="w-full h-full object-contain" />
    ) : (
      <Image
        key={v}
        src={sources[0]}
        alt={`${props.name} · ${props.index + 1}`}
        fill={!props.natural && !modal}
        sizes={
          modal
            ? '90vw'
            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        }
        className={
          modal
            ? 'max-h-[78vh] w-auto max-w-full object-contain'
            : props.contain
              ? 'object-contain w-full'
              : 'object-cover w-full'
        }
        style={props.natural ? { height: 'auto' } : undefined}
      />
    )
  // Videos play in place; stills and carousels enlarge on click. No visible
  // label: the button only shows itself on keyboard focus.
  const enlargeable = props.kind !== 'video'
  return (
    <div className="relative">
      <div
        className={`relative overflow-hidden bg-black/[0.025] ${enlargeable ? 'cursor-zoom-in' : ''} ${props.wide ? 'aspect-[16/7]' : landscape ? '' : props.natural && !isCarousel ? '' : 'aspect-[4/5]'}`}
        style={landscape ? { aspectRatio: String(ratio) } : undefined}
        onClick={enlargeable ? () => setOpen(true) : undefined}
      >
        <div key={v} className={props.versions ? 'lang-fade h-full' : 'contents'}>
          {content()}
        </div>
      </div>
      {props.versions && props.versions.length > 1 && (
        <div className="lang-switch" role="group" aria-label={lang === 'es' ? 'Idioma de la pieza' : 'Piece language'}>
          {props.versions.map((ver, i) => (
            <span key={ver.label} className="contents">
              {i > 0 && <span aria-hidden="true">/</span>}
              <button type="button" aria-pressed={i === v} onClick={() => setV(i)} lang={/[\u4e00-\u9fff]/.test(ver.label) ? 'zh' : 'en'}>
                {ver.label}
              </button>
            </span>
          ))}
        </div>
      )}
      {enlargeable && (
        <button
          ref={trigger}
          type="button"
          onClick={() => setOpen(true)}
          className="sr-only focus-visible:not-sr-only focus-visible:mt-1 focus-visible:min-h-11 font-mono text-[11px] uppercase tracking-[.045em] text-[#73509e]"
        >
          {lang === 'es' ? 'Ampliar' : 'Enlarge'} {props.name} {props.index + 1}
        </button>
      )}
      {open && (
        <Viewer
          title={props.name}
          items={sources.map((src) => ({ src, caption: version?.label }))}
          onClose={() => {
            setOpen(false)
            trigger.current?.focus()
          }}
        />
      )}
    </div>
  )
}
