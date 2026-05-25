'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '@/lib/lang-context'
import { tr } from '@/lib/translations'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()

  const links = tr.nav.links[lang].map((label, i) => ({ label, href: tr.nav.hrefs[i] }))

  // Scroll lock — prevents iOS body scroll behind overlay
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 bg-[rgba(250,250,248,0.92)] backdrop-blur-sm border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)}>
            <img src="/assets/logo.png" alt="kymsul" className="h-[27px] w-auto" />
          </Link>

          {/* Nav links — desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
            {links.map(({ label, href }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-sans text-[13px] relative pb-0.5 transition-colors ${
                    active
                      ? 'font-medium text-dark after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-px after:bg-dark'
                      : 'font-normal text-[rgba(85,80,74,0.65)] hover:text-muted'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Lang toggle — fades out when mobile menu is open to avoid z-index conflict */}
            <div className={`border border-[rgba(13,13,13,0.15)] rounded-full p-[3px] flex items-center transition-opacity duration-150 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <button
                onClick={() => setLang('es')}
                className={`font-mono text-[10px] rounded-full w-9 h-[30px] lg:h-[26px] flex items-center justify-center transition-colors cursor-pointer ${
                  lang === 'es' ? 'bg-dark text-bg' : 'text-muted2/60 hover:text-muted2'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`font-mono text-[10px] rounded-full w-9 h-[30px] lg:h-[26px] flex items-center justify-center transition-colors cursor-pointer ${
                  lang === 'en' ? 'bg-dark text-bg' : 'text-muted2/60 hover:text-muted2'
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col gap-[5px] min-w-[44px] min-h-[44px] items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              <span className={`block w-5 h-[1.5px] bg-dark transition-transform duration-200 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-dark transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-dark transition-transform duration-200 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="lg:hidden fixed inset-0 z-40 bg-[rgba(250,250,248,0.98)] backdrop-blur-sm flex flex-col px-6 pt-24 pb-12"
          >
            <ul className="space-y-2 flex-1">
              {links.map(({ label, href }) => {
                const active = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block font-sans text-[32px] py-3 border-b border-[rgba(13,13,13,0.06)] transition-colors ${
                        active ? 'text-dark font-medium' : 'text-muted'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px]">
              KYMSUL · PUEBLA, MX
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
