"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const sponsorLogos = [
  {
    name: "Merkle",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Merkle-At-UXI24-ElHgxUnO5aJn78lSZfv3Ay9FKxpINf.png",
    width: 140,
  },
  {
    name: "Candescent",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Candescent-At-UXINDIA-2025-e1753173674303-UVmioPUIpigC83x5LnPF5UGObiIf5Z.png",
    width: 140,
  },
  {
    name: "JPMorgan Chase",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jpmorgan-y1csRAdblwOv56P9quaj42wnXHFMQw.webp",
    width: 130,
  },
  {
    name: "Wongdoody",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wongdoody-at-UXINDIA24-39v9Ex86PHAXaSEuCQ1v9kVCZatXNT.png",
    width: 140,
  },
  {
    name: "Infoblox",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Infoblox-At-UXINDIA25-ezHG89cFE0aiDZM2bmpjBEo0RXvIT4.webp",
    width: 100,
  },
  {
    name: "Infiniqo",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Infiniqo-At-UXINDIA24-1024x616-1-TuNkU5ckpkKfs7o4NZVUlSHc78qia3.png",
    width: 100,
  },
  {
    name: "AND Academy",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-and-academy-51oYUBWC8u0t04UvTQZl1udDYG88tJ.webp",
    width: 100,
  },
  {
    name: "Orion Innovation",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orion-Technologies-bIHtQuESkq3vlk3eNXO8uKQfo2jHPG.webp",
    width: 130,
  },
  {
    name: "Happening",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Happening-AT-UXI24-rFYvAOVXmUsHa7yg0KPtiW7UFo5HUe.png",
    width: 100,
  },
  {
    name: "Infosys",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infosys-TMFbRZHxbreLnfNB4r9AUgcyH1192Z.svg",
    width: 100,
  },
  {
    name: "Publicis",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/publicis-gAw9j1TxkjpVHEXYolmmL8B77XXznI.svg",
    width: 120,
  },
  {
    name: "Qatalyst",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qatalyst-IumFdUffhdtDF4fa3xv6u6cYEALJhj.svg",
    width: 110,
  },
  {
    name: "Verizon",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/verizon-NjBmiAFEz60U1TviuGLuaUre6qPyY3.svg",
    width: 100,
  },
  {
    name: "Loops",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loops-pKE2RRIdS78d3qduE9AmeIsrtv4met.svg",
    width: 90,
  },
  {
    name: "Eventum",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eventum-Izkvh5YCJFsgdbQNo4Xpp2d4MqUiD0.svg",
    width: 110,
  },
]

export default function SponsorsSection() {
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
    <section id="sponsor" ref={sectionRef} className="bg-[#F5F0E8] py-24 md:py-32 overflow-hidden relative">
      {/* Background text */}
      <div className="absolute bottom-0 left-0 font-serif text-[16vw] text-[#0D0D0D]/[0.00] leading-none select-none pointer-events-none">
        SPONSOR
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3 block">
              Sponsorships
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-5xl lg:text-6xl text-[#0D0D0D] leading-[1.05]"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 500,
              }}
            >
              Don’t Sponsor an Event.
              <br />
              <span className="text-[#E85520]">Achieve a Business Outcome.
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="font-sans text-base text-[#0D0D0D]/60 leading-relaxed">
              UXINDIA is where the design community gathers to learn, connect, and shape what&apos;s next. Sponsoring gives your organization direct access to design leaders, product teams, startups, and emerging talent.
            </p>
          </motion.div>
        </div>

        {/* Sponsor benefit cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {[
            {
              title: "Brand Visibility",
              body: "Own high-intent moments on the main stage, in leadership lounges, and in highlight content.",
              bg: "#1B2E4A",
              text: "#FFFFFF",
              imgSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Talent%20Acquisition-eMqsGpexGFCeovAkFBkmN2L0DBRl92.png",
              imgAlt: "3D golden trophy icon",
            },
            {
              title: "Talent Hiring",
              body: "Become the place top designers and product leaders want to work-before they hit your careers page.",
              bg: "#E85520",
              text: "#FFFFFF",
              imgSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thought%20Leadership-a1DJYxh1BUD2ZvcOWuzAprx63W1cTg.png",
              imgAlt: "3D pen on notepad icon",
            },
            {
              title: "Product Positioning",
              body: "Put your product in front of teams that actually control adoption decisions, not just sign-ups.",
              bg: "#C8375B",
              text: "#FFFFFF",
              imgSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product%20Launch-0FBsHsLOVizhSZbo104Cpbv329qDWL.png",
              imgAlt: "3D VR headset icon",
            },
            {
              title: "Enterprise Relations",
              body: "Host the rooms where CXOs, heads of design, and product leads compare notes and make decisions.",
              bg: "#1B7A6E",
              text: "#FFFFFF",
              imgSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Visibility-Dxa68nFKGjLZi2aEfPUn0xpTA0o3yj.png",
              imgAlt: "3D megaphone icon",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="relative flex flex-col justify-between rounded-2xl p-6 overflow-hidden min-h-[200px] group"
              style={{ backgroundColor: card.bg, border: card.bg === "#F5F0E8" ? "1px solid rgba(13,13,13,0.1)" : "none" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10">
                <h3
                  className="text-xl mb-3 leading-tight"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                    color: card.text,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: card.text.toUpperCase() === "#FFFFFF" ? "rgba(255,255,255,0.75)" : "rgba(13,13,13,0.65)" }}
                >
                  {card.body}
                </p>
              </div>
              <motion.img
                src={card.imgSrc}
                alt={card.imgAlt}
                className="absolute -right-6 -bottom-6 w-36 h-36 object-contain opacity-80 group-hover:opacity-100"
                whileHover={{ scale: 1.1, rotate: 3, x: 8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Past partners — logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="font-sans text-xs text-[#0D0D0D]/30 uppercase tracking-[0.2em] mb-10 text-center">
            Past sponsors &amp; partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 items-center">
            {sponsorLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 15 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
                className="flex items-center justify-center h-28 py-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ maxWidth: logo.width, width: "100%", height: "100%", objectFit: "contain" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Partner CTA — below logo grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Link
              href="https://partner.ux-india.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E85520] hover:bg-[#E85520] text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E85520]/30"
            >
              Partner With Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
