'use client'

import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const EMAIL = 'kimberly.tapiaj@gmail.com'

/** Single closing: "Hablemos.", the email as the main action and a hand-written
 *  sign-off that echoes the hero's "Soy Kim.". */
export default function CTABand() {
  const { lang } = useLang()
  const c = tr.cta

  return (
    <section id="contacto" className="ed-section close" aria-labelledby="close-title">
      <div className="ed-wrap text-center">
        <p className="ed-label mb-8">{c.eyebrow[lang]}</p>
        <h2 id="close-title" className="ed-title close-title">
          {c.title[lang]}
        </h2>
        <p className="close-mail">
          <a
            href={`mailto:${EMAIL}?subject=${lang === 'es' ? 'Conversaci%C3%B3n%20profesional' : 'Professional%20conversation'}`}
            className="area-more"
          >
            <span className="area-more-text">{EMAIL}</span>
            <span className="area-more-arrow" aria-hidden="true">⟶</span>
          </a>
        </p>
        <span className="close-sign" aria-hidden="true">
          {c.sign[lang]}
        </span>
      </div>
    </section>
  )
}
