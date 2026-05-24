import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Portfolio from '@/components/Portfolio'
import Specialization from '@/components/Specialization'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kimberly Tapia Rubio — Brand & Content Designer',
  description: 'Portfolio of Kimberly Tapia Rubio, Brand & Content Designer focused on visual systems, motion graphics, content production, and AI-native creative workflows.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Portfolio />
      <Specialization />
      <CTABand />
      <Footer />
    </main>
  )
}
