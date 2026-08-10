"use client";

import { skillCategory } from "@/types/skill";
import { motion } from "motion/react";
import Image from "next/image";

export default function SkillCard({ title, items }: Readonly<skillCategory>) {
  return (
    <motion.div
      className="w-full h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}>
      <h3 className="mb-6 text-center text-2xl font-bold text-indigo-300">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 18,
            }}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-indigo-500/10">
            <Image
              src={item.icon}
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
            />
            <span className="text-sm">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
