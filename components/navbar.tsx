"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLang } from "@/components/language-provider"

const NAV_LINKS = {
  ru: [
    { href: "#our-story", label: "Наша история" },
    { href: "#photos", label: "Фото" },
    { href: "#details", label: "Церемония" },
    { href: "#schedule", label: "Расписание" },
  ],
  cs: [
    { href: "#our-story", label: "Náš příběh" },
    { href: "#photos", label: "Foto" },
    { href: "#details", label: "Obřad" },
    { href: "#schedule", label: "Program" },
  ],
}

export function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const links = NAV_LINKS[lang]

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 50)
      setHidden(y > lastScrollY && y > 300)
      setLastScrollY(y)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  })

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/30 shadow-sm" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className={`font-serif text-lg tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {lang === "ru" ? "Д & Л" : "D & L"}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.15em] font-sans transition-colors hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggle}
              className={`text-xs font-sans font-medium uppercase tracking-[0.1em] border px-2.5 py-1 transition-colors ${
                scrolled
                  ? "border-border/60 text-foreground hover:bg-accent"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {lang === "ru" ? "CZ" : "RU"}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggle}
              className={`text-xs font-sans font-medium uppercase tracking-[0.1em] border px-2 py-0.5 transition-colors ${
                scrolled
                  ? "border-border/60 text-foreground"
                  : "border-white/30 text-white"
              }`}
            >
              {lang === "ru" ? "CZ" : "RU"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-1 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-2xl font-serif font-light text-foreground tracking-tight hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
