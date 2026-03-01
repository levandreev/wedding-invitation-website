"use client"

import { MapPin, Calendar, Clock } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLang } from "@/components/language-provider"

export function Details() {
  const { lang } = useLang()
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  const t = lang === "ru"

  return (
    <section id="details" className="py-24 md:py-40 px-4 md:px-6 bg-accent/20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          {t ? "Где и когда" : "Kde a kdy"}
        </p>
        <h2 className="text-4xl md:text-7xl font-serif font-light text-center text-foreground mb-16 md:mb-24 tracking-tight">
          {t ? "Детали дня" : "Podrobnosti dne"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Ceremony */}
          <div className="border border-border/50 bg-card overflow-hidden flex flex-col">
            <div className="p-8 md:p-12 flex-1 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 md:mb-10">
                {t ? "Церемония бракосочетания" : "Obřad"}
              </h3>

              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <Calendar className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {t ? "Дата" : "Datum"}
                    </p>
                    <p className="text-base text-foreground">
                      {t ? "Пятница, 26 июня 2026 года" : "Pátek 26. června 2026"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {t ? "Время" : "Čas"}
                    </p>
                    <p className="text-base text-foreground">12:30</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {t ? "Место" : "Místo"}
                    </p>
                    <p className="text-base text-foreground">Staroměstská radnice</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t
                        ? "Staroměstské náměstí 1/3 (вход слева от часов)"
                        : "Staroměstské náměstí 1/3 (vchod vlevo od hodin)"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t
                    ? "Хотим предупредить, что из-за требований государственного учреждения церемония начнётся строго в назначенное время"
                    : "Upozorňujeme, že z důvodu požadavků státní instituce obřad začne přesně v uvedený čas"}
                </p>
              </div>
            </div>

            <div className="h-52 md:h-60">
              <img
                src="/images/prague-old-town-hall.jpg"
                alt="Староместская ратуша, Прага"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Reception */}
          <div className="border border-border/50 bg-card overflow-hidden flex flex-col">
            <div className="p-8 md:p-12 flex-1 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 md:mb-10">
                {t ? "Свадебный фуршет" : "Svatební raut"}
              </h3>

              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <Calendar className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {t ? "Дата" : "Datum"}
                    </p>
                    <p className="text-base text-foreground">
                      {t ? "Пятница, 26 июня 2026 года" : "Pátek 26. června 2026"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {t ? "Время" : "Čas"}
                    </p>
                    <p className="text-base text-foreground">
                      {t
                        ? "Ориентировочно 15:00-16:00, будет уточнено немного позже"
                        : "Čas příchodu hostů bude upřesněn později"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {t ? "Место" : "Místo"}
                    </p>
                    <p className="text-base text-foreground">Highlight, Hlubočepská 1287/2a</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t ? "Доступна парковка" : "Parkování k dispozici"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-52 md:h-60">
              <img
                src="/images/highlight-venue.png"
                alt="Место проведения фуршета"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
