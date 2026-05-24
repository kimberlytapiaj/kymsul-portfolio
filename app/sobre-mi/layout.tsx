import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Kimberly Tapia Rubio — Brand & Content Designer',
  description: 'Brand & Content Designer based in Mexico. Visual systems, content production, motion graphics, and AI-native creative workflows.',
  alternates: { canonical: '/sobre-mi' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
