"use client";

import { useState, useRef, useEffect } from "react";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Page
import RisingLeadersHero from "@/components/events/rising-leaders-forum/hero/Hero";
import WhoAttends from "@/components/events/who-attends/WhoAttends";
import SpeakersGrid from "@/components/events/speakers-grid/SpeakersGrid";
import RisingLeadersVenueSection from "@/components/events/rising-leaders-forum/venue-section/VenueSection";
import RisingSchedule from "@/components/events/rising-leaders-forum/rising-leaders-schedule/RisingSchedule";
import EventDayCards from "@/components/events/event-day-cards/EventDayCards";

// Data
import risingLeadersSpeakers from "@/data/events/rising-leaders-speakers";

const risingLeadersDays = [
  {
    badge: "DAY 1",
    badgeColor: "orange" as const,
    date: "26 September",
    description:
      "Deep Dive Talks, Panel Discussions with seasoned design leaders, foundational talks on transitioning into leadership, and hands-on workshops on team building and strategy.",
    bgColor: "bg-[#1C1C1E]",
  },
  {
    badge: "DAY 2",
    badgeColor: "blue" as const,
    date: "27 September",
    description:
      "Deep Dive Talks, Spark Sessions, Panel Discussions and an evening of structured networking with fellow emerging leaders and industry experts.",
    bgColor: "bg-[#0E4D5C]",
  },
];

export default function RisingLeadersPageClient() {
  const [activeTab, setActiveTab] = useState("overview");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setTabFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash === "schedule") {
        setActiveTab("schedule");
      } else {
        setActiveTab("overview");
      }
    };

    setTabFromHash();

    window.addEventListener("hashchange", setTabFromHash);

    return () => {
      window.removeEventListener("hashchange", setTabFromHash);
    };
  }, []);

  function handleTabChange(tab: string) {
    setActiveTab(tab);

    const hash = tab === "schedule" ? "schedule" : "speakers";
    window.history.replaceState(null, "", `#${hash}`);

    requestAnimationFrame(() => {
      if (contentRef.current) {
        const y =
          contentRef.current.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    });
  }

  return (
    <main>
      <Nav forceSolid={false} />

      <RisingLeadersHero
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        hideTabBar={true}
      />

      {/* Scroll sentinel */}
      <div ref={contentRef} />

      {/* Sticky Tab Bar */}
      <div className="sticky top-[60px] md:top-[72px] z-40 w-full flex border-b border-[#0D0D0D]/20 bg-[#F5F0E8] shadow-lg">
        <button
          onClick={() => handleTabChange("schedule")}
          className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-4 cursor-pointer ${
            activeTab === "schedule"
              ? "border-[#E85520] text-[#0D0D0D]"
              : "border-transparent text-[#0D0D0D]/70 hover:text-[#0D0D0D]"
          }`}
        >
          View Schedule
        </button>

        <button
          onClick={() => handleTabChange("overview")}
          className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-4 cursor-pointer ${
            activeTab === "overview"
              ? "border-[#E85520] text-[#0D0D0D]"
              : "border-transparent text-[#0D0D0D]/70 hover:text-[#0D0D0D]"
          }`}
        >
          View Speakers
        </button>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {/* Speakers */}
        <div
          className={
            activeTab === "overview"
              ? "relative opacity-100 transition-opacity duration-300"
              : "absolute inset-0 opacity-0 pointer-events-none overflow-hidden"
          }
          aria-hidden={activeTab !== "overview"}
        >
          <section className="bg-[#F5F0E8] w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="prose max-w-none">
                <h2 className="font-leadership text-4xl md:text-5xl text-[#0D0D0D] mb-6">
                  Overview
                </h2>

                <p className="font-sans text-base text-[#0D0D0D]/70 leading-relaxed">
                  The Rising Leaders Forum is designed for emerging design
                  leaders and mid-career professionals ready to step into
                  leadership roles.
                </p>
              </div>

              <EventDayCards days={risingLeadersDays} />
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
            event="rising"
          />

          <RisingLeadersVenueSection variant="light" />
        </div>

        {/* Schedule */}
        <div
          className={
            activeTab === "schedule"
              ? "relative opacity-100 transition-opacity duration-300"
              : "absolute inset-0 opacity-0 pointer-events-none overflow-hidden"
          }
          aria-hidden={activeTab !== "schedule"}
        >
          <RisingSchedule />
        </div>
      </div>

      <Footer />
    </main>
  );
}
