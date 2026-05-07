"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"

interface VenueCardProps {
  eventName: string
  dates: string
  venueName: string
  city: string
  description: string
  googleMapsUrl?: string
  isTBA?: boolean
  accentColor: string
  venueImage?: string
}

function VenueCard({
  eventName,
  dates,
  venueName,
  city,
  description,
  googleMapsUrl,
  isTBA = false,
  accentColor,
  venueImage,
}: VenueCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-100, 100], [4, -4])
  const rotateY = useTransform(mouseX, [-100, 100], [-4, 4])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isTBA) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    if (isTBA) return
    if (googleMapsUrl) {
      window.open(googleMapsUrl, "_blank")
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${isTBA ? "cursor-default" : "cursor-pointer"} select-none h-full`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl h-full flex flex-col"
        style={{
          backgroundColor: "#1A1A1A",
          border: "1px solid rgba(255,255,255,0.08)",
          rotateX: isTBA ? 0 : springRotateX,
          rotateY: isTBA ? 0 : springRotateY,
          transformStyle: "preserve-3d",
          minHeight: "340px",
        }}
      >
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={`grid-venue-${isTBA ? 'tba' : 'leela'}`} width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-venue-${isTBA ? 'tba' : 'leela'})`} />
          </svg>
        </div>

        {/* Venue image — revealed on hover with margin and rounded corners */}
        {venueImage && !isTBA && (
          <motion.div
            className="relative w-full overflow-hidden px-4 pt-4"
            initial={{ opacity: 0, height: 0, paddingTop: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 208 : 0,
              paddingTop: isHovered ? 16 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full h-48 rounded-[24px] overflow-hidden">
              <img
                src={venueImage}
                alt={venueName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col">
          {/* Top - Event badge */}
          <div className="flex items-start justify-between mb-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <span
                className="font-sans text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                {eventName}
              </span>
            </div>

          </div>

          {/* Venue info */}
          <div className="space-y-3 flex-1 flex flex-col">
            <motion.h3
              className="text-2xl md:text-3xl text-white leading-tight"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 500,
              }}
              animate={{
                x: isHovered && !isTBA ? 4 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {venueName}
            </motion.h3>

            <div className="flex items-center gap-3">
              <span className="font-sans text-sm" style={{ color: accentColor }}>{city}</span>
              <span className="font-sans text-xs text-white/40">{dates}</span>
            </div>

            <p className="font-sans text-sm text-white/40 leading-relaxed flex-1">
              {description}
            </p>

            {/* Animated underline - for both cards */}
            <motion.div
              className="h-px mt-4"
              style={{
                background: `linear-gradient(to right, ${accentColor}60, ${accentColor}20, transparent)`,
                originX: 0,
              }}
              initial={{ scaleX: 0.3 }}
              animate={{
                scaleX: isHovered && !isTBA ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Click hint */}
            {!isTBA && (
              <motion.p
                className="text-[10px] text-white/30 pt-1"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 4,
                }}
                transition={{ duration: 0.2 }}
              >
                Click to view on Google Maps
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function VenueSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="venue"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-sans text-xs text-white/30 uppercase tracking-[0.2em] mb-4">
            Venues
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] text-balance max-w-3xl mx-auto"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
            }}
          >
            A City and Venue Built for <span className="text-[#E85520]">Big Conversations.</span>
          </h2>
        </motion.div>

        {/* Venue Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          <VenueCard
            eventName="Leadership Summit"
            dates="22–25 Sept 2026"
            venueName="The Leela Bhartiya City"
            city="Bengaluru, India"
            description="An iconic five-star destination known for its grandeur, world-class amenities, and impeccable hospitality."
            googleMapsUrl="https://maps.app.goo.gl/GefGLLqYJ4ECABMcA"
            accentColor="#E85520"
            venueImage="/The Leela Bhartiya City.jpg"
          />

          <VenueCard
            eventName="Rising Leaders Forum"
            dates="26–27 Sept 2026"
            venueName="Srishti Institute of Art, Design and Technology"
            city="Bengaluru, India"
            description="A vibrant space for emerging designers to connect, learn, and shape the future of design together."
            googleMapsUrl="https://maps.app.goo.gl/Bec27bPxTosqivvq7"
            accentColor="#F5BF42"
            venueImage="/srishti-campus.jpg"
          />
        </motion.div>
      </div>
    </section>
  )
}
