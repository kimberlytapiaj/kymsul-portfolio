import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const navLinks = ['Inicio', 'Proyectos', 'Sobre Mí', 'Servicios', 'Contacto']
const navHrefs = ['/', '/proyectos', '/sobre-mi', '/servicios', '/contacto']
const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
]


export default function Footer() {
  return (
    <footer className="bg-bg border-t border-[rgba(13,13,13,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-12 lg:pt-14 pb-0">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Brand block */}
          <div className="flex-1">
            <p
              className="text-[clamp(40px,7vw,68px)] text-dark leading-[0.92]"
              style={{ fontFamily: 'var(--font-franklin-cond)', fontWeight: 700 }}
            >
              Brand.
            </p>
            <p
              className="font-fraunces font-light text-[clamp(40px,7vw,68px)] text-dark leading-[0.92]"
              style={WONK}
            >
              Motion.
            </p>
            <p
              className="font-fraunces font-light italic text-[clamp(40px,7vw,68px)] text-dark leading-[0.92]"
              style={WONK}
            >
              Sistema.
            </p>
            <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mt-6">
              DIRECTORA CREATIVA · AXOMY STUDIO
            </p>
          </div>

          {/* Links — stack on mobile, row on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Navegación */}
            <div>
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">NAVEGACIÓN</p>
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

            {/* Social */}
            <div>
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">SOCIAL</p>
              <ul className="space-y-[18px] lg:space-y-[22px]">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="font-sans text-[13px] text-muted hover:text-dark transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="col-span-2 lg:col-span-1">
              <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">CONTACTO</p>
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

        {/* Bottom bar */}
        <div className="border-t border-[rgba(13,13,13,0.06)] mt-12 lg:mt-14 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">© 2026 KYMSUL</span>
          <span className="font-mono text-[10px] lg:text-[11px] text-muted2 tracking-[1.76px]">kymsul.art</span>
          <span className="hidden lg:block font-mono text-[11px] text-muted2 tracking-[1.76px]">Puebla, México</span>
        </div>

      </div>
    </footer>
  )
}
