"use client";

import { useState, useEffect } from "react";
import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import TierCard from "./TierCard";
import AddonCard from "./AddonCard";
import StackedCardsSection from "./StackedCardsSection";

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
  const isSoldOut = state === "sold_out";
  
  // Don't show expandable add-ons for sold out tiers (stacked effect shows they exist)
  const showAddons = hasAddons && !isSoldOut;

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

      {/* Add-on Cards with smooth animation - only for active tiers, not sold out */}
      {showAddons && (
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

  // If no tiers, show empty placeholder to maintain grid alignment
  if (activeTiers.length === 0) {
    return <div className="flex flex-col gap-4" />;
  }

  // Separate active tiers from sold out tiers
  const liveTiers = activeTiers.filter((t) => t.state === "active");
  const soldOutTiers = activeTiers.filter((t) => t.state === "sold_out");
  const hasLiveTiers = liveTiers.length > 0;

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Active (live) tiers first */}
      <div className="flex flex-col gap-4">
        {liveTiers.map((activeTier) => (
          <TierWithAddons
            key={activeTier.tier.id}
            tier={activeTier.tier}
            state={activeTier.state}
            event={event}
            mounted={mounted}
          />
        ))}
      </div>

      {/* Buy Button - appears right after active tiers, before sold out */}
      {hasLiveTiers && (
        <div className="flex justify-center mt-2">
          <a
            href={event.externalBuyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 rounded-full text-center font-sans font-semibold text-sm text-white bg-[#E85520] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E85520]/30 inline-flex items-center gap-2"
          >
            Buy tickets
            <svg
              width="14"
              height="14"
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
      )}

      {/* Spacer to push sold out section to bottom for alignment */}
      <div className="flex-grow" />

      {/* Sold out tiers - stacked by default, expandable */}
      {soldOutTiers.length > 0 && (
        <StackedCardsSection
          event={event}
          tiers={soldOutTiers}
          label="Sold Out"
        />
      )}
    </div>
  );
}
