"use client";

const items = ["Coming Soon", "Coming Soon", "Coming Soon", "Coming Soon"];

// Duplicate enough times so the loop is seamless
const repeated = [...items, ...items, ...items, ...items, ...items, ...items];

export default function ComingSoonMarquee() {
  return (
    <div className="overflow-hidden py-3 rounded-lg" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="flex w-max whitespace-nowrap animate-marquee will-change-transform">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-6">
            <span
              className="text-white/70"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 400,
                fontSize: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </span>
            <span className="text-white/40 text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
