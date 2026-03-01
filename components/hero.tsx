"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-background overflow-hidden">
      <div
        className={`w-full transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="relative w-full aspect-[16/10] md:aspect-[16/8] overflow-hidden">
          <img
            src="/couple-beach-photo.jpg"
            alt="Дарья и Лев на пляже"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </div>

      <div
        className={`text-center px-4 md:px-6 -mt-16 md:-mt-20 relative z-10 pb-16 md:pb-24 transition-all duration-1000 delay-300 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Свадебное приглашение
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-9xl font-serif font-light text-foreground mb-6 md:mb-8 tracking-tight text-balance">
          Дарья & Лев
        </h1>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="h-px w-10 md:w-16 bg-border" />
          <p className="text-base md:text-xl font-sans tracking-[0.2em] text-muted-foreground">
            26.06.2026
          </p>
          <div className="h-px w-10 md:w-16 bg-border" />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed text-center px-4">
          Приглашаем вас разделить с нами радость нашей любви!
        </p>
      </div>
    </section>
  )
}
