import { Button } from "@/src/components/ui/button";
import { ArrowRight, Sparkles, Code2, Users, Zap } from "lucide-react";
import Link from "next/link";
import { communityLinks } from "@/src/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary green glows */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary-light/15 blur-3xl animate-pulse" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-primary/40 animate-hero-float-slow" />
        <div className="absolute top-40 right-20 h-3 w-3 rounded-full bg-primary-light/50 animate-hero-float-medium" />
        <div className="absolute bottom-32 left-1/4 h-2 w-2 rounded-full bg-primary/30 animate-hero-float-fast" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Welcome to the Django Rwanda Community
            </span>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              Empower African Developers with{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-hero-shimmer">
                  Django
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full opacity-60" />
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
            <Link href={communityLinks.join} target="_blank">
              <Button
                size="lg"
                variant="gradient"
                className="text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/workshops">
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-primary/30 hover:bg-primary/5 hover:border-primary/50"
              >
                Explore Workshops
              </Button>
            </Link>
          </div>

          {/* Stats with green styling */}
          <div className="grid grid-cols-3 gap-4 pt-12 md:gap-8">
            <div className="group relative space-y-2 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-primary hidden sm:block" />
                <span className="text-2xl font-bold text-primary md:text-3xl">
                  500+
                </span>
              </div>
              <p className="relative text-sm text-foreground/60">
                Community Members
              </p>
            </div>
            <div className="group relative space-y-2 rounded-2xl border border-primary-light/10 bg-gradient-to-br from-primary-light/5 to-transparent p-6 transition-all hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary-light/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-primary-light hidden sm:block" />
                <span className="text-2xl font-bold text-primary-light md:text-3xl">
                  50+
                </span>
              </div>
              <p className="relative text-sm text-foreground/60">
                Events Hosted
              </p>
            </div>
            <div className="group relative space-y-2 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <Code2 className="h-5 w-5 text-primary hidden sm:block" />
                <span className="text-2xl font-bold text-primary md:text-3xl">
                  20+
                </span>
              </div>
              <p className="relative text-sm text-foreground/60">
                Open Source Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
