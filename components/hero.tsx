import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-gradient-to-b from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Welcome to the Django Rwanda Community
            </span>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              Empower African Developers with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Django
              </span>
            </h1>
            <p className="text-balance mx-auto max-w-2xl text-lg text-foreground/70 md:text-xl">
              Join a vibrant community of developers building innovative
              solutions. Learn, contribute, collaborate, and shape the future of
              tech in Africa.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent"
              >
                Explore Resources
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 md:gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary md:text-3xl">
                500+
              </div>
              <p className="text-sm text-foreground/60">Community Members</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent md:text-3xl">
                50+
              </div>
              <p className="text-sm text-foreground/60">Events Hosted</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary md:text-3xl">
                20+
              </div>
              <p className="text-sm text-foreground/60">Open Source Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
