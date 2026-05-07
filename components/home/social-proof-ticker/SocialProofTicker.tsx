"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 90000, suffix: "+", display: "90K+", label: "Community" },
  { value: 2000000, suffix: "+", display: "2M+", label: "Footprint" },
  { value: 1600, suffix: "+", display: "1600+", label: "Attendees" },
  { value: 400, suffix: "+", display: "400+", label: "Design Leaders" },
]

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return count
}

function StatItem({ value, suffix, label, display, triggered }: { value: number; suffix: string; display: string; label: string; triggered: boolean }) {
  const count = useCountUp(value, 2000, triggered)
  
  // Extract the numeric part from display (e.g., "1600" from "1600+", "2" from "2M+")
  const getDisplayValue = () => {
    if (!triggered) return "0"
    
    // Parse the display string to get the numeric format
    if (display.includes("M")) {
      const numericCount = Math.floor(count / 1000000)
      return numericCount > 0 ? `${numericCount}M+` : "0"
    } else if (display.includes("K")) {
      const numericCount = Math.floor(count / 1000)
      return numericCount > 0 ? `${numericCount}K+` : "0"
    } else {
      // For plain numbers like 1600, 400
      return `${count}+`
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <span
        className="text-white leading-none tabular-nums"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 500,
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {getDisplayValue()}
      </span>
      <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
        {label}
      </span>
    </div>
  )
}

export default function SocialProofTicker() {
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#0D0D0D] overflow-hidden" style={{ paddingTop: "calc(1.5rem + 25px)", paddingBottom: "calc(1.5rem + 30px)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Header label */}
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35">
          Built by UMO Design Foundation
        </span>

        {/* Stats grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              display={stat.display}
              label={stat.label}
              triggered={triggered}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
