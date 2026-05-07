"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const cardImages = [
  // Card 1 images
  [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54840953586_d5700afae1_k%201-fMFDdte2eCoyomXt6dqER7HjfEEwLM.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54841197998_b6941b3f34_c-qiMHy48vu2Z2CGlSTZ9MRUsTDWZ2Uw.jpg",
    "/UXI1.webp",
    "/UXI6.webp",
    "/UXI3.webp",
    "/UXI7.webp",
  ],
  // Card 2 images
  [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54841185444_7f4b5dfa1d_c-oynU3Ot9rYZ0pVBV4xdEUIzeQl6bPK.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54841281170_6905d9227b_c-4ezC612XkAsRCxvsXwqII0Sc3tTC0S.jpg",
    "/UXI5.webp",
    "/UXI9.webp",
    "/UXI10.webp",
    "/UXI1.webp",
  ],
  // Card 3 images
  [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54840166142_5779d70b1a_k%201-Vxh4zhdQzOUs3uSZsf3VGeu9FsY8Hl.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54840950731_6bb6b91f4d_c-yhAkyYg4UXJ0xPeixOgLEt3UtZOUtA.jpg",
    "/UXI2.webp",
    "/UXI4.webp",
    "/UXI8.webp",
    "/UXI7.webp",
  ],
]

function RotatingCard({ images, index }: { images: string[]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden group relative"
      style={{ aspectRatio: "4/3" }}
    >
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Conference moment ${i + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === i ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      ))}
    </motion.div>
  )
}

export default function VideoSection() {
  return (
    <section className="bg-[#0D0D0D] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section title */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4 block"
          >
            Highlights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] text-balance"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
            }}
          >
            Moments That Matter
          </motion.h2>
        </div>

        {/* Top: autoplay video — full-width wide rectangle */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden mb-4"
          style={{ aspectRatio: "16/7" }}
        >
          {/* Autoplay video */}
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opt2-gBdIU5xPiRCFNWIW2fBLfLw0yGaXGB.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom: 3 rotating image cards */}
        <div className="grid grid-cols-3 gap-4">
          {cardImages.map((images, i) => (
            <RotatingCard key={i} images={images} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
