"use client";

import { type EventConfig } from "@/data/tickets";

interface EventHeaderProps {
  event: EventConfig;
}

export default function EventHeader({ event }: EventHeaderProps) {
  return (
    <div
      className="rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: event.themeBgColor }}
    >
      <h2
        className="leading-[1.08] mb-8"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 500,
          fontSize: "clamp(2rem, 3vw, 2.8rem)",
          color: event.textColor,
        }}
      >
        {event.name}
      </h2>
      <div>
        <p
          className="leading-[1.1]"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            color: event.textColor,
          }}
        >
          {event.dates}
        </p>
        <p
          className="font-sans text-sm mt-1"
          style={{ color: event.textColor, opacity: 0.85 }}
        >
          {event.venue}
        </p>
      </div>
    </div>
  );
}
