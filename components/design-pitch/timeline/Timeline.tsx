"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const timeline = [
  {
    number: 1,
    date: "July 14",
    description: "Program Launches, Submissions Open",
    position: "top",
  },
  {
    number: 2,
    date: "Jul-Aug",
    description:
      'Jury announcements, product spotlights & "Road to Design Pitch" sessions',
    position: "bottom",
  },
  {
    number: 3,
    date: "Aug 19",
    description: "Submission deadline",
    position: "top",
  },
  {
    number: 4,
    date: "Aug 20 - Aug 26",
    description: "Online Jury Review",
    position: "bottom",
  },
  {
    number: 5,
    date: "Aug 27",
    description: "Top 25 shortlisted announced. Top 50 published",
    position: "top",
  },
  {
    number: 6,
    date: "Aug 29 - Sep 02",
    description: "Finalist mentoring & pitch coaching",
    position: "bottom",
  },
  {
    number: 7,
    date: "Sep 05",
    description: "Online Pitch and deciding Top 10 finalists.",
    position: "top",
  },
  {
    number: 8,
    date: "Sep 25",
    description:
      "2-4 pm Live Design Pitch Showcase @UXINDIA, Leela Bhartiya City",
    position: "bottom",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Timeline() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative w-full overflow-x-clip bg-[#C43A08] px-6 py-24 text-white md:py-28"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-[30px] leading-[1.3] md:text-[36px]"
          style={{ fontFamily: "Shrikhand" }}
        >
          Timeline
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="relative mt-12 hidden h-[360px] md:block">
          {/* Main Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="absolute left-0 right-[110px] top-1/2 h-[2px] origin-left bg-[#9D2C0A]"
          />

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            className="absolute inset-y-0 left-0 right-[110px]"
          >
            {timeline.map((item, index) => {
              const left = (index / (timeline.length - 1)) * 100;
              const isTop = item.position === "top";

              return (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  className="absolute top-0 h-full"
                  style={{
                    left: `${left}%`,
                  }}
                >
                  {/* Number */}
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="absolute left-1/2 top-1/2 z-10 flex h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#9D2C0A] text-[13px]"
                    style={{ fontFamily: "Google Sans" }}
                  >
                    {item.number}
                  </motion.div>

                  {/* Connector */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.08,
                    }}
                    className={`absolute left-0 h-[115px] border-l-2 border-dashed border-white ${
                      isTop ? "bottom-1/2 origin-bottom" : "top-1/2 origin-top"
                    }`}
                  />

                  {/* Endpoint Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                      delay: 0.75 + index * 0.08,
                    }}
                    className={`absolute left-[1px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-white ${
                      isTop
                        ? "bottom-[calc(50%+110px)]"
                        : "top-[calc(50%+110px)]"
                    }`}
                  />

                  {/* Event Content */}
                  <div
                    className={`absolute left-[14px] w-[110px] ${
                      isTop ? "bottom-[calc(50%+65px)]" : "top-[calc(50%+65px)]"
                    }`}
                  >
                    <h3
                      className="text-[14px] font-semibold leading-[1.2]"
                      style={{ fontFamily: "Google Sans" }}
                    >
                      {item.date}
                    </h3>

                    <p
                      className="mt-1 text-[10px] leading-[1.3]"
                      style={{ fontFamily: "Google Sans" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Line from Node 8 to Awards Ceremony */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 1.2,
              ease: "easeInOut",
            }}
            className="absolute right-[45px] top-1/2 h-[2px] w-[65px] origin-left bg-[#9D2C0A]"
          />

          {/* Awards Ceremony */}
          <motion.div
            variants={itemVariants}
            className="absolute right-0 top-[83px] flex w-[90px] flex-col items-center text-center"
          >
            <h3
              className="text-[22px] font-bold leading-none"
              style={{ fontFamily: "Google Sans" }}
            >
              Sep 25
            </h3>

            <p
              className="mt-2 text-[10px] leading-[1.3]"
              style={{ fontFamily: "Google Sans" }}
            >
              4:30 pm
              <br />
              Awards Ceremony
            </p>

            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mt-3"
            >
              <Image
                src="/design-pitch/icons/awards-ceremony.svg"
                alt="Awards Ceremony"
                width={60}
                height={60}
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <motion.div
          variants={containerVariants}
          className="relative mt-12 flex flex-col gap-8 md:hidden"
        >
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="absolute bottom-[30px] left-[18px] top-0 w-[2px] origin-top bg-[#9D2C0A]"
          />

          {timeline.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="relative flex gap-6"
            >
              {/* Number */}
              <motion.div
                whileTap={{
                  scale: 0.9,
                }}
                className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#9D2C0A] text-[13px]"
                style={{ fontFamily: "Google Sans" }}
              >
                {item.number}
              </motion.div>

              {/* Content */}
              <div>
                <h3
                  className="text-[17px] font-semibold"
                  style={{ fontFamily: "Google Sans" }}
                >
                  {item.date}
                </h3>

                <p
                  className="mt-1 max-w-[280px] text-[13px] leading-[1.4]"
                  style={{ fontFamily: "Google Sans" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Mobile Awards Ceremony */}
          <motion.div
            variants={itemVariants}
            className="ml-[-12px] mt-4 flex items-center gap-5"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/design-pitch/icons/awards-ceremony.svg"
                alt="Awards Ceremony"
                width={60}
                height={60}
                draggable={false}
              />
            </motion.div>

            <div>
              <h3
                className="text-[20px] font-bold"
                style={{ fontFamily: "Google Sans" }}
              >
                Sep 25
              </h3>

              <p
                className="mt-1 text-[13px] leading-[1.3]"
                style={{ fontFamily: "Google Sans" }}
              >
                4:30 pm
                <br />
                Awards Ceremony
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
