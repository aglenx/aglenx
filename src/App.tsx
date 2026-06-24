import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import { TeamSection } from "./components/Marquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Courses from "./components/Courses";

import Contact from "./components/Contact";

export default function App() {
    return (
        <div style={{ backgroundColor: "#f5efe6", minHeight: "100vh" }}>
            <Nav />
            <main>
                <Hero />
                <About />
                <Work />

                <Services />
                <Projects />
                <Courses />

                <TeamSection />
                <Contact />
            </main>
        </div>
    );
}
