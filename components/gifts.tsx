"use client"

import { Gift, Heart } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLang } from "@/components/language-provider"

export function Gifts() {
  const { lang } = useLang()
  const { ref, isVisible } = useAnimateOnScroll(0.1)
  const t = lang === "ru"

  return (
    <section id="gifts" className="py-24 md:py-40 px-4 md:px-6 bg-accent/20">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          {t ? "От всего сердца" : "Od srdce"}
        </p>
        <h2 className="text-4xl md:text-7xl font-serif font-light text-center text-foreground mb-16 md:mb-24 tracking-tight">
          {t ? "Подарки и пожелания" : "Dary a přání"}
        </h2>

        <div className="space-y-5 md:space-y-8">
          <div
            className={`border border-border/50 bg-card p-8 md:p-12 flex items-start gap-5 md:gap-6 transition-all duration-600 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-foreground/80 leading-[1.9] font-sans font-light">
              {t
                ? "Мы будем благодарны за подарки в виде денежного вклада в нашу новую семью — так мы сможем осуществить наши планы и мечты."
                : "Budeme vděční za dary v podobě finančního příspěvku do naší nové rodiny — tak budeme moci uskutečnit naše plány a sny."}
            </p>
          </div>

          <div
            className={`border border-border/50 bg-card p-8 md:p-12 flex items-start gap-5 md:gap-6 transition-all duration-600 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "350ms" : "0ms" }}
          >
            <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-foreground/80 leading-[1.9] font-sans font-light">
              {t
                ? "Если вы задумываетесь о букете для невесты, предлагаем заменить его бутылочкой хорошего вина или чая с запиской — так у нас появится коллекция тёплых воспоминаний на важные моменты жизни."
                : "Pokud přemýšlíte o kytici pro nevěstu, navrhujeme ji nahradit lahvičkou dobrého vína nebo čaje s lístečkem — tak nám vznikne sbírka krásných vzpomínek na důležité životní okamžiky."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
