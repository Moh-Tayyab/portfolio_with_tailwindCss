import Hero from "@/components/HeroSection";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Reviews from "./reviews/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}
