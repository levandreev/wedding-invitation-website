import { MapPin, Calendar, Clock } from "lucide-react"

export function ReceptionDetails() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          Где и когда
        </p>
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-12 md:mb-20 tracking-tight">
          Свадебный фуршет
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-card">
          <div className="p-6 md:p-14">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="rounded-full bg-primary/8 p-3 mt-0.5">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Дата</p>
                  <p className="text-lg text-foreground">Пятница, 26 июня 2026 года</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-primary/8 p-3 mt-0.5">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Время</p>
                  <p className="text-lg text-foreground">Сбор гостей будет уточнён немного позже</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-primary/8 p-3 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Место</p>
                  <p className="text-lg text-foreground">Highlight, Hlubočepská 1287/2a</p>
                  <p className="text-sm text-muted-foreground mt-1.5">Доступна парковка</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-video md:aspect-auto md:min-h-[360px]">
            <img
              src="/images/highlight-venue.png"
              alt="Место проведения фуршета"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
