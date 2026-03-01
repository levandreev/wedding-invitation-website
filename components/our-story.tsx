"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLang } from "@/components/language-provider"

export function OurStory() {
  const { lang } = useLang()
  const { ref, isVisible } = useAnimateOnScroll(0.15)

  return (
    <section id="our-story" className="py-24 md:py-40 px-4 md:px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl md:text-7xl font-serif font-light text-center text-foreground mb-16 md:mb-24 tracking-tight">
          {lang === "ru" ? "Наша история" : "Náš příběh"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-0 overflow-hidden border border-border/50">
          <div className="bg-accent/30 p-8 md:p-16 flex items-center justify-center">
            <div className="text-sm md:text-base text-foreground/80 leading-[1.9] space-y-5 md:space-y-7 font-sans font-light text-justify">
              {lang === "ru" ? (
                <>
                  <p>
                    В октябре 2022 года мы встретились в уютном кафе Louvre в Праге. С первых минут нам было легко и
                    весело вместе — мы смеялись, шутили и разговаривали до самого закрытия, словно знали друг друга всю
                    жизнь.
                  </p>
                  <p>
                    С тех пор каждый день вместе был наполнен радостью и теплом. Мы путешествовали, открывали новые
                    города, перелетели через океан и прошли по самому длинному подвесному мосту в мире. Катались на
                    американских горках, смеялись до слёз, пересматривали любимые фильмы друг друга, мечтали и
                    поддерживали друг друга в трудные моменты. Мы вместе болели за любимого гонщика Формулы-1, пели
                    любимые песни на концертах мировых звёзд и превращали обычные дни в особенные воспоминания.
                  </p>
                  <p>
                    Сегодня мы точно знаем: всё лучше, когда мы вместе. И совсем скоро начнётся новый этап нашей жизни, и
                    мы будем счастливы разделить этот день с родными и близкими.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    V říjnu 2022 jsme se potkali v útulné kavárně Louvre v Praze. Od prvních minut nám spolu bylo lehko
                    a veselo — smáli jsme se, vtipkovali a povídali si až do zavírací hodiny, jako bychom se znali celý
                    život.
                  </p>
                  <p>
                    Od té doby byl každý společný den plný radosti a tepla. Cestovali jsme, objevovali nová města,
                    přeletěli přes oceán a prošli nejdelší visutý most na světě. Jezdili jsme na horských dráhách,
                    smáli se do slz, společně jsme sledovali oblíbené filmy, snili a podporovali se navzájem v těžkých
                    chvílích. Společně jsme fandili oblíbenému jezdci Formule 1, zpívali oblíbené písničky na
                    koncertech světových hvězd a proměňovali obyčejné dny v jedinečné vzpomínky.
                  </p>
                  <p>
                    Dnes víme jistě: všechno je lepší, když jsme spolu. A už brzy začne nová kapitola našeho života
                    a budeme šťastní, že ji můžeme sdílet s rodinou a přáteli.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="min-h-[300px] md:min-h-0 bg-accent/10 flex items-center justify-center">
            <img
              src="/images/ring-photo.jpg"
              alt={lang === "ru" ? "Наше помолвочное фото" : "Naše zásnubní fotka"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
