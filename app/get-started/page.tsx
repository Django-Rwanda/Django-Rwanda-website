import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { BookOpen, Users, Code, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Get Started | Django Rwanda Community",
  description: "Start your journey with Django Rwanda Community",
};

const paths = [
  {
    icon: BookOpen,
    title: "I Want to Learn Django",
    description:
      "Master Django through comprehensive workshops and training programs",
    cta: "Browse Workshops",
    href: "/workshops",
  },
  {
    icon: Users,
    title: "I Want to Join the Community",
    description:
      "Connect with other developers, attend events, and grow together",
    cta: "Join Us",
    href: "/community/join",
  },
  {
    icon: Code,
    title: "I Want to Contribute",
    description:
      "Help build open-source projects and solve real-world problems",
    cta: "Learn How",
    href: "/community/contribute",
  },
  {
    icon: Lightbulb,
    title: "I Want to Start a Startup",
    description: "Access resources, mentorship, and funding opportunities",
    cta: "Explore Resources",
    href: "/resources",
  },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Get Started with Django Rwanda
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Choose your path and begin your journey with Django Rwanda
              Community
            </p>
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {paths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <Link key={idx} href={path.href}>
                  <Card className="group h-full border border-border/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer flex flex-col bg-gradient-to-br from-background to-muted/30">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {path.title}
                    </h3>
                    <p className="mb-6 flex-1 text-foreground/70">
                      {path.description}
                    </p>

                    <Button variant="gradient" className="w-full">
                      {path.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-t border-border bg-gradient-to-b from-muted to-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Quick Start in 3 Steps
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Sign Up",
                description:
                  "Create your free Django Rwanda Community account in minutes",
              },
              {
                step: "2",
                title: "Introduce Yourself",
                description:
                  "Tell us about your interests and experience level",
              },
              {
                step: "3",
                title: "Join the Community",
                description: "Start connecting, learning, and growing with us",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/auth/signup">
              <Button variant="gradient">
                Create Your Account Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
