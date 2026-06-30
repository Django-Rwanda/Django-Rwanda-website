import { events, communityLinks } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type CommunityEvent = (typeof events)[number];

const upcomingEvents = events.filter((e) => e.status === "upcoming");
const pastEvents = events.filter((e) => e.status === "past");

function EventMeta({ event }: { event: CommunityEvent }) {
  const isPast = event.status === "past";
  return (
    <div className="grid gap-3 pt-2 sm:grid-cols-2">
      <div className="flex items-center gap-2 text-sm text-foreground/60">
        <Calendar className="h-4 w-4 text-primary" />
        <span>{event.date}</span>
      </div>
      {event.time && (
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <Clock className="h-4 w-4 text-primary" />
          <span>{event.time}</span>
        </div>
      )}
      {event.location && (
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{event.location}</span>
        </div>
      )}
      {event.attendees > 0 && (
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <Users className="h-4 w-4 text-primary" />
          <span>
            {event.attendees} {isPast ? "attended" : "going"}
          </span>
        </div>
      )}
    </div>
  );
}

function UpcomingCard({ event }: { event: CommunityEvent }) {
  return (
    <Card className="group overflow-hidden border border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 space-y-3">
          <h4 className="text-xl font-bold text-foreground">{event.title}</h4>
          <p className="text-foreground/70">{event.description}</p>
          <EventMeta event={event} />
        </div>
        <Link
          href={event.registerUrl || communityLinks.whatsapp}
          target="_blank"
          className="block md:w-auto"
        >
          <Button variant="gradient" className="w-full md:w-auto">
            Register
          </Button>
        </Link>
      </div>
    </Card>
  );
}

function PastCard({ event }: { event: CommunityEvent }) {
  return (
    <Card className="overflow-hidden border border-border/50 bg-muted/30 transition-all hover:border-border">
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <h4 className="text-xl font-bold text-foreground/90">
              {event.title}
            </h4>
            <Badge
              variant="secondary"
              className="bg-foreground/10 text-foreground/60"
            >
              Past
            </Badge>
          </div>
          <p className="text-foreground/60">{event.description}</p>
          <EventMeta event={event} />
        </div>
        {event.recapUrl ? (
          <Link
            href={event.recapUrl}
            target="_blank"
            className="block md:w-auto"
          >
            <Button variant="outline" className="w-full md:w-auto">
              View recap
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Events & Meetups
          </h2>
          <p className="max-w-2xl text-foreground/70">
            Connect with fellow developers through our regular meetups,
            bootcamps, and collaborative events across Africa.
          </p>
        </div>

        {/* Upcoming */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-foreground">
              Upcoming Events
            </h3>
            {upcomingEvents.length > 0 && (
              <Badge className="bg-primary/10 text-primary">
                {upcomingEvents.length}
              </Badge>
            )}
          </div>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <UpcomingCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <Card className="border border-dashed border-border/60 p-8 text-center">
              <p className="text-foreground/60">
                No upcoming events scheduled right now.{" "}
                <Link
                  href={communityLinks.whatsapp}
                  target="_blank"
                  className="font-medium text-primary hover:underline"
                >
                  Join the community
                </Link>{" "}
                to be the first to know.
              </p>
            </Card>
          )}
        </div>

        {/* Past */}
        {pastEvents.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Past Events</h3>
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <PastCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
