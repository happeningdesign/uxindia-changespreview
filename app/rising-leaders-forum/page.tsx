import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import RisingLeadersHero from "@/components/events/rising-leaders/RisingLeadersHero";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";
import RisingLeadersPageClient from "./page-client";

export const metadata = {
  title: "Rising Leaders Forum 2026 — UX India",
  description:
    "For emerging design leaders, mid-career professionals, and leaders in transition ready to scale their impact.",
};

export default function RisingLeadersForum() {
  return <RisingLeadersPageClient />;
}
