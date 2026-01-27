import { Card } from "@/src/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Code of Conduct | Django Rwanda Community",
  description: "Our community values and principles",
};

const sections = [
  {
    title: "Our Pledge",
    content:
      "We are committed to providing a welcoming and inspiring community for all. We pledge that everyone will be treated with respect and dignity, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, sexual identity and orientation, or socioeconomic status.",
  },
  {
    title: "Our Standards",
    content:
      "We expect all community members to uphold the following standards: be respectful and inclusive, be professional in all interactions, take responsibility for your words and actions, and support fellow community members.",
  },
  {
    title: "Unacceptable Behavior",
    items: [
      "Harassment or discrimination of any kind",
      "Offensive comments related to personal characteristics",
      "Trolling or intentional disruption",
      "Publishing others' private information",
      "Any illegal or unethical conduct",
    ],
  },
  {
    title: "Enforcement",
    content:
      "Violations of this code of conduct will be taken seriously and may result in temporary or permanent removal from the community. Reports should be sent to conduct@djangorwanda.dev.",
  },
];

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mb-4"
          >
            ← Back to Community
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            Code of Conduct
          </h1>
          <p className="text-lg text-foreground/70">
            Our values and principles for a respectful and inclusive community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <Card key={idx} className="border border-border/50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-foreground/70 mb-4">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-foreground/70">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
