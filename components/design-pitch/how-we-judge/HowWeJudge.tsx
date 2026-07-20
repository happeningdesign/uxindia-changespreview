"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const criteria = [
  {
    criterion: "Problem/use-case and the solution",
    weight: "25%",
  },
  {
    criterion: "Human-Centered Design & Experience",
    weight: "20%",
  },
  {
    criterion: "Innovation & Differentiation",
    weight: "15%",
  },
  {
    criterion: "Feasibility & Prototype",
    weight: "15%",
  },
  {
    criterion: "Business Viability",
    weight: "15%",
  },
  {
    criterion: "Sustainability & Ethics",
    weight: "10%",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HowWeJudge() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative flex min-h-[910px] w-full items-center justify-center bg-[#FCF8F0] px-6 overflow-x-clip overflow-y-visible z-2"
      id="criteria"
    >
      <div className="relative mx-auto w-full max-w-[760px] py-32">
        {/* Heading */}
        <motion.div variants={fadeUpVariants} className="text-center">
          <h2
            className="text-[36px] leading-[1.3] text-black"
            style={{ fontFamily: "Shrikhand" }}
          >
            How we Judge
          </h2>

          <p
            className="mx-auto mt-4 max-w-[520px] text-[18px] leading-[1.4] text-black"
            style={{ fontFamily: "Google Sans" }}
          >
            How we judge We are not judging who has raised the most money. We're
            judging the best solution for people.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          variants={containerVariants}
          className="mt-10 w-full border-t border-black/40"
        >
          {/* Header */}
          <motion.div
            variants={rowVariants}
            className="grid grid-cols-[1fr_120px] border-b border-black/40 px-8 py-4"
          >
            <p
              className="font-semibold text-[#B43A0B]"
              style={{ fontFamily: "Google Sans" }}
            >
              Criterion
            </p>

            <p
              className="font-semibold text-[#B43A0B]"
              style={{ fontFamily: "Google Sans" }}
            >
              Weight
            </p>
          </motion.div>

          {/* Rows */}
          {criteria.map((item) => (
            <motion.div
              key={item.criterion}
              variants={rowVariants}
              className="grid grid-cols-[1fr_120px] border-b border-black/40 px-8 py-4"
            >
              <p
                className="text-[17px] text-black"
                style={{ fontFamily: "Google Sans" }}
              >
                {item.criterion}
              </p>

              <p
                className="text-[17px] text-black"
                style={{ fontFamily: "Google Sans" }}
              >
                {item.weight}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUpVariants}
          className="mx-auto mt-12 max-w-[680px] text-center text-[18px] leading-[1.4] text-black"
          style={{ fontFamily: "Google Sans" }}
        >
          New and Emerging entries are scored with stage in mind - early
          builders on promise and prototype, not polish and profit.
        </motion.p>

        {/* Top Left Illustration */}
        <div className="absolute w-[240px] md:w-[420px] max-w-[420px] h-auto top-[-120px] md:top-[-160px] left-[-120px] md:left-[-360px] select-none">
          {/* Reveal */}
          <motion.div variants={fadeUpVariants}>
            {/* Ambient Motion */}
            <motion.div
              animate={{
                y: [0, -14, -6, 0],
                x: [0, 5, -3, 0],
                rotate: [0, 1.5, -0.75, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.025,
                rotate: 2,
              }}
              style={{
                transformOrigin: "55% 60%",
              }}
            >
              <Image
                src="/design-pitch/illustrations/how-we-judge-1.webp"
                alt=""
                width={420}
                height={420}
                priority
                draggable={false}
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Right Illustration */}
        <div className="absolute w-[240px] md:w-[420px] max-w-[420px] h-auto bottom-[-120px] md:bottom-[-160px] right-[-120px] md:right-[-360px] select-none">
          {/* Reveal */}
          <motion.div variants={fadeUpVariants}>
            {/* Ambient Motion */}
            <motion.div
              animate={{
                y: [0, 12, 5, 0],
                x: [0, -6, 3, 0],
                rotate: [0, -1.25, 0.8, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.025,
                rotate: -2,
              }}
              style={{
                transformOrigin: "45% 40%",
              }}
            >
              <Image
                src="/design-pitch/illustrations/how-we-judge-2.webp"
                alt=""
                width={420}
                height={420}
                priority
                draggable={false}
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
