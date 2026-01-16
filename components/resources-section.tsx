import { startupResources } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, DollarSign, Handshake, Lightbulb } from "lucide-react"
import Link from "next/link"

const resourceIcons = [BookOpen, DollarSign, Handshake, Lightbulb]
const resourceHrefs = [
  "/resources/startup-toolkit",
  "/resources/funding-directory",
  "/resources/mentorship",
  "/resources/problem-solutions",
]

export function ResourcesSection() {
  return (
    <section id="resources" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Resources for Entrepreneurs</h2>
          <p className="max-w-2xl text-foreground/70">
            Build local solutions to African challenges. Access startup resources, connect with mentors, and transform
            your ideas into thriving businesses.
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {startupResources.map((resource, idx) => {
            const Icon = resourceIcons[idx]
            return (
              <Card
                key={resource.id}
                className="group flex flex-col border border-border/50 p-8 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 p-3">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold text-foreground">{resource.title}</h3>
                <p className="flex-1 text-foreground/70">{resource.description}</p>

                {/* CTA */}
                <Link href={resourceHrefs[idx]}>
                  <Button variant="outline" className="w-full mt-4 border-accent/30 hover:bg-accent/5 bg-transparent">
                    Explore
                  </Button>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
