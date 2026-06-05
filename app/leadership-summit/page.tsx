import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import LeadershipSummitHero from "@/components/events/leadership-summit/LeadershipSummitHero";
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
      <section className="bg-[#0D0D0D] max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="prose prose-invert max-w-none">
          <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">Overview</h2>
          <p className="font-sans text-base text-white/70 leading-relaxed">
            The Leadership Summit 2026 brings together the most influential design voices to shape the future of design leadership.
          </p>
        </div>
      </section>
      <WhoAttends
        title="Who Attends"
        description="Built for leaders who decide."
        subtitle="Three days of high-signal conversation — on stage, in curated roundtables, and over CXO dinners — designed exclusively for design and product leaders shaping the future of businesses and systems."
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
          {
            name: "Rucha Humnabadkar",
            role: "Director Of Design, Youtube",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          {
            name: "Mirjam Wouters",
            role: "Experience Labs Lead, Royal Philips",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          {
            name: "Donald Chesnut",
            role: "CDO, CANDESCENT",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          {
            name: "Ravinder Singh",
            role: "Co-Founder, Rishihood",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
          },
        ]}
        showMorePlaceholder={true}
      />
      <VenueSection />
      <Footer />
    </main>
  );
}
