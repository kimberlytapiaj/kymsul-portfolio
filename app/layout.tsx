import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

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
  title: 'kymsul — Motion · Brand · IA',
  description: 'Diseño como sistema. Motion como lenguaje. IA como expansión creativa.',
  openGraph: {
    title: 'kymsul — Motion · Brand · IA',
    description: 'Diseño como sistema. Motion como lenguaje. IA como expansión creativa.',
    url: 'https://kymsul.art',
    siteName: 'kymsul',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable} ${franklinCond.variable} ${franklin.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
