"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const capVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    y: -80,
    rotate: 12,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const trophyVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: 160,
    rotate: 8,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

const compassVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    rotate: -270,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const lampVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    y: 80,
    rotate: 4,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bulbVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -15,
    x: -80,
    y: 120,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function About() {
  return (
    <motion.section
      className="relative flex w-full items-center justify-center overflow-x-clip bg-[#40491C] px-8 py-12"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "0px 0px -150px 0px",
      }}
    >
      {/* Content */}
      <div className="container relative max-w-[1080px] h-[700px] flex justify-start items-center mx-auto z-1">
        <motion.div
          variants={textVariants}
          className="content flex max-w-[560px] flex-col gap-3 text-white z-10"
        >
          <h2 className="text-[20px]" style={{ fontFamily: "Google Sans" }}>
            Every great product begins with one question:
          </h2>
          <h3
            className="text-[36px] leading-[1.3]"
            style={{ fontFamily: "Shrikhand" }}
          >
            How can we improve someone’s Life?
          </h3>

          <p className="text-[18px]" style={{ fontFamily: "Google Sans" }}>
            Design Pitch an initiative of UMO Design is where the people
            answering that question- students, designers, engineers,
            researchers, and founders. Put human-centered products on a global
            stage at UXINDIA, in front of design leaders, go-to-market
            specialists, and investors.
          </p>
          <p className="text-[18px]" style={{ fontFamily: "Google Sans" }}>
            More than a competition, Design Pitch is a platform to discover,
            celebrate, and support the next generation of human-centered
            products.
          </p>
        </motion.div>

        {/* Illustrations */}

        {/* Graduation Cap */}
        <div className="absolute top-[-30%] sm:top-[-45%] right-[-40%] sm:right-[-20%] lg:right-[-10%] z-1">
          <motion.div variants={capVariants}>
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              }}
            >
              <Image
                src="/design-pitch/illustrations/graduation-cap.webp"
                alt=""
                width={780}
                height={614}
                priority
                draggable={false}
                className="w-[500px] sm:w-[700px] lg:w-[780px] h-auto max-w-[780px] select-none"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Trophy */}
        <div className="absolute top-[20%] sm:top-[25%] right-[-45%] sm:right-[-25%] lg:right-[-15%] z-1">
          <motion.div variants={trophyVariants}>
            <motion.div
              animate={{
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            >
              <Image
                src="/design-pitch/illustrations/trophy.webp"
                alt=""
                width={500}
                height={733}
                priority
                draggable={false}
                className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto max-w-[500px] select-none"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Compass */}
        <div className="absolute top-[40%] sm:top-[55%] md:top-[60%] right-[10%] sm:right-[10%] lg:right-[20%] z-1">
          <motion.div variants={compassVariants}>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            >
              <Image
                src="/design-pitch/illustrations/compass.webp"
                alt=""
                width={250}
                height={353}
                priority
                draggable={false}
                className="w-[100px] sm:w-[150px] lg:w-[250px] h-auto max-w-[250px] select-none"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Lamp */}
        <div className=" absolute top-[65%] sm:top-[65%] md:top-[65%] lg:top-[75%] right-[-25%] sm:right-[5%] lg:right-[20%] z-1">
          <motion.div variants={lampVariants}>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.2,
              }}
            >
              <Image
                src="/design-pitch/illustrations/lamp.webp"
                alt=""
                width={680}
                height={578}
                priority
                draggable={false}
                className=" w-[450px] sm:w-[550px] lg:w-[680px] h-auto max-w-[680px] select-none"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bulb */}
        <div className="absolute top-[90%] sm:top-[65%] md:top-[60%] lg:top-[65%] right-[30%] sm:right-[65%] md:right-[50%] lg:right-[60%] z-1">
          <motion.div variants={bulbVariants}>
            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.4,
              }}
            >
              <Image
                src="/design-pitch/illustrations/bulb.webp"
                alt=""
                width={700}
                height={1077}
                priority
                draggable={false}
                className=" w-[450px] sm:w-[550px] md:w-[650px] lg:w-[700px] h-auto max-w-[700px] select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
