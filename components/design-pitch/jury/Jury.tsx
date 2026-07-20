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

const gavelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    y: 50,
    rotate: -8,
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

const microphoneVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    y: -50,
    rotate: 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export default function Jury() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#FCF8F0] px-6 py-32"
    >
      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1080px]">
        {/* Gavel Illustration */}
        <motion.div
          variants={gavelVariants}
          className="pointer-events-none absolute bottom-[-210px] left-[-200px] z-10 hidden w-[480px] md:block"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, -1, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/design-pitch/illustrations/jury-gavel.webp"
              alt=""
              width={480}
              height={650}
              priority
              draggable={false}
              className="h-auto w-full select-none"
            />
          </motion.div>
        </motion.div>

        {/* Microphone Illustration */}
        <motion.div
          variants={microphoneVariants}
          className="pointer-events-none absolute right-[-180px] top-[-190px] z-10 hidden w-[360px] md:block"
        >
          <motion.div
            animate={{
              y: [0, 5, 0],
              rotate: [0, 1.5, -0.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/design-pitch/illustrations/jury-microphone.webp"
              alt=""
              width={360}
              height={360}
              priority
              draggable={false}
              className="h-auto w-full select-none"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          className="relative z-20 mx-auto flex w-full max-w-[760px] flex-col items-center text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="text-[36px] leading-[1.3] text-black"
            style={{ fontFamily: "Shrikhand" }}
          >
            The Jury
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-[620px] text-[18px] leading-[1.4] text-black"
            style={{ fontFamily: "Google Sans" }}
          >
            Your work is seen by a panel drawn from top UXINDIA speakers, senior
            design leaders, product executives, GTM specialists, and venture
            investors.
            <br />
            Finalists present live to this panel at the conference.
          </motion.p>

          {/* Announcement */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-10 w-full max-w-[620px]"
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap="tap"
              variants={{
                rest: {
                  y: 0,
                  boxShadow: "0px 5px 0px #E6A900",
                },
                hover: {
                  y: -5,
                  boxShadow: "0px 10px 0px #E6A900",
                },
                tap: {
                  y: 3,
                  scale: 0.99,
                  boxShadow: "0px 2px 0px #E6A900",
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full cursor-pointer rounded-full bg-black px-8 py-4"
            >
              <p
                className="text-[16px] text-white sm:text-[18px]"
                style={{ fontFamily: "Google Sans" }}
              >
                Full jury and partner lineup announced through August
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
