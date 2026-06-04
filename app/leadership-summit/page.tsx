import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import LeadershipSummitHero from "@/components/events/leadership-summit/LeadershipSummitHero";
import EventTabs from "@/components/events/EventTabs";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";

export const metadata = {
  title: "Leadership Summit 2026 — UX India",
  description:
    "For senior design professionals, heads of design, CDOs, and strategic decision-makers shaping design inside their organisations.",
};

export default function LeadershipSummitPage() {
  return (
    <main>
      <Nav forceSolid={false} />
      <LeadershipSummitHero />
      <EventTabs eventType="leadership" />
      <WhoAttends
        title="Who Attends"
        description="Built for leaders who decide."
        subtitle="Three days of high-signal conversation — on stage, in curated roundtables, and over CXO dinners — designed exclusively for design and product leaders shaping the future of businesses and systems."
      />
      <SpeakersGrid
        speakers={[
          {
            name: "Mohan Krishnaraj",
            role: "Design Leader",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Kate Moran",
            role: "VP Research",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Prof. Kirti Trivedi",
            role: "Professor",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Rucha Humnabadkar",
            role: "Design Leader",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Mirjam Wouters",
            role: "Design Director",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Donald Chesnut",
            role: "Chief Experience Officer",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            name: "Ravinder Singh",
            role: "Design Leader",
            image: "/placeholder.svg?height=300&width=300",
          },
        ]}
        showMorePlaceholder={true}
      />
      <VenueSection />
      <Footer />
    </main>
  );
}
