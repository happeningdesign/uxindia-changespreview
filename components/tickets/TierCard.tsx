"use client";

import { useState, useEffect, useRef } from "react";
import { type TicketTier, type TierState, formatOpeningDate } from "@/data/tickets";
import AddonCard from "./AddonCard";

interface TierCardProps {
  tier: TicketTier;
  state: TierState;
  themeColor: string;
  showAdditionalCards: boolean;
  isFirstRender: boolean;
}

export default function TierCard({
  tier,
  state,
  themeColor,
  showAdditionalCards,
  isFirstRender,
}: TierCardProps) {
  const [mounted, setMounted] = useState(false);
  const wasActiveOnMount = useRef(state === 'active' && isFirstRender);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Base card styles
  const baseCardClasses = "rounded-xl p-5 transition-all duration-300";
  
  // State-specific styles
  const getCardStyles = () => {
    switch (state) {
      case 'upcoming':
        return {
          background: '#141414',
          border: '1px dashed #2A2A2A',
          opacity: 0.6,
        };
      case 'active':
        return {
          background: '#141414',
          border: '1px solid #2A2A2A',
          borderLeft: `4px solid ${themeColor}`,
          opacity: 1,
        };
      case 'sold_out':
      case 'expired':
        return {
          background: '#141414',
          border: '1px solid #2A2A2A',
          opacity: 0.5,
        };
      default:
        return {
          background: '#141414',
          border: '1px solid #2A2A2A',
        };
    }
  };

  const cardStyles = getCardStyles();

  // Render upcoming state
  if (state === 'upcoming') {
    return (
      <div
        className={baseCardClasses}
        style={{
          backgroundColor: cardStyles.background,
          border: cardStyles.border,
          opacity: cardStyles.opacity,
        }}
      >
        <p className="font-sans text-sm text-[#888]">Coming Soon</p>
        <p className="font-sans text-xs text-[#555] mt-1">
          Opens {formatOpeningDate(tier.saleStart)}
        </p>
      </div>
    );
  }

  // Render sold_out state
  if (state === 'sold_out') {
    return (
      <div
        className={baseCardClasses}
        style={{
          backgroundColor: cardStyles.background,
          border: cardStyles.border,
          opacity: cardStyles.opacity,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-red-600 text-white mb-2">
              SOLD OUT
            </span>
            <h3 className="font-sans text-base font-medium text-[#555]">
              {tier.name}
            </h3>
          </div>
          <p className="font-sans text-lg font-bold text-[#555] line-through">
            {tier.price}
          </p>
        </div>
      </div>
    );
  }

  // Render expired state
  if (state === 'expired') {
    return (
      <div
        className={baseCardClasses}
        style={{
          backgroundColor: cardStyles.background,
          border: cardStyles.border,
          opacity: cardStyles.opacity,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-[#444] text-[#888] mb-2">
              Unavailable
            </span>
            <h3 className="font-sans text-base font-medium text-[#555]">
              {tier.name}
            </h3>
          </div>
          <p className="font-sans text-lg font-bold text-[#555] line-through">
            {tier.price}
          </p>
        </div>
      </div>
    );
  }

  // Render active state
  return (
    <>
      <div
        className={baseCardClasses}
        style={{
          backgroundColor: cardStyles.background,
          border: cardStyles.border,
          borderLeft: cardStyles.borderLeft,
          opacity: cardStyles.opacity,
        }}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <span
              className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2"
              style={{ backgroundColor: themeColor, color: '#FFFFFF' }}
            >
              {tier.name}
            </span>
            <h3 className="font-sans text-base font-medium text-white">
              {tier.name} Pass
            </h3>
          </div>
          <p className="font-sans text-xl font-bold text-white">
            {tier.price}
          </p>
        </div>
        <p className="font-sans text-sm text-[#888] leading-relaxed">
          {tier.description}
        </p>
      </div>

      {/* Additional Cards (Add-ons) */}
      {showAdditionalCards && tier.additionalCards.length > 0 && (
        <div className="flex flex-col gap-3">
          {tier.additionalCards.map((card, index) => (
            <AddonCard
              key={card.id}
              card={card}
              themeColor={themeColor}
              index={index}
              suppressAnimation={wasActiveOnMount.current}
              mounted={mounted}
            />
          ))}
        </div>
      )}
    </>
  );
}
