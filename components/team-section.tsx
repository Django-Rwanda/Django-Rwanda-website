import { teamMembers } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-20 md:py-32 bg-gradient-to-b from-muted to-background"
    >
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

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden border border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative mx-auto mt-6 h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 p-6 text-center">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-foreground/70">{member.bio}</p>

                {/* Social links placeholder */}
                <div className="flex justify-center gap-3 pt-2">
                  <button className="rounded-full bg-muted p-2 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-muted p-2 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-muted p-2 text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">
              Want to Join Our Team?
            </h3>
            <p className="max-w-md text-foreground/70">
              We&apos;re always looking for passionate individuals to help grow
              the Django community in Rwanda.
            </p>
            <a
              href="/community/contribute"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground transition-all hover:from-primary/90 hover:to-accent/90"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
