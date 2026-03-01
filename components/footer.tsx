"use client"

import { useLang } from "@/components/language-provider"

export function Footer() {
  const { lang } = useLang()

  return (
    <footer className="py-16 md:py-20 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="h-px w-16 bg-primary-foreground/20 mx-auto mb-8" />
        <p className="text-lg md:text-2xl font-serif font-light tracking-tight">
          {lang === "ru" ? "С любовью, Дарья и Лев" : "S láskou, Darya a Lev"}
        </p>
        <p className="text-sm font-sans text-primary-foreground/60 mt-3 tracking-[0.1em]">
          26.06.2026
        </p>
      </div>
    </footer>
  )
}
