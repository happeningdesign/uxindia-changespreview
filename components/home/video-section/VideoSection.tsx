"use client";

import { motion } from "framer-motion";

import {
  cardImages,
  RotatingCard,
} from "@/components/ui/rotating-card/RotatingCard";

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
