import { Gift, Heart } from "lucide-react"

export function Gifts() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          От всего сердца
        </p>
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-12 md:mb-20 tracking-tight">
          Подарки и пожелания
        </h2>

        <div className="space-y-4 md:space-y-6">
          <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-10 flex items-start gap-4 md:gap-6">
            <div className="rounded-full bg-primary/8 p-3.5 flex-shrink-0 mt-0.5">
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-[1.8] font-sans font-light">
              Мы будем благодарны за подарки в виде денежного вклада в нашу новую семью — так мы сможем осуществить наши планы и мечты.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-10 flex items-start gap-4 md:gap-6">
            <div className="rounded-full bg-primary/8 p-3.5 flex-shrink-0 mt-0.5">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-[1.8] font-sans font-light">
              Если вы задумываетесь о букете для невесты, предлагаем заменить его бутылочкой хорошего вина или чая с запиской — так у нас появится коллекция тёплых воспоминаний на важные моменты жизни.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
