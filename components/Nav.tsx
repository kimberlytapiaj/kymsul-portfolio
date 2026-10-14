'use client'
import Link from './LocaleLink'
import Image from './MediaImage'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/lang-context'
import { localePath, withoutLocale } from '@/lib/locale'
import { tr } from '@/lib/translations'
export default function Nav() {
  const pathname = usePathname()
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const menu = useRef<HTMLButtonElement>(null)
  // Hide while scrolling down, reveal on scroll up; always shown near the top.
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    let last = scrollY
    // setState with an unchanged value is a no-op, so this stays cheap.
    const onScroll = () => {
      const y = scrollY
      if (y < 96) setHidden(false)
      else if (Math.abs(y - last) > 6) setHidden(y > last)
      else return
      last = y
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ...tr.nav.links[lang].map((label, i) => ({ label, href: tr.nav.hrefs[i] })),
    // No contact page: this jumps to the "Hablemos." closing at the end of the home.
    { label: lang === 'es' ? 'Contacto' : 'Contact', href: '/#contacto' },
  ]
  useEffect(() => {
    if (!open) return
    const el = dialog.current
    if (!el) return
    el.showModal()
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const resize = () => {
      if (innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', resize)
    return () => {
      el.close()
      document.body.style.overflow = old
      window.removeEventListener('resize', resize)
      menu.current?.focus()
    }
  }, [open])
  const languageLinks = (
    <div className="flex items-center font-sans text-[13px] text-[#a39e96]">
      {(['es', 'en'] as const).map((l, i) => (
        <span key={l} className="flex items-center">
        {i > 0 && <span aria-hidden="true">/</span>}
        <NextLink
          key={l}
          href={localePath(pathname, l)}
          hrefLang={l}
          lang={l}
          prefetch={false}
          aria-label={l === 'es' ? 'Ver en español' : 'View in English'}
          aria-current={lang === l ? 'page' : undefined}
          onClick={() => setOpen(false)}
          className={`min-w-9 min-h-11 flex items-center justify-center transition-colors ${lang === l ? 'text-dark' : 'text-[#7a746c] hover:text-dark'}`}
        >
          {l.toUpperCase()}
        </NextLink>
        </span>
      ))}
    </div>
  )
  return (
    <>
      <nav
        aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}
        className="nav-float sticky top-0 z-40 px-3 pt-3 lg:px-6 lg:pt-4"
        data-hidden={hidden && !open}
        onFocus={() => setHidden(false)}
      >
        <div className="nav-capsule max-w-[1392px] mx-auto h-14 lg:h-15 pl-5 pr-3 lg:pl-8 lg:pr-6 flex items-center justify-between gap-5">
          <Link
            href="/"
            aria-label={lang === 'es' ? 'Kymsul — Inicio' : 'Kymsul — Home'}
            className="inline-flex min-h-11 shrink-0 items-center"
          >
            <Image src="/assets/logo.png" alt="Kymsul" loading="eager" sizes="100px" className="h-[27px] w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={
                  withoutLocale(pathname) === href ? 'page' : undefined
                }
                className={`nav-motion-link font-sans text-[14px] tracking-[-.005em] py-3 ${withoutLocale(pathname) === href ? 'text-dark' : 'text-[#7a746c]'}`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {languageLinks}
            <button
              ref={menu}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={lang === 'es' ? 'Abrir menú' : 'Open menu'}
              className="lg:hidden min-h-11 min-w-11 text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <dialog
          ref={dialog}
          id="mobile-nav"
          onCancel={() => setOpen(false)}
          aria-label={lang === 'es' ? 'Menú de navegación' : 'Navigation menu'}
          className="nav-dialog"
        >
          <div className="flex justify-between items-center mb-6">
            {languageLinks}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="min-h-11 px-4 text-[28px] font-light"
              aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className="flex flex-col">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-3xl py-4"
              >
                {label}
              </Link>
            ))}
          </nav>
        </dialog>
      )}
    </>
  )
}
