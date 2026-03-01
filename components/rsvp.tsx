"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attending: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("RSVP submitted:", formData)
    alert("Спасибо за подтверждение! Мы ждём вас на празднике.")
  }

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-accent/20">
      <div className="max-w-xl mx-auto">
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground text-center mb-3 md:mb-4">
          Ждём ответа
        </p>
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-6 md:mb-8 tracking-tight">
          Подтверждение участия
        </h2>

        <p className="text-center text-muted-foreground mb-3 md:mb-4 text-sm md:text-base leading-relaxed font-sans font-light px-2">
          Мы будем рады видеть на празднике не только вас, но и ваших деток.
        </p>
        <p className="text-center text-primary font-sans font-medium mb-3 md:mb-4 text-sm md:text-base">
          Просим подтвердить участие до 1 мая 2026
        </p>
        <p className="text-center text-muted-foreground mb-10 md:mb-14 text-xs md:text-sm leading-relaxed font-sans font-light max-w-md mx-auto px-2">
          В случае каких-либо изменений просим сообщить нам об этом как можно раньше. Укажите имена детей в комментарии.
        </p>

        <div className="rounded-2xl border border-border/50 bg-card p-5 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-sans font-medium text-foreground uppercase tracking-wider">
                Ваши имена
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="text-base h-12 rounded-xl border-border/60 bg-background font-sans"
                placeholder="Ваши имена"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-sm font-sans font-medium text-foreground uppercase tracking-wider">
                Количество гостей
              </Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="10"
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="text-base h-12 rounded-xl border-border/60 bg-background font-sans"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-sans font-medium text-foreground uppercase tracking-wider">
                {"Вы придёте?"}
              </Label>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "yes" })}
                  className={`flex-1 py-3.5 px-6 rounded-xl border transition-all text-sm font-sans font-medium ${
                    formData.attending === "yes"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/60 bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  С радостью приду
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "no" })}
                  className={`flex-1 py-3.5 px-6 rounded-xl border transition-all text-sm font-sans font-medium ${
                    formData.attending === "no"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/60 bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  К сожалению, не смогу
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment" className="text-sm font-sans font-medium text-foreground uppercase tracking-wider">
                Комментарий
              </Label>
              <textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="flex min-h-[100px] w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-base font-sans ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Укажите имена детей или другие пожелания"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-sans font-medium rounded-xl bg-primary hover:bg-primary/90 transition-colors"
              disabled={!formData.attending}
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
