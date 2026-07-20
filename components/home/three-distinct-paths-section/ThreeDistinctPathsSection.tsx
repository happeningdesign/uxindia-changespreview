"use client";

import { useRef, useState, useEffect } from "react";

import { TiltCard, TiltCardData } from "@/components/ui/tilt-card/TiltCard";

export default function ThreeDistinctPathsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="paths-section"
      ref={sectionRef}
      className="bg-cream py-24 md:py-32 overflow-hidden"
    >
      {/* Headline */}
      <div
        className={`text-center px-6 mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className="leading-[1.05] mb-2"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            color: "#0D0D0D",
          }}
        >
          Three distinct paths.
        </h2>
        <p
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            color: "#FF6D35",
            lineHeight: 1.05,
          }}
        >
          One shared outcome.
        </p>
        <p className="font-sans text-sm text-page/50 mt-5">
          Higher-leverage design leadership.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {TiltCardData.map((path, i) => (
          <TiltCard key={i} path={path} visible={visible} delay={i * 130} />
        ))}
      </div>
    </section>
  );
}
