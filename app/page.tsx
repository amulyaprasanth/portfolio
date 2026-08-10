import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <Image
                src="/bg.jpg"
                alt="Background"
                fill
                priority
                className="-z-10 fixed inset-0 object-cover"
            />

            <Navbar/>

            <main>
                <Hero/>
                <About/>

                <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
                    <Experience/>
                    <Education/>
                </section>

                <Projects/>
                <Skills/>
            </main>
            <Footer/>
        </div>
    );
}
