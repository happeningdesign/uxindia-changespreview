"use client";

import { useState, useEffect } from "react";
import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import TierCard from "./TierCard";
import AddonCard from "./AddonCard";

interface ActiveTierSectionProps {
  event: EventConfig;
  activeTiers: { tier: TicketTier; state: TierState }[];
  currentTime: Date;
}

// Individual tier with its own collapsible add-ons
function TierWithAddons({
  tier,
  state,
  event,
  mounted,
}: {
  tier: TicketTier;
  state: TierState;
  event: EventConfig;
  mounted: boolean;
}) {
  const [addonsExpanded, setAddonsExpanded] = useState(true);
  
  const isLeadershipSummit = event.id === "leadership-summit";
  const cardTextColor = event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF";
  const additionalCards = tier.additionalCards || [];
  const hasAddons = isLeadershipSummit && additionalCards.length > 0;

  return (
    <div className="flex flex-col gap-4">
      <TierCard
        tier={tier}
        state={state}
        themeColor={event.themeColor}
        textColor={cardTextColor}
        isExpanded={addonsExpanded}
        onToggle={() => setAddonsExpanded(!addonsExpanded)}
        hasAddons={hasAddons}
      />

      {/* Add-on Cards with smooth animation */}
      {hasAddons && (
        <div
          className="grid transition-all duration-300 ease-out overflow-hidden"
          style={{
            gridTemplateRows: addonsExpanded ? "1fr" : "0fr",
            opacity: addonsExpanded ? 1 : 0,
          }}
        >
          <div className="min-h-0 flex flex-col gap-4">
            {additionalCards.map((card, idx) => (
              <AddonCard
                key={card.id}
                card={card}
                themeColor={event.themeColor}
                index={idx}
                mounted={mounted}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ActiveTierSection({
  event,
  activeTiers,
  currentTime,
}: ActiveTierSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If no active tiers, show empty placeholder to maintain grid alignment
  if (activeTiers.length === 0) {
    return <div className="flex flex-col gap-4" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Each Active Tier with its own collapsible add-ons */}
      {activeTiers.map((activeTier) => (
        <TierWithAddons
          key={activeTier.tier.id}
          tier={activeTier.tier}
          state={activeTier.state}
          event={event}
          mounted={mounted}
        />
      ))}

      {/* Buy Button - appears right after all active tiers + add-ons */}
      <a
        href={event.externalBuyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-xl text-center font-sans font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] flex items-center justify-center gap-2"
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
