import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, Users, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Local Problem Solutions | Django Rwanda Resources",
  description: "Build solutions for challenges specific to African communities",
}

const problemAreas = [
  {
    icon: Users,
    title: "Healthcare Access",
    description: "Solutions for improving healthcare delivery in remote areas",
    ideas: ["Telemedicine platform for rural clinics", "Mobile health records system", "Vaccination tracking system"],
  },
  {
    icon: MapPin,
    title: "Agriculture & Food Security",
    description: "Tech solutions for smallholder farmers",
    ideas: [
      "Crop yield prediction and advisory system",
      "Farmer marketplace connecting to buyers",
      "Weather and market data platform",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Inclusion",
    description: "Making financial services accessible to the unbanked",
    ideas: [
      "Mobile banking platform for small businesses",
      "Microfinance management system",
      "Community savings group platform",
    ],
  },
  {
    icon: Lightbulb,
    title: "Education",
    description: "Innovative solutions for educational challenges",
    ideas: [
      "Offline-first learning management system",
      "STEM skills platform for youth",
      "Teacher training and resource portal",
    ],
  },
]

export default function ProblemSolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Local Problem Solutions</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Discover challenges in African communities and build impactful solutions that create real change.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {problemAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <Card key={idx} className="border border-border/50 p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="mb-2 text-2xl font-bold text-foreground">{area.title}</h2>
                      <p className="text-foreground/70">{area.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-border/30 pt-6">
                    <h3 className="font-semibold text-foreground">Problem-Solution Ideas:</h3>
                    {area.ideas.map((idea, i) => (
                      <div key={i} className="flex items-start gap-3 text-foreground/70">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    Explore Opportunities
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
