import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Speciality from "@/components/sections/Speciality";

export default function Home() {
    return (
        <>
            <Hero/>
            <Skills/>
            <About/>
            <Experience/>
            <Process/>
            <Projects/>
            <Speciality/>
        </>
    );
}