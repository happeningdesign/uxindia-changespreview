"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const entryTypes = [
  {
    icon: "/design-pitch/icons/new-product.svg",
    title: "New Product",
    stage: "Stage 0",
    description:
      "A working prototype or early build, not yet in market. Student builds and first-time founder projects belong here.",
    hand: "/design-pitch/illustrations/arm-top.webp",
    handType: "top",
  },
  {
    icon: "/design-pitch/icons/emerging-product.svg",
    title: "Emerging Product",
    stage: "Stage 1",
    description:
      "Launched, with real users, early traction, or revenue, ready to scale. The two are judged separately, so early builders are never measured against funded operators.",
    hand: "/design-pitch/illustrations/arm-bottom.webp",
    handType: "bottom",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WaysToEnter() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative overflow-y-clip bg-[#08273B] text-white"
    >
      <div className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <motion.div variants={fadeUp} className="relative z-20">
            <h2
              className="text-[30px] leading-tight text-[#FCF8F0] sm:text-4xl"
              style={{ fontFamily: "Shrikhand" }}
            >
              Two Ways to Enter
            </h2>

            <p
              className="mt-4 max-w-sm text-base text-white/80"
              style={{ fontFamily: "Google Sans" }}
            >
              Two ways to enter. Pick the category that matches where you are.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div variants={container} className="relative z-20 space-y-12">
            {entryTypes.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative flex gap-5"
              >
                {/* Icon + Hand Anchor */}
                <div className="relative h-14 w-14 shrink-0">
                  {/* Hand */}
                  {item.handType === "top" ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -80,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: "easeOut",
                      }}
                      className="pointer-events-none absolute bottom-[-52px] left-1/2 z-[-1] hidden w-[302px] -translate-x-[35%] lg:block"
                    >
                      <Image
                        src={item.hand}
                        alt=""
                        width={302}
                        height={365}
                        priority
                        draggable={false}
                        className="h-auto w-full select-none"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -100,
                        y: 60,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.35,
                        ease: "easeOut",
                      }}
                      className="pointer-events-none absolute right-[-70px] top-[-145px] z-[-1] hidden w-[601px] lg:block"
                    >
                      <Image
                        src={item.hand}
                        alt=""
                        width={601}
                        height={1183}
                        priority
                        draggable={false}
                        className="h-auto w-full select-none"
                      />
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, index === 0 ? -2 : 2, 0],
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: index === 0 ? 5 : -5,
                    }}
                    transition={{
                      y: {
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        type: "spring",
                        stiffness: 250,
                        damping: 16,
                      },
                    }}
                    className="relative z-10 h-full w-full"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      draggable={false}
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-20">
                  <h3
                    className="text-2xl font-bold text-[#FCF8F0]"
                    style={{ fontFamily: "Google Sans" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-1 font-semibold text-[#E8B455]"
                    style={{ fontFamily: "Google Sans" }}
                  >
                    {item.stage}
                  </p>

                  <p
                    className="mt-3 max-w-lg text-white/80"
                    style={{ fontFamily: "Google Sans" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          variants={fadeUp}
          className="relative z-20 ml-auto mt-20 max-w-[650px] text-left"
        >
          <p
            className="text-sm leading-relaxed text-white/70"
            style={{ fontFamily: "Google Sans" }}
          >
            <span className="font-semibold text-[#E8B455]">
              IP Ownership and Responsibility:
            </span>{" "}
            Product owners are the ones who submit the ideas to Design Pitch,
            retain the IP of their submitted ideas and are fully responsible for
            the submitted ideas or any material. UMO Design / UXINDIA by no
            means is neither responsible nor has any rights on the submitted
            ideas and material.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
