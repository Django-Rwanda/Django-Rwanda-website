import { events } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Calendar, MapPin, Users, Clock, Share2, Bell } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const event = events.find((e) => e.id === Number.parseInt(params.id));
  return {
    title: `${event?.title} | Django Rwanda Events`,
    description: event?.description,
  };
}

export default async function EventDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const event = events.find((e) => e.id === Number.parseInt(params.id));

  if (!event) {
    notFound();
  }

  const agenda = [
    { time: "6:00 PM", activity: "Registration & Networking" },
    { time: "6:15 PM", activity: "Welcome & Announcements" },
    { time: "6:30 PM", activity: "Main Presentation" },
    { time: "7:15 PM", activity: "Q&A Session" },
    { time: "7:45 PM", activity: "Networking & Refreshments" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4"
          >
            ← Back to Events
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            {event.title}
          </h1>
          <p className="text-lg text-foreground/70">{event.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Event Details Card */}
              <Card className="border border-border/50 p-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Event Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground/60">
                        Date
                      </p>
                      <p className="text-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground/60">
                        Time
                      </p>
                      <p className="text-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground/60">
                        Location
                      </p>
                      <p className="text-foreground">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground/60">
                        Attendees
                      </p>
                      <p className="text-foreground">
                        {event.attendees} people attending
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Agenda */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Agenda
                </h2>
                <div className="space-y-3">
                  {agenda.map((item, idx) => (
                    <Card
                      key={idx}
                      className="border border-border/50 p-4 flex items-center gap-4"
                    >
                      <div className="rounded-lg bg-primary/10 px-3 py-2 min-w-fit">
                        <p className="font-semibold text-primary text-sm">
                          {item.time}
                        </p>
                      </div>
                      <p className="text-foreground">{item.activity}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <Card className="border border-border/50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  What to Expect
                </h2>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      Network with Django developers and tech enthusiasts from
                      across the region
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      Learn from experienced speakers and community leaders
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      Discover job opportunities and collaboration possibilities
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Enjoy refreshments and casual networking time</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card className="sticky top-24 border border-border/50 p-6">
                <h3 className="mb-4 font-bold text-foreground">
                  Ready to attend?
                </h3>
                <Link
                  href={`/register/events/${event.id}`}
                  className="block mb-3"
                >
                  <Button variant="gradient" className="w-full">
                    Register Now
                  </Button>
                </Link>
                <p className="text-xs text-foreground/60">
                  Limited spots available
                </p>
              </Card>

              {/* Share */}
              <Card className="border border-border/50 p-6">
                <h3 className="mb-4 font-bold text-foreground">Share Event</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    Copy Link
                  </Button>
                </div>
              </Card>

              {/* Reminders */}
              <Card className="border border-border/50 p-6">
                <h3 className="mb-4 font-bold text-foreground flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Get Notified
                </h3>
                <Button variant="outline" className="w-full bg-transparent">
                  Set Reminder
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
