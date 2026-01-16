import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Funding Directory | Django Rwanda Resources",
  description: "Find investors, grants, and funding opportunities for African startups",
}

const fundingSources = [
  {
    category: "Venture Capital",
    items: [
      { name: "Founder Institute Africa", description: "Pre-seed funding and mentorship" },
      { name: "Disrupt Africa Ventures", description: "Early-stage African tech ventures" },
      { name: "CcHub Investment", description: "Central Africa focused investments" },
    ],
  },
  {
    category: "Grants & Accelerators",
    items: [
      { name: "Google for Startups", description: "Free resources and potential funding" },
      { name: "World Bank Business Competition", description: "Grant opportunities for tech startups" },
      { name: "Kuza Community Fund", description: "African entrepreneur support" },
    ],
  },
  {
    category: "Government Support",
    items: [
      { name: "Rwanda Development Board", description: "Government support for tech companies" },
      { name: "Vision 2050 Initiatives", description: "National development programs" },
      { name: "Special Economic Zones", description: "Tax incentives and business support" },
    ],
  },
]

export default function FundingDirectoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Funding Directory</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Discover investors, grants, and funding opportunities to fuel your startup growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {fundingSources.map((category, idx) => (
              <div key={idx}>
                <h2 className="mb-6 text-2xl font-bold text-foreground flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-accent" />
                  {category.category}
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {category.items.map((item, i) => (
                    <Card key={i} className="border border-border/50 p-6">
                      <h3 className="mb-2 font-bold text-foreground">{item.name}</h3>
                      <p className="mb-4 text-sm text-foreground/70">{item.description}</p>
                      <Button variant="outline" size="sm" className="w-full bg-transparent gap-2">
                        Learn More
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
