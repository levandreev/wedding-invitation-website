import { Hero } from "@/components/hero"
import { OurStory } from "@/components/our-story"
import { PhotoGallery } from "@/components/photo-gallery"
import { CeremonyDetails } from "@/components/ceremony-details"
import { ReceptionDetails } from "@/components/reception-details"
import { Schedule } from "@/components/schedule"
import { Gifts } from "@/components/gifts"
import { RSVP } from "@/components/rsvp"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <PhotoGallery />
      <CeremonyDetails />
      <ReceptionDetails />
      <Schedule />
      <Gifts />
      <RSVP />
      <Footer />
    </main>
  )
}
