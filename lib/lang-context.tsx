'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { DEFAULT_LANG, LANGUAGE_COOKIE, normalizeLang, type Lang } from './translations'

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
})

export function LangProvider({
  initialLang = DEFAULT_LANG,
  children,
}: {
  initialLang?: Lang
  children: React.ReactNode
}) {
  const [lang, setLangState] = useState<Lang>(normalizeLang(initialLang))

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_COOKIE)
      if (stored) setLangState(normalizeLang(stored))
    } catch {}
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    document.documentElement.lang = l
    try {
      localStorage.setItem(LANGUAGE_COOKIE, l)
      document.cookie = `${LANGUAGE_COOKIE}=${l}; path=/; max-age=31536000; SameSite=Lax`
    } catch {}
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
