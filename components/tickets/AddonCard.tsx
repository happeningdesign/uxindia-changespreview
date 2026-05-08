"use client";

import { type CardConfig } from "@/data/tickets";

interface AddonCardProps {
  card: CardConfig;
  themeColor: string;
  index: number;
  suppressAnimation: boolean;
  mounted: boolean;
}

export default function AddonCard({
  card,
  themeColor,
  index,
  suppressAnimation,
  mounted,
}: AddonCardProps) {
  // Animation styles
  const animationDelay = index * 80;
  
  const getAnimationStyles = () => {
    if (suppressAnimation) {
      // Already active on mount, show immediately without animation
      return {
        opacity: 1,
        transform: 'translateY(0)',
      };
    }
    
    if (!mounted) {
      // Initial state before animation
      return {
        opacity: 0,
        transform: 'translateY(12px)',
      };
    }
    
    // Animated state
    return {
      opacity: 1,
      transform: 'translateY(0)',
      transition: `opacity 300ms ease-out ${animationDelay}ms, transform 300ms ease-out ${animationDelay}ms`,
    };
  };

  return (
    <div
      className="rounded-xl p-4"
      style={{
        backgroundColor: '#1A1A1A',
        border: `1px dashed ${themeColor}66`, // 40% opacity
        ...getAnimationStyles(),
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1">
          <span className="inline-block px-2 py-0.5 rounded text-xs font-medium text-[#888] border border-[#333] mb-2">
            Add-on
          </span>
          <h4 className="font-sans text-sm font-medium text-white/90">
            {card.label}
          </h4>
        </div>
        {card.price && (
          <p className="font-sans text-base font-semibold text-white/90">
            {card.price}
          </p>
        )}
      </div>
      <p className="font-sans text-xs text-[#888] leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}
