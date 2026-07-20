"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const audience = [
  {
    title: "Students",
    image: "/design-pitch/cards/students.webp",
    rotate: -10,
  },
  {
    title: "Researchers &\nUniversity Labs",
    image: "/design-pitch/cards/researchers.webp",
    rotate: -5,
  },
  {
    title: "Independent\nMakers & Social\nEnterprises",
    image: "design-pitch/cards/makers.webp",
    rotate: 0,
  },
  {
    title: "Corporate Product\n& Innovation\nTeams",
    image: "/design-pitch/cards/corporate.webp",
    rotate: 5,
  },
  {
    title: "Startup Founders",
    image: "/design-pitch/cards/startups.webp",
    rotate: 10,
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="bg-[#FCF8F0] py-24 lg:py-32" id="pitch">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Heading */}

        <div className="mx-auto max-w-[800px] text-center">
          <h2
            className="text-[36px] leading-[1.3] text-black"
            style={{ fontFamily: "Shrikhand" }}
          >
            Who is this for?
          </h2>

          <p
            className="mt-6 text-[18px] leading-relaxed text-black"
            style={{ fontFamily: "Google Sans" }}
          >
            If you've ever looked at a broken experience and thought,
            <strong> "there has to be a better way"</strong>, this is for you.
            You do not need funding, revenue, a registered company, investors,
            or a polished deck.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#2D2D2D]">
            One requirement, no exceptions:
            <strong> A working prototype. </strong>
            Design Pitch showcases products people can experience, not ideas on
            slides. Functional builds, working hardware, and interactive digital
            prototypes all qualify: pure concepts and static mockups don't.
            Digital, physical, hardware, service, AI and hybrid products are all
            welcome.
          </p>
        </div>

        {/* Desktop */}

        <div className="relative mt-24 hidden justify-center lg:flex">
          {audience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 120,
                rotate: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: item.rotate,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -22,
                rotate: 0,
                scale: 1.08,
                zIndex: 999,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`
                relative
                origin-bottom
                cursor-pointer
                transition-shadow
                duration-300
                ${index === 0 ? "" : "-ml-20"}
              `}
              style={{
                zIndex: index,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={340}
                className="select-none drop-shadow-2xl"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Tablet */}

        <div className="mt-16 hidden justify-center gap-5 sm:flex lg:hidden flex-wrap">
          {audience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={250}
                className="drop-shadow-xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile */}

        <div className="mt-14 grid grid-cols-2 gap-5 sm:hidden">
          {audience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.04,
              }}
              className="flex justify-center"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={170}
                height={235}
                className="drop-shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
