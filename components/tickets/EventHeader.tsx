"use client";

import { type EventConfig } from "@/data/tickets";

interface EventHeaderProps {
  event: EventConfig;
}

export default function EventHeader({ event }: EventHeaderProps) {
  return (
    <div
      className="rounded-2xl p-7 md:p-10 flex flex-col justify-between"
      style={{ backgroundColor: event.themeBgColor, minHeight: "260px" }}
    >
      <h2
        className="leading-[1.08]"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 500,
          fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
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
            fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
            color: event.textColor,
          }}
        >
          {event.dates}
        </p>
        <p
          className="font-sans text-sm mt-1.5"
          style={{ color: event.textColor, opacity: 0.85 }}
        >
          {event.venue}
        </p>
      </div>
    </div>
  );
}
