"use client"

import { useEffect, useState } from "react"
import { useLang } from "@/components/language-provider"

const WEDDING_DATE = new Date("2026-06-26T12:30:00+02:00")

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE.getTime() - now.getTime()

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  }
}

const labels = {
  ru: ["дней", "часов", "минут", "секунд"],
  cs: ["dnů", "hodin", "minut", "sekund"],
}

export function Countdown() {
  const { lang } = useLang()
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const values = [time.days, time.hours, time.minutes, time.seconds]

  if (time.ended) {
    return (
      <p className="text-2xl md:text-4xl font-serif font-light text-white text-center leading-snug">
        {lang === "ru" ? "Сегодня тот самый день!" : "Dnes je ten den!"}
      </p>
    )
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {values.map((value, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-serif font-light text-white tabular-nums leading-none">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60 mt-1.5 font-sans">
            {labels[lang][i]}
          </span>
        </div>
      ))}
    </div>
  )
}
