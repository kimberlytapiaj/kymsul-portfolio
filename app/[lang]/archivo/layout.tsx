import { pageMetadata } from '@/lib/seo'
import type { Lang } from '@/lib/translations'
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  return pageMetadata((await params).lang, '/archivo')
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
