"use client";
import Image from "next/image";
import ScrollIndicator from "../ui/ScrollIndication";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto px-8">
        <div className="flex items-center justify-between gap-24">
          {/* Left */}
          <div className="max-w-2xl flex flex-col gap-6">
            <motion.p
              className="text-4xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-7xl font-bold leading-tight text-sky-500"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              Amulya Prasanth
            </motion.h1>

            <motion.h2
              className="text-3xl text-gray-400"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              AI Engineer | Machine Learning Engineer
            </motion.h2>

            <motion.div
              className="flex gap-4 mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}>
              <motion.button
                onClick={() => {
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block w-fit rounded-2xl bg-blue-700/70 px-7 py-4 font-bold transition-all duration-300 hover:border-white hover:bg-transparent border border-transparent">
                Contact Me
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download="Amulya_Prasanth_Resume.pdf"
                className="inline-block rounded-2xl border border-blue-600 bg-blue-700/70 px-7 py-4 font-bold transition-all duration-300 hover:bg-transparent hover:border-white"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}>
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="relative h-[480px] w-[360px] overflow-hidden rounded-full"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}>
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              sizes="auto"
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <ScrollIndicator id={"about"} />
      </div>
    </section>
  );
}
