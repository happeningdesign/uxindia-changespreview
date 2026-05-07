"use client"

import { useEffect, useRef, useState } from "react"
import { motion, type Variants } from "framer-motion"
import Link from "next/link"

const SVG_SIZE = 1000

const summitPoints = [
  "Strategy for AI-first products and services.",
  "Systems thinking across products, orgs, and ecosystems.",
  "AI + design leadership: governance, ethics, and enablement.",
  "Enterprise case studies from India and global teams.",
]

const forumPoints = [
  "Foundations for scale: from craft to systems.",
  "Career acceleration and leadership mindset.",
  "Portfolio and narrative for AI-aware organizations.",
  "Mentorship clinics and live portfolio reviews.",
]

const curtainVariants: Variants = {
  visible: {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hidden: {
    clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

interface EventCardProps {
  title: string
  dates: string
  location: string
  bgColor: string
  textColor: string
  points: string[]
  audience: string
  avatars: string[]
  visible: boolean
  hoverBgColor: string
  delay: string
}

function EventCard({ title, dates, location, bgColor, textColor, hoverBgColor, points, audience, avatars, visible, delay }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [displayBgColor, setDisplayBgColor] = useState(bgColor)
  const [revealed, setRevealed] = useState(false)

  // Sync both bg color and text reveal state with curtain animation timing
  useEffect(() => {
    if (isHovered) {
      setDisplayBgColor(hoverBgColor)
      setRevealed(true)
    } else {
      const timer = setTimeout(() => {
        setDisplayBgColor(bgColor)
        setRevealed(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isHovered, bgColor, hoverBgColor])

  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden transition-all duration-700 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{
        backgroundColor: bgColor,
        minHeight: "380px",
        transitionDelay: delay,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Default content: Title + Dates (visible when not hovered) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <h3
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(3rem, 3vw, 3.6rem)",
            color: textColor,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h3>

        <div>
          <p
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(1.2rem, 3.5vw, 2rem)",
              color: textColor,
              lineHeight: 1.1,
            }}
          >
            {dates}
          </p>
          <p
            className="font-sans text-base mt-1"
            style={{ color: textColor }}
          >
            {location}
          </p>
        </div>
      </div>

      {/* Curtain reveal overlay: Detailed info (appears on hover) */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col"
        style={{ backgroundColor: displayBgColor }}
        variants={curtainVariants}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      >
        {/* Title */}
        <h3
          className="mb-6"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
            color: revealed ? "#0D0D0D" : textColor,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>

        {/* Bullet points */}
        <ul className="space-y-3 mb-6 flex-1">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-2 text-xs leading-none"
                style={{ color: revealed ? "rgba(13,13,13,0.5)" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)") }}
              >
                •
              </span>
              <span
                className="font-sans text-sm leading-relaxed"
                style={{ color: revealed ? "#0D0D0D" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)") }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Audience with avatar group */}
        <div className="mt-auto">
          <div 
            className="inline-flex items-center rounded-full border p-1 shadow shadow-black/5"
            style={{ 
              borderColor: revealed ? "rgba(13,13,13,0.2)" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"),
              backgroundColor: revealed ? "rgba(13,13,13,0.05)" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)")
            }}
          >
            <div className="flex -space-x-1.5">
              {avatars && avatars.map((avatar, i) => (
                <img
                  key={i}
                  className={`rounded-full ring-1 ${revealed ? "ring-black/10" : (textColor === "#FFFFFF" ? "ring-white/30" : "ring-black/10")}`}
                  src={avatar}
                  width={20}
                  height={20}
                  alt={`Audience member ${i + 1}`}
                />
              ))}
            </div>
            <p 
              className="px-2 text-xs"
              style={{ color: revealed ? "#0D0D0D" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.65)") }}
            >
              {audience}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FiveDaysSection() {
  const svgSpinRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  // Rotation animation
  useEffect(() => {
    let angle = 0
    let raf: number
    const tick = () => {
      angle += 0.05
      if (svgSpinRef.current) {
        svgSpinRef.current.style.transform = `rotate(${angle}deg)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="format-section"
      ref={sectionRef}
      className="bg-[#0D0D0D] pt-32 pb-24 relative overflow-hidden"
    >
      {/* Five Days SVG Object — positioned at top, only bottom half visible, behind headline */}
      <div
        className="absolute left-1/2 pointer-events-none select-none"
        style={{
          top: `-${SVG_SIZE / 2}px`,
          width: `${SVG_SIZE}px`,
          height: `${SVG_SIZE}px`,
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      >
        <div ref={svgSpinRef} style={{ width: "100%", height: "100%", opacity: 0.8 }}>
          <img
            src="/five-days-object.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Headline */}
        <div
          className={`text-center px-6 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2
            className="text-white leading-[1.08] mb-4"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
            }}
          >
            Five Days. Two Tracks.<br />One Leadership Arc.
          </h2>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto">
            Talks may be curated across both forums to maximize impact and cross-pollination.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Leadership Summit Card */}
          <EventCard
            title={"Leadership\nSummit"}
            dates="22–25 Sept"
            location="The Leela Bhartiya City, Bengaluru"
            bgColor="#1B7A6E"
            textColor="#FFFFFF"
            hoverBgColor="#8FCBC3"
            points={summitPoints}
            audience="Design leaders, CXOs, Heads of Design & Senior UX"
            avatars={[
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
            ]}
            visible={visible}
            delay="200ms"
          />

          {/* Rising Leaders Forum Card */}
          <EventCard
            title={"Rising Leaders\nForum"}
            dates="26–27 Sept"
            location="Srishti Institute of Art, Design and Technology, Bengaluru"
            bgColor="#F5BF42"
            textColor="#0D0D0D"
            hoverBgColor="#F9D98E"
            points={forumPoints}
            audience="Practitioners, students, early-career pros"
            avatars={[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
            ]}
            visible={visible}
            delay="350ms"
          />
        </div>

        {/* CTA */}
        <div
          className={`flex justify-center mt-12 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <Link
            href="https://2026.ux-india.org/waitlist/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold py-3 px-8 rounded-full text-white transition-opacity duration-200 hover:opacity-85 cursor-pointer flex items-center gap-2"
            style={{ backgroundColor: "#FF6D35" }}
          >
            Join Waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
