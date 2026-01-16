import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { events } from "@/lib/constants"
import { Check } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const event = events.find((e) => e.id === Number.parseInt(params.id))
  return {
    title: `Register for ${event?.title} | Django Rwanda`,
    description: `Register for the ${event?.title} event`,
  }
}

export default async function EventRegistrationPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const event = events.find((e) => e.id === Number.parseInt(params.id))

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="mx-auto w-full max-w-2xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Register for Event</h1>
          <p className="mt-2 text-lg text-primary font-medium">{event.title}</p>
        </div>

        <Card className="border border-border/50 p-8">
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">First Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Last Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
              <input
                type="email"
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Company/Organization</label>
              <input
                type="text"
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                How did you hear about this event?
              </label>
              <select className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select option</option>
                <option>Social Media</option>
                <option>Email Newsletter</option>
                <option>Friend Referral</option>
                <option>Website</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Special Requests</label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Any dietary restrictions, accessibility needs, etc..."
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-foreground/60">
              <input type="checkbox" className="rounded border border-border" />
              <span>I agree to the Code of Conduct and community guidelines</span>
            </label>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 py-3">
              Confirm Registration
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
