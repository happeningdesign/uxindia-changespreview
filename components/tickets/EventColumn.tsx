"use client";

import { useState, useEffect } from "react";
import { type EventConfig, getTierState } from "@/data/tickets";
import TierCard from "./TierCard";
import AddonCard from "./AddonCard";

interface EventColumnProps {
  event: EventConfig;
  currentTime: Date;
}

export default function EventColumn({
  event,
  currentTime,
}: EventColumnProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Find the active tier index (first active tier)
  const activeTierIndex = event.tiers.findIndex(
    (tier) => getTierState(tier, currentTime) === "active"
  );

  // Track which tier is expanded - default to active tier
  const [expandedTierIndex, setExpandedTierIndex] = useState<number>(
    activeTierIndex >= 0 ? activeTierIndex : 0
  );

  // Group tiers by their state for rendering
  const tiersWithState = event.tiers.map((tier, index) => ({
    tier,
    index,
    state: getTierState(tier, currentTime),
  }));

  // Separate active/sold_out tiers from upcoming tiers
  const activeTiers = tiersWithState.filter(
    (t) => t.state === "active" || t.state === "sold_out" || t.state === "expired"
  );
  const upcomingTiers = tiersWithState.filter((t) => t.state === "upcoming");

  // Only show the first upcoming tier as "Coming Soon"
  const firstUpcomingTier = upcomingTiers.length > 0 ? upcomingTiers[0] : null;

  // Get the active tier's additional cards
  const activeTierData = activeTierIndex >= 0 ? event.tiers[activeTierIndex] : null;
  const additionalCards = activeTierData?.additionalCards || [];

  return (
    <div className="flex flex-col gap-4">
      {/* Event Header Card */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{ backgroundColor: event.themeBgColor }}
      >
        <h2
          className="leading-[1.08] mb-8"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(2rem, 3vw, 2.8rem)",
            color: event.textColor,
          }}
        >
          {event.name}
        </h2>
        <div>
          <p
            className="leading-[1.1]"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              color: event.textColor,
            }}
          >
            {event.dates}
          </p>
          <p
            className="font-sans text-sm mt-1"
            style={{ color: event.textColor, opacity: 0.85 }}
          >
            {event.venue}
          </p>
        </div>
      </div>

      {/* Active and Sold Out Tier Cards */}
      {activeTiers.map(({ tier, index, state }) => (
        <TierCard
          key={tier.id}
          tier={tier}
          state={state}
          themeColor={event.themeColor}
          textColor={event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF"}
          isExpanded={expandedTierIndex === index}
          onToggle={() => setExpandedTierIndex(expandedTierIndex === index ? -1 : index)}
        />
      ))}

      {/* Add-on Cards - only show when active tier is expanded */}
      {additionalCards.length > 0 && expandedTierIndex === activeTierIndex && (
        <>
          {additionalCards.map((card, idx) => (
            <AddonCard
              key={card.id}
              card={card}
              themeColor={event.themeColor}
              index={idx}
              mounted={mounted}
            />
          ))}
        </>
      )}

      {/* Coming Soon Section */}
      {firstUpcomingTier && (
        <>
          <p className="text-center font-sans text-sm text-white/50 mt-2">
            Coming Soon
          </p>
          <TierCard
            tier={firstUpcomingTier.tier}
            state={firstUpcomingTier.state}
            themeColor={event.themeColor}
            textColor={event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF"}
            isExpanded={expandedTierIndex === firstUpcomingTier.index}
            onToggle={() =>
              setExpandedTierIndex(
                expandedTierIndex === firstUpcomingTier.index ? -1 : firstUpcomingTier.index
              )
            }
          />
        </>
      )}

      {/* Buy Button */}
      <a
        href={event.externalBuyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-xl text-center font-sans font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
        style={{
          backgroundColor: event.themeColor,
          color: event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF",
        }}
      >
        Buy tickets
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
