import { events } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Events & Meetups | Django Rwanda Community",
  description:
    "Join our community events, meetups, and bootcamps across Africa",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Events & Meetups
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Connect with fellow developers through our regular meetups,
              bootcamps, and collaborative events.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="border border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  {/* Event info */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
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
                  <Link href={`/events/${event.id}`} className="md:w-auto">
                    <Button variant="gradient" className="w-full md:w-auto">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
