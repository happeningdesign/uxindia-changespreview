"use client"

import { useEffect, useRef, useState } from "react"

const audienceItems = [
  { role: "Staff Designer", desc: "You're senior enough to know what good looks like, and frustrated that your org doesn't." },
  { role: "Design Manager", desc: "You're trying to run a high-performing team in a world that doesn't always value design." },
  { role: "Director of Product Design", desc: "You're navigating org politics, product strategy, and people—simultaneously." },
  { role: "VP / Head of Design", desc: "You're operating at the intersection of business, technology, and craft. You need peers, not panels." },
  { role: "CDO", desc: "You're building design culture from the top. UXINDIA is where that conversation happens in India." },
]

const notForItems = [
  "Looking for portfolio feedback or job hunting tips",
  "Expect passive sit-and-listen sessions",
  "Want beginner-level UX fundamentals",
]

export default function WhoIsThisFor() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F5F0E8] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: content */}
          <div>
            <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3 block">
              The Audience
            </span>
            <h2
              className={`font-serif text-5xl md:text-6xl lg:text-7xl text-[#0D0D0D] leading-[1.05] mb-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Who is this <span className="text-[#E85520]">for?</span>
            </h2>

            <p
              className={`font-sans text-lg text-[#0D0D0D]/60 leading-relaxed mb-10 max-w-md transition-all duration-700 delay-100 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              Whether you&apos;re a Staff Designer, Design Manager, or CDO, UXINDIA26 is built for senior design professionals navigating the nuances of leadership in India&apos;s fast-moving tech ecosystem.
            </p>

            {/* Role accordion */}
            <div
              className={`space-y-1 mb-12 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {audienceItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveRole(i)}
                  className={`group cursor-pointer rounded-xl transition-all duration-300 overflow-hidden ${
                    activeRole === i
                      ? "bg-[#0D0D0D] text-white"
                      : "bg-transparent hover:bg-[#0D0D0D]/5"
                  }`}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                          activeRole === i ? "bg-[#E85520]" : "bg-[#0D0D0D]/20"
                        }`}
                      />
                      <span
                        className={`font-sans text-sm font-semibold transition-colors ${
                          activeRole === i ? "text-white" : "text-[#0D0D0D]"
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform duration-300 ${activeRole === i ? "rotate-90" : ""}`}
                    >
                      <path d="M6 4l4 4-4 4" stroke={activeRole === i ? "#E85520" : "#0D0D0D66"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {activeRole === i && (
                    <div className="px-4 pb-4">
                      <p className="font-sans text-sm text-white/60 leading-relaxed pl-5">{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Not for panel */}
            <div
              className={`border border-[#C8365A]/30 rounded-xl p-5 bg-[#C8365A]/5 transition-all duration-700 delay-400 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-sans text-xs font-semibold text-[#C8365A] uppercase tracking-wider mb-3">
                This is NOT for you if...
              </p>
              <ul className="space-y-2">
                {notForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C8365A] mt-0.5 flex-shrink-0">✕</span>
                    <span className="font-sans text-sm text-[#0D0D0D]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: photo grid */}
          <div
            className={`grid grid-cols-3 gap-3 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Large right video */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden h-[380px]">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opt2-3UCgedfOONcvGDVfTryBwzhHFUe794.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            {/* Two smaller left photos */}
            <div className="rounded-2xl overflow-hidden h-[180px] group">
              <img
                src="/placeholder.svg?height=180&width=200"
                alt="Packed theatre at UXINDIA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[180px] group">
              <img
                src="/placeholder.svg?height=180&width=200"
                alt="Roundtable discussion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
