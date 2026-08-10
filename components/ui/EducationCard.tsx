import type {Education} from "@/types/education";

export default function EducationCard({
                                          degree,
                                          institution,
                                          duration,
                                          cgpa,
                                          highlights,
                                      }: Education) {
    return (
        <section className="w-full max-w-4xl">
            <div className="flex items-center gap-4">
                <div className="h-3.5 w-3.5 rounded-full bg-blue-500"/>

                <p className="text-sm text-blue-400">{duration}</p>
            </div>

            <div className="p-2">
                <div className="border-l border-white/20 pl-4">
                    <h3 className="text-xl font-bold">{degree}</h3>

                    <p className="italic text-gray-300">{institution}</p>

                    <p className="mt-1 text-sm font-medium text-blue-400">
                        CGPA: {cgpa}
                    </p>

                    <ul className="mt-3 list-disc list-inside marker:text-blue-500 space-y-1">
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
