import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const navLinks = ['Inicio', 'Proyectos', 'Sobre Mí', 'Servicios', 'Contacto']
const navHrefs = ['/', '/proyectos', '/sobre-mi', '/servicios', '/contacto']
const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

function Badge({ label, dot }: { label: string; dot: string }) {
  return (
    <span className="inline-flex items-center gap-[7px] border border-[rgba(13,13,13,0.12)] rounded-full px-[10px] py-[6px]">
      <img src={dot} alt="" className="w-[7px] h-[7px]" />
      <span className="font-sans text-[12px] text-muted">{label}</span>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-[rgba(13,13,13,0.08)]">
      <div className="max-w-[1440px] mx-auto px-24 pt-14 pb-0">
        <div className="flex gap-16">
          {/* Brand block */}
          <div className="flex-1">
            <p
              className="text-[68px] text-dark leading-normal"
              style={{ fontFamily: 'var(--font-franklin)' }}
            >
              Evolución
            </p>
            <p
              className="font-fraunces font-light italic text-[68px] text-dark leading-normal"
              style={WONK}
            >
              de marcas.
            </p>
            <div className="flex items-center gap-3 mt-6 mb-3">
              <Badge label="Branding" dot="/assets/dot-lav.svg" />
              <Badge label="IA" dot="/assets/dot-blue.svg" />
              <Badge label="Motion" dot="/assets/dot-warm.svg" />
            </div>
            <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mt-4">
              DIRECTORA CREATIVA · AXOMY STUDIO
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              NAVEGACIÓN
            </p>
            <ul className="space-y-[22px]">
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
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              SOCIAL
            </p>
            <ul className="space-y-[22px]">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="font-sans text-[13px] text-muted hover:text-dark transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
              CONTACTO
            </p>
            <ul className="space-y-[22px]">
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

        {/* Bottom bar */}
        <div className="border-t border-[rgba(13,13,13,0.06)] mt-14 py-4 flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted2 tracking-[1.76px]">© 2026 KYMSUL</span>
          <span className="font-mono text-[11px] text-muted2 tracking-[1.76px]">kymsul.art</span>
          <span className="font-mono text-[11px] text-muted2 tracking-[1.76px]">Puebla, México</span>
        </div>
      </div>
    </footer>
  )
}
