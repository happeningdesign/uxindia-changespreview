"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cardImages = [
  // Card 1 images
  [
    "/images/event/UXI1.webp",
    "/images/event/UXI2.webp",
    "/images/event/UXI3.webp",
    "/images/event/UXI4.webp",
    "/images/event/UXI5.webp",
    "/images/event/UXI6.webp",
  ],
  // Card 2 images
  [
    "/images/event/UXI7.webp",
    "/images/event/UXI8.webp",
    "/images/event/UXI9.webp",
    "/images/event/UXI10.webp",
    "/images/event/UXI11.webp",
    "/images/event/UXI12.webp",
  ],
  // Card 3 images
  [
    "/images/event/UXI13.webp",
    "/images/event/UXI14.webp",
    "/images/event/UXI15.webp",
    "/images/event/UXI16.webp",
    "/images/event/UXI1.webp",
    "/images/event/UXI2.webp",
  ],
];

function RotatingCard({ images, index }: { images: string[]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
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
  );
}

export default function VideoSection() {
  return (
    <section className="bg-page py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section title */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-4 block"
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
          {/* https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opt2-gBdIU5xPiRCFNWIW2fBLfLw0yGaXGB.mp4 */}
          <video
            src="/videos/shorts.mp4"
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
  );
}
