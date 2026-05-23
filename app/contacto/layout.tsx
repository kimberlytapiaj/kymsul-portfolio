import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Disponible para proyectos de branding, motion y contenido. Escríbeme a contacto@kymsul.art o usa el formulario.',
  alternates: { canonical: '/contacto' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
