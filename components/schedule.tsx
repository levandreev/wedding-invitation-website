export function Schedule() {
  const events = [
    {
      time: "12:30",
      title: "Церемония бракосочетания",
      description: "Staroměstská radnice",
    },
    {
      time: "15:00 - 16:00",
      title: "Сбор гостей на фуршет и празднование",
      description: "Точное время будет уточнено позже",
    },
    {
      time: "16:00",
      title: "Начало программы",
      description: "",
    },
    {
      time: "22:00",
      title: "Окончание основной программы",
      description: "",
    },
    {
      time: "22:00 - 00:00",
      title: "Афтепати",
      description: "",
    },
  ]

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-accent/20">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          Тайминг
        </p>
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-3 md:mb-4 tracking-tight">
          Расписание дня
        </h2>
        <p className="text-center text-muted-foreground text-xs md:text-sm font-sans mb-12 md:mb-20">
          (будет обновляться)
        </p>

        <div className="relative">
          <div className="absolute left-[18px] md:left-[100px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 md:space-y-10">
            {events.map((event, index) => (
              <div key={index} className="flex items-start gap-4 md:gap-8 pl-10 md:pl-0">
                <div className="hidden md:block w-[76px] flex-shrink-0 text-right">
                  <span className="text-xl font-serif font-medium text-primary whitespace-nowrap">
                    {event.time}
                  </span>
                </div>

                <div className="absolute left-[13px] md:relative md:left-auto flex-shrink-0 mt-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-accent/40" />
                </div>

                <div className="pb-2">
                  <span className="md:hidden text-sm font-serif font-medium text-primary block mb-1">{event.time}</span>
                  <h3 className="text-base md:text-lg font-sans font-medium text-foreground mb-1">{event.title}</h3>
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
