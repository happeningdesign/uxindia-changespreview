"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "UX India opened with a resounding quote of 'The future belongs to India'… India is showing the way for UX globally, and UX India captures that better than any other conference.",
    name: "Joseph Fletcher",
    title: "Design Leader",
    initials: "JF",
    bg: "#FFFFFF",
    textColor: "#0D0D0D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joseph-fYz7qq56oZdb3C46vbnywfk1HnYAUa.jpeg",
  },
  {
    quote:
      "A wonderfully curated event with great organisation, great energy, and a fantastic community. Truly grateful to have contributed to UX India 2025.",
    name: "Siriki Vardhan",
    title: "Speaker, UXINDIA25",
    initials: "SV",
    bg: "#E85520",
    textColor: "#FFFFFF",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/siriki-mybzZV6IPEXRvShMIaFFXKlm4ttvM5.jpeg",
  },
  {
    quote:
      "Launching The Loops here couldn't have been better. Incredible conversations, generous people, inspiring thinking, and a room full of designers genuinely excited about where our craft is heading.",
    name: "Shey Cobley",
    title: "Speaker & Sponsor, UXINDIA25",
    initials: "SC",
    bg: "#B8D8C8",
    textColor: "#0D0D0D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shey-7hYf8l47jT3ffwawvUToqE8Yew4NqY.jpeg",
  },
  {
    quote:
      "UXINDIA2025 delivered the perfect spark — deep insights, real stories and future-ready design thinking workshops. Energizing, insightful and unforgettable.",
    name: "Saraswati Viswanathan",
    title: "Attendee",
    initials: "SV",
    bg: "#C5B8D8",
    textColor: "#0D0D0D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saraswathi-MwtyjSz6KHsg2K8NOXlTO7ktRcAWGX.png",
  },
  {
    quote:
      "Great to see UX India has grown over the years with meaningful conversations. One of the very few mainstream conferences that has included accessibility with real prominence.",
    name: "Srinivasu",
    title: "Accessibility Advocate",
    initials: "SR",
    bg: "#F5C518",
    textColor: "#0D0D0D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srinivas-QcDgkxLJm9qgkVmIE2TxzykPznmaJx.jpg",
  },
  {
    quote:
      "UX India is where educators and practitioners come together to shape the future of design education. The conversations here inspire new ways of teaching and learning design.",
    name: "Ronak Jogeshwar",
    title: "Educator",
    initials: "RJ",
    bg: "#6B8E7E",
    textColor: "#FFFFFF",
    image: "/ronak.png",
  },
  {
    quote:
      "Inclusive design isn't just a feature — it's a mindset. UX India understands this deeply, and the community here is truly committed to designing for everyone.",
    name: "Bryce Johnson",
    title: "Principal Inclusive Designer",
    initials: "BJ",
    bg: "#4A6FA5",
    textColor: "#FFFFFF",
    image: "/bryce.png",
  },
  {
    quote:
      "As a product designer, UX India gave me the tools and perspectives to think bigger. The workshops and talks are practical, inspiring, and immediately applicable.",
    name: "Neha Saraswat",
    title: "Product Designer",
    initials: "NS",
    bg: "#D4A5A5",
    textColor: "#0D0D0D",
    image: "/neha.png",
  },
]

const STACK_CONFIGS = [
  { xPx: -12, yPx: 16, angle: -5 },
  { xPx: -8,  yPx: 12, angle: -3.5 },
  { xPx: -5,  yPx: 8,  angle: -2 },
  { xPx: -2,  yPx: 4,  angle: -0.5 },
  { xPx: 0,   yPx: 0,  angle: 0  },
  { xPx: 2,   yPx: 4,  angle: 0.5  },
  { xPx: 5,   yPx: 8,  angle: 2  },
  { xPx: 8,   yPx: 12, angle: 3.5  },
]

const CARD_WIDTH = 280
const CARD_HEIGHT = 340
const CARD_GAP = 24
const SCROLL_SPEED = 0.6
const CONTAINER_HEIGHT = CARD_HEIGHT + 76 // fixed, never changes

