"use client";

import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import StackedCardsSection from "./StackedCardsSection";

interface ComingSoonSectionProps {
  event: EventConfig;
  upcomingTiers: { tier: TicketTier; state: TierState }[];
}

export default function ComingSoonSection({
  event,
  upcomingTiers,
}: ComingSoonSectionProps) {
  // If no upcoming tiers, show empty placeholder to maintain grid alignment
  if (upcomingTiers.length === 0) {
    return <div />;
  }

  return (
    <StackedCardsSection
      event={event}
      tiers={upcomingTiers}
      label="Coming Soon"
    />
  );
}
