"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import TierCard from "./TierCard";

interface StackedCardsSectionProps {
  event: EventConfig;
  tiers: { tier: TicketTier; state: TierState }[];
  label: string; // "Sold Out" or "Coming Soon"
}

export default function StackedCardsSection({
  event,
  tiers,
  label,
}: StackedCardsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardTextColor = event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF";

  if (tiers.length === 0) {
    return null;
  }

  // Get the first tier to show in collapsed state
  const firstTier = tiers[0];
  const remainingTiers = tiers.slice(1);
  const hasMultiple = tiers.length > 1;

  return (
    <div className="flex flex-col gap-4">
      {/* Stacked preview when collapsed, full list when expanded */}
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Stacked effect behind first card when collapsed */}
        {!isExpanded && hasMultiple && (
          <>
            {/* Bottom stack card */}
            <div
              className="absolute left-2 right-2 top-3 h-full rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "#1A1A1A",
                transform: "translateY(8px)",
                zIndex: 0,
              }}
            />
            {/* Middle stack card */}
            <div
              className="absolute left-1 right-1 top-1.5 h-full rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "#222222",
                transform: "translateY(4px)",
                zIndex: 1,
              }}
            />
          </>
        )}

        {/* First card - always visible */}
        <div className="relative z-10">
          <TierCard
            tier={firstTier.tier}
            state={firstTier.state}
            themeColor={event.themeColor}
            textColor={cardTextColor}
            isExpanded={false}
            onToggle={() => {}}
            hasAddons={false}
          />
          
          {/* Expand indicator overlay */}
          {hasMultiple && !isExpanded && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-xs text-white/70 font-sans">
                +{remainingTiers.length} more
              </span>
              <ChevronDown className="w-3 h-3 text-white/70" />
            </div>
          )}
        </div>
      </div>

      {/* Remaining cards - shown when expanded */}
      <div
        className="grid transition-all duration-300 ease-out overflow-hidden"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="min-h-0 flex flex-col gap-4">
          {remainingTiers.map((item) => (
            <TierCard
              key={item.tier.id}
              tier={item.tier}
              state={item.state}
              themeColor={event.themeColor}
              textColor={cardTextColor}
              isExpanded={false}
              onToggle={() => {}}
              hasAddons={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
