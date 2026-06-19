"use client";

import Link from "next/link";

export default function ConvinceManagerBanner() {
  return (
    <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 border border-white/10 rounded-2xl px-8 py-10 md:px-16 md:py-16 bg-white/[0.03]">

          {/* Left: text */}
          <div className="max-w-xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-4 block">
              For Your Organisation
            </span>
            <h2 className="font-leadership text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-4 text-balance">
              Need to Convince Your{" "}
              <span className="text-[#E85520]">Manager?</span>
            </h2>
            <p className="font-sans text-base text-white/50 leading-relaxed">
              Get a ready-to-send approval letter, a business case, and answers to every question your manager might ask — all in one place.
            </p>
          </div>

          {/* Right: stats + CTA */}
          <div className="flex flex-col gap-6 shrink-0">
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {[
                { value: "22+", label: "Years of Legacy" },
                { value: "5", label: "Days of Learning" },
                { value: "2", label: "Curated Tracks" },
                { value: "1×", label: "Attendee, Team-Wide Impact" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-leadership text-3xl text-white leading-none mb-0.5">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-white/40 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/convince-your-manager"
              className="inline-flex items-center justify-center gap-3 bg-[#E85520] text-white font-sans text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#d04a1a] transition-colors"
            >
              Learn More
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
