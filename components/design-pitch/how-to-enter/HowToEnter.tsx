"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// Modal
import SubmitInterestModal from "@/components/design-pitch/submit-interest-modal/SubmitInterestModal";

const steps = [
  {
    number: 1,
    text: "Choose your category and one primary domain.",
    icon: "/design-pitch/icons/desirable.svg",
    iconPosition: "left-[250px] top-[190px]",
    textPosition: "left-[60px] top-[190px]",
  },
  {
    number: 2,
    text: "Record a demo of your working prototype.",
    icon: "/design-pitch/icons/inclusive.svg",
    iconPosition: "left-[485px] top-[265px]",
    textPosition: "left-[560px] top-[270px]",
  },
  {
    number: 3,
    text: "Write your 300-word product story.",
    icon: "/design-pitch/icons/society.svg",
    iconPosition: "left-[205px] top-[310px]",
    textPosition: "left-[25px] top-[320px]",
  },
  {
    number: 4,
    text: "Submit before August 19, 2026.",
    icon: "/design-pitch/icons/feasible.svg",
    iconPosition: "left-[510px] top-[370px]",
    textPosition: "left-[580px] top-[380px]",
  },
  {
    number: 5,
    text: "Shortlisted? we'll guide you through the finalist stage.",
    icon: "/design-pitch/icons/problem.svg",
    iconPosition: "left-[155px] top-[455px]",
    textPosition: "left-[-30px] top-[460px]",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 14,
    },
  },
};

export default function HowToEnter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submissionLink = "https://app.eventum.co/";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="relative w-full overflow-x-clip bg-[#FCF8F0] px-6 py-24 md:py-32 overflow-clip"
      id="submit"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Heading */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-[30px] leading-[1.3] text-black md:text-[36px]"
          style={{ fontFamily: "Shrikhand" }}
        >
          How to Enter
        </motion.h2>

        {/* Desktop */}
        <div className="relative mx-auto mt-4 hidden h-[700px] w-[720px] md:block">
          {/* Chain */}
          <motion.div
            initial={{
              opacity: 0,
              y: -60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute left-[58%] top-[-575px] -translate-x-1/2"
          >
            <Image
              src="/design-pitch/illustrations/connector-chain.webp"
              alt=""
              width={1000}
              height={750}
              priority
              draggable={false}
              className="h-auto w-[1000px] max-w-[1000px] select-none"
            />
          </motion.div>

          {/* Icons */}
          {steps.map((step, index) => (
            <motion.div
              key={`icon-${step.number}`}
              variants={iconVariants}
              className={`absolute ${step.iconPosition}`}
            >
              <motion.div
                animate={{
                  y: [0, index % 2 === 0 ? -3 : 3, 0],
                  rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                transition={{
                  y: {
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    type: "spring",
                    stiffness: 250,
                    damping: 16,
                  },
                }}
                className="relative h-[58px] w-[58px]"
              >
                <Image
                  src={step.icon}
                  alt=""
                  fill
                  draggable={false}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Step Copy */}
          {steps.map((step) => (
            <motion.div
              key={`text-${step.number}`}
              variants={fadeUpVariants}
              className={`absolute w-[190px] ${step.textPosition}`}
            >
              <p
                className="text-[15px] leading-[1.3] text-black"
                style={{ fontFamily: "Google Sans" }}
              >
                <strong>{step.number}. </strong>
                {step.text}
              </p>
            </motion.div>
          ))}

          {/* Submit */}
          <motion.div
            variants={fadeUpVariants}
            className="absolute bottom-[55px] left-[53%] w-[280px] -translate-x-1/2"
          >
            {/* <motion.button
              onClick={() => setIsModalOpen(true)}
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
                  scale: 0.98,
                  boxShadow: "0px 2px 0px #E6A900",
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full cursor-pointer rounded-full bg-black px-8 py-4 text-[28px] text-white"
              style={{ fontFamily: "Shrikhand" }}
            >
              Submit
            </motion.button> */}
            <Link href="#submit">
              <motion.button
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
                    scale: 0.98,
                    boxShadow: "0px 2px 0px #E6A900",
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="w-full rounded-full bg-black px-8 py-4 text-[20px] text-white disabled:cursor-not-allowed"
                style={{ fontFamily: "Shrikhand" }}
              >
                Submissions Closed
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile */}
        <motion.div
          variants={containerVariants}
          className="mt-12 flex flex-col gap-8 md:hidden"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="flex items-center gap-5"
            >
              <motion.div
                whileTap={{
                  scale: 0.9,
                  rotate: 5,
                }}
                className="relative h-[58px] w-[58px] shrink-0"
              >
                <Image src={step.icon} alt="" fill className="object-contain" />
              </motion.div>

              <p
                className="text-[16px] leading-[1.4] text-black"
                style={{ fontFamily: "Google Sans" }}
              >
                <strong>{step.number}. </strong>
                {step.text}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-6 w-full max-w-[280px]"
          >
            {/* <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 0px #E6A900",
              }}
              whileTap={{
                y: 3,
                scale: 0.98,
                boxShadow: "0px 2px 0px #E6A900",
              }}
              className="w-full rounded-full bg-black px-8 py-4 text-[26px] text-white"
              style={{
                fontFamily: "Shrikhand",
                boxShadow: "0px 5px 0px #E6A900",
              }}
            >
              Submit
            </motion.button> */}
            <Link href="#submit">
              <motion.button
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 0px #E6A900",
                }}
                whileTap={{
                  y: 3,
                  scale: 0.98,
                  boxShadow: "0px 2px 0px #E6A900",
                }}
                className="w-full rounded-full bg-black px-8 py-4 text-[26px] text-white disabled:cursor-not-allowed"
                style={{
                  fontFamily: "Shrikhand",
                  boxShadow: "0px 5px 0px #E6A900",
                }}
              >
                Submit
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={fadeUpVariants} className="text-center">
        <p
          className="mx-auto mt-4 max-w-[550px] text-[16px] leading-[1.5] text-black"
          style={{ fontFamily: "Google Sans" }}
        >
          Please note: Design Pitch requires a separate Eventum account.
          Existing accounts created during ticket purchases cannot be used for
          submissions.
        </p>
      </motion.div>

      <SubmitInterestModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
}
