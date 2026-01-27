import { Card } from "@/src/components/ui/card";
import { Users, BookOpen, Share2, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Community | Django Rwanda",
  description: "Join the Django Rwanda Community and grow with us",
};

const communityLinks = [
  {
    id: 1,
    title: "Join Us",
    description: "Become part of our thriving community of Django developers",
    href: "/community/join",
    icon: Users,
    color: "from-primary/10 to-accent/10",
  },
  {
    id: 2,
    title: "Code of Conduct",
    description: "Our values and principles for a respectful community",
    href: "/community/code-of-conduct",
    icon: BookOpen,
    color: "from-secondary/10 to-primary/10",
  },
  {
    id: 3,
    title: "Contribute",
    description: "Help shape the future of Django Rwanda",
    href: "/community/contribute",
    icon: Share2,
    color: "from-accent/10 to-secondary/10",
  },
  {
    id: 4,
    title: "Sponsorship",
    description: "Partner with us to support the community",
    href: "/community/sponsorship",
    icon: Gift,
    color: "from-primary/10 to-secondary/10",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Community
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Join, learn, contribute, and grow with Django Rwanda. Choose your
              journey below.
            </p>
          </div>
        </div>
      </section>

      {/* Community Links Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {communityLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.id} href={item.href}>
                  <Card
                    className={`h-full border border-border/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer bg-gradient-to-br ${item.color}`}
                  >
                    <div className="mb-4 inline-flex rounded-lg bg-background p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mb-6 text-foreground/70">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
