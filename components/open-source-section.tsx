import { openSourceProjects } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, UsersIcon } from "lucide-react"
import Link from "next/link"

export function OpenSourceSection() {
  return (
    <section id="open-source" className="relative bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Open Source & Contribution</h2>
          <p className="max-w-2xl text-foreground/70">
            Join our thriving open-source ecosystem. Contribute to projects that matter, learn from experienced
            developers, and build solutions for African communities.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {openSourceProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col border border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              {/* Header with icon */}
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-3">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <Badge className="bg-accent/10 text-accent">Open Source</Badge>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-foreground">{project.title}</h3>
              <p className="flex-1 text-foreground/70">{project.description}</p>

              {/* Stats */}
              <div className="my-6 flex gap-4 border-y border-border/30 py-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <UsersIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{project.contributors} contributors</span>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5 bg-transparent">
                Contribute
              </Button>
            </Card>
          ))}
        </div>

        {/* Contribution CTA */}
        <div className="mt-16 rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5 p-8 text-center md:p-12">
          <h3 className="mb-2 text-2xl font-bold text-foreground">Ready to Contribute?</h3>
          <p className="mb-6 text-foreground/70">
            Every contribution matters. Whether you're a beginner or experienced developer, there's a place for you in
            our open-source community.
          </p>
          <Link href="/community/contribute">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Start Contributing Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
