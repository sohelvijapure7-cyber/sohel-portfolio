import Navbar from "../components/Navbar";
import DigitalCore3D from "../components/DigitalCore3D";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Includes from "../components/Includes";
import Services from "../components/Services";
import WhyMe from "../components/WhyMe";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Centerpiece running globally behind everything */}
      <DigitalCore3D />

      {/* Content wrapper with relative positioning so it sits above the 3D canvas */}
      <div className="relative z-10 w-full h-full">
        <Navbar />
        <Hero />
        <TrustBar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Includes />
        <Services />
        <WhyMe />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
