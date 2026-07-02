import { teamMembers } from "@/src/lib/constants";
import { Card } from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
} as const;

type SocialKey = keyof typeof socialIcons;

export function TeamSection() {
  return (
    <section id="team" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Meet Our Team
          </h2>
          <p className="text-xl font-semibold text-accent">
            The People Behind Django Rwanda
          </p>
          <p className="text-balance mx-auto max-w-2xl text-foreground/70">
            Our dedicated team of volunteers and leaders working together to
            build a thriving Django community in Rwanda and across Africa.
          </p>
        </div>

        {/* Team grid — smaller, equal-size cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const links = (Object.keys(socialIcons) as SocialKey[])
              .map((key) => ({ key, url: member.social?.[key] }))
              .filter((s): s is { key: SocialKey; url: string } => Boolean(s.url));

            return (
              <Card
                key={member.id}
                className="group flex h-full flex-col overflow-hidden border border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg"
              >
                {/* Square photo — anchored to top so faces aren't cropped */}
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary-light/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 text-center">
                  <h3 className="text-sm font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs text-foreground/60">
                    {member.bio}
                  </p>

                  {links.length > 0 && (
                    <div className="mt-auto flex justify-center gap-2 pt-3">
                      {links.map(({ key, url }) => {
                        const Icon = socialIcons[key];
                        return (
                          <Link
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on ${key}`}
                            className="rounded-full bg-muted p-1.5 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
