import { skills } from "@/data/skills";
import SkillCard from "../ui/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="relative py-12">
      <div className="max-w-7xl mx-auto min-h-screen py-10">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-8">
          {" "}
          Skills{" "}
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
