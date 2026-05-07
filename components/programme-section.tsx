"use client"

import { useEffect, useRef, useState } from "react"

const formats = [
  {
    number: "01",
    title: "Theatre Talks & Panels",
    body: "Candid main-stage playbooks and panels with live Q&A. Practical frameworks for org design, AI, and systems at scale. Recorded — speaker approval required.",
    tag: "Main Stage",
    color: "#E85520",
    bgLight: "#FFF3EE",
  },
  {
    number: "02",
    title: "Curated Roundtables",
    body: "8–12 peers, facilitated, Chatham House Rule. Bring real problems; leave with 2–3 next-week experiments and a few speed-dial allies. Off-record.",
    tag: "Intimate",
    color: "#2D3580",
    bgLight: "#ECEFFE",
  },
  {
    number: "03",
    title: "Socials & Off-Record",
    body: "Late-night design debates, micro-meetups, and city explorations. No agendas, just trust and good conversation. People > pixels.",
    tag: "Community",
    color: "#1A7A6E",
    bgLight: "#E8F5F3",
  },
]

const additionalFormats = [
  { title: "Workshops", desc: "Deep-skill 3-hour sessions with hands-on application" },
  { title: "Mentorship Walks", desc: "1:1 walks through the venue with senior design leaders" },
  { title: "Design Walks", desc: "Curated Bengaluru city explorations for traveling attendees" },
]

export default function ProgrammeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="programme" ref={sectionRef} className="bg-[#0D0D0D] py-24 md:py-32 overflow-hidden relative">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3 block">
              The Experience
            </span>
            <h2
              className={`font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Three formats.
              <br />
              <span className="text-[#E85520]">One community.</span>
            </h2>
          </div>
          <p
            className={`font-sans text-base text-white/50 max-w-xs leading-relaxed transition-all duration-700 delay-100 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            UXINDIA26 is designed around the way senior designers actually learn and connect.
          </p>
        </div>
      </div>

      {/* Format cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {formats.map((fmt, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-2xl overflow-hidden cursor-default transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
          >
            {/* Image area */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={`/placeholder.svg?height=208&width=480`}
                alt={fmt.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  activeCard === i ? "scale-110 grayscale-0" : "scale-100 grayscale-[0.5]"
                }`}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to bottom, ${fmt.color}40 0%, ${fmt.color}80 100%)`,
                  opacity: activeCard === i ? 0.7 : 0.5,
                }}
              />
              {/* Number */}
              <div className="absolute top-4 left-4 font-serif text-5xl text-white/20 leading-none select-none">
                {fmt.number}
              </div>
              {/* Tag */}
              <div
                className="absolute top-4 right-4 font-sans text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: fmt.color, color: "#fff" }}
              >
                {fmt.tag}
              </div>
            </div>

            {/* Content */}
            <div
              className="p-6 transition-colors duration-300"
              style={{ background: activeCard === i ? fmt.bgLight : "#161616" }}
            >
              <h3
                className="font-serif text-2xl mb-3 transition-colors duration-300 leading-tight"
                style={{ color: activeCard === i ? "#0D0D0D" : "#FFFFFF" }}
              >
                {fmt.title}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed transition-colors duration-300"
                style={{ color: activeCard === i ? "#0D0D0D99" : "#ffffff66" }}
              >
                {fmt.body}
              </p>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
              style={{
                background: fmt.color,
                width: activeCard === i ? "100%" : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Additional formats row */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="md:col-span-1 flex items-center">
            <span className="font-sans text-xs text-white/40 uppercase tracking-widest">Also at UXINDIA26</span>
          </div>
          {additionalFormats.map((fmt, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <span className="w-1.5 h-1.5 bg-[#E85520] rounded-full mt-2 flex-shrink-0" />
              <div>
                <span className="font-sans text-sm font-semibold text-white/80 group-hover:text-[#E85520] transition-colors">{fmt.title}</span>
                <p className="font-sans text-xs text-white/40 mt-0.5 leading-relaxed">{fmt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
