import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import { TeamSection } from "./components/Marquee";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div style={{ backgroundColor: "#f5efe6", minHeight: "100vh" }}>
            <Nav />
            <main>
                <Hero />
                <About />
                <Work />
                <Marquee />
                <Services />
                <Pricing />
                <TeamSection />
                <Contact />
            </main>
        </div>
    );
}
