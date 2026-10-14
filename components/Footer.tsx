'use client'

import Link from '@/components/LocaleLink'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const navHrefs = ['/', '/proyectos', '/archivo', '/ia', '/sobre-mi']
const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/kymsul/' },
  { label: 'Behance', href: 'https://www.behance.net/kimberlytapia2' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kimberly-tapia-rubio-39a35828a/' },
]

/** Minimal one-line footer: credit and place, inline navigation, social. */
export default function Footer() {
  const { lang } = useLang()
  const f = tr.footer
  const extra = [{ label: lang === 'es' ? 'Contacto' : 'Contact', href: '/#contacto' }]
  const nav = [...f.links[lang].map((label, i) => ({ label, href: navHrefs[i] })), ...extra]

  return (
    <footer className="site-footer">
      <div className="ed-wrap site-footer-row">
        <p className="ed-label">© 2026 Kymsul · Puebla, MX</p>
        <nav aria-label={f.navLabel[lang]}>
          <ul className="site-footer-links">
            {nav.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="site-footer-links">
          {social.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
