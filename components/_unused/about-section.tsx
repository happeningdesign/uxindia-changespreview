"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const tracks = [
  {
    date: "Sept 22–23",
    title: "Vision & Strategy",
    desc: "Theatre talks from design leaders on vision, strategy, and the future of design.",
    tags: ["Leadership", "Vision", "Strategy"],
    bg: "#E85520",
    text: "#ffffff",
    tagBg: "rgba(255,255,255,0.2)",
    tagText: "#ffffff",
    dateBg: "rgba(0,0,0,0.15)",
    dateText: "#ffffff",
  },
  {
    date: "Sept 24",
    title: "Industry & Practice",
    desc: "Roundtables, workshops, and deep dives into design practice across industries.",
    tags: ["Practice", "Industry", "Workshop"],
    bg: "#FFEDC3",
    text: "#0D0D0D",
    tagBg: "rgba(13,13,13,0.08)",
    tagText: "rgba(13,13,13,0.6)",
    dateBg: "rgba(255,109,53,0.12)",
    dateText: "#E85520",
  },
  {
    date: "Sept 25",
    title: "Deep Learning",
    desc: "Advanced sessions on emerging trends, tools, and methodologies in design.",
    tags: ["Research", "Trends", "Learning"],
    bg: "#1D5078",
    text: "#ffffff",
    tagBg: "rgba(255,255,255,0.15)",
    tagText: "#ffffff",
    dateBg: "rgba(255,255,255,0.2)",
    dateText: "#ffffff",
  },
  {
    date: "Sept 26",
    title: "Future Leaders Forum",
    desc: "Emerging leaders and mentorship conversations shaping the design community.",
    tags: ["Emerging Leaders", "Mentorship", "Community"],
    bg: "#F5BF42",
    text: "#0D0D0D",
    tagBg: "rgba(13,13,13,0.12)",
    tagText: "rgba(13,13,13,0.7)",
    dateBg: "rgba(13,13,13,0.15)",
    dateText: "#0D0D0D",
  },
]

export default function AboutSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#F5F0E8] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4"
          >
            Four Tracks
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-[#0D0D0D] leading-[1.1] text-balance"
          >
            Four Tracks. One Community.
          </motion.h2>
        </div>

        {/* Track cards — colored rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
              className="rounded-2xl p-8 flex flex-col justify-between min-h-[260px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ backgroundColor: track.bg }}
            >
              {/* Top row — date badge */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-xs font-bold font-sans px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: track.dateBg, color: track.dateText }}
                >
                  {track.date}
                </span>
                <span
                  className="text-2xl font-black font-sans opacity-20"
                  style={{ color: track.text }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* Title + desc */}
              <div className="flex-1">
                <h3
                  className="font-serif text-3xl md:text-4xl leading-[1.1] mb-3"
                  style={{ color: track.text }}
                >
                  {track.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed opacity-75"
                  style={{ color: track.text }}
                >
                  {track.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-sans px-3 py-1 rounded-full"
                    style={{ backgroundColor: track.tagBg, color: track.tagText }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
