"use client";

import { useState, useEffect } from "react";
import { events, getTierState } from "@/data/tickets";
import EventHeader from "./EventHeader";
import ActiveTierSection from "./ActiveTierSection";
import ComingSoonSection from "./ComingSoonSection";

export default function TicketsSection() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Set initial time on client mount
  useEffect(() => {
    setCurrentTime(new Date());
  }, []);

  // Refresh state every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Don't render until we have client time (prevents hydration mismatch)
  if (!currentTime) {
    return (
      <section className="bg-[#0D0D0D] min-h-screen pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Loading skeleton */}
          <div className="text-center mb-16">
            <div className="h-16 bg-white/5 rounded-lg max-w-2xl mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-white/5 rounded max-w-md mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-96 bg-white/5 rounded-2xl animate-pulse" />
            <div className="h-96 bg-white/5 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  const leadershipSummit = events.find((e) => e.id === "leadership-summit")!;
  const risingLeaders = events.find((e) => e.id === "rising-leaders-forum")!;

  // Get tier states for each event
  const lsTiers = leadershipSummit.tiers.map((tier) => ({
    tier,
    state: getTierState(tier, currentTime),
  }));
  const rlfTiers = risingLeaders.tiers.map((tier) => ({
    tier,
    state: getTierState(tier, currentTime),
  }));

  // Find ALL active tiers for each event
  const lsActiveTiers = lsTiers.filter((t) => t.state === "active");
  const rlfActiveTiers = rlfTiers.filter((t) => t.state === "active");

  // Find first upcoming tier for each event (for Coming Soon section)
  const lsUpcomingTier = lsTiers.find((t) => t.state === "upcoming");
  const rlfUpcomingTier = rlfTiers.find((t) => t.state === "upcoming");

  // Check if both have upcoming tiers
  const hasComingSoon = lsUpcomingTier || rlfUpcomingTier;

  return (
    <section className="bg-[#0D0D0D] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative SVG at top */}
      <div
        className="absolute left-1/2 pointer-events-none select-none opacity-60"
        style={{
          top: "-500px",
          width: "1000px",
          height: "1000px",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      >
        <img
          src="/five-days-object.svg"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10">
        {/* Headline */}
        <div className="text-center px-6 mb-16">
          <h1
            className="text-white leading-[1.08] mb-4"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
            }}
          >
            Five Days. Two Tracks.
            <br />
            One Leadership Arc.
          </h1>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto">
            Talks may be curated across both forums to maximize impact and cross-pollination.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Event Headers - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <EventHeader event={leadershipSummit} />
            <EventHeader event={risingLeaders} />
          </div>

          {/* Active Tiers with Buy Buttons - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ActiveTierSection
              event={leadershipSummit}
              activeTiers={lsActiveTiers}
              currentTime={currentTime}
            />
            <ActiveTierSection
              event={risingLeaders}
              activeTiers={rlfActiveTiers}
              currentTime={currentTime}
            />
          </div>

          {/* Coming Soon Section - Side by Side */}
          {hasComingSoon && (
            <>
              <p className="text-center font-sans text-sm text-white/50 mb-4">
                Coming Soon
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ComingSoonSection
                  event={leadershipSummit}
                  upcomingTier={lsUpcomingTier}
                />
                <ComingSoonSection
                  event={risingLeaders}
                  upcomingTier={rlfUpcomingTier}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
