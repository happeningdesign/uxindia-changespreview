"use client";

import { useState, useEffect } from "react";
import { events, getTierState } from "@/data/tickets";
import EventHeader from "./EventHeader";
import ActiveTierSection from "./ActiveTierSection";
import SoldOutSection from "./SoldOutSection";
import ComingSoonSection from "./ComingSoonSection";
import ComingSoonMarquee from "./ComingSoonMarquee";

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

  // Find active tiers only (for the main section with add-ons)
  const lsActiveTiers = lsTiers.filter((t) => t.state === "active");
  const rlfActiveTiers = rlfTiers.filter((t) => t.state === "active");

  // Find sold out tiers separately (for their own aligned row)
  const lsSoldOutTiers = lsTiers.filter((t) => t.state === "sold_out");
  const rlfSoldOutTiers = rlfTiers.filter((t) => t.state === "sold_out");

  // Check if any event has sold out tiers
  const hasSoldOut = lsSoldOutTiers.length > 0 || rlfSoldOutTiers.length > 0;

  // Find ALL upcoming tiers for each event (for Coming Soon section)
  const lsUpcomingTiers = lsTiers.filter((t) => t.state === "upcoming");
  const rlfUpcomingTiers = rlfTiers.filter((t) => t.state === "upcoming");

  // Check if any event has upcoming tiers
  const hasComingSoon = lsUpcomingTiers.length > 0 || rlfUpcomingTiers.length > 0;

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
            Be in the room.
          </h1>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto">
            Get your ticket to UXINDIA 2026 — Leadership Summit or Rising Leaders Forum.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* 
            Layout strategy:
            - Desktop (md+): two-column grid with LS on left, RLF on right, rows aligned
            - Mobile: LS venue card → LS tiers → RLF venue card → RLF tiers
          */}

          {/* Mobile layout: stacked per event */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Leadership Summit column */}
            <div className="flex flex-col gap-4">
              <EventHeader event={leadershipSummit} />
              <ActiveTierSection
                event={leadershipSummit}
                activeTiers={lsActiveTiers}
                currentTime={currentTime}
              />
              {lsSoldOutTiers.length > 0 && (
                <SoldOutSection
                  event={leadershipSummit}
                  soldOutTiers={lsSoldOutTiers}
                />
              )}
              {lsUpcomingTiers.length > 0 && (
                <>
                  <ComingSoonMarquee />
                  <ComingSoonSection
                    event={leadershipSummit}
                    upcomingTiers={lsUpcomingTiers}
                  />
                </>
              )}
            </div>

            {/* Rising Leaders Forum column */}
            <div className="flex flex-col gap-4">
              <EventHeader event={risingLeaders} />
              <ActiveTierSection
                event={risingLeaders}
                activeTiers={rlfActiveTiers}
                currentTime={currentTime}
              />
              {rlfSoldOutTiers.length > 0 && (
                <SoldOutSection
                  event={risingLeaders}
                  soldOutTiers={rlfSoldOutTiers}
                />
              )}
              {rlfUpcomingTiers.length > 0 && (
                <>
                  <ComingSoonMarquee />
                  <ComingSoonSection
                    event={risingLeaders}
                    upcomingTiers={rlfUpcomingTiers}
                  />
                </>
              )}
            </div>
          </div>

          {/* Desktop layout: aligned two-column grid rows */}
          <div className="hidden md:block">
            {/* Event Headers - Side by Side */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <EventHeader event={leadershipSummit} />
              <EventHeader event={risingLeaders} />
            </div>

            {/* Active Tiers with Buy Buttons - Side by Side */}
            <div className="grid grid-cols-2 gap-6 mb-6 items-start">
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

            {/* Sold Out Section - Separate row for alignment */}
            {hasSoldOut && (
              <div className="grid grid-cols-2 gap-6 mb-6 items-start">
                <SoldOutSection
                  event={leadershipSummit}
                  soldOutTiers={lsSoldOutTiers}
                />
                <SoldOutSection
                  event={risingLeaders}
                  soldOutTiers={rlfSoldOutTiers}
                />
              </div>
            )}

            {/* Coming Soon Section - Marquee + Cards Side by Side */}
            {hasComingSoon && (
              <>
                <ComingSoonMarquee />
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <ComingSoonSection
                    event={leadershipSummit}
                    upcomingTiers={lsUpcomingTiers}
                  />
                  <ComingSoonSection
                    event={risingLeaders}
                    upcomingTiers={rlfUpcomingTiers}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
