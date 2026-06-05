import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import LeadershipSummitHero from "@/components/events/leadership-summit/LeadershipSummitHero";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";
import LeadershipSummitPageClient from "./page-client";

export const metadata = {
  title: "Leadership Summit 2026 — UX India",
  description:
    "For senior design professionals, heads of design, CDOs, and strategic decision-makers shaping design inside their organisations.",
};

export default function LeadershipSummitPage() {
  return <LeadershipSummitPageClient />;
}
