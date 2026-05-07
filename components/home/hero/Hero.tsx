"use client"
// Hero — centered immersive layout
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [navHeight, setNavHeight] = useState(72)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measureNav = () => {
      const nav = document.querySelector("nav")
      if (nav) setNavHeight(nav.getBoundingClientRect().height)
    }
    measureNav()
    window.addEventListener("resize", measureNav)
    return () => window.removeEventListener("resize", measureNav)
  }, [])

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120])

  useEffect(() => {
    // Sep 22 2026, 09:00 IST = UTC+5:30 → UTC 03:30
    const target = new Date("2026-09-22T03:30:00Z")
    const update = () => {
      const diff = target.getTime() - Date.now()
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          mins: Math.floor((diff % 3600000) / 60000),
          secs: Math.floor((diff % 60000) / 1000),
        })
      }
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden w-full"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      {/* Full-bleed background video with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <video
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opt1-evFxzPzYmrsPwiyE84pOCCSSzlQ0YI.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-2/3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }} />
      </motion.div>

      {/* Content layer — two groups: top (countdown+date) and lower (badge+headline) */}
      <div
        className="relative z-10 min-h-screen flex flex-col items-center text-center px-6"
      >
        {/* ── TOP GROUP: countdown + date, offset 64px below nav ── */}
        <div
          className="flex flex-col items-center gap-4 w-full"
          style={{ paddingTop: `${navHeight + 80}px` }}
        >
          {/* Inline countdown pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 font-sans text-white/80 text-sm tracking-wide border border-white/20 rounded-full px-5 py-2"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            <span>
              <span className="font-black text-white text-base tabular-nums">{countdown.days}</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest ml-1">Days</span>
            </span>
            <span className="text-white/30">|</span>
            <span>
              <span className="font-black text-white text-base tabular-nums">{String(countdown.hours).padStart(2, "0")}</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest ml-1">Hrs</span>
            </span>
            <span className="text-white/30">|</span>
            <span>
              <span className="font-black text-white text-base tabular-nums">{String(countdown.mins).padStart(2, "0")}</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest ml-1">Min</span>
            </span>
            <span className="text-white/30">|</span>
            <span>
              <span className="font-black text-white text-base tabular-nums">{String(countdown.secs).padStart(2, "0")}</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest ml-1">Sec</span>
            </span>
          </motion.div>

          {/* Date with decorative lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 justify-center"
          >
            <div className="h-px w-16" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
            <span className="font-sans text-xs font-semibold text-white/70 tracking-[0.22em] uppercase">
              22–27 Sep, Bengaluru
            </span>
            <div className="h-px w-16" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
          </motion.div>
        </div>

        {/* Spacer pushes lower group down */}
        <div className="flex-1" />

        {/* ── LOWER GROUP: badge + headline + subtitle ── */}
        <div className="flex flex-col items-center gap-6 max-w-4xl w-full pb-28">

          {/* Applications open badge with blinking dot */}
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 font-sans text-[10px] font-bold text-white/80 border border-white/25 px-4 py-1.5 rounded-full tracking-[0.18em] uppercase"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            Call for Speakers Open
          </motion.span>

          {/* Headline — UXILeadershipCondensed */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.05]"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontStretch: "condensed",
              fontSize: "clamp(3rem, 7.5vw, 6rem)",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Asia&apos;s definitive design</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>leadership platform.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-sans text-sm text-white/65 leading-relaxed max-w-xl"
          >
            A 5-day design leadership platform for practitioners, leaders, and entrepreneurs shaping the future of products, systems, and businesses.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/70"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
