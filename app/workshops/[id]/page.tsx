import { workshops } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    id: workshop.id.toString(),
  }))
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const workshop = workshops.find((w) => w.id === Number.parseInt(params.id))
  return {
    title: `${workshop?.title} | Django Workshop`,
    description: workshop?.description,
  }
}

export default async function WorkshopDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const workshop = workshops.find((w) => w.id === Number.parseInt(params.id))

  if (!workshop) {
    notFound()
  }

  const syllabus = [
    { week: 1, topics: ["Introduction to Django", "Project Setup", "Models & Database"] },
    { week: 2, topics: ["Views & URL Routing", "Templates", "Static Files"] },
    { week: 3, topics: ["Forms & Validation", "Authentication", "Permissions"] },
    { week: 4, topics: ["Deployment", "Best Practices", "Project Showcase"] },
  ]

  const schedule = [
    { day: "Monday & Wednesday", time: "6:00 PM - 8:00 PM", type: "Live Sessions" },
    { day: "Friday", time: "4:00 PM - 6:00 PM", type: "Q&A & Office Hours" },
    { day: "Self-paced", time: "Anytime", type: "Video Lessons & Assignments" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/workshops" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4">
            ← Back to Workshops
          </Link>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-foreground md:text-5xl">{workshop.title}</h1>
                <p className="max-w-2xl text-lg text-foreground/70">{workshop.description}</p>
                <div className="flex flex-wrap gap-3 items-center pt-4">
                  <Badge className="bg-secondary/20 text-secondary">{workshop.level}</Badge>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden rounded-lg bg-muted">
              <Image src={workshop.image || "/placeholder.svg"} alt={workshop.title} fill className="object-cover" />
            </div>

            {/* Overview */}
            <Card className="border border-border/50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Course Overview</h2>
              <p className="mb-4 text-foreground/70">
                This {workshop.duration} {workshop.level.toLowerCase()} level course is designed to help you master{" "}
                {workshop.title.toLowerCase()}. You'll learn through hands-on projects, real-world examples, and
                guidance from experienced instructors.
              </p>
              <p className="text-foreground/70">
                By the end of this course, you'll have built multiple applications and be ready to contribute to
                production Django projects.
              </p>
            </Card>

            {/* Schedule */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Class Schedule</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {schedule.map((item, idx) => (
                  <Card key={idx} className="border border-border/50 p-6">
                    <div className="mb-2 inline-flex rounded-lg bg-accent/10 p-2">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">{item.type}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{item.day}</p>
                    <p className="text-sm text-primary font-medium">{item.time}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Course Syllabus</h2>
              <div className="space-y-4">
                {syllabus.map((week) => (
                  <Card key={week.week} className="border border-border/50 p-6">
                    <h3 className="font-semibold text-foreground mb-3">Week {week.week}</h3>
                    <ul className="space-y-2">
                      {week.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-3 text-foreground/70">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <Card className="border border-border/50 p-8 bg-gradient-to-r from-accent/5 to-primary/5">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Prerequisites</h2>
              <ul className="space-y-2 text-foreground/70">
                <li>• Basic Python knowledge or completion of Python fundamentals course</li>
                <li>• Understanding of HTML and CSS</li>
                <li>• A computer with Python installed</li>
                <li>• 5-7 hours per week for coursework and assignments</li>
              </ul>
            </Card>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Link href="/register/workshops" className="flex-1 sm:flex-none">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg py-6">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact" className="flex-1 sm:flex-none">
                <Button variant="outline" className="w-full text-lg py-6 bg-transparent">
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
