import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Casos de estudio en branding, motion graphics e IA aplicada. Portafolio de Kimberly Tapia Rubio — kymsul.',
  alternates: { canonical: '/proyectos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
