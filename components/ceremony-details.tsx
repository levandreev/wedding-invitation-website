import { MapPin, Calendar, Clock } from "lucide-react"

export function CeremonyDetails() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          Где и когда
        </p>
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-12 md:mb-20 tracking-tight">
          Церемония
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
                  <p className="text-lg text-foreground">12:30</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-primary/8 p-3 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Место</p>
                  <p className="text-lg text-foreground mb-1">Staroměstská radnice</p>
                  <p className="text-sm text-muted-foreground">{"Staroměstské náměstí 1/3 (вход слева от часов)"}</p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Хотим предупредить, что из-за требований государственного учреждения церемония начнётся строго в
                  назначенное время
                </p>
              </div>
            </div>
          </div>

          <div className="aspect-video md:aspect-auto md:min-h-[360px]">
            <img
              src="/images/prague-old-town-hall.jpg"
              alt="Староместская ратуша, Прага"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
