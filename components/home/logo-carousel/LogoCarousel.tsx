"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LogoCarouselProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

const logos = [
  // {
  //   src: "/images/logos/sponsors/jpmorgan.webp",
  //   className: "w-24 h-auto",
  // },
  // {
  //   src: "/images/logos/sponsors/accenture-song.webp",
  //   className: "w-36 h-auto",
  // },
  {
    src: "/images/logos/sponsors/if-design.webp",
    className: "w-24 h-auto",
  },
  {
    src: "/images/logos/sponsors/happening.svg",
    className: "w-36 h-auto",
  },
  {
    src: "/images/logos/sponsors/bayone--dark.svg",
    className: "w-24 h-auto",
  },
  {
    src: "/images/logos/sponsors/srishti-manipal.webp",
    className: "w-56 h-auto",
  },
  {
    src: "/images/logos/sponsors/eventum.svg",
    className: "w-32 h-auto",
  },
  {
    src: "/images/logos/sponsors/realcx-ai.svg",
    className: "w-20 h-auto",
  },
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
      <div className="relative w-full overflow-hidden rounded-[32px] md:rounded-[44px] bg-white/10 backdrop-blur-md">
        {/* Marquee */}
        <div className="overflow-hidden py-4">
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
          key={`${logo.src}-${index}`}
          className={`flex shrink-0 items-center justify-center ${logo.className}`}
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : `Partner logo ${index + 1}`}
            width={300}
            height={120}
            className={`w-full h-full object-contain grayscale invert`}
          />
        </div>
      ))}
    </div>
  );
}
