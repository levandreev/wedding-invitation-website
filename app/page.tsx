"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { OurStory } from "@/components/our-story"
import { PhotoGallery } from "@/components/photo-gallery"
import { Details } from "@/components/details"
import { Schedule } from "@/components/schedule"
import { Gifts } from "@/components/gifts"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <OurStory />
        <PhotoGallery />
        <Details />
        <Schedule />
        <Gifts />
        <Footer />
        <Toaster />
      </main>
    </LanguageProvider>
  )
}
