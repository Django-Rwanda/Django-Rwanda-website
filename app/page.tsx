import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CommunitySection } from "@/components/community-section";
import { WorkshopsSection } from "@/components/workshops-section";
import { EventsSection } from "@/components/events-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { TeamSection } from "@/components/team-section";
import { ResourcesSection } from "@/components/resources-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <CommunitySection />
      <WorkshopsSection />
      <EventsSection />
      <OpenSourceSection />
      <TeamSection />
      <ResourcesSection />
      <Footer />
    </main>
  );
}
