"use client";

import { useState } from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import LeadershipSummitHero from "@/components/events/leadership-summit/LeadershipSummitHero";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";
import ScheduleSkeleton from "@/components/events/ScheduleSkeleton";
import EventDayCards from "@/components/events/EventDayCards";

const leadershipSummitDays = [
  {
    badge: "KEYNOTES",
    badgeColor: "orange" as const,
    date: "23 September",
    description: "Opening keynotes and sessions",
    bgColor: "bg-[#1C1C1E]",
  },
  {
    badge: "GRAND CONF DAY 1",
    badgeColor: "blue" as const,
    date: "24 September",
    description: "Roundtables and workshops",
    bgColor: "bg-[#0E4D5C]",
  },
  {
    badge: "CONF DAY 2",
    badgeColor: "orange" as const,
    date: "25 September",
    description: "Closing sessions and networking",
    bgColor: "bg-[#4A2C3D]",
  },
];

export default function LeadershipSummitPageClient() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main>
      <Nav forceSolid={false} />
      <LeadershipSummitHero activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "overview" && (
        <>
          <section className="bg-[#0D0D0D] w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">Overview</h2>
                <p className="font-sans text-base text-white/70 leading-relaxed">
                  The Leadership Summit 2026 brings together the most influential design voices to shape the future of design leadership.
                </p>
              </div>
              <EventDayCards days={leadershipSummitDays} />
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
                talkType: "Grand Keynote",
              },
              {
                name: "Kate Moran",
                role: "VP Research, N/NG",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
                talkType: "Plenary Keynote",
              },
              {
                name: "Prof. Kirti Trivedi",
                role: "VDP, IIT Indore",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
                talkType: "Panel Discussion",
              },
              {
                name: "Rucha Humnabadkar",
                role: "Director Of Design, Youtube",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
                talkType: "Deep Dive Talk",
              },
              {
                name: "Mirjam Wouters",
                role: "Experience Labs Lead, Royal Philips",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
                talkType: "Spark Session",
              },
              {
                name: "Donald Chesnut",
                role: "CDO, CANDESCENT",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
                talkType: "Grand Keynote",
              },
              {
                name: "Ravinder Singh",
                role: "Co-Founder, Rishihood",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
                talkType: "Panel Discussion",
              },
            ]}
            showMorePlaceholder={true}
          />
          <VenueSection />
        </>
      )}

      {activeTab === "schedule" && <ScheduleSkeleton />}
      
      <Footer />
    </main>
  );
}
