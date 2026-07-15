import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";
import PageTransition from "@/components/PageTransition";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <>
      <PageTransition>
      <div className="min-h-screen">
        <Navbar />

        <SectionTransition>
          <Hero />
        </SectionTransition>

        <SectionTransition>
          <About />
        </SectionTransition>

        <SectionTransition>
          <Education />
        </SectionTransition>

        <SectionTransition>
          <Skills />
        </SectionTransition>

        <SectionTransition>
          <Certificates />
        </SectionTransition>

        <SectionTransition>
          <Projects />
        </SectionTransition>

        <SectionTransition>
          <Contact />
        </SectionTransition>

        <SectionTransition>
          <Footer />
        </SectionTransition>

        <BackToTop />
        <ThemeToggle />
      </div>
      </PageTransition>
    </>
  );
};

export default Index;
