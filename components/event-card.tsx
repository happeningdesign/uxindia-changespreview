"use client"

import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"

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

export interface EventCardProps {
  title: string
  dates: string
  location: string
  bgColor: string
  textColor: string
  points: string[]
  audience: string
  avatars: string[]
  visible?: boolean
  hoverBgColor: string
  delay?: string
}

export function EventCard({ 
  title, 
  dates, 
  location, 
  bgColor, 
  textColor, 
  hoverBgColor, 
  points, 
  audience, 
  avatars, 
  visible = true, 
  delay = "0ms" 
}: EventCardProps) {
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
      <div className="absolute inset-0 p-8 flex flex-col items-start text-left">
        <h3
          className="text-left"
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

        <div className="text-left absolute bottom-8 left-8">
          <p
            className="text-left"
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
            className="font-sans text-base mt-1 text-left"
            style={{ color: textColor }}
          >
            {location}
          </p>
        </div>
      </div>

      {/* Curtain reveal overlay: Detailed info (appears on hover) */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col items-start text-left"
        style={{ backgroundColor: displayBgColor }}
        variants={curtainVariants}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      >
        {/* Title */}
        <h3
          className="mb-6 text-left"
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
        <ul className="space-y-3 mb-6 flex-1 w-full text-left">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-left">
              <span
                className="mt-1.5 text-xs leading-none flex-shrink-0"
                style={{ color: revealed ? "rgba(13,13,13,0.5)" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)") }}
              >
                •
              </span>
              <span
                className="font-sans text-sm leading-relaxed text-left"
                style={{ color: revealed ? "#0D0D0D" : (textColor === "#FFFFFF" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)") }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Audience with avatar group */}
        <div className="mt-auto w-full">
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
              className="px-2 text-xs text-left"
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
