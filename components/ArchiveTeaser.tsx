'use client'
import Link from './LocaleLink'
import Image from './MediaImage'
import { useLang } from '@/lib/lang-context'

/** Home CTA to the archive: a dark band where a reel of real pieces drifts by,
 *  blurred and dim behind the title; on hover the blur lifts a little, as if
 *  peeking inside. The whole band links to /archivo. */
export default function ArchiveTeaser({ pieces, total }: { pieces: string[]; total: number }) {
  const { lang } = useLang()
  const TILT = [-3, 2, -1.5, 3, -2.5, 1.5, -2]
  const reel = (copy: number) =>
    pieces.map((src, i) => (
      <span
        key={`${copy}-${src}`}
        className="reel-piece"
        style={{ '--tilt': `${TILT[i % TILT.length]}deg`, '--lift': `${((i * 37) % 5) * 14 - 28}px` } as React.CSSProperties}
      >
        <Image src={src} alt="" sizes="200px" />
      </span>
    ))

  return (
    <Link
      href="/archivo"
      className="reel"
      aria-label={
        lang === 'es'
          ? `Explorar el archivo: todo mi trabajo, ${total} piezas`
          : `Explore the archive: all my work, ${total} pieces`
      }
    >
      <span className="reel-track" aria-hidden="true">
        <span className="reel-row">{reel(0)}</span>
        <span className="reel-row">{reel(1)}</span>
      </span>
      <span className="reel-head">
        <span className="ed-label">
          {lang === 'es' ? 'ARCHIVO' : 'ARCHIVE'}
        </span>
        <span className="ed-title reel-title">
          {lang === 'es' ? 'Todo mi' : 'All my'} <strong>{lang === 'es' ? 'trabajo.' : 'work.'}</strong>
        </span>
        <span className="area-more reel-link">
          <span className="area-more-text">{lang === 'es' ? 'Explorar el archivo' : 'Explore the archive'}</span>
          <span className="area-more-arrow" aria-hidden="true">⟶</span>
        </span>
      </span>
    </Link>
  )
}
