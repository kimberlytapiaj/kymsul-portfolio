import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Portfolio from '@/components/Portfolio'
import Specialization from '@/components/Specialization'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'

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
