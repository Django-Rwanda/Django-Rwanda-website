import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import { Folder } from "lucide-react";

export const metadata = {
  title: "Sitemap | Django Rwanda Community",
  description: "Complete site structure and navigation",
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Community", href: "/#community" },
    ],
  },
  {
    title: "Learning",
    links: [
      { label: "All Workshops", href: "/workshops" },
      { label: "Django Fundamentals", href: "/workshops/1" },
      { label: "Advanced Django Patterns", href: "/workshops/2" },
      { label: "Building APIs with Django REST", href: "/workshops/3" },
      { label: "Full-Stack Django & React", href: "/workshops/4" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "All Events", href: "/events" },
      { label: "Monthly Meetup - Kigali", href: "/events/1" },
      { label: "Django Bootcamp - Q1 2025", href: "/events/2" },
      { label: "Open Source Contribution Day", href: "/events/3" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Community Hub", href: "/community" },
      { label: "Join Community", href: "/community/join" },
      { label: "Code of Conduct", href: "/community/code-of-conduct" },
      { label: "How to Contribute", href: "/community/contribute" },
      { label: "Sponsorship", href: "/community/sponsorship" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All Resources", href: "/resources" },
      { label: "Startup Toolkit", href: "/resources/startup-toolkit" },
      { label: "Funding Directory", href: "/resources/funding-directory" },
      { label: "Mentorship Network", href: "/resources/mentorship" },
      { label: "Problem Solutions", href: "/resources/problem-solutions" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            Sitemap
          </h1>
          <p className="text-foreground/70">
            Browse all pages and sections of Django Rwanda Community website
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sitemapSections.map((section, idx) => (
              <Card key={idx} className="border border-border/50 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                  <Folder className="h-5 w-5 text-accent" />
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
