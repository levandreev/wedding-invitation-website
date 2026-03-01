export function OurStory() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-12 md:mb-20 tracking-tight">
          Наша история
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] rounded-2xl overflow-hidden border border-border/50 shadow-sm">
          <div className="bg-accent/30 p-6 md:p-14 flex items-center">
            <div className="text-sm md:text-lg text-foreground/80 leading-[1.8] space-y-4 md:space-y-6 font-sans font-light text-justify">
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
            </div>
          </div>

          <div className="min-h-[300px] md:min-h-0 bg-accent/10 flex items-center justify-center">
            <img
              src="/images/ring-photo.jpg"
              alt="Наше помолвочное фото"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
