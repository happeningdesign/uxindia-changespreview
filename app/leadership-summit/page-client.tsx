"use client";

import { useState, useRef, useEffect } from "react";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Page Components
import LeadershipSummitHero from "@/components/events/leadership-summit/hero/Hero";
import WhoAttends from "@/components/events/who-attends/WhoAttends";
import SpeakersGrid from "@/components/events/speakers-grid/SpeakersGrid";
import VenueSection from "@/components/events/leadership-summit/venue-section/VenueSection";
import LeadershipSchedule from "@/components/events/leadership-summit/leadership-schedule/LeadershipSchedule";
import EventDayCards from "@/components/events/event-day-cards/EventDayCards";

// Data
import leadershipSpeakers from "@/data/events/leadership-summit-speakers";

const leadershipSummitDays = [
  {
    badge: "PRE-CONFERENCE WORKSHOPS",
    badgeColor: "orange" as const,
    date: "23 September",
    description:
      "Full-day, hands-on workshops across parallel rooms — dive deep into design methods, tools, and craft with expert facilitators in small, focused groups.",
    bgColor: "bg-[#1C1C1E]",
  },
  {
    badge: "CONFERENCE DAY 1",
    badgeColor: "blue" as const,
    date: "24 September",
    description:
      "Grand keynotes, Plenary Keynotes & Panel Discussions on design leadership, AI, and business impact, paired with curated roundtables, spark sessions and networking dinner.",
    bgColor: "bg-[#0E4D5C]",
  },
  {
    badge: "CONFERENCE DAY 2",
    badgeColor: "orange" as const,
    date: "25 September",
    description:
      "Deep Dive talks, panel discussions, and spark sessions, closing with leadership networking and conversations that carry beyond the stage.",
    bgColor: "bg-[#4A2C3D]",
  },
];

export default function LeadershipSummitPageClient() {
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

      <LeadershipSummitHero
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        hideTabBar={true}
      />

      <div ref={contentRef} />

      {/* Sticky Tab Bar */}
      <div className="sticky top-[60px] md:top-[72px] z-40 w-full flex border border-white/25 bg-[#000] shadow-lg">
        <button
          onClick={() => handleTabChange("schedule")}
          className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-4 cursor-pointer ${
            activeTab === "schedule"
              ? "border-[#E85520] text-white"
              : "border-transparent text-white/70 hover:text-white"
          }`}
        >
          View Schedule
        </button>

        <button
          onClick={() => handleTabChange("overview")}
          className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-4 cursor-pointer ${
            activeTab === "overview"
              ? "border-[#E85520] text-white"
              : "border-transparent text-white/70 hover:text-white"
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
          <section className="bg-[#0D0D0D] w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">
                  Overview
                </h2>

                <p className="font-sans text-base text-white/70 leading-relaxed">
                  The Leadership Summit 2026 brings together the most
                  influential design voices to shape the future of design
                  leadership.
                </p>
              </div>

              <EventDayCards days={leadershipSummitDays} />
            </div>
          </section>

          <WhoAttends
            title="Why Attend"
            description="Built for leaders who decide."
            subtitle="This is where strategy meets craft. Step away from the day to day to think bigger exchange hard won lessons with peers who face the same decisions, pressure test your ideas in intimate roundtables, and leave with sharper conviction, a stronger network, and a clearer view of where design is headed next."
            variant="dark"
          />

          <SpeakersGrid
            speakers={leadershipSpeakers}
            showMorePlaceholder={true}
            event="leadership"
          />

          <VenueSection />
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
          <LeadershipSchedule />
        </div>
      </div>

      <Footer />
    </main>
  );
}
