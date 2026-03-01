"use client"

import { useState } from "react"

export function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const photos = [
    { src: "/images/florence-duomo.jpeg", alt: "Дарья и Лев во Флоренции" },
    { src: "/images/rooftop-sunset.jpeg", alt: "Закат на крыше" },
    { src: "/images/nyc-night.jpeg", alt: "Ночной Нью-Йорк" },
    { src: "/images/formula1-redbull.jpeg", alt: "Формула-1 Red Bull Racing" },
    { src: "/images/prague-rooftop.jpeg", alt: "Прага на крыше" },
    { src: "/images/venice-gondolas.jpeg", alt: "Венеция с гондолами" },
    { src: "/images/christmas-tree.jpeg", alt: "Рождество вместе" },
    { src: "/images/summer-outdoor-selfie.jpeg", alt: "Летнее селфи на улице" },
    { src: "/images/forest-flower-crowns.jpeg", alt: "В лесу с венками из одуванчиков" },
    { src: "/images/desert-adventure.jpg", alt: "Приключение в пустыне" },
  ]

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-serif font-light text-center text-foreground mb-12 md:mb-20 tracking-tight">
          Наши приключения
        </h2>

        <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="mb-3 md:mb-4 break-inside-avoid overflow-hidden rounded-lg md:rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className={`w-full h-auto object-cover transition-all duration-500 ${
                  hoveredIndex === index ? "scale-[1.03]" : "scale-100"
                } ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-60" : "opacity-100"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
