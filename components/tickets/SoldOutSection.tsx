"use client";

import { type EventConfig, type TicketTier, type TierState } from "@/data/tickets";
import StackedCardsSection from "./StackedCardsSection";

interface SoldOutSectionProps {
  event: EventConfig;
  soldOutTiers: { tier: TicketTier; state: TierState }[];
}

export default function SoldOutSection({
  event,
  soldOutTiers,
}: SoldOutSectionProps) {
  // If no sold out tiers, render empty div to maintain grid alignment
  if (soldOutTiers.length === 0) {
    return <div />;
  }

  return (
    <StackedCardsSection
      event={event}
      tiers={soldOutTiers}
      label="Sold Out"
    />
  );
}
