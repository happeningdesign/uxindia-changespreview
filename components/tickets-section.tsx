"use client"

import { useEffect, useRef, useState } from "react"

const tiers = [
  {
    name: "General Pass",
    price: "₹12,999",
    originalPrice: "₹18,000",
    tag: "Early Bird",
    description: "For practitioners and aspiring leaders joining the UXINDIA community.",
    perks: [
      "All Theatre Talks & Panels",
      "Access to recordings (post-event)",
      "Evening socials",
      "Community Slack access",
      "Digital badge & certificate",
    ],
    cta: "Get General Pass",
    color: "#2D3580",
    bg: "#ECEFFE",
    featured: false,
  },
  {
    name: "Leadership Pass",
    price: "₹24,999",
    originalPrice: "₹34,000",
    tag: "Most Popular",
    description: "For Design Managers and Directors who want the full roundtable experience.",
    perks: [
      "Everything in General Pass",
      "2 Curated Roundtable sessions",
      "Chatham House Rule guarantee",
      "Priority seating",
      "Speaker dinner invitation",
      "Printed programme booklet",
    ],
    cta: "Get Leadership Pass",
    color: "#E85520",
    bg: "#E85520",
    featured: true,
  },
  {
    name: "Executive Pass",
    price: "₹44,999",
    originalPrice: "₹60,000",
    tag: "Limited",
    description: "For VPs, CDOs, and leaders who need unfettered access and exclusive sessions.",
    perks: [
      "Everything in Leadership Pass",
      "All Roundtable access (unlimited)",
      "1:1 Mentorship Walk slot",
      "Executive lounge access",
      "Hosted dinner with speakers",
      "Plus-one ticket included",
    ],
    cta: "Get Executive Pass",
    color: "#1A7A6E",
    bg: "#E8F5F3",
    featured: false,
  },
]

export default function TicketsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tickets" ref={sectionRef} className="bg-[#F5F0E8] py-24 md:py-32 overflow-hidden relative">
      {/* Background text */}
      <div className="absolute top-0 left-0 font-serif text-[18vw] text-[#0D0D0D]/[0.03] leading-none select-none pointer-events-none">
        TICKETS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3 block">
            Secure Your Seat
          </span>
          <h2
            className={`font-serif text-5xl md:text-6xl lg:text-7xl text-[#0D0D0D] leading-[1.05] transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Passes for
            <br />
            <span className="text-[#E85520]">every leader.</span>
          </h2>
          <p
            className={`font-sans text-base text-[#0D0D0D]/50 mt-4 max-w-md mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Early bird pricing ends when seats fill. UXINDIA25 sold out 6 weeks before the event.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-700 group ${
                tier.featured
                  ? "bg-[#E85520] text-white shadow-2xl shadow-[#E85520]/30 scale-105 z-10"
                  : "bg-white border border-[#0D0D0D]/10 hover:border-[#E85520]/30 hover:shadow-xl"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Tag */}
              <div className="px-6 pt-6">
                <span
                  className={`inline-block font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                    tier.featured
                      ? "bg-white/20 text-white"
                      : "bg-[#E85520]/10 text-[#E85520]"
                  }`}
                >
                  {tier.tag}
                </span>
                <h3
                  className={`font-serif text-2xl font-normal mb-1 ${
                    tier.featured ? "text-white" : "text-[#0D0D0D]"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`font-sans text-xs leading-relaxed mb-6 ${
                    tier.featured ? "text-white/70" : "text-[#0D0D0D]/50"
                  }`}
                >
                  {tier.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className={`font-serif text-4xl md:text-5xl tabular-nums leading-none ${
                      tier.featured ? "text-white" : "text-[#0D0D0D]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`font-sans text-sm line-through ${
                      tier.featured ? "text-white/40" : "text-[#0D0D0D]/30"
                    }`}
                  >
                    {tier.originalPrice}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`mx-6 h-px mb-6 ${
                  tier.featured ? "bg-white/20" : "bg-[#0D0D0D]/10"
                }`}
              />

              {/* Perks list */}
              <div className="px-6 flex-1">
                <ul className="space-y-2.5">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <circle cx="7" cy="7" r="6" fill={tier.featured ? "rgba(255,255,255,0.2)" : "#E85520"} opacity={tier.featured ? 1 : 0.15}/>
                        <path d="M4.5 7l2 2 3-3" stroke={tier.featured ? "#fff" : "#E85520"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span
                        className={`font-sans text-sm leading-snug ${
                          tier.featured ? "text-white/80" : "text-[#0D0D0D]/70"
                        }`}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 mt-6">
                <button
                  className={`w-full font-sans font-semibold text-sm py-3.5 rounded-full transition-all duration-300 ${
                    tier.featured
                      ? "bg-white text-[#E85520] hover:bg-[#F5F0E8]"
                      : "bg-[#0D0D0D] text-white hover:bg-[#E85520]"
                  } hover:scale-[1.02] hover:shadow-lg`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div
          className={`flex flex-wrap justify-center gap-6 mt-12 transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            "Secure payment via Razorpay",
            "Invoice available for companies",
            "Group discounts for 3+ passes",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L8.8 5.3L13.5 5.7L10 8.9L11.1 13.5L7 11L2.9 13.5L4 8.9L0.5 5.7L5.2 5.3L7 1Z" fill="#E85520" opacity="0.6"/>
              </svg>
              <span className="font-sans text-xs text-[#0D0D0D]/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
