"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLang } from "@/components/language-provider"

export function RSVP() {
  const { lang } = useLang()
  const { ref, isVisible } = useAnimateOnScroll(0.1)
  const t = lang === "ru"

  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attending: "",
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to submit")

      toast.success(
        t
          ? "Спасибо за подтверждение! Мы ждём вас на празднике."
          : "Děkujeme za potvrzení! Těšíme se na vás na oslavě."
      )
      setFormData({ name: "", guests: "1", attending: "", comment: "" })
    } catch {
      toast.error(
        t
          ? "Не удалось отправить. Попробуйте ещё раз."
          : "Odeslání se nezdařilo. Zkuste to prosím znovu."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="rsvp" className="py-24 md:py-40 px-4 md:px-6 bg-background">
      <div
        ref={ref}
        className={`max-w-xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          {t ? "Ждём ответа" : "Čekáme na odpověď"}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif font-light text-center text-foreground mb-8 md:mb-10 tracking-tight whitespace-nowrap">
          {t ? "Подтверждение участия" : "Potvrzení účasti"}
        </h2>

        <p className="text-center text-muted-foreground mb-2 md:mb-3 text-xs md:text-sm leading-relaxed font-sans font-light max-w-2xl mx-auto px-2">
          {t
            ? "Мы будем рады видеть вас на любой части нашего праздника."
            : "Budeme rádi, když se k nám připojíte na kterékoli části oslavy."}
        </p>
        <p className="text-center text-pretty text-muted-foreground mb-12 md:mb-16 text-xs md:text-sm leading-relaxed font-sans font-light max-w-2xl mx-auto px-2">
          {t
            ? "Если у вас получится присоединиться только к фуршету или ваши планы изменятся, пожалуйста, дайте нам знать заранее — это очень поможет в организации."
            : "Pokud se vám podaří přijít jen na raut nebo se vaše plány změní, dejte nám prosím vědět předem — velmi nám to pomůže s organizací."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-[0.15em]">
              {t ? "Ваши имена" : "Vaše jména"}
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-border/60 px-0 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              placeholder={t ? "Ваши имена" : "Vaše jména"}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-[0.15em]">
              {t ? "Количество гостей" : "Počet hostů"}
            </label>
            <input
              id="guests"
              type="number"
              min="1"
              max="10"
              required
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-border/60 px-0 py-3 text-base font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-[0.15em]">
              {t ? "Вы придёте?" : "Přijdete?"}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: "yes" })}
                className={`flex-1 py-3.5 px-6 border transition-all text-sm font-sans font-medium ${
                  formData.attending === "yes"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-transparent text-foreground hover:border-primary/40"
                }`}
              >
                {t ? "С радостью приду" : "S radostí přijdu"}
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: "no" })}
                className={`flex-1 py-3.5 px-6 border transition-all text-sm font-sans font-medium ${
                  formData.attending === "no"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-transparent text-foreground hover:border-primary/40"
                }`}
              >
                {t ? "К сожалению, не смогу" : "Bohužel se nemohu zúčastnit"}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="comment" className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-[0.15em]">
              {t ? "Комментарий" : "Komentář"}
            </label>
            <textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full min-h-[100px] bg-transparent border-0 border-b border-border/60 px-0 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder={t ? "Ваши пожелания" : "Vaše přání"}
            />
          </div>

          <button
            type="submit"
            disabled={!formData.attending || isSubmitting}
            className="w-full py-4 text-sm font-sans font-medium uppercase tracking-[0.15em] bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting
              ? (t ? "Отправка..." : "Odesílání...")
              : (t ? "Отправить" : "Odeslat")}
          </button>
        </form>
      </div>
    </section>
  )
}
