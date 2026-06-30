import { events, communityLinks } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import Link from "next/link";

export function EventsSection() {
  return (
    <section id="events" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Events & Meetups
          </h2>
          <p className="max-w-2xl text-foreground/70">
            Connect with fellow developers through our regular meetups,
            bootcamps, and collaborative events across Africa.
          </p>
        </div>

        {/* Events grid */}
        <div className="space-y-4">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden border border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                {/* Event info */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-foreground/70">{event.description}</p>

                  {/* Details */}
                  <div className="grid gap-3 pt-2 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link href={communityLinks.whatsapp} target="_blank" className="block md:w-auto">
                  <Button variant="gradient" className="w-full md:w-auto">
                    Register
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