export default function TestimonialsSection() {
  const sectionRef   = useRef<HTMLDivElement>(null)
  const trackRef     = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number>(0)
  const scrollXRef   = useRef(0)
  const isPausedRef  = useRef(true) // always start paused

  const [visible, setVisible]               = useState(false)
  const [phase, setPhase]                   = useState<"stacked" | "spreading" | "scrolling" | "collapsing">("stacked")
  const [selectedIndex, setSelectedIndex]   = useState<number | null>(null)
  const [sectionWidth, setSectionWidth]     = useState(800)

  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection observer for entrance animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Measure container width
  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([e]) => setSectionWidth(e.contentRect.width))
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Lock body scroll when card modal open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selectedIndex])

  const oneSetWidth = testimonials.length * (CARD_WIDTH + CARD_GAP)
  const loopedCards = [...testimonials, ...testimonials, ...testimonials]

  // RAF scroll loop — starts immediately, isPausedRef controls movement
  const startScrollLoop = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    const loop = () => {
      if (!isPausedRef.current && trackRef.current) {
        scrollXRef.current += SCROLL_SPEED
        if (scrollXRef.current >= oneSetWidth) scrollXRef.current -= oneSetWidth
        trackRef.current.style.transform = `translateX(${-scrollXRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
  }, [oneSetWidth])

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  // Spread: staggered positions across section width
  const totalArrangeWidth = testimonials.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP
  const arrangeLeft = (i: number) =>
    sectionWidth / 2 - totalArrangeWidth / 2 + i * (CARD_WIDTH + CARD_GAP)

  const handleDeckClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (phase !== "stacked") return
    // Phase 1: Spread cards out
    setPhase("spreading")
    // Phase 2: After spread animation completes, start scrolling from current visual position
    setTimeout(() => {
      // The spread ends with cards centered — calculate offset so scroll continues seamlessly
      // Cards are spread starting from arrangeLeft(0), which is at the center of the section
      // The track's translateX(0) shows cards from the left edge, so we need to offset
      const centerOffset = (sectionWidth - totalArrangeWidth) / 2
      scrollXRef.current = centerOffset > 0 ? 0 : Math.abs(centerOffset)
      
      setPhase("scrolling")
      isPausedRef.current = true  // start paused
      startScrollLoop()
      // Release on first mouse move
      const onMove = () => {
        isPausedRef.current = false
        window.removeEventListener("mousemove", onMove)
      }
      window.addEventListener("mousemove", onMove)
    }, 1100) // wait for spread animation to fully settle
  }

  const handleCardClick = (e: React.MouseEvent, i: number) => {
    e.stopPropagation()
    if (phase === "stacked") {
      handleDeckClick(e)
    } else if (phase === "scrolling") {
      setSelectedIndex(prev => (prev === i ? null : i))
    }
  }

  const handleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation()
    cancelAnimationFrame(rafRef.current)
    isPausedRef.current = true
    scrollXRef.current = 0
    setSelectedIndex(null)
    // Phase 1: Animate back to spread positions
    setPhase("collapsing")
    // Phase 2: After collapse animation completes, return to stacked
    setTimeout(() => {
      setPhase("stacked")
    }, 1600)
  }

  const setPaused = (v: boolean) => {
    isPausedRef.current = v
  }

  // Card positions — stacked, spreading, or collapsing
  const getCardAnimate = (i: number) => {
    const stack = STACK_CONFIGS[i]
    if (phase === "spreading") {
      // Spread horizontally — same positions as the scrolling marquee start
      return {
        x: arrangeLeft(i),
        y: 28,
        rotate: 0,
        opacity: 1,
      }
    }
    if (phase === "collapsing") {
      // First phase of collapse — cards gather back toward center
      return {
        x: sectionWidth / 2 - CARD_WIDTH / 2 + stack.xPx,
        y: stack.yPx + 28,
        rotate: stack.angle,
        opacity: 1,
      }
    }
    // Stacked
    return {
      x: sectionWidth / 2 - CARD_WIDTH / 2 + stack.xPx,
      y: stack.yPx + 28,
      rotate: stack.angle,
      opacity: 1,
    }
  }

  // Staggered transition for each card
  const getCardTransition = (i: number) => {
    if (phase === "spreading") {
      return {
        type: "spring" as const,
        stiffness: 120,
        damping: 18,
        delay: i * 0.06,
      }
    }
    if (phase === "collapsing") {
      // Reverse stagger — outer cards move first, slower and more visible
      const reverseIndex = testimonials.length - 1 - i
      return {
        type: "spring" as const,
        stiffness: 80,
        damping: 14,
        delay: reverseIndex * 0.1,
      }
    }
    return { type: "spring" as const, stiffness: 200, damping: 28 }
  }

  return (
    <section
      ref={sectionRef}
      className="bg-[#0D0D0D] py-24 md:py-36 overflow-hidden relative"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Modal backdrop */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 bg-black/70"
            style={{ zIndex: 998 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* Selected card modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key={`selected-${selectedIndex}`}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              width: CARD_WIDTH,
              zIndex: 999,
              cursor: "pointer",
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1.08, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onClick={() => setSelectedIndex(null)}
          >
            <CardContent t={testimonials[selectedIndex]} shadow="0 40px 80px rgba(0,0,0,0.6)" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4 block"
          >
            The Community
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] text-balance"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
            }}
          >
            From the people{" "}
            <span className="text-[#E85520]">who were there.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm text-white/40 mt-4"
          >
            {phase === "stacked"
              ? "Click the deck to reveal all cards."
              : phase === "spreading"
              ? "Spreading..."
              : phase === "collapsing"
              ? "Collapsing..."
              : "Hover to pause · Click a card to read it."}
          </motion.p>
        </div>
      </div>

      {/* Single fixed-height stage — never changes height */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: CONTAINER_HEIGHT + 64 }}
      >
        {/* STACKED / SPREADING / COLLAPSING CARDS */}
        {(phase === "stacked" || phase === "spreading" || phase === "collapsing") && (
          <div className="absolute inset-0">
            {testimonials.map((t, i) => {
              const isTopCard = i === testimonials.length - 1
              return (
                <motion.div
                  key={`stack-${i}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: CARD_WIDTH,
                    zIndex: testimonials.length - i,
                    cursor: "pointer",
                  }}
                  initial={false}
                  animate={getCardAnimate(i)}
                  transition={getCardTransition(i)}
                  onClick={handleDeckClick}
                >
                  <motion.div
                    animate={isTopCard ? { y: [0, -14, 0] } : { y: 0 }}
                    transition={
                      isTopCard
                        ? { duration: 1.6, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }
                        : { duration: 0 }
                    }
                  >
                    <CardContent t={t} shadow="0 8px 32px rgba(0,0,0,0.3)" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* SCROLLING TRACK — only visible when scrolling phase */}
        {phase === "scrolling" && (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ paddingTop: 28 }}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                gap: CARD_GAP,
                width: `${oneSetWidth * 3}px`,
                transform: `translateX(${-scrollXRef.current}px)`,
              }}
            >
              {loopedCards.map((t, i) => {
                const originalIndex = i % testimonials.length
                return (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 cursor-pointer"
                    style={{ width: CARD_WIDTH }}
                    whileHover={{ y: -18 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onClick={(e) => handleCardClick(e, originalIndex)}
                  >
                    <CardContent t={t} shadow="0 8px 32px rgba(0,0,0,0.25)" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* Collapse button — absolutely positioned inside the container */}
        <AnimatePresence>
          {phase === "scrolling" && selectedIndex === null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 z-30"
            >
              <button
                onClick={handleCollapse}
                className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors duration-200 uppercase tracking-[0.2em] border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-full"
              >
                Collapse
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CardContent({
  t,
  shadow,
}: {
  t: (typeof testimonials)[0]
  shadow?: string
}) {
  return (
    <div
      className="rounded-3xl p-6 flex flex-col justify-between select-none"
      style={{
        backgroundColor: t.bg,
        color: t.textColor,
        height: CARD_HEIGHT,
        boxShadow: shadow ?? "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      <p className="font-sans text-sm font-medium leading-relaxed" style={{ color: t.textColor }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
          {t.image ? (
            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: t.bg === "#FFFFFF" ? "#E85520" : `${t.textColor}22`,
                color: t.bg === "#FFFFFF" ? "#FFFFFF" : t.textColor,
              }}
            >
              {t.initials}
            </div>
          )}
        </div>
        <div>
          <p className="font-sans text-sm font-semibold leading-tight" style={{ color: t.textColor }}>
            {t.name}
          </p>
          <p className="font-sans text-xs leading-tight mt-0.5" style={{ color: `${t.textColor}99` }}>
            {t.title}
          </p>
        </div>
      </div>
    </div>
  )
}
