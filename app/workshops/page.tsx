import { workshops, communityLinks } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Django Workshops | Learn Django",
  description:
    "Comprehensive Django workshops from fundamentals to advanced patterns",
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Learning & Workshops
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Master Django through our comprehensive workshops. Choose your
              level and start learning today.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {workshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="group overflow-hidden border border-border/50 transition-all hover:border-primary/50 hover:shadow-lg flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col space-y-4 p-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    {workshop.title}
                  </h2>
                  <p className="text-foreground/70">{workshop.description}</p>

                  {/* Meta info */}
                  <div className="space-y-3 border-t border-border/30 pt-4">
                    <div className="flex items-center gap-2">
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
                      <span>{workshop.duration}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={communityLinks.join}
                    target="_blank"
                    className="mt-auto"
                  >
                    <Button variant="gradient" className="w-full">
                      Register
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
