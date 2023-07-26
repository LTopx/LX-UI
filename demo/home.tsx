import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../components/button/button";
import { Arrow_right_up_line, Github_line } from "@components/icon";
import useLocale from "@/hooks/useLocale";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export function Home() {
  const tHome = useLocale("home");

  return (
    <>
      <motion.div
        className="z-10 relative"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <div className="mt-20">
          <div className="flex flex-col font-bold gap-2">
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
              Based on Radix UI and Tailwind CSS
            </motion.div>
            <motion.div
              className="text-4xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Works great with Next.js!
            </motion.div>
          </div>
          <motion.div
            className="my-11 text-lg text-slate-600 dark:text-slate-400"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            {tHome("desc")}
          </motion.div>
          <motion.div
            className="flex font-semibold gap-4"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Button className="group" size="lg" type="primary" rounded>
              <Link
                href="/guide/introduction"
                className="flex gap-2 items-center"
              >
                {tHome("start")}
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
      <div className="inset-0 z-0 absolute">
        <Image
          className="z-0 select-none appearance-none pointer-events-none"
          src="/login-bg.webp"
          alt="login-bg"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
