"use client";

import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import TierCard from "./TierCard";

interface ComingSoonSectionProps {
  event: EventConfig;
  upcomingTier: { tier: TicketTier; state: TierState } | undefined;
}

export default function ComingSoonSection({
  event,
  upcomingTier,
}: ComingSoonSectionProps) {
  const cardTextColor = event.id === "rising-leaders-forum" ? "#1A1000" : "#FFFFFF";

  // If no upcoming tier, show empty placeholder to maintain grid alignment
  if (!upcomingTier) {
    return <div />;
  }

  return (
    <TierCard
      tier={upcomingTier.tier}
      state={upcomingTier.state}
      themeColor={event.themeColor}
      textColor={cardTextColor}
      isExpanded={false}
      onToggle={() => {}}
      hasAddons={false}
    />
  );
}
