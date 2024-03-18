import Image from "next/image";
import Hero from "./components/Hero";
import { Spotlight } from "./components/ui/Spotlight";
import { Projects } from "./components/Project";
import { TechStack } from "./components/TechStack";
import { Testimonials } from "./components/Teztimonials";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Spotlight />
      <Hero />
      <TechStack />
      <Testimonials />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
