"use client"

import { createContext, useContext, useState } from "react"

type Lang = "ru" | "cs"

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "ru",
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru")
  const toggle = () => setLang((l) => (l === "ru" ? "cs" : "ru"))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
