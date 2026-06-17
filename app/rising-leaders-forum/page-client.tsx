"use client";

import { useState } from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import RisingLeadersHero from "@/components/events/rising-leaders/RisingLeadersHero";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";
import RisingSchedule from "@/components/events/RisingSchedule";
import risingLeadersSpeakers from "@/data/rising-leaders-speakers";
import EventDayCards from "@/components/events/EventDayCards";

const risingLeadersDays = [
  {
    badge: "DAY 1",
    badgeColor: "orange" as const,
    date: "26 September",
    description: "Intensive mentorship sessions with seasoned design leaders, foundational talks on transitioning into leadership, and hands-on workshops on team building and strategy.",
    bgColor: "bg-[#1C1C1E]",
  },
  {
    badge: "DAY 2",
    badgeColor: "blue" as const,
    date: "27 September",
    description: "Specialized workshops, peer-led design critiques, rapid idea exchanges, and an evening of structured networking with fellow emerging leaders and industry experts.",
    bgColor: "bg-[#0E4D5C]",
  },
];

export default function RisingLeadersPageClient() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main>
      <Nav forceSolid={false} />
      <RisingLeadersHero activeTab={activeTab} setActiveTab={setActiveTab} hideTabBar={activeTab === "schedule"} />

      {/* Sticky tab bar — only shown when schedule is active */}
      {activeTab === "schedule" && (
        <div className="sticky top-[56px] md:top-[68px] z-40 w-full flex border-b border-[#0D0D0D]/20 bg-[#F5F0E8] shadow-lg">
          <button
            onClick={() => setActiveTab("overview")}
            className="flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-2 border-transparent text-[#0D0D0D]/40 hover:text-[#0D0D0D]/70 cursor-pointer"
          >
            Speakers
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className="flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-2 border-[#E85520] text-[#0D0D0D] cursor-pointer"
          >
            Schedule
          </button>
        </div>
      )}

      {activeTab === "overview" && (
        <>
          <section className="bg-[#F5F0E8] w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="prose max-w-none">
                <h2 className="font-leadership text-4xl md:text-5xl text-[#0D0D0D] mb-6">Overview</h2>
                <p className="font-sans text-base text-[#0D0D0D]/70 leading-relaxed">
                  The Rising Leaders Forum is designed for emerging design leaders and mid-career professionals ready to step into leadership roles.
                </p>
              </div>
              <EventDayCards days={risingLeadersDays} />

              {/* Session formats card */}
              <div className="mt-6 rounded-2xl bg-[#0D0D0D]/[0.03] border border-[#0D0D0D]/10 p-6 md:p-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#E85520] mb-6">
                  What&apos;s Inside
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Deep Dive Talks",
                    "Panel Discussions",
                    "Spark Sessions",
                    "TBAs",
                  ].map((label) => (
                    <div
                      key={label}
                      className="flex items-center justify-center bg-[#0D0D0D]/[0.04] hover:bg-[#0D0D0D]/[0.08] transition-colors duration-200 rounded-xl px-6 py-4"
                    >
                      <span className="font-sans text-sm text-[#0D0D0D]/70 leading-snug text-center">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <WhoAttends
            variant="light"
            title="Why Attend"
            description="Built for leaders at the threshold."
            subtitle="This is where your next chapter begins. Step into rooms with peers navigating the same leap learn directly from seasoned design leaders in intimate mentor sessions, pressure-test your thinking in hands on workshops, and build the network and confidence to grow into the leader you're becoming."
          />
          <SpeakersGrid
            variant="light"
            speakers={risingLeadersSpeakers}
            showMorePlaceholder={true}
          />
          <VenueSection
            variant="light"
            venueName="Srishti Manipal Institute of Art, Design & Technology"
            locationText="Yelahanka, Govindapura, Bengaluru, Karnataka 560063"
            mapsUrl="https://maps.app.goo.gl/he73UFRv2daCrPzY8"
            embedCoords="13.1257435,77.591569"
          />
        </>
      )}

      {activeTab === "schedule" && <RisingSchedule />}

      <Footer />
    </main>
  );
}
