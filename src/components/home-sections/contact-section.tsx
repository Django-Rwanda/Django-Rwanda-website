import { Button } from "@/src/components/ui/button";
import { communityLinks } from "@/src/lib/constants";
import { Mail, MapPin, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-balance mx-auto max-w-2xl text-foreground/70">
            Have a question, an idea, or want to get involved? Reach out through
            any of the channels below — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact channels */}
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <Link
            href={`mailto:${communityLinks.email}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div className="inline-flex rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-sm text-foreground/60">{communityLinks.email}</p>
            </div>
          </Link>

          <Link
            href={communityLinks.github}
            target="_blank"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div className="inline-flex rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 p-3">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">GitHub</p>
              <p className="text-sm text-foreground/60">@djangorwanda</p>
            </div>
          </Link>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-8 text-center">
            <div className="inline-flex rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10 p-3">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Location</p>
              <p className="text-sm text-foreground/60">{communityLinks.location}</p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-primary/30 bg-gradient-to-r from-primary/5 to-primary-light/5 p-8 text-center md:p-12">
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            Ready to join the community?
          </h3>
          <p className="mb-6 text-foreground/70">
            Become part of a growing network of Django developers across Africa.
          </p>
          <Link href={communityLinks.join} target="_blank">
            <Button variant="gradient" size="lg">
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
