"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-1 py-40 bg-[#FADFB4] overflow-x-clip z-1">
      {/* Hero Container */}

      {/* Content */}
      <div className="relative z-20 max-w-full flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <motion.div
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/design-pitch/logos/design-pitch-big.webp"
                alt="Design Pitch"
                width={715}
                height={381}
                priority
                className="mx-auto w-[715px] h-auto max-w-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut",
          }}
          className="relative w-[415px] max-w-full text-[18px] md:text-[24px] leading-[1.2] sm:-rotate-10 translate-x-0 sm:translate-x-[30%] translate-y-[100%] sm:translate-y-[-50%]"
          style={{ fontFamily: "Google Sans" }}
        >
          <strong>
            A Global Showcase for <br />
            Human-Centered Innovation
          </strong>
          <br />
          Design the Future. Build What Matters.
        </motion.h1>

        {/* Hero Logo Strokes */}
        <div className="w-[952px] max-w-[120vw] md:max-w-[952px] h-auto absolute top-[30%] md:top-[40%] left-1/2 translate-[-45%] mx-auto z-[-1]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/design-pitch/illustrations/hero-logo-strokes.png"
                alt="Design Pitch"
                width={952}
                height={577}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Megaphone */}
        <div className="w-[715px] h-auto max-w-full absolute top-[25%] left-[-60%] mx-auto z-[-1]">
          {/* Entrance */}
          <motion.div
            initial={{
              opacity: 0,
              x: -220,
              y: 80,
              rotate: -18,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              type: "spring",
              stiffness: 70,
              damping: 14,
              mass: 1.3,
            }}
          >
            {/* Idle */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -1.5, 0, 1.5, 0],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/design-pitch/illustrations/megaphone.webp"
                alt="Design Pitch"
                width={952}
                height={879}
                priority
                draggable={false}
                className="w-full h-auto select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
