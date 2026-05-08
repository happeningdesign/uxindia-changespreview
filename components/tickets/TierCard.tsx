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
    // Upcoming, sold out, expired - muted dark card
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

  // Get tier badge styling
  const getTierBadgeStyles = () => {
    if (isActive) {
      // Active: outlined badge on colored background
      return {
        backgroundColor: "transparent",
        border: `1px solid ${textColor}`,
        color: textColor,
      };
    }
    if (isSoldOut) {
      return {
        backgroundColor: "#7F1D1D",
        border: "none",
        color: "#FCA5A5",
      };
    }
    // Upcoming/expired: subtle badge
    return {
      backgroundColor: "transparent",
      border: "1px solid #444",
      color: "#666",
    };
  };

  const cardStyles = getCardStyles();
  const currentTextColor = getTextColor();
  const badgeStyles = getTierBadgeStyles();

  // Get badge text
  const getBadgeText = () => {
    if (isSoldOut) return "Sold Out";
    if (isExpired) return "Unavailable";
    return tier.name;
  };

  // Determine pass name based on tier id
  const passName = tier.id.includes("ls-") ? "Leadership Summit Pass" : "Rising Leaders Pass";

  // Show stacked effect only for LS active tier with add-ons when collapsed
  const showStackedEffect = hasAddons && isActive && !isExpanded;

  return (
    <div className="relative">
      {/* Stacked cards effect - visible when collapsed to hint at more content */}
      {showStackedEffect && (
        <>
          {/* Bottom stack card */}
          <div
            className="absolute left-2 right-2 top-3 h-full rounded-xl transition-all duration-300"
            style={{
              backgroundColor: "#0D3D35",
              transform: "translateY(8px)",
              zIndex: 0,
            }}
          />
          {/* Middle stack card */}
          <div
            className="absolute left-1 right-1 top-1.5 h-full rounded-xl transition-all duration-300"
            style={{
              backgroundColor: "#145045",
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
          opacity: isUpcoming || isSoldOut || isExpired ? 0.7 : 1,
        }}
        onClick={hasAddons && isActive ? onToggle : undefined}
      >
        <div className="p-5">
        {/* Header row with badge, title, price, and chevron */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Tier badge */}
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
              style={badgeStyles}
            >
              {getBadgeText()}
            </span>

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
            {/* Hide price for upcoming (Coming Soon) state */}
            {!isUpcoming && (
              <p
                className="font-sans text-xl font-semibold"
                style={{
                  color: currentTextColor,
                  textDecoration: isSoldOut || isExpired ? "line-through" : "none",
                }}
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
