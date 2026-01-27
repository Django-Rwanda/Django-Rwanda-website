import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Startup Toolkit | Django Rwanda Resources",
  description: "Essential tools and guides for launching your startup",
};

const toolkitSections = [
  {
    title: "Planning & Strategy",
    items: [
      {
        name: "Business Model Canvas",
        description: "Template for mapping your business model",
      },
      {
        name: "Go-to-Market Strategy Guide",
        description: "Step-by-step guide for market entry",
      },
      {
        name: "Pitch Deck Template",
        description: "Professional presentation template",
      },
    ],
  },
  {
    title: "Legal & Compliance",
    items: [
      {
        name: "Business Registration Checklist",
        description: "Steps for registering in Rwanda",
      },
      {
        name: "Terms & Conditions Template",
        description: "Legal documents for your business",
      },
      {
        name: "Privacy Policy Generator",
        description: "GDPR-compliant privacy policy tool",
      },
    ],
  },
  {
    title: "Financial",
    items: [
      {
        name: "Financial Projections Template",
        description: "3-year financial forecast tool",
      },
      {
        name: "Budgeting Spreadsheet",
        description: "Track and manage your budget",
      },
      {
        name: "Pricing Calculator",
        description: "Determine optimal pricing strategy",
      },
    ],
  },
  {
    title: "Marketing & Sales",
    items: [
      {
        name: "Marketing Plan Template",
        description: "Comprehensive marketing strategy guide",
      },
      {
        name: "Social Media Calendar",
        description: "Plan your social media content",
      },
      {
        name: "Customer Acquisition Playbook",
        description: "Strategies for acquiring customers",
      },
    ],
  },
];

export default function StartupToolkitPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4"
          >
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            Startup Toolkit
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Essential templates, guides, and tools to help you launch and grow
            your startup successfully.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {toolkitSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {section.items.map((item, i) => (
                    <Card key={i} className="border border-border/50 p-6">
                      <h3 className="mb-2 font-bold text-foreground">
                        {item.name}
                      </h3>
                      <p className="mb-4 text-sm text-foreground/70">
                        {item.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
