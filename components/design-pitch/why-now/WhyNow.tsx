"use client";

import { motion } from "framer-motion";

export default function WhyNow() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative flex min-h-screen w-full items-center justify-center bg-[#FCF8F0] px-8 pt-56 pb-32"
    >
      {/* Content */}
      <div className="container mx-auto flex max-w-[1080px] justify-end z-1">
        <div className="flex max-w-[560px] flex-col gap-3 text-right text-black">
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="text-[36px] leading-[1.3]"
            style={{ fontFamily: "Shrikhand" }}
          >
            Why Now?
          </motion.h2>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="text-[18px]"
            style={{ fontFamily: "Google Sans" }}
          >
            AI is automating execution. As it does, the durable advantage shifts
            from technical skill alone to something harder to automate: deeply
            understanding people and solving problems worth solving.
          </motion.p>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="text-[18px]"
            style={{ fontFamily: "Google Sans" }}
          >
            That puts designers, and the builders who think like them, in a
            position to lead the next wave of products. Design Pitch exists to
            find them and give them a stage.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
