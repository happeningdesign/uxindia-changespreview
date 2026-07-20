"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const specialRecognitions = [
  {
    title: "Best Social\nImpact Solution",
    icon: "/design-pitch/awards/social-impact-award.webp",
  },
  {
    title: "Best\nAccessibility &\nInclusive Design",
    icon: "/design-pitch/awards/inclusive-design-award.webp",
  },
  {
    title: "Best AI\nProduct",
    icon: "/design-pitch/awards/ai-product-award.webp",
  },
  {
    title: "Best\nProduct\nInnovation",
    icon: "/design-pitch/awards/student-innovation-award.webp",
  },
  {
    title: "Audience\nChoice\nAward",
    icon: "/design-pitch/awards/audience-choice-award.webp",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const awardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Awards() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#DA9B00] px-6 py-24 z-2"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Heading */}

        <motion.div variants={fadeUpVariants} className="text-center">
          <h2
            className="text-[36px] leading-[1.3] text-white"
            style={{ fontFamily: "Shrikhand" }}
          >
            Awards
          </h2>

          <p
            className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.5] text-white"
            style={{ fontFamily: "Google Sans" }}
          >
            Hundreds of builders leave with recognition they can show, not just
            the handful who win.
            <br />
            Badges & credentials. Every Top 100 entrant receives a verifiable
            digital badge and certificate, Top 100, Finalist, or Winner, for
            LinkedIn and portfolios. Recognition you can carry with you.
          </p>
        </motion.div>

        {/* Primary Awards */}

        <motion.div
          variants={containerVariants}
          className="mx-auto mt-14 flex max-w-[700px] flex-col items-center justify-center gap-12 sm:flex-row sm:gap-24"
        >
          {/* New Product */}
          <motion.div
            variants={awardVariants}
            className="flex flex-col items-center text-center"
          >
            <Image
              src="/design-pitch/awards/new-product-winner.webp"
              alt="New Product Winner"
              width={250}
              height={220}
              className="h-auto w-[240px] md:w-[250px]"
            />
          </motion.div>

          {/* Emerging Product */}
          <motion.div
            variants={awardVariants}
            className="flex flex-col items-center text-center"
          >
            <Image
              src="/design-pitch/awards/emerging-product-winner.webp"
              alt="Emerging Product Winner"
              width={250}
              height={220}
              className="h-auto w-[240px] md:w-[250px]"
            />
          </motion.div>
        </motion.div>

        {/* Divider */}

        <motion.div
          variants={fadeUpVariants}
          className="my-12 h-px w-full bg-white/50"
        />

        {/* Special Recognition */}

        <motion.h3
          variants={fadeUpVariants}
          className="text-center text-[18px] text-white"
          style={{ fontFamily: "Google Sans" }}
        >
          Overall Special Recognitions
        </motion.h3>

        <motion.div
          variants={containerVariants}
          className="mt-10 flex flex-wrap items-start justify-center gap-x-8 gap-y-12 md:justify-between"
        >
          {specialRecognitions.map((award, index) => (
            <motion.div
              key={award.title}
              variants={awardVariants}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="flex w-[140px] flex-col items-center text-center"
            >
              <Image
                src={award.icon}
                alt={award.title}
                width={150}
                height={130}
                className="h-auto w-[130px] md:w-[150px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
