'use client'
import { createContext, useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { DEFAULT_LANG, type Lang } from './translations'
import { localePath } from './locale'
const LangContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
}>({ lang: DEFAULT_LANG, setLang: () => {} })
export function LangProvider({
  initialLang = DEFAULT_LANG,
  children,
}: {
  initialLang?: Lang
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <LangContext.Provider
      value={{
        lang: initialLang,
        setLang: (lang) => router.push(localePath(pathname, lang)),
      }}
    >
      {children}
    </LangContext.Provider>
  )
}
export function useLang() {
  return useContext(LangContext)
}
