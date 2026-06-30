import { Hero } from "@/src/components/home-sections/hero";
import { CommunitySection } from "@/src/components/home-sections/community-section";
import { WorkshopsSection } from "@/src/components/home-sections/workshops-section";
import { EventsSection } from "@/src/components/home-sections/events-section";
import { OpenSourceSection } from "@/src/components/home-sections/open-source-section";
import { TeamSection } from "@/src/components/home-sections/team-section";
import { ContactSection } from "@/src/components/home-sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunitySection />
      <WorkshopsSection />
      <EventsSection />
      <OpenSourceSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
