'use client'
import { useState } from 'react'
import Link from './LocaleLink'
import Image from './MediaImage'
import projects from '@/lib/project-summaries.json'
import { workAreas } from '@/lib/home-selection'
import { useLang } from '@/lib/lang-context'
import { caseHref } from '@/lib/locale'

type Area = (typeof workAreas)[number]

/**
 * One area: big condensed title, then a horizontal row of pieces on one
 * baseline, all small and grey at rest. Hovering or focusing a piece makes it
 * active: it widens, takes colour and shows its hand-written name below it.
 */
function AreaRow({ area }: { area: Area }) {
  const { lang } = useLang()
  // No piece is active until the pointer (or keyboard focus) is on one.
  const [front, setFront] = useState<number | null>(null)
  const items = area.pieces
    .map((piece) => {
      const p = projects.find((x) => x.id === piece.id)
      return p && { id: p.id, name: piece.label ?? p.name, image: piece.image ?? p.image }
    })
    .filter((p): p is { id: string; name: string; image: string } => Boolean(p))

  return (
    <article className="area" aria-labelledby={`area-${area.key}`}>
      <div className="ed-wrap">
        <h3 id={`area-${area.key}`} className="area-title">
          {area.title[lang]}
        </h3>

        <ul
          className="row-pieces"
          data-count={items.length}
          onMouseLeave={() => setFront(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setFront(null)
          }}
        >
          {items.map((p, i) => (
            <li key={p.image} className="row-piece" data-active={i === front ? 'true' : undefined}>
              <Link
                href={caseHref(p.id)}
                className="row-link"
                aria-current={i === front ? 'true' : undefined}
                onMouseEnter={() => setFront(i)}
                onFocus={() => setFront(i)}
              >
                <span className="row-media">
                  <Image src={p.image} alt="" sizes="(max-width: 1023px) 70vw, 360px" />
                </span>
                <span className={i === front ? 'row-sign' : 'sr-only'}>{p.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="row-note">
          <Link href={area.more.href} className="area-more">
            <span className="area-more-text">{area.more.label[lang]}</span>
            <span className="area-more-arrow" aria-hidden="true">⟶</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

/** Home "Lo que hago": three areas, one after another. */
export default function WorkByArea() {
  const { lang } = useLang()
  return (
    <section id="portafolio" className="scene-section" aria-labelledby="areas-title">
      <div className="ed-wrap text-center">
        <h2 id="areas-title" className="ed-title text-[clamp(44px,5.6vw,80px)]">
          {lang === 'es' ? 'Lo que' : 'What I'} <strong>{lang === 'es' ? 'hago.' : 'do.'}</strong>
        </h2>
      </div>
      {workAreas.map((area) => (
        <AreaRow key={area.key} area={area} />
      ))}
    </section>
  )
}
