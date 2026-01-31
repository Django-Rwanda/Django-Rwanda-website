import { workshops } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Clock, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WorkshopsSection() {
  return (
    <section id="workshops" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Learning & Workshops
          </h2>
          <p className="max-w-2xl text-foreground/70">
            Master Django through our comprehensive workshops, from fundamentals
            to advanced patterns. Learn by doing with real-world projects.
          </p>
        </div>

        {/* Workshops grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop) => (
            <Card
              key={workshop.id}
              className="group overflow-hidden border border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-muted">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {workshop.title}
                  </h3>
                </div>

                <p className="text-sm text-foreground/70">
                  {workshop.description}
                </p>

                {/* Meta info */}
                <div className="space-y-2 border-t border-border/30 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary"
                    >
                      {workshop.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Clock className="h-4 w-4" />
                    {workshop.duration}
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/workshops/${workshop.id}`} className="block">
                  <Button variant="gradient" className="w-full">
                    Learn More
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
