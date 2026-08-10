import {Experience} from "@/types/experience";

export default function ExperienceCard({
                                           role,
                                           company,
                                           duration,
                                           highlights,
                                       }: Experience) {
    return (
        <section id="experience-card" className="max-w-4xl">
            <div className="max-w-3xl flex flex-row items-center gap-4">
                <div className="h-3.5 w-3.5 rounded-full bg-blue-500"></div>

                <p className="text-sm text-blue-400">{duration}</p>
            </div>

            <div className="p-2">
                <div className="border-l border-white/20 pl-4 flex flex-col">
                    <h3 className="font-bold text-white">{role}</h3>

                    <p className="italic text-gray-300">{company}</p>

                    <ul className="list-disc list-inside text-white marker:text-blue-500">
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
