'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Sobre Mí', href: '/sobre-mi' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 h-16 bg-[rgba(245,243,238,0.92)] backdrop-blur-sm border-b border-[rgba(13,13,13,0.08)]">
      <div className="max-w-[1440px] mx-auto px-14 h-full flex items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/assets/logo.png" alt="kymsul" className="h-[27px] w-auto" />
        </Link>

        {/* Nav links */}
        <div className="flex-1 flex items-center justify-center gap-10">
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

        {/* Lang toggle */}
        <div className="border border-[rgba(13,13,13,0.15)] rounded-full p-[3px] flex items-center">
          <span className="bg-dark text-bg font-mono text-[10px] rounded-full w-9 h-[26px] flex items-center justify-center">
            ES
          </span>
          <span className="text-muted2 font-mono text-[10px] rounded-full w-9 h-[26px] flex items-center justify-center cursor-pointer">
            EN
          </span>
        </div>
      </div>
    </nav>
  )
}
