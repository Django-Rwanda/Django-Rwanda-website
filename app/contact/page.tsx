import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export const metadata = {
  title: "Contact Us | Django Rwanda Community",
  description: "Get in touch with Django Rwanda Community",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Contact Us</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@djangorwanda.dev" className="text-primary hover:text-primary/80">
                        hello@djangorwanda.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+250788123456" className="text-primary hover:text-primary/80">
                        +250 (0) 788 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-lg bg-secondary/10 p-3">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-foreground/70">Kigali Innovation Hub, Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border border-border/50 p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="mb-3 font-bold text-foreground">Response Time</h3>
                <p className="text-sm text-foreground/70">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border border-border/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
