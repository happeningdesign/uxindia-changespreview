"use client"

const items = [
  "India's #1 Design Leadership Gathering",
  "CXO Dinner · 22 Sep",
  "Vision & Strategy · 23 Sep",
  "Industry & Practice · 24 Sep",
  "Deep Learning · 25 Sep",
  "Future Leaders Forum · 26-27 Sep",
  "Leadership Summit · Bengaluru 2026",
  "Where Design Leads",
]

// Duplicate enough times so the loop is seamless
const repeated = [...items, ...items, ...items, ...items, ...items, ...items]

export default function MarqueeBanner() {
  return (
    <section className="overflow-hidden py-4" style={{ backgroundColor: "#E85520" }}>
      <div className="flex w-max whitespace-nowrap animate-marquee will-change-transform">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-6">
            <span
              className="text-white/90"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 400,
                fontSize: "1.5rem",
                letterSpacing: "0.01em",
              }}
            >
              {item}
            </span>
            <span className="text-white/60 text-xs">•</span>
          </span>
        ))}
      </div>
    </section>
  )
}
