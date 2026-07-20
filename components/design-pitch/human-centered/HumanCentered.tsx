"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const principles = [
  {
    icon: "/design-pitch/icons/problem.svg",
    title: "Solve",
    description: "a meaningful human problem.",
  },
  {
    icon: "/design-pitch/icons/inclusive.svg",
    title: "Are inclusive and accessible",
    description: "by design",
  },
  {
    icon: "/design-pitch/icons/desirable.svg",
    title: "Are desirable,",
    description: "people actually want to use them",
  },
  {
    icon: "/design-pitch/icons/feasible.svg",
    title: "Are technically feasible",
    description: "and economically sustainable",
  },
  {
    icon: "/design-pitch/icons/society.svg",
    title: "Leave society better",
    description: "than they found it.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
};

export default function HumanCenteredInnovation() {
  return (
    <motion.section
      className="relative flex min-h-screen w-full items-center justify-center bg-[#FADFB4] px-8 py-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="mx-auto grid max-w-[1080px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left */}

        <motion.div variants={fadeUp}>
          <h2
            className="text-[36px] leading-[1.3] text-black"
            style={{ fontFamily: "Shrikhand" }}
          >
            What we mean by
            <br />
            Human-Centered
            <br />
            Innovation?
          </h2>

          <p
            className="mt-4 max-w-md text-[18px] text-black"
            style={{ fontFamily: "Google Sans" }}
          >
            Everything here revolves around one idea, so let's be clear about
            it. Human-centered innovation starts with people, not technology. We
            believe the best products:
          </p>
        </motion.div>

        {/* Right */}

        <motion.div variants={containerVariants} className="space-y-8">
          {principles.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex items-center gap-5"
            >
              <motion.div
                variants={iconVariants}
                className="relative h-14 w-14 shrink-0"
              >
                <Image src={item.icon} alt="" fill className="object-contain" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="pt-1 text-lg leading-relaxed text-black"
              >
                <span className="font-semibold">{item.title}</span>{" "}
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
