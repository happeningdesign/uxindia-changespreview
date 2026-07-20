"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const domains = [
  {
    title: "AI & Intelligent Products",
    icon: "/design-pitch/domains/ai.webp",
  },
  {
    title: "Consumer Products",
    icon: "/design-pitch/domains/consumer.webp",
  },
  {
    title: "Enterprise & B2B",
    icon: "/design-pitch/domains/enterprise.webp",
  },
  {
    title: "Health & Wellbeing",
    icon: "/design-pitch/domains/health.webp",
  },
  {
    title: "Climate & Sustainability",
    icon: "/design-pitch/domains/climate.webp",
  },
  {
    title: "Social & Civic Innovation Accessibility",
    icon: "/design-pitch/domains/social.webp",
  },
  {
    title: "Others",
    icon: "/design-pitch/domains/others.webp",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PrimaryDomains() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={containerVariants}
      className="relative bg-[#FCF8F0] px-8 py-28"
    >
      <div className="mx-auto max-w-[1080px]">
        {/* Heading */}

        <motion.h2
          variants={itemVariants}
          className="text-center text-[36px] leading-[1.3] text-black"
          style={{ fontFamily: "Shrikhand" }}
        >
          Choose One Primary Domain
        </motion.h2>

        {/* Cards*/}

        <motion.div
          variants={containerVariants}
          className="mt-16 flex flex-wrap justify-center gap-y-14"
        >
          {domains.map((domain) => (
            <motion.div
              key={domain.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className=" flex flex-col items-center text-center w-1/2 md:w-1/3 lg:w-1/4 px-6"
            >
              <div className="relative h-[120px] w-[120px]">
                <Image
                  src={domain.icon}
                  alt={domain.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p
                className="mt-5 whitespace-pre-line text-[17px] leading-snug text-black"
                style={{ fontFamily: "Google Sans" }}
              >
                {domain.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-20 max-w-xl text-center text-[18px] text-black"
          style={{ fontFamily: "Google Sans" }}
        >
          Accessibility and inclusive design are valued across every domain and
          recognized with a dedicated award.
        </motion.p>
      </div>
    </motion.section>
  );
}
