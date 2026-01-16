import { startupResources } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { BookOpen, DollarSign, Handshake, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Resources for Entrepreneurs | Django Rwanda",
  description: "Startup toolkit, funding directory, mentorship, and resources for African entrepreneurs",
}

const resourceIcons = [BookOpen, DollarSign, Handshake, Lightbulb]
const resourceLinks = [
  "/resources/startup-toolkit",
  "/resources/funding-directory",
  "/resources/mentorship",
  "/resources/problem-solutions",
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Resources for Entrepreneurs</h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Everything you need to launch and grow your startup. Access tools, funding, mentorship, and solutions for
              African markets.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {startupResources.map((resource, idx) => {
              const Icon = resourceIcons[idx]
              return (
                <Link key={resource.id} href={resourceLinks[idx]}>
                  <Card className="group h-full border border-border/50 p-8 transition-all hover:border-accent/50 hover:shadow-lg cursor-pointer flex flex-col">
                    {/* Icon */}
                    <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 p-3 w-fit">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-bold text-foreground flex-1">{resource.title}</h3>
                    <p className="mb-6 text-foreground/70">{resource.description}</p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent font-medium">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
