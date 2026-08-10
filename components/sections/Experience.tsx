"use client";
import ExperienceCard from "@/components/ui/ExperienceCard";
import {experiences} from "@/data/experience";
import {motion} from "motion/react";

export default function Experience() {
    return (
        <section id="experience" className="py-12">
            <motion.div
                initial={{opacity: 0, scale: 0.7}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.7}}
                viewport={{once: true}}>
                <h2 className="mb-12 text-center text-3xl font-bold text-blue-500">Experience</h2>
                <div className="flex flex-col p-4 rounded-3xl">
                    {experiences.map((experience) => (
                        <ExperienceCard key={experience.company} {...experience} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
