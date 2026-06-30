import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Mail, Github, Twitter } from "lucide-react";
import { Logo } from "@/src/components/logo";
import { communityLinks } from "@/src/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-foreground/60">
              Empowering African developers through Django and
              community-driven innovation.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/djangorwanda"
                target="_blank"
                className="inline-flex rounded-lg bg-muted p-2 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/djangorwanda"
                target="_blank"
                className="inline-flex rounded-lg bg-muted p-2 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hello@djangorwanda.dev"
                className="inline-flex rounded-lg bg-muted p-2 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#community"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/#workshops"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/#events"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={communityLinks.join}
                  target="_blank"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get Involved</h4>
            <p className="text-sm text-foreground/60">
              Stay updated with the latest news and opportunities.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-lg border border-border bg-input px-4 py-2 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gradient" className="rounded-l-none">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/30 pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-foreground/60">
              &copy; 2026 Django Rwanda Community. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
