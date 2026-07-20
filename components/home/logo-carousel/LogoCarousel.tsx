"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LogoCarouselProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

const logos = [
  "/images/logos/happening.webp",
  "/images/logos/jpmorgan.webp",
  "/images/logos/infoblox.webp",
  "/images/logos/candescent.webp",
  "/images/logos/merkle.webp",
  "/images/logos/orion.webp",
  "/images/logos/wongdoody.webp",
  "/images/logos/the-loops.svg",
  "/images/logos/verizon.svg",
];

const speedConfig = {
  slow: 40,
  normal: 30,
  fast: 20,
};

export const LogoCarousel: React.FC<LogoCarouselProps> = ({
  className = "",
  speed = "slow",
  pauseOnHover = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationDuration = speedConfig[speed];

  return (
    <div
      className={`relative w-full overflow-hidden px-5 md:px-8 py-5 z-9 ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Carousel Pill */}
      <div className="relative w-full overflow-hidden rounded-[32px] md:rounded-[44px] bg-white/5 backdrop-blur-md">
        {/* Marquee */}
        <div className="overflow-hidden py-3">
          <div
            className="logo-marquee flex w-max"
            style={{
              animationDuration: `${animationDuration}s`,
              animationPlayState:
                isHovered && pauseOnHover ? "paused" : "running",
            }}
          >
            <LogoGroup />
            <LogoGroup ariaHidden />
          </div>
        </div>
      </div>
    </div>
  );
};

interface LogoGroupProps {
  ariaHidden?: boolean;
}

function LogoGroup({ ariaHidden = false }: LogoGroupProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-10"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo, index) => (
        <div
          key={`${logo}-${index}`}
          className="flex h-12 w-24 shrink-0 items-center justify-center md:h-10 md:w-24"
        >
          <div className="relative h-full w-full grayscale invert">
            <Image
              src={logo}
              alt={ariaHidden ? "" : `Partner logo ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 176px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
