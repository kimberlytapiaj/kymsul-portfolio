import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Kimberly Tapia Rubio',
  description: 'Contact Kimberly Tapia Rubio for professional conversations around brand design, content production, motion graphics, and AI-native creative workflows.',
  alternates: { canonical: '/contacto' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
