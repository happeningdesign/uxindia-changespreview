"use client";

import { ChevronUp, ChevronDown } from "lucide-react";
import { type TicketTier, type TierState } from "@/data/tickets";

interface TierCardProps {
  tier: TicketTier;
  state: TierState;
  themeColor: string;
  textColor: string;
  isExpanded: boolean;
  onToggle: () => void;
  hasAddons: boolean; // Whether this tier has add-ons (only LS has this)
}

export default function TierCard({
  tier,
  state,
  themeColor,
  textColor,
  isExpanded,
  onToggle,
  hasAddons,
}: TierCardProps) {
  // Determine if the card should show as active (full color) or muted
  const isActive = state === "active";
  const isUpcoming = state === "upcoming";
  const isSoldOut = state === "sold_out";
  const isExpired = state === "expired";

  // Base styling
  const baseClasses = "rounded-xl transition-all duration-300";

  // Get card background and styling based on state
  const getCardStyles = () => {
    if (isActive) {
      return {
        backgroundColor: themeColor,
        border: "none",
      };
    }
    // Sold out - muted dark card without border
    if (isSoldOut) {
      return {
        backgroundColor: "#1A1A1A",
        border: "none",
      };
    }
    // Upcoming, expired - muted dark card with subtle border
    return {
      backgroundColor: "#141414",
      border: "1px solid #2A2A2A",
    };
  };

  // Get text color based on state
  const getTextColor = () => {
    if (isActive) {
      return textColor;
    }
    return "#888888"; // Muted text for non-active
  };

  const cardStyles = getCardStyles();
  const currentTextColor = getTextColor();

  // Determine pass name based on tier id
  const passName = tier.id.includes("ls-") ? "Leadership Summit Pass" : "Rising Leaders Pass";

  // Show stacked effect for LS tiers with add-ons:
  // - Active: when collapsed (to hint at expandable add-ons)
  // - Sold out: always show stacked effect (add-ons hidden underneath)
  const showStackedEffect = hasAddons && ((isActive && !isExpanded) || isSoldOut);

  return (
    <div className="relative">
      {/* Stacked cards effect - visible when collapsed to hint at more content */}
      {showStackedEffect && (
        <>
          {/* Bottom stack card */}
          <div
            className="absolute left-2 right-2 top-3 h-full rounded-xl transition-all duration-300"
            style={{
              backgroundColor: isSoldOut ? "#1A1A1A" : "#0D3D35",
              transform: "translateY(8px)",
              zIndex: 0,
            }}
          />
          {/* Middle stack card */}
          <div
            className="absolute left-1 right-1 top-1.5 h-full rounded-xl transition-all duration-300"
            style={{
              backgroundColor: isSoldOut ? "#222222" : "#145045",
              transform: "translateY(4px)",
              zIndex: 1,
            }}
          />
        </>
      )}
      
      {/* Main card */}
      <div
        className={`${baseClasses} relative z-10 ${hasAddons && isActive ? "cursor-pointer" : ""}`}
        style={{
          ...cardStyles,
          // Don't use opacity for sold out with stacked effect - use solid background instead
          opacity: isUpcoming || isExpired ? 0.7 : 1,
          // Standard min-height for consistent card sizing across both events
          minHeight: "140px",
        }}
        onClick={hasAddons && isActive ? onToggle : undefined}
      >
        <div className="p-5 h-full flex flex-col">
        {/* Header row with badge, title, price, and chevron */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Tier badges - show both tier name and sold out badge when sold out */}
            <div className="flex flex-wrap gap-2 mb-2">
              {/* Tier name badge - always visible */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "transparent",
                  border: isActive ? `1px solid ${textColor}` : "1px solid #444",
                  color: isActive ? textColor : "#666",
                }}
              >
                {tier.name}
              </span>
              
              {/* Sold Out badge - only when sold out */}
              {isSoldOut && (
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "#7F1D1D",
                    border: "none",
                    color: "#FCA5A5",
                  }}
                >
                  Sold Out
                </span>
              )}
            </div>

            {/* Pass name - uses UXILeadershipCondensed font */}
            <h3
              className="leading-tight"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 500,
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                color: currentTextColor,
                textDecoration: isSoldOut || isExpired ? "line-through" : "none",
              }}
            >
              {passName}
            </h3>
          </div>

          {/* Price and Chevron */}
          <div className="flex items-start gap-3 flex-shrink-0">
            {/* Show price only for active state, hide for upcoming and sold out */}
            {isActive && (
              <p
                className="font-sans text-xl font-semibold"
                style={{ color: currentTextColor }}
              >
                ₹{tier.price.replace("₹", "").replace("₹", "")}
              </p>
            )}
            {/* Only show chevron for Leadership Summit (has add-ons) and active state */}
            {hasAddons && isActive && (
              <button
                type="button"
                className="p-1 rounded hover:bg-white/10 transition-colors"
                style={{ color: currentTextColor }}
                aria-label={isExpanded ? "Hide add-ons" : "Show add-ons"}
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Description - ALWAYS visible */}
        <p
          className="font-sans text-sm leading-relaxed mt-3"
          style={{ color: isActive ? `${textColor}CC` : "#666" }}
        >
          {tier.description}
        </p>
      </div>
      </div>
    </div>
  );
}
