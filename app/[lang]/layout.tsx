import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { mediaUrl } from '@/lib/media'
import { Fraunces, JetBrains_Mono, Inter, Ephesis } from 'next/font/google'
import localFont from 'next/font/local'
import '../globals.css'
import { LangProvider } from '@/lib/lang-context'
import { type Lang } from '@/lib/translations'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces-var',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-var',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
})

// Latin subset (WOFF2) of Franklin Gothic Demi Cond: titles and names.
const franklinCond = localFont({
  src: '../fonts/FranklinGothicDemiCond.woff2',
  variable: '--font-franklin-cond-var',
  display: 'swap',
})

// Ephesis (SIL OFL), chosen by Kimberly — only for the hand-written signature accent.
const handwritten = Ephesis({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwritten-var',
  display: 'swap',
})

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
export const dynamicParams = false
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return {
    metadataBase: new URL('https://kymsul.art'),
    ...pageMetadata(lang as Lang, '/'),
    title: {
      default: 'Kimberly Tapia Rubio — Creative Designer',
      template: '%s — Kymsul',
    },
    authors: [{ name: 'Kimberly Tapia Rubio' }],
  }
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (lang !== 'es' && lang !== 'en') notFound()
  const initialLang = lang

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://kymsul.art/#person',
        name: 'Kimberly Tapia Rubio',
        alternateName: 'Kymsul',
        url: 'https://kymsul.art',
        image: new URL(mediaUrl('/assets/kym-foto.jpg'), 'https://kymsul.art')
          .href,
        jobTitle: 'Creative Designer',
        description:
          'Creative designer focused on branding and art direction: finds the idea behind a brand and carries it into identity, campaigns and motion.',
        email: 'mailto:kimberly.tapiaj@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Puebla',
          addressCountry: 'MX',
        },
        knowsAbout: [
          'Brand identity',
          'Visual systems',
          'Motion graphics',
          'Content production',
          'Social media content',
          'Paid media assets',
          'AI workflows',
          'Creative automation',
          'Generative AI',
          'Art direction',
          'After Effects',
          'Figma',
          'Adobe Creative Suite',
          'Remotion',
        ],
        sameAs: [
          'https://www.linkedin.com/in/kimberly-tapia-rubio-39a35828a/',
          'https://www.behance.net/kimberlytapia2',
          'https://www.instagram.com/kymsul/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kymsul.art/#website',
        name: 'Kymsul',
        url: 'https://kymsul.art',
        inLanguage: ['en', 'es-MX'],
        author: { '@id': 'https://kymsul.art/#person' },
        description:
          'Portfolio of Kimberly Tapia Rubio, creative designer working across branding, art direction, campaigns and motion.',
      },
    ],
  }

  return (
    <html
      lang={initialLang}
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable} ${franklinCond.variable} ${handwritten.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider initialLang={initialLang}>{children}</LangProvider>
      </body>
    </html>
  )
}
