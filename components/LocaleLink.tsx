'use client'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useLang } from '@/lib/lang-context'
import { localePath } from '@/lib/locale'
export default function LocaleLink({
  href,
  ...props
}: ComponentProps<typeof Link>) {
  const { lang } = useLang()
  return (
    <Link
      {...props}
      prefetch={false}
      href={typeof href === 'string' ? localePath(href, lang) : href}
    />
  )
}
