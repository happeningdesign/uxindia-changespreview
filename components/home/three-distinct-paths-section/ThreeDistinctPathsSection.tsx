"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const paths = [
  {
    title: "Practitioners",
    body: "This platform is designed specifically for UX designers, researchers, and product builders who are passionate about creating intuitive and engaging user experiences.",
    cardBg: "#E85520",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-qtgiqt045WlPPGPXONdqgTPm5vgIap.jpg",
    imageAlt: "UX practitioners collaborating around a round table during a workshop session",
  },
  {
    title: "Leaders",
    body: "This is intended for heads of Design, Product, Strategy, and Customer Experience who are looking to drive innovation and improve overall business outcomes.",
    cardBg: "#2A3F6B",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Hse7pZ6oBJUhehgptCgg8OXPQFUr5i.jpg",
    imageAlt: "A speaker presenting on stage at a design conference with a large illuminated screen behind them",
  },
  {
    title: "Entrepreneurs",
    body: "For founders, operators, and design-driven entrepreneurs who are passionate about creating innovative solutions and building impactful businesses that stand out in competitive markets.",
    cardBg: "#B8304A",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-znEnSHrsuHvhWR83DggKz1MI2WTnpo.jpg",
    imageAlt: "View from the stage of a large conference audience filling the hall at UXINDIA",
  },
]

function TiltCard({ path, visible, delay }: { path: typeof paths[0]; visible: boolean; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-3xl overflow-hidden flex flex-col cursor-default"
        style={{
          backgroundColor: path.cardBg,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(36px)",
          transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
          minHeight: "520px",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Text content */}
        <div className="px-6 pt-7 pb-5 text-center">
          <h3
            className="mb-3"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(2rem, 2.8vw, 2.5rem)",
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            {path.title}
          </h3>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {path.body}
          </p>
        </div>

        {/* Photo */}
        <div className="px-4 pb-4 mt-auto">
          <div className="relative w-full rounded-2xl overflow-hidden h-[280px]">
            <Image
              src={path.imageSrc}
              alt={path.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
              priority={path.title === "Entrepreneurs"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ThreeDistinctPathsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="paths-section" ref={sectionRef} className="bg-[#F5F0E8] py-24 md:py-32 overflow-hidden">
      {/* Headline */}
      <div
        className={`text-center px-6 mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className="leading-[1.05] mb-2"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            color: "#0D0D0D",
          }}
        >
          Three distinct paths.
        </h2>
        <p
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            color: "#FF6D35",
            lineHeight: 1.05,
          }}
        >
          One shared outcome.
        </p>
        <p className="font-sans text-sm text-[#0D0D0D]/50 mt-5">
          Higher-leverage design leadership.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {paths.map((path, i) => (
          <TiltCard key={i} path={path} visible={visible} delay={i * 130} />
        ))}
      </div>
    </section>
  )
}
