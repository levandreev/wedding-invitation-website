"use client"

import { useEffect, useState } from "react"
import { Countdown } from "@/components/countdown"
import { useLang } from "@/components/language-provider"

export function Hero() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden">
      <img
        src="/couple-beach-photo.jpg"
        alt="Дарья и Лев на пляже"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div
        className={`relative z-10 text-center px-4 pb-20 md:pb-28 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.35em] text-white/70 mb-6 md:mb-8">
          {lang === "ru" ? "Свадебное приглашение" : "Svatební pozvánka"}
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif font-light text-white mb-6 md:mb-8 tracking-tight">
          {lang === "ru" ? "Дарья & Лев" : "Darya & Lev"}
        </h1>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12">
          <div className="h-px w-10 md:w-16 bg-white/30" />
          <p className="text-base md:text-xl font-sans tracking-[0.25em] text-white/80">
            26.06.2026
          </p>
          <div className="h-px w-10 md:w-16 bg-white/30" />
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Countdown />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-hint">
        <div className="w-px h-8 bg-white/50" />
      </div>
    </section>
  )
}
