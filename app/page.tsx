import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Portfolio from '@/components/Portfolio'
import Specialization from '@/components/Specialization'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'kymsul — Brand & Motion Designer',
  description: 'Portafolio de Kimberly Tapia Rubio — Brand & Content Designer en Puebla, México. Sistemas visuales de marca, motion graphics e IA aplicada al diseño.',
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
