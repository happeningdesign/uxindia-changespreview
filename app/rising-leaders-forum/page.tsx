import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import RisingLeadersHero from "@/components/events/rising-leaders/RisingLeadersHero";
import EventTabs from "@/components/events/EventTabs";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";

export const metadata = {
  title: "Rising Leaders Forum 2026 — UX India",
  description:
    "For emerging design leaders, mid-career professionals, and leaders in transition ready to scale their impact.",
};

export default function RisingLeadersForum() {
  return (
    <main>
      <Nav forceSolid={false} />
      <RisingLeadersHero />
      <EventTabs eventType="rising" />
      <WhoAttends
        title="Who Attends"
        description="Built for leaders at the threshold."
        subtitle="Two days of intensive learning, peer connection, and mentorship from seasoned design leaders. Exclusive to professionals stepping into leadership roles and looking to accelerate their growth."
      />
      <SpeakersGrid
        speakers={[
          {
            name: "Mohan Krishnaraj",
            role: "Design Advisor",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Kate Moran",
            role: "UX Researcher",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Prof. Kirthi Trivedi",
            role: "Design Educator",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Rucha Hannabudhar",
            role: "Design Lead",
            image: "/placeholder.svg?height=300&width=300",
          },
        ]}
      />
      <VenueSection />
      <Footer />
    </main>
  );
}
