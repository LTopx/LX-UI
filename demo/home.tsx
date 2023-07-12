import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../components/button/button";
import { Arrow_right_up_line, Github_line } from "@components/icon";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <div className="mt-14">
        <div className="font-bold">
          <motion.div
            className="text-transparent text-7xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
              LX-UI
            </span>
          </motion.div>
          <motion.div
            className="text-4xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            based on Radix UI and Tailwind CSS
          </motion.div>
        </div>
        <motion.div
          className="my-11 text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          一款小而美的 React UI Component Library
        </motion.div>
        <motion.div
          className="flex font-semibold gap-4"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Button className="group" size="lg" type="primary" rounded>
            <Link href="/guide" className="flex gap-2 items-center">
              点击开始
              <Arrow_right_up_line className="transition-transform group-hover:rotate-45" />
            </Link>
          </Button>
          <Button size="lg" rounded icon={<Github_line />}>
            <Link href="https://github.com/LTopx/L-UI" target="_blank">
              Github
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
