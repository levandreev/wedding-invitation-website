"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLang } from "@/components/language-provider"

export function Schedule() {
  const { lang } = useLang()
  const { ref, isVisible } = useAnimateOnScroll(0.1)
  const t = lang === "ru"

  const events = [
    {
      time: "12:30",
      title: t ? "Церемония бракосочетания" : "Svatební obřad",
      description: "Staroměstská radnice",
    },
    {
      time: "15:00 - 16:00",
      title: t ? "Сбор гостей" : "Příchod hostů",
      description: "",
    },
    {
      time: "16:00",
      title: t ? "Начало программы" : "Začátek programu",
      description: "",
    },
    {
      time: "17:30",
      title: t ? "Подача ужина" : "Podávání večeře",
      description: "",
    },
    {
      time: "22:00",
      title: t ? "Окончание основной программы" : "Konec hlavního programu",
      description: "",
    },
    {
      time: "22:00 - 00:00",
      title: t ? "Афтепати" : "Afterparty",
      description: "",
    },
  ]

  return (
    <section id="schedule" className="py-24 md:py-40 px-4 md:px-6 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl md:text-7xl font-serif font-light text-center text-foreground mb-3 md:mb-4 tracking-tight">
          {t ? "Расписание дня" : "Program dne"}
        </h2>
        <p className="text-center text-muted-foreground text-xs md:text-sm font-sans mb-16 md:mb-24">
          {t ? "(будет обновляться)" : "(bude aktualizováno)"}
        </p>

        <div className="relative">
          <div className="absolute left-[18px] md:left-[164px] top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-10 md:space-y-14">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 md:gap-10 pl-10 md:pl-0 transition-all duration-600 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
              >
                <div className="hidden md:block w-[140px] flex-shrink-0 text-right">
                  <span className="text-xl md:text-2xl font-serif font-medium text-primary whitespace-nowrap">
                    {event.time}
                  </span>
                </div>

                <div className="absolute left-[14px] md:relative md:left-auto flex-shrink-0 mt-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                </div>

                <div className="pb-2">
                  <span className="md:hidden text-base font-serif font-medium text-primary block mb-1.5">
                    {event.time}
                  </span>
                  <h3 className="text-base md:text-lg font-sans font-medium text-foreground mb-1">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-sm text-muted-foreground font-sans">{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
