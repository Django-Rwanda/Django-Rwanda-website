import { Hero } from "@/src/components/hero";
import { CommunitySection } from "@/src/components/community-section";
import { WorkshopsSection } from "@/src/components/workshops-section";
import { EventsSection } from "@/src/components/events-section";
import { OpenSourceSection } from "@/src/components/open-source-section";
import { TeamSection } from "@/src/components/team-section";
import { ResourcesSection } from "@/src/components/resources-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunitySection />
      <WorkshopsSection />
      <EventsSection />
      <OpenSourceSection />
      <TeamSection />
      <ResourcesSection />
    </>
  );
}
