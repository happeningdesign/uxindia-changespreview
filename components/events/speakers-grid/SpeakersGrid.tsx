"use client";

import { useState } from "react";
import Link from "next/link";

// Types
import type { Speaker } from "@/types/speaker";
import { getSpeakerSlug } from "@/types/speaker";

const speakerColors = ["#E85520", "#1D5078", "#1A7A6E", "#C8365A"];

interface SpeakersGridProps {
  speakers: Speaker[];
  showMorePlaceholder?: boolean;
  variant?: "dark" | "light";
  event?: "leadership" | "rising";
}

function SpeakerCard({
  speaker,
  index,
  variant = "dark",
  isFlipped,
  onFlip,
  event = "leadership",
}: {
  speaker: Speaker;
  index: number;
  variant?: "dark" | "light";
  isFlipped: boolean;
  onFlip: () => void;
  event?: "leadership" | "rising";
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const color = speakerColors[index % speakerColors.length];
  const isLight = variant === "light";
  const showOverlay = isHovered || isTapped;

  return (
    <div
      className="aspect-[4/5] cursor-pointer relative rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundColor: isLight ? color : "#1F1F1F",
        boxShadow: isLight
          ? "0 8px 24px rgba(0,0,0,0.12)"
          : "0 8px 28px rgba(0,0,0,0.55)",
        ring: isLight
          ? "1px solid rgba(13,13,13,0.08)"
          : "1px solid rgba(255,255,255,0.12)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        // On touch devices, toggle the overlay; on desktop this is a no-op (hover handles it)
        if (window.matchMedia("(hover: none)").matches) {
          setIsTapped((prev) => !prev);
        } else {
          onFlip();
        }
      }}
    >
      {/* Photo */}
      <img
        src={speaker.image || `/placeholder.svg?height=500&width=400`}
        alt={speaker.name}
        className="absolute inset-0 w-full h-full object-cover object-top transform scale-[1.2]"
        style={isLight ? { filter: "contrast(1.05)" } : undefined}
        crossOrigin="anonymous"
      />

      {/* Base gradient — tighter on mobile so face shows, fuller on desktop */}
      {isLight ? (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.93) 100%)`,
          }}
        />
      ) : (
        <>
          <div
            className="absolute inset-0 md:hidden bg-gradient-to-t from-black/95 via-black/20 to-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 35%, transparent 55%)",
            }}
          />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-black via-black/50 to-transparent" />
        </>
      )}

      {/* Front card name/role — visible when not hovered */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3 md:p-5 transition-opacity duration-300"
        style={{ opacity: showOverlay ? 0 : 1 }}
      >
        {/* Orange arrow button — bottom right */}
        <div className="flex items-end justify-between gap-1.5">
          <div className="flex-1 items-start min-w-0">
            <h3
              className="font-leadership text-white leading-[0.92] tracking-tight mb-1.5"
              style={{
                fontSize: "clamp(1.1rem, 5vw, 2rem)",
              }}
            >
              {(() => {
                const words = speaker.name.trim().split(" ");
                const firstName = words[0];
                const restName = words.slice(1).join(" ");
                return (
                  <>
                    <span className="block" style={{ color: "white" }}>
                      {firstName}
                    </span>
                    {restName && <span className="block">{restName}</span>}
                  </>
                );
              })()}
            </h3>
            <p className="font-sans text-[10px] md:text-sm text-white/70 leading-tight">
              {speaker.role}
            </p>
          </div>
          {/* Orange circle arrow */}
          <div className="flex justify-end items-end">
            <div
              className="shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mb-0.5"
              style={{ backgroundColor: "#E85520" }}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphism overlay — slides up from bottom on hover */}
      <div
        className="speaker-overlay absolute inset-x-0 bottom-0 flex flex-col p-3 md:p-5 transition-all duration-500 ease-out max-h-[85%] overflow-y-auto"
        style={{
          background: "rgba(10, 10, 10, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: `1px solid rgba(255,255,255,0.12)`,
          transform: showOverlay ? "translateY(0%)" : "translateY(100%)",
          opacity: showOverlay ? 1 : 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          @media (max-width: 767px) {
            .speaker-overlay::-webkit-scrollbar {
              display: none;
            }
          }
        `}</style>
        {/* Talk type chip */}
        {speaker.talkType && (
          <span className="font-sans text-[7px] md:text-[9px] font-semibold text-white/60 tracking-widest uppercase mb-1.5 flex-shrink-0">
            {speaker.talkType}
          </span>
        )}
        <h3 className="font-leadership text-sm md:text-lg text-white leading-tight mb-1 flex-shrink-0">
          {speaker.name}
        </h3>
        <p className="font-sans text-[8px] md:text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-2 flex-shrink-0">
          {speaker.role}
        </p>
        <p className="font-sans text-[9px] md:text-xs text-white/80 leading-relaxed line-clamp-3 md:line-clamp-4 flex-shrink-0">
          {speaker.bio ||
            `${speaker.name} is a respected voice in the design community, bringing valuable insights and experience to UXINDIA.`}
        </p>
        <Link
          href={`/${event === "rising" ? "rising-leaders-forum" : "leadership-summit"}/speakers/${getSpeakerSlug(speaker)}`}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          className="group/btn mt-2 md:mt-3 inline-flex items-center gap-1 self-start font-sans text-[8px] md:text-[11px] font-semibold uppercase tracking-wider text-[#E85520] flex-shrink-0 hover:text-[#E85520]/80 transition-colors"
        >
          Know More
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function SpeakersGrid({
  speakers,
  showMorePlaceholder = true,
  variant = "dark",
  event = "leadership",
}: SpeakersGridProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isLight = variant === "light";

  const handleFlip = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  // Extract unique talk types from speakers
  const talkTypes = Array.from(
    new Set(speakers.map((s) => s.talkType).filter(Boolean)),
  ) as string[];

  // Filter speakers based on active filter
  const filteredSpeakers = activeFilter
    ? speakers.filter((s) => s.talkType === activeFilter)
    : speakers;

  return (
    <section
      className={`${isLight ? "bg-[#F5F0E8]" : "bg-[#0D0D0D]"} py-16 md:py-24`}
      id="speakers"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
          <h2
            className={`font-leadership text-4xl md:text-5xl tracking-tight ${isLight ? "text-[#0D0D0D]" : "text-white"}`}
          >
            Speakers
          </h2>

          {/* Filter chips */}
          {talkTypes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setActiveFilter(null);
                  setActiveCard(null);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                  activeFilter === null
                    ? "bg-[#E85520] text-white"
                    : isLight
                      ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/70 hover:bg-[#0D0D0D]/20"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                All
              </button>
              {talkTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveFilter(type);
                    setActiveCard(null);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                    activeFilter === type
                      ? "bg-[#E85520] text-white"
                      : isLight
                        ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/70 hover:bg-[#0D0D0D]/20"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Speakers grid - 4 columns on desktop to match design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              speaker={speaker}
              index={index}
              variant={variant}
              isFlipped={activeCard === index}
              onFlip={() => handleFlip(index)}
              event={event}
            />
          ))}

          {/* More speakers placeholder */}
          {showMorePlaceholder && !activeFilter && (
            <div
              className={`relative aspect-[4/5] rounded-lg border border-dashed flex items-center justify-center bg-transparent ${isLight ? "border-[#0D0D0D]/20" : "border-white/20"}`}
            >
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E85520]/50 mb-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#E85520]"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <p
                  className={`font-sans text-xs md:text-sm ${isLight ? "text-[#0D0D0D]/60" : "text-white/60"}`}
                >
                  More speakers
                </p>
                <p
                  className={`font-sans text-xs ${isLight ? "text-[#0D0D0D]/40" : "text-white/40"}`}
                >
                  announced soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
