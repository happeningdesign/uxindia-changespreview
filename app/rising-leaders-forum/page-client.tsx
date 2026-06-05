"use client";

import { useState } from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import RisingLeadersHero from "@/components/events/rising-leaders/RisingLeadersHero";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";
import ScheduleSkeleton from "@/components/events/ScheduleSkeleton";
import EventDayCards from "@/components/events/EventDayCards";

const risingLeadersDays = [
  {
    badge: "DAY 1",
    badgeColor: "orange" as const,
    date: "26 September",
    description: "Leadership foundations and mentorship sessions",
    bgColor: "bg-[#1C1C1E]",
  },
  {
    badge: "DAY 2",
    badgeColor: "blue" as const,
    date: "27 September",
    description: "Workshops, peer collaboration and networking",
    bgColor: "bg-[#0E4D5C]",
  },
];

export default function RisingLeadersPageClient() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main>
      <Nav forceSolid={false} />
      <RisingLeadersHero activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "overview" && (
        <>
          <section className="bg-[#0D0D0D] w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">Overview</h2>
                <p className="font-sans text-base text-white/70 leading-relaxed">
                  The Rising Leaders Forum is designed for emerging design leaders and mid-career professionals ready to step into leadership roles.
                </p>
              </div>
              <EventDayCards days={risingLeadersDays} />
            </div>
          </section>
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
        </>
      )}

      {activeTab === "schedule" && <ScheduleSkeleton />}
      
      <Footer />
    </main>
  );
}
