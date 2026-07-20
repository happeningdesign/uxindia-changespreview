"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const benefits = [
  {
    icon: "/design-pitch/icons/presentation.svg",
    text: "A live presentation slot at the Design Pitch Showcase, UXINDIA 2026",
  },
  {
    icon: "/design-pitch/icons/ticket.svg",
    text: "A complimentary UXINDIA conference pass",
  },
  {
    icon: "/design-pitch/icons/networking.svg",
    text: "A private networking reception with jury members, founders, mentors, and industry leaders",
  },
  {
    icon: "/design-pitch/icons/mentorship.svg",
    text: "Mentorship from design and product leaders",
  },
  {
    icon: "/design-pitch/icons/recognition.svg",
    text: "Media visibility and industry recognition",
  },
  {
    icon: "/design-pitch/icons/investors.svg",
    text: "Introductions to innovation partners, accelerators, and investors where appropriate",
  },
  {
    icon: "/design-pitch/icons/invitation.svg",
    text: "An invitation to the Design Pitch community",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const benefitVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const illustrationVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    y: -40,
    rotate: 5,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function BeyondAwards() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative flex min-h-screen w-full items-center overflow-x-clip bg-[#FCF8F0] px-8 py-32"
    >
      <div className="relative mx-auto w-full max-w-[1080px]">
        {/* Content */}
        <div className="relative z-10 lg:max-w-[760px]">
          {/* Heading */}
          <motion.div variants={fadeUpVariants}>
            <h2
              className="text-[36px] leading-[1.3] text-black"
              style={{ fontFamily: "Shrikhand" }}
            >
              Beyond The Awards
            </h2>

            <p
              className="mt-4 text-[18px] text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              Top 10 Finalists receive
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                variants={benefitVariants}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="group flex items-center gap-5"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: index % 2 === 0 ? -4 : 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="relative h-[56px] w-[56px] shrink-0"
                >
                  <Image
                    src={benefit.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Text */}
                <p
                  className="max-w-[280px] text-[16px] leading-[1.35] text-black"
                  style={{ fontFamily: "Google Sans" }}
                >
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div variants={fadeUpVariants} className="mt-20 max-w-[680px]">
            <p
              className="text-[16px] leading-[1.45] text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              <strong>Let's be straight:</strong>
              <br />
              Design Pitch is about recognition and access, not a cash prize,
              and no funding is guaranteed. What you get is a global stage and
              real proximity to people who are otherwise hard to reach. For the
              right builder, that's the more valuable prize.
            </p>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          variants={illustrationVariants}
          className="pointer-events-none absolute right-[-185px] top-[-250px] z-20 hidden w-[610px] max-w-[610] lg:block"
        >
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, 0.8, -0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/design-pitch/illustrations/beyond-awards.webp"
              alt=""
              width={610}
              height={994}
              priority
              draggable={false}
              className="h-auto w-full select-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
