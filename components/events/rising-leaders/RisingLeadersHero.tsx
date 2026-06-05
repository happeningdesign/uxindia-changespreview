"use client";

import { useState } from "react";

export default function RisingLeadersHero() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="relative w-full">
      {/* Hero container */}
      <div className="relative min-h-[90vh] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/rising-leaders-venue.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Left to right scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-0" />

        {/* Subtle bottom to top gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-0" />

        {/* Subtle orange tint overlay */}
        <div className="absolute inset-0 bg-orange-950/5 z-0" />

        {/* Content container - flex column with space-between to position content at bottom */}
        <div className="relative z-10 h-[90vh] max-w-7xl mx-auto px-6 flex flex-col justify-between pt-32 pb-0">
          {/* Top section - eyebrow kicker */}
          <div className="flex flex-col gap-16">
            <div className="space-y-6 max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards", animation: "fadeUp 0.6s ease-out 0.1s forwards" }}>
              {/* Eyebrow kicker */}
              <div className="space-y-2">
                <p className="font-sans text-xs md:text-sm text-[#E85520] font-semibold uppercase tracking-widest leading-tight">
                  DESIGN LEADERSHIP WEEK 2026 · TRACK 02
                </p>
              </div>

              {/* Large headline - clamped sizing */}
              <h1 className="font-leadership text-[3.5rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight">
                Rising Leaders
                <br />
                Forum 2026
              </h1>

              {/* Subcopy - max 46 chars */}
              <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed max-w-xs">
                For emerging design leaders ready to scale their impact.
              </p>
            </div>
          </div>

          {/* Bottom section - metadata and tabs */}
          <div className="space-y-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards", animation: "fadeUp 0.6s ease-out 0.2s forwards" }}>
            {/* Thin divider */}
            <div className="h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />

            {/* Metadata - three columns with vertical dividers on desktop */}
            <div className="flex flex-col md:flex-row md:divide-x md:divide-white/20 gap-8 md:gap-0 md:pr-8">
              <div className="md:pr-8">
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">
                  DATE
                </p>
                <p className="font-sans text-sm md:text-base text-white font-medium">
                  26-27 September
                </p>
              </div>
              <div className="md:pl-8">
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">
                  VENUE
                </p>
                <p className="font-sans text-sm md:text-base text-white font-medium">
                  Leela Bhartiya City
                </p>
              </div>
              <div className="md:pl-8">
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">
                  LOCATION
                </p>
                <p className="font-sans text-sm md:text-base text-white font-medium">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky tab navigation - positioned below hero */}
      <div className="sticky top-20 md:top-24 z-50 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 px-6 py-4 font-sans text-sm md:text-base font-medium text-center transition-all duration-300 border-b-2 ${
                activeTab === "overview"
                  ? "bg-white/5 text-white border-[#E85520]"
                  : "text-white/40 border-transparent hover:text-white/70 hover:bg-white/[0.02]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`flex-1 px-6 py-4 font-sans text-sm md:text-base font-medium text-center transition-all duration-300 border-b-2 ${
                activeTab === "schedule"
                  ? "bg-white/5 text-white border-[#E85520]"
                  : "text-white/40 border-transparent hover:text-white/70 hover:bg-white/[0.02]"
              }`}
            >
              Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Tab content area */}
      {activeTab === "overview" && (
        <div className="bg-[#0D0D0D] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">
              Overview
            </h2>
            <p className="font-sans text-base text-white/70 leading-relaxed max-w-3xl">
              The Rising Leaders Forum is designed for emerging design leaders and mid-career professionals ready to step into leadership roles. Over two intensive days, participants will engage with seasoned design leaders, collaborate with peers, and access mentorship to accelerate their growth and impact in the design industry.
            </p>
          </div>
        </div>
      )}

      {activeTab === "schedule" && (
        <div className="bg-[#0D0D0D] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">
              Schedule
            </h2>
            <p className="font-sans text-base text-white/70">
              Schedule details coming soon...
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
