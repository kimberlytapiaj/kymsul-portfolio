import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA Aplicada',
  description: 'Cómo uso la IA en cada etapa del diseño: documentación de marca, imagen generativa, automatización y producción de contenido. Kimberly Tapia Rubio — kymsul.',
  alternates: { canonical: '/ia' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
