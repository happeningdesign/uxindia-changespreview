"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
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
};

const illustrationVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    y: 30,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Recognition() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative z-1 flex min-h-[700px] w-full items-center overflow-x-clip bg-[#FCF8F0] px-8 py-40 z-1"
    >
      <div className="relative mx-auto flex w-full max-w-[1080px] justify-end">
        {/* Illustration */}
        <motion.div
          variants={illustrationVariants}
          className="pointer-events-none absolute bottom-[-550px] left-[-285px] hidden w-[750px] lg:w-[900px] max-w-[900px] md:block"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/design-pitch/illustrations/recognition-phones.webp"
              alt=""
              width={1270}
              height={1650}
              priority
              draggable={false}
              className="h-auto w-full select-none"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 flex max-w-[560px] flex-col text-right text-black"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="text-[36px] leading-[1.3]"
            style={{ fontFamily: "Shrikhand" }}
          >
            Recognition
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-[18px] leading-[1.4]"
            style={{ fontFamily: "Google Sans" }}
          >
            <strong>Recognition that goes beyond winners.</strong>
            <br />
            Hundreds of participants earn recognition they can showcase, not
            just the final winners.
          </motion.p>

          {/* Credentials */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-8 text-[18px] leading-[1.4]"
            style={{ fontFamily: "Google Sans" }}
          >
            <strong>Badges & Credentials</strong>
            <br />
            Every Top 100 entrant receives a verifiable digital badge and
            certificate, whether they're Top 100, finalist or winner. Celebrate
            your achievement on LinkedIn, portfolios, and beyond.
          </motion.p>

          {/* Footer */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-8 text-[18px] font-semibold"
            style={{ fontFamily: "Google Sans" }}
          >
            Recognition you can carry forward.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
