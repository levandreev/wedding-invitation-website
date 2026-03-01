import { MapPin, Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function EventDetails() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-primary mb-16 text-balance">
          {"When & Where"}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-primary mb-2">Date</h3>
                  <p className="text-lg text-foreground/80">Пятница, 26 июня 2026 года</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-primary mb-2">Time</h3>
                  <p className="text-lg text-foreground/80">4:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">{"Ceremony begins promptly"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-primary mb-2">Venue</h3>
                  <p className="text-lg text-foreground/80 mb-1">{"The Garden Estate"}</p>
                  <p className="text-muted-foreground">
                    {"1234 Maple Lane"}
                    <br />
                    {"Portland, Oregon 97201"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square w-full bg-muted">
                <img
                  src="/elegant-garden-wedding-venue-exterior.jpg"
                  alt="Venue"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 shadow-sm mt-8 bg-accent/20">
          <CardContent className="p-8 text-center">
            <p className="text-foreground/80 leading-relaxed">
              {
                "Ceremony and reception will be held at the same location. Parking is available on-site. Garden attire is encouraged."
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
