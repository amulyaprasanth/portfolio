"use client";
import EducationCard from "@/components/ui/EducationCard";
import {education} from "@/data/education";
import {motion} from "motion/react";

export default function Education() {
    return (
        <section id="education" className="py-12">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.7}}
                viewport={{once: true}}>
                <h2 className="mb-12 text-center text-3xl font-bold text-blue-500">
                    Education
                </h2>

                <div className="flex flex-col gap-10 max-w-3xl mx-auto">
                    {education.map((item) => (
                        <EducationCard
                            key={item.institution}
                            {...item}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
