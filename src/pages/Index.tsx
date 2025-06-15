
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
