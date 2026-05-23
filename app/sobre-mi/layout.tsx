import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Kimberly Tapia Rubio — Brand & Content Designer con 3 años de experiencia en Puebla, México. Especializada en branding, motion graphics y producción IA-native.',
  alternates: { canonical: '/sobre-mi' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
