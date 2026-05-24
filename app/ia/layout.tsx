import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Native Creative Workflows — Kimberly Tapia Rubio',
  description: 'AI-native creative workflows for brand documentation, generative image and video, motion automation, and multi-format content production.',
  alternates: { canonical: '/ia' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
