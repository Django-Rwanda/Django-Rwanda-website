import { communityMission } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import { Heart, Lightbulb, Globe } from "lucide-react";

const valueIcons = [Heart, Lightbulb, Globe];

export function CommunitySection() {
  return (
    <section id="community" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            {communityMission.title}
          </h2>
          <p className="text-xl font-semibold text-accent">
            {communityMission.subtitle}
          </p>
          <p className="text-balance mx-auto max-w-2xl text-foreground/70">
            {communityMission.description}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {communityMission.values.map((value, idx) => {
            const Icon = valueIcons[idx];
            return (
              <Card
                key={value.title}
                className="group relative overflow-hidden border border-border/50 bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-light/0 transition-all group-hover:from-primary/5 group-hover:to-primary-light/5" />

                {/* Content */}
                <div className="relative space-y-4">
                  <div className="inline-flex rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
