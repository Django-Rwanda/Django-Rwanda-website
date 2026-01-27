import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Gift, Star, Crown, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sponsorship | Django Rwanda Community",
  description: "Partner with us to support the community",
};

const sponsorshipTiers = [
  {
    name: "Bronze",
    price: "$500",
    icon: Gift,
    benefits: [
      "Logo on website",
      "Social media mention",
      "Event booth access",
      "Community newsletter",
    ],
  },
  {
    name: "Silver",
    price: "$2,500",
    icon: Star,
    benefits: [
      "All Bronze benefits",
      "Speaking opportunity",
      "Job board listing",
      "Quarterly newsletter feature",
    ],
  },
  {
    name: "Gold",
    price: "$5,000",
    icon: Crown,
    benefits: [
      "All Silver benefits",
      "Exclusive workshop sponsorship",
      "Named event partnership",
      "Premium newsletter placement",
    ],
  },
  {
    name: "Platinum",
    price: "Custom",
    icon: Zap,
    benefits: [
      "All Gold benefits",
      "Custom partnership plan",
      "Executive visibility",
      "Strategic collaboration",
    ],
  },
];

export default function SponsorshipPage() {
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
            Become a Sponsor
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Partner with Django Rwanda to support African developers and make a
            lasting impact on our community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sponsorship Tiers */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              Sponsorship Packages
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sponsorshipTiers.map((tier, idx) => {
                const Icon = tier.icon;
                return (
                  <Card
                    key={idx}
                    className="border border-border/50 p-6 flex flex-col transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-6">
                      {tier.price}
                    </p>
                    <ul className="flex-1 space-y-2 mb-6">
                      {tier.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-foreground/70"
                        >
                          <span className="text-accent">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="gradient" className="w-full">
                      Get Started
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Why Sponsor */}
          <Card className="border border-border/50 p-8 bg-gradient-to-r from-accent/5 to-primary/5">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Why Sponsor Django Rwanda?
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Reach 500+ active developers and tech professionals across
                  Africa
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Build brand recognition in the growing African tech ecosystem
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Support open-source innovation and community growth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Access talent for hiring and partnerships</span>
              </li>
            </ul>
          </Card>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-foreground/70">Ready to partner with us?</p>
            <Link href="/contact">
              <Button variant="gradient">
                Contact Us for Sponsorship Info
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
