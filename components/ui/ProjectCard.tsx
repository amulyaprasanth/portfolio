"use client";
import { Project } from "@/types/projects";
import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectCard({
  name,
  description,
  github,
  live,
  technologies,
  highlights,
  thumbnail,
}: Readonly<Project>) {
  return (
    <motion.section className="bg-gray-500/50 flex gap-6 p-6 rounded-xl"
    initial={{opacity: 0, x:-10}}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 0.7}}
    viewport={{once: true}}>
      <div className="w-1/2">
        <Image
          src={thumbnail}
          alt={`${name} thumbnail`}
          width={800}
          height={500}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-indigo-300">{name}</h1>

        <p>{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 border border-indigo-400/30">
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title="View source code"
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/30">
            <Image
              src="/github.png"
              alt="GitHub"
              width={24}
              height={24}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            title="View live deployment"
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/30">
            <Image
              src="/link.png"
              alt="Live Demo"
              width={24}
              height={24}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
