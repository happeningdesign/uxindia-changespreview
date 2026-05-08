"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { type TicketTier, type TierState } from "@/data/tickets";

interface TierCardProps {
  tier: TicketTier;
  state: TierState;
  themeColor: string;
  textColor: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function TierCard({
  tier,
  state,
  themeColor,
  textColor,
  isExpanded,
  onToggle,
}: TierCardProps) {
  // Determine if the card should show as active (full color) or muted
  const isActive = state === "active";
  const isUpcoming = state === "upcoming";
  const isSoldOut = state === "sold_out";
  const isExpired = state === "expired";

  // Base styling
  const baseClasses = "rounded-xl transition-all duration-300 cursor-pointer";

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

  return (
    <div
      className={baseClasses}
      style={{
        ...cardStyles,
        opacity: isUpcoming || isSoldOut || isExpired ? 0.7 : 1,
      }}
      onClick={onToggle}
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

            {/* Pass name */}
            <h3
              className="font-sans text-lg font-medium leading-tight"
              style={{
                color: currentTextColor,
                textDecoration: isSoldOut || isExpired ? "line-through" : "none",
              }}
            >
              {tier.id.includes("ls-") ? "Leadership Summit Pass" : "Rising Leaders Pass"}
            </h3>
          </div>

          {/* Price and Chevron */}
          <div className="flex items-start gap-3 flex-shrink-0">
            <p
              className="font-sans text-xl font-semibold"
              style={{
                color: currentTextColor,
                textDecoration: isSoldOut || isExpired ? "line-through" : "none",
              }}
            >
              {tier.price.replace("₹", "")}
            </p>
            <button
              type="button"
              className="p-1 rounded hover:bg-white/10 transition-colors"
              style={{ color: currentTextColor }}
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable description */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isExpanded ? "200px" : "0px",
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? "12px" : "0px",
          }}
        >
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: isActive ? `${textColor}CC` : "#666" }}
          >
            {tier.description}
          </p>
        </div>
      </div>
    </div>
  );
}
