"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLang } from "@/components/language-provider"

// Desktop 3-column layout — each column's aspect-ratio sum ≈ 5.00
const desktopCols = [
  [
    { src: "/images/florence-duomo.jpeg", alt: "Дарья и Лев во Флоренции" },
    { src: "/images/rooftop-sunset.jpeg", alt: "Закат на крыше" },
    { src: "/images/prague-rooftop.jpeg", alt: "Прага на крыше" },
    { src: "/images/couple-vertical.jpeg", alt: "Дарья и Лев" },
  ],
  [
    { src: "/images/nyc-night.jpeg", alt: "Ночной Нью-Йорк" },
    { src: "/images/venice-gondolas.jpeg", alt: "Венеция с гондолами" },
    { src: "/images/summer-outdoor-selfie.jpeg", alt: "Летнее селфи на улице" },
    { src: "/images/desert-adventure.jpg", alt: "Приключение в пустыне" },
  ],
  [
    { src: "/images/formula1-redbull.jpeg", alt: "Формула-1 Red Bull Racing" },
    { src: "/images/christmas-tree.jpeg", alt: "Рождество вместе" },
    { src: "/images/forest-flower-crowns.jpeg", alt: "В лесу с венками из одуванчиков" },
    { src: "/images/couple-horizontal.jpeg", alt: "Дарья и Лев" },
  ],
]

// Mobile 2-column layout — sums ≈ 7.33 vs 7.58 (< 4% stretch on last photo)
const mobileCols = [
  [
    { src: "/images/rooftop-sunset.jpeg", alt: "Закат на крыше" },
    { src: "/images/couple-horizontal.jpeg", alt: "Дарья и Лев" },
    { src: "/images/nyc-night.jpeg", alt: "Ночной Нью-Йорк" },
    { src: "/images/prague-rooftop.jpeg", alt: "Прага на крыше" },
    { src: "/images/christmas-tree.jpeg", alt: "Рождество вместе" },
    { src: "/images/couple-vertical.jpeg", alt: "Дарья и Лев" },
  ],
  [
    { src: "/images/venice-gondolas.jpeg", alt: "Венеция с гондолами" },
    { src: "/images/florence-duomo.jpeg", alt: "Дарья и Лев во Флоренции" },
    { src: "/images/formula1-redbull.jpeg", alt: "Формула-1 Red Bull Racing" },
    { src: "/images/summer-outdoor-selfie.jpeg", alt: "Летнее селфи на улице" },
    { src: "/images/forest-flower-crowns.jpeg", alt: "В лесу с венками из одуванчиков" },
    { src: "/images/desert-adventure.jpg", alt: "Приключение в пустыне" },
  ],
]

function PhotoItem({
  photo,
  index,
  isVisible,
  isLast,
}: {
  photo: { src: string; alt: string }
  index: number
  isVisible: boolean
  isLast: boolean
}) {
  return (
    <div
      className={`overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
        isLast ? "flex-1 min-h-0" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={`block w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${
          isLast ? "h-full" : "h-auto"
        }`}
      />
    </div>
  )
}

function ColumnGrid({
  columns,
  gap,
  className,
}: {
  columns: { src: string; alt: string }[][]
  gap: string
  className: string
}) {
  return (
    <MosaicInner columns={columns} gap={gap} className={className} />
  )
}

function MosaicInner({
  columns,
  gap,
  className,
}: {
  columns: { src: string; alt: string }[][]
  gap: string
  className: string
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.05)

  return (
    <div ref={ref} className={`flex items-stretch ${gap} ${className}`}>
      {columns.map((col, colIdx) => (
        <div key={colIdx} className={`flex-1 flex flex-col ${gap}`}>
          {col.map((photo, i) => (
            <PhotoItem
              key={photo.src}
              photo={photo}
              index={colIdx * col.length + i}
              isVisible={isVisible}
              isLast={i === col.length - 1}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export function PhotoGallery() {
  const { lang } = useLang()
  const { ref, isVisible } = useAnimateOnScroll(0.05)

  return (
    <section id="photos" className="py-24 md:py-40 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-7xl font-serif font-light text-center text-foreground mb-16 md:mb-24 tracking-tight">
            {lang === "ru" ? "Наши приключения" : "Naše dobrodružství"}
          </h2>
        </div>

        {/* Mobile: 2 balanced columns */}
        <div className="flex items-stretch gap-3 md:hidden">
          {mobileCols.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-3">
              {col.map((photo, i) => (
                <PhotoItem
                  key={photo.src}
                  photo={photo}
                  index={colIdx * col.length + i}
                  isVisible={isVisible}
                  isLast={i === col.length - 1}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Desktop: 3 balanced columns */}
        <div className="hidden md:flex items-stretch gap-4">
          {desktopCols.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-4">
              {col.map((photo, i) => (
                <PhotoItem
                  key={photo.src}
                  photo={photo}
                  index={colIdx * col.length + i}
                  isVisible={isVisible}
                  isLast={i === col.length - 1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
