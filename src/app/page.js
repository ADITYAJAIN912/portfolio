import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
