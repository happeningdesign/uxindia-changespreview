"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export default function HowItWorks() {
  return (
    <motion.section
      className="relative w-full bg-[#FADFB4] px-8 py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="mx-auto max-w-[1080px]">
        {/* Heading */}

        <motion.div variants={fadeUp} className="max-w-xl">
          <h2
            className="text-[36px] leading-none text-black"
            style={{ fontFamily: "Shrikhand" }}
          >
            How It Works
          </h2>

          <p
            className="mt-6 text-[18px] leading-relaxed text-black"
            style={{ fontFamily: "Google Sans" }}
          >
            The front door is easy. The depth comes only if you're shortlisted.
          </p>
        </motion.div>

        {/* Columns */}

        <div className="mt-24 grid gap-20 lg:grid-cols-2">
          {/* Submit */}

          <motion.div variants={fadeUp}>
            <h3
              className="text-[24px] font-bold text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              Submit
            </h3>

            <p
              className="mb-8 text-[24px] leading-tight text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              open to everyone
            </p>

            <ol
              className="space-y-3 pl-6 text-[18px] leading-relaxed text-black list-decimal"
              style={{ fontFamily: "Google Sans" }}
            >
              <li>
                A 3-minute demo of your working prototype
                <br />
                (physical, digital, hardware, or interactive)
              </li>

              <li>A 300-word product story: the problem and your solution</li>

              <li>Product images, team info, your stage and domain</li>
            </ol>

            <p
              className="mt-8 max-w-md text-[18px] leading-relaxed text-[#BC411F]"
              style={{ fontFamily: "Google Sans" }}
            >
              No business Plan. No financial projections. No technical
              documentation.
            </p>
          </motion.div>

          {/* Finalists */}

          <motion.div variants={fadeUp}>
            <h3
              className="text-[24px] font-bold text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              Finalists
            </h3>

            <p
              className="mb-8 text-[24px] leading-tight text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              deeper details and supporting materials
            </p>

            <p
              className="mb-5 text-[18px] leading-relaxed text-black"
              style={{ fontFamily: "Google Sans" }}
            >
              The Top 25 finalists go deeper, scaled to stage, with mentoring
              and pitch coaching provided:
            </p>

            <ol
              className="space-y-2 pl-6 text-[20px] leading-relaxed text-black list-decimal"
              style={{ fontFamily: "Google Sans" }}
            >
              <li>Product deck and design process</li>
              <li>User research and key insights</li>
              <li>A simple business model and go-to-market view</li>
              <li>Feasibility and technical overview</li>
              <li>Social impact</li>
              <li>A live demo for the stage</li>
            </ol>

            <p
              className="mt-8 max-w-lg text-[18px] font-medium leading-relaxed text-[#BC411F]"
              style={{ fontFamily: "Google Sans" }}
            >
              We won't ask a New Product finalist for a Series-A data room.
              Finalists are guided on exactly what fits their stage.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
