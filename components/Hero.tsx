'use client'

import Link from './LocaleLink'
import Image from './MediaImage'
import FeaturedCarousel from './FeaturedCarousel'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

// Proposal A, "punto medio" layout chosen by Kimberly on 10 Oct 2026.
export default function Hero() {
  const { lang } = useLang()
  const h = tr.hero

  return (
    <section className="hero-a" aria-labelledby="hero-title">
      <p className="hero-mono hero-eyebrow">{h.eyebrow[lang]}</p>
      <h1 id="hero-title" className="hero-name">
        {h.name[lang]}
      </h1>
      <div className="hero-composition">
        <figure className="hero-portrait">
          <Image
            src="/assets/kym-foto.jpg"
            alt={h.portraitAlt[lang]}
            priority
            sizes="(max-width: 600px) 76vw, (max-width: 1023px) 55vw, 480px"
          />
          <figcaption className="hero-signature" lang={lang}>
            {h.signature[lang]}
          </figcaption>
        </figure>

        <div className="hero-bio">
          <h2>{h.lead[lang]}</h2>
          <Link href="/sobre-mi" className="hero-text-link">
            {h.story[lang]} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <FeaturedCarousel />
      </div>
    </section>
  )
}
