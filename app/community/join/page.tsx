import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Join Community | Django Rwanda",
  description: "Become a member of Django Rwanda Community",
};

const benefits = [
  "Access to exclusive workshops and training materials",
  "Join networking events and meetups",
  "Collaborate on open-source projects",
  "Get mentorship from experienced developers",
  "Access to job board and opportunities",
  "Connect with 500+ community members",
];

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4"
          >
            ← Back to Community
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            Join Django Rwanda
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Be part of a vibrant community of African developers dedicated to
            innovation and learning.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Membership Benefits
              </h2>
              <Card className="border border-border/50 p-8">
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-foreground/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Signup Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Get Started
              </h2>
              <Card className="border border-border/50 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select Experience Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <textarea
                    placeholder="Tell us about yourself..."
                    rows={4}
                    className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="gradient" className="w-full">
                    Join Community
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
