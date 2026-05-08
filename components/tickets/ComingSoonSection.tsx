"use client";

import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import TierCard from "./TierCard";

interface ComingSoonSectionProps {
  event: EventConfig;
  upcomingTiers: { tier: TicketTier; state: TierState }[];
}

export default function ComingSoonSection({
  event,
  upcomingTiers,
}: ComingSoonSectionProps) {
  const cardTextColor = event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF";

  // If no upcoming tiers, show empty placeholder to maintain grid alignment
  if (upcomingTiers.length === 0) {
    return <div />;
  }

  return (
    <div className="flex flex-col gap-4">
      {upcomingTiers.map((upcomingTier) => (
        <TierCard
          key={upcomingTier.tier.id}
          tier={upcomingTier.tier}
          state={upcomingTier.state}
          themeColor={event.themeColor}
          textColor={cardTextColor}
          isExpanded={false}
          onToggle={() => {}}
          hasAddons={false}
        />
      ))}
    </div>
  );
}
