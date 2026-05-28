import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Fraunces, JetBrains_Mono, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { LangProvider } from '@/lib/lang-context'
import { LANGUAGE_COOKIE, normalizeLang } from '@/lib/translations'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces-var',
  axes: ['SOFT', 'WONK'],
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

const franklinCond = localFont({
  src: './fonts/FranklinGothicDemiCond.ttf',
  variable: '--font-franklin-cond-var',
})

const franklin = localFont({
  src: './fonts/FranklinGothicDemi.ttf',
  variable: '--font-franklin-var',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kymsul.art'),
  title: {
    default: 'Kimberly Tapia Rubio — Brand & Content Designer',
    template: '%s — kymsul',
  },
  description: 'Brand & Content Designer based in Mexico. Visual systems, motion graphics, content production, and AI-native creative workflows for brands, campaigns, and social media.',
  keywords: [
    'Kimberly Tapia Rubio',
    'kymsul',
    'Brand & Content Designer',
    'Brand Designer',
    'Content Designer',
    'Visual Designer',
    'Motion Graphics',
    'AI-native workflows',
    'Creative automation',
    'Visual systems',
    'Social media content',
    'Paid media assets',
    'Short-form content',
    'Art direction',
    'Creative production',
    'After Effects',
    'Figma',
    'Adobe Creative Suite',
    'Remotion',
    'Generative AI',
    'Diseñadora de marca',
    'México',
    'Puebla',
  ],
  authors: [{ name: 'Kimberly Tapia Rubio', url: 'https://kymsul.art' }],
  creator: 'Kimberly Tapia Rubio',
  publisher: 'kymsul',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Kimberly Tapia Rubio — Brand & Content Designer',
    description: 'Visual systems, motion graphics, content production, and AI-native creative workflows for brands, campaigns, and social media.',
    url: 'https://kymsul.art',
    siteName: 'kymsul',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kimberly Tapia Rubio — Brand & Content Designer portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimberly Tapia Rubio — Brand & Content Designer',
    description: 'Visual systems, motion graphics, content production, and AI-native creative workflows.',
    images: ['/twitter-image'],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const initialLang = normalizeLang(cookieStore.get(LANGUAGE_COOKIE)?.value)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://kymsul.art/#person',
        name: 'Kimberly Tapia Rubio',
        alternateName: 'kymsul',
        url: 'https://kymsul.art',
        image: 'https://kymsul.art/assets/kym-foto.jpg',
        jobTitle: 'Brand & Content Designer',
        description:
          'Brand & Content Designer focused on visual systems, motion graphics, content production, and AI-native creative workflows.',
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
          'AI-native workflows',
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
        name: 'kymsul',
        url: 'https://kymsul.art',
        inLanguage: ['en', 'es-MX'],
        author: { '@id': 'https://kymsul.art/#person' },
        description:
          'Portfolio of Kimberly Tapia Rubio, Brand & Content Designer working across visual systems, motion, and AI-native creative workflows.',
      },
    ],
  }

  return (
    <html
      lang={initialLang}
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable} ${franklinCond.variable} ${franklin.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider initialLang={initialLang}>{children}</LangProvider>
      </body>
    </html>
  )
}
