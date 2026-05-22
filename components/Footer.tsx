'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const navHrefs = ['/', '/proyectos', '/ia', '/sobre-mi']

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kymsul/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/kimberlytapia2',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11.25c.69 0 1.25-.56 1.25-1.25S8.19 8.75 7.5 8.75H5v2.5h2.5zm.5 1.5H5v2.75h3c.76 0 1.375-.615 1.375-1.375S8.76 12.75 8 12.75zM22 9h-5.5v1h5.5V9zM3 7H9c1.38 0 2.5 1.12 2.5 2.5 0 .9-.48 1.69-1.2 2.13.97.4 1.7 1.35 1.7 2.37C12 15.76 10.76 17 9.25 17H3V7zm13.25 1.75c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75c1.5 0 2.8-.88 3.4-2.17h-1.77c-.35.47-.9.79-1.63.79-1.03 0-1.88-.74-2.08-1.71h5.6c.04-.22.06-.44.06-.66 0-2.07-1.68-3.75-3.75-3.75zm-2.08 3c.2-.97 1.05-1.71 2.08-1.71 1.03 0 1.88.74 2.08 1.71h-4.16z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kimberly-tapia-rubio-39a35828a/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const { lang } = useLang()
  const f = tr.footer
  const navLinks = f.links[lang]

  return (
    <footer className="bg-bg border-t border-[rgba(13,13,13,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-8 lg:pt-14 pb-0">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Brand block */}
          <div className="flex-1">
            <p
              className="text-[clamp(30px,7vw,68px)] text-dark leading-[0.92]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
            >
              Brand.
            </p>
            <p
              className="font-fraunces font-light text-[clamp(30px,7vw,68px)] text-dark leading-[0.92]"
              style={WONK}
            >
              Motion.
            </p>
            <p
              className="font-fraunces font-light italic text-[clamp(40px,7vw,68px)] text-dark leading-[0.92]"
              style={WONK}
            >
              {f.sistema[lang]}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">

            {/* Navegación */}
            <div>
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">{f.navLabel[lang]}</p>
              <ul className="space-y-[18px] lg:space-y-[22px]">
                {navLinks.map((link, i) => (
                  <li key={link}>
                    <Link href={navHrefs[i]} className="font-sans text-[13px] text-muted hover:text-dark transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + Contacto: apilados en mobile, columnas separadas en desktop */}
            <div className="flex flex-col gap-8 lg:contents">

              {/* Social */}
              <div className="hidden lg:block">
                <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">{f.socialLabel[lang]}</p>
                <ul className="space-y-[18px] lg:space-y-[22px]">
                  {socialLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-muted hover:text-dark transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacto */}
              <div>
                <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">{f.contactLabel[lang]}</p>
                <ul className="space-y-[18px] lg:space-y-[22px]">
                  <li>
                    <a href="mailto:contacto@kymsul.art" className="font-sans text-[13px] text-muted hover:text-dark transition-colors">
                      contacto@kymsul.art
                    </a>
                  </li>
                  <li>
                    <a href="tel:+523318450381" className="font-sans text-[13px] text-muted hover:text-dark transition-colors">
                      +52 3318450381
                    </a>
                  </li>
                  <li>
                    <span className="font-sans text-[13px] text-muted">Puebla, MX</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(13,13,13,0.06)] mt-8 lg:mt-14 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">© 2026 KYMSUL</span>
          <span className="hidden lg:inline font-mono text-[11px] text-muted2 tracking-[1.76px]">kymsul.art</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted2 hover:text-dark transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
