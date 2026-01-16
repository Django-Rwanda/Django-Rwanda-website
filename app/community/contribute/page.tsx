import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Users, Megaphone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contribute | Django Rwanda Community",
  description: "Help shape the future of Django Rwanda",
}

const contributionAreas = [
  {
    icon: Code,
    title: "Code & Development",
    description: "Contribute to our open-source projects and help build solutions for African communities.",
  },
  {
    icon: BookOpen,
    title: "Content & Documentation",
    description: "Help us create tutorials, guides, and documentation for the community.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Become a mentor, organize events, or moderate our community channels.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Outreach",
    description: "Help spread the word about Django Rwanda and grow our community.",
  },
]

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/community" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4">
            ← Back to Community
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">How to Contribute</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Every contribution matters. There are many ways to help build and improve Django Rwanda.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {contributionAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <Card key={idx} className="border border-border/50 p-8">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{area.title}</h3>
                  <p className="text-foreground/70">{area.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Getting Started */}
          <Card className="border border-border/50 p-8 bg-gradient-to-r from-accent/5 to-primary/5">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Getting Started</h2>
            <ol className="space-y-3 text-foreground/70 mb-6">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Join our community on Discord or Slack</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Introduce yourself and tell us your interests</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Check our contribution guidelines on GitHub</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Start contributing on an issue or create your own!</span>
              </li>
            </ol>
            <Link href="https://github.com/djangorwanda" target="_blank">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                View on GitHub
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  )
}
