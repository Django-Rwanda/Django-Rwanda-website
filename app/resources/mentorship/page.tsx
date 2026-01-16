import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Star, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Mentorship Network | Django Rwanda Resources",
  description: "Connect with experienced mentors and build your network",
}

const mentorshipBenefits = [
  {
    icon: Users,
    title: "Connect with Experts",
    description: "Meet experienced entrepreneurs and technical leaders in the Django community",
  },
  {
    icon: Star,
    title: "Get Guidance",
    description: "Receive mentorship on startup strategy, technical decisions, and growth",
  },
  {
    icon: MessageSquare,
    title: "Share Knowledge",
    description: "Learn from others' experiences and share your own expertise",
  },
]

const mentors = [
  {
    name: "Sarah Kamya",
    role: "CTO, Startup Hub Rwanda",
    expertise: ["Django", "Scalability", "Tech Leadership"],
    availability: "Available for mentoring",
  },
  {
    name: "John Mutua",
    role: "Founder, Local Tech Solutions",
    expertise: ["Product Development", "Go-to-Market", "Business Strategy"],
    availability: "1-2 sessions/month",
  },
  {
    name: "Grace Mwangi",
    role: "Full Stack Developer, Tech Community Lead",
    expertise: ["Python", "Open Source", "Community Building"],
    availability: "Available",
  },
  {
    name: "David Nganga",
    role: "Business Development, East Africa Tech",
    expertise: ["Partnerships", "Fundraising", "Growth Strategy"],
    availability: "By appointment",
  },
]

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Mentorship Network</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Get guidance from experienced mentors and accelerate your entrepreneurial journey.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Why Join Our Mentorship Network?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {mentorshipBenefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <Card key={idx} className="border border-border/50 p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mb-2 font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-foreground/70">{benefit.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Mentors */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-foreground">Meet Our Mentors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mentors.map((mentor, idx) => (
                <Card key={idx} className="border border-border/50 p-6">
                  <h3 className="mb-1 text-lg font-bold text-foreground">{mentor.name}</h3>
                  <p className="mb-4 text-sm text-primary">{mentor.role}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {mentor.expertise.map((exp, i) => (
                      <span key={i} className="text-xs rounded-full bg-primary/10 px-2 py-1 text-primary">
                        {exp}
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-foreground/70">{mentor.availability}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Request Mentoring
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
