import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto min-h-screen px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-500">
          Projects
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
