import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { LangProvider } from '@/lib/lang-context'

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
    default: 'kymsul — Brand & Content Designer',
    template: '%s — kymsul',
  },
  description: 'Kimberly Tapia Rubio — Brand & Content Designer especializada en sistemas visuales de marca, motion graphics e IA aplicada. Puebla, México.',
  keywords: [
    'Brand Designer', 'Motion Designer', 'Content Designer', 'Diseñadora de marca',
    'identidad visual', 'motion graphics', 'branding', 'social media',
    'IA creativa', 'After Effects', 'Puebla', 'México', 'Kimberly Tapia', 'kymsul',
  ],
  authors: [{ name: 'Kimberly Tapia Rubio', url: 'https://kymsul.art' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'kymsul — Brand & Content Designer',
    description: 'Kimberly Tapia Rubio — Brand & Content Designer en Puebla, México. Sistemas visuales, motion graphics e IA aplicada al diseño.',
    url: 'https://kymsul.art',
    siteName: 'kymsul',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kymsul — Brand & Content Designer',
    description: 'Brand & Content Designer en Puebla, México. Sistemas visuales, motion graphics e IA aplicada al diseño.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable} ${franklinCond.variable} ${franklin.variable}`}
    >
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  )
}
