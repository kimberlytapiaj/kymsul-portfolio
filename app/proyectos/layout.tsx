import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selected Work — Kimberly Tapia Rubio',
  description: 'Selected brand, content, motion, and AI-native workflow case studies by Kimberly Tapia Rubio.',
  alternates: { canonical: '/proyectos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
