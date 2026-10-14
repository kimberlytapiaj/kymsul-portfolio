import { pageMetadata } from '@/lib/seo'
import type { Lang } from '@/lib/translations'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WorkByArea from '@/components/WorkByArea'
import CTABand from '@/components/CTABand'
import ArchiveTeaser from '@/components/ArchiveTeaser'
import { archiveItems, teaserPieces } from '@/lib/archive'
import Footer from '@/components/Footer'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  return pageMetadata((await params).lang, '/')
}

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <main id="main-content">
        <Hero />
        <WorkByArea />
        <ArchiveTeaser pieces={teaserPieces()} total={archiveItems().length} />
        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
