"use client";

import { type EventConfig, getTierState } from "@/data/tickets";
import TierCard from "./TierCard";

interface EventColumnProps {
  event: EventConfig;
  currentTime: Date;
  activeTierIndex: number;
  isFirstRender: boolean;
}

export default function EventColumn({
  event,
  currentTime,
  activeTierIndex,
  isFirstRender,
}: EventColumnProps) {
  // Determine which tiers should show additional cards
  // Only the active tier shows its additional cards
  const shouldShowAdditionalCards = (tierIndex: number): boolean => {
    return tierIndex === activeTierIndex;
  };

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

      {/* Tier Cards */}
      {event.tiers.map((tier, index) => {
        const state = getTierState(tier, currentTime);
        
        // Card visibility logic: 
        // - Show active tier with its additional cards
        // - Show sold_out tiers (greyed out)
        // - Show upcoming tiers until we hit the first one, then stop
        // - Show expired tiers (greyed out)
        
        // Determine if we should render this tier
        let shouldRender = true;
        
        // Find the first upcoming tier index
        let firstUpcomingIndex = -1;
        for (let i = 0; i < event.tiers.length; i++) {
          const s = getTierState(event.tiers[i], currentTime);
          if (s === 'upcoming') {
            firstUpcomingIndex = i;
            break;
          }
        }
        
        // Only show the first upcoming tier (as "Coming Soon"), hide subsequent upcoming tiers
        if (state === 'upcoming' && firstUpcomingIndex !== -1 && index > firstUpcomingIndex) {
          shouldRender = false;
        }

        if (!shouldRender) return null;

        return (
          <TierCard
            key={tier.id}
            tier={tier}
            state={state}
            themeColor={event.themeColor}
            showAdditionalCards={shouldShowAdditionalCards(index)}
            isFirstRender={isFirstRender}
          />
        );
      })}

      {/* Buy Button */}
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
