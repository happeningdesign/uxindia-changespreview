"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const cards = [
  {
    image: "/design-pitch/showcase/founder-presentations.webp",
    alt: "5 min Founder Presentations",
    position: "left-[1%] top-[65px] -rotate-[10deg] md:left-[4%] md:top-[65px]",
    mobileWidth: "w-[42%]",
    x: -80,
    y: 30,
  },
  {
    image: "/design-pitch/showcase/product-demonstrations.webp",
    alt: "Live Product Demonstrations",
    position:
      "left-[29%] top-[105px] rotate-[10deg] md:left-[21%] md:top-[110px] md:rotate-[12deg]",
    mobileWidth: "w-[42%]",
    x: -40,
    y: 60,
  },
  {
    image: "/design-pitch/showcase/prototype-gallery.webp",
    alt: "Interactive Prototype Gallery",
    position:
      "right-[1%] top-[55px] -rotate-[5deg] md:left-1/2 md:right-auto md:top-[50px] md:-translate-x-1/2",
    mobileWidth: "w-[42%]",
    x: 0,
    y: -50,
  },
  {
    image: "/design-pitch/showcase/mentor-roundtables.webp",
    alt: "Mentor Roundtables and Networking with Investors",
    position:
      "left-[14%] top-[285px] -rotate-[5deg] md:left-auto md:right-[21%] md:top-[105px] md:rotate-[3deg]",
    mobileWidth: "w-[42%]",
    x: 40,
    y: 60,
  },
  {
    image: "/design-pitch/showcase/judge-qa.webp",
    alt: "Judge Q&A and Audience Voting",
    position:
      "right-[14%] top-[295px] rotate-[8deg] md:right-[4%] md:top-[75px] md:rotate-[10deg]",
    mobileWidth: "w-[42%]",
    x: 80,
    y: 30,
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

export default function ShowcaseExperience() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-x-clip bg-[#FCF8F0] px-4 py-28 sm:px-6"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Heading */}
        <motion.div variants={fadeUpVariants} className="text-center">
          <h2
            className="text-[30px] leading-[1.3] text-black sm:text-[36px]"
            style={{ fontFamily: "Shrikhand" }}
          >
            The Showcase Experience
          </h2>

          <p
            className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.4] text-black sm:text-[18px]"
            style={{ fontFamily: "Google Sans" }}
          >
            The Top 10 take part in a live innovation showcase,
            <br className="hidden sm:block" />
            not a slides-only contest
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mx-auto mt-12 h-[540px] w-full sm:h-[600px] md:h-[430px]">
          {cards.map((card, index) => (
            <motion.div
              key={card.image}
              initial={{
                zIndex: index + 1,
              }}
              whileHover={{
                zIndex: 50,
              }}
              className={`
                absolute
                ${card.mobileWidth}
                max-w-[180px]
                sm:max-w-[210px]
                md:w-[240px]
                md:max-w-[240px]
                ${card.position}
              `}
            >
              {/* Reveal */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: card.x,
                  y: card.y,
                  scale: 0.82,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 16,
                  mass: 1.2,
                  delay: 0.15 + index * 0.1,
                }}
              >
                {/* Ambient Motion + Hover Interaction */}
                <motion.div
                  animate={{
                    y: [0, index % 2 === 0 ? -5 : 5, 0],
                    rotate: [0, index % 2 === 0 ? 0.5 : -0.5, 0],
                  }}
                  whileHover={{
                    y: -20,
                    scale: 1.12,
                    rotate: 0,
                  }}
                  transition={{
                    y: {
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 10 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    scale: {
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    },
                  }}
                  className="relative cursor-pointer"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={240}
                    height={320}
                    draggable={false}
                    className="h-auto w-full select-none"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
