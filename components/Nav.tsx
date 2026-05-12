'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { label: 'Inicio',     href: '/' },
  { label: 'Proyectos',  href: '/proyectos' },
  { label: 'Sobre Mí',  href: '/sobre-mi' },
  { label: 'Servicios',  href: '/servicios' },
  { label: 'Contacto',  href: '/contacto' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 bg-[rgba(245,243,238,0.92)] backdrop-blur-sm border-b border-[rgba(13,13,13,0.08)]">
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
            {/* Lang toggle */}
            <div className="border border-[rgba(13,13,13,0.15)] rounded-full p-[3px] flex items-center">
              <span className="bg-dark text-bg font-mono text-[10px] rounded-full w-9 h-[26px] flex items-center justify-center">
                ES
              </span>
              <span className="text-muted2 font-mono text-[10px] rounded-full w-9 h-[26px] flex items-center justify-center cursor-pointer">
                EN
              </span>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-1"
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
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[rgba(245,243,238,0.98)] backdrop-blur-sm flex flex-col px-6 pt-24 pb-12">
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
        </div>
      )}
    </>
  )
}
