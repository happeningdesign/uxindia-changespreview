"use client";

import { type CardConfig } from "@/data/tickets";

interface AddonCardProps {
  card: CardConfig;
  themeColor: string;
  index: number;
  mounted: boolean;
}

export default function AddonCard({
  card,
  themeColor,
  index,
  mounted,
}: AddonCardProps) {
  // Animation styles
  const animationDelay = index * 80;

  return (
    <div
      className="rounded-xl p-5 transition-all duration-300"
      style={{
        backgroundColor: "#141414",
        border: "1px solid #2A2A2A",
        borderLeft: `4px solid ${themeColor}`,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${animationDelay}ms`,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Add-on badge */}
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-medium text-[#1B7A6E] border border-[#1B7A6E]/40 mb-2">
            Add On
          </span>
          <h4
            className="text-base text-white"
            style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 700, fontSize: "1.1rem" }}
          >
            {card.label}
          </h4>
          {card.description && (
            <p className="font-sans text-sm text-white/60 mt-2">
              {card.description}
            </p>
          )}
        </div>
        {card.price && (
          <p className="font-sans text-lg font-semibold text-white flex-shrink-0">
            ₹{card.price.replace("₹", "").replace("₹", "")}
          </p>
        )}
      </div>
    </div>
  );
}
