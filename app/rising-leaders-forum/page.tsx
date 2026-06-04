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
            role: "Global Head, Cognizant",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
          },
          {
            name: "Kate Moran",
            role: "VP Research, N/NG",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
          {
            name: "Prof. Kirti Trivedi",
            role: "VDP, IIT Indore",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
        ]}
        showMorePlaceholder={true}
      />
      <VenueSection />
      <Footer />
    </main>
  );
}
