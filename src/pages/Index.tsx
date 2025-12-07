import { useState } from "react";
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
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <PageTransition>
      <div className="min-h-screen">
        <Navbar />

        <SectionTransition direction="fade">
          <Hero />
        </SectionTransition>

        <SectionTransition direction="up" delay={0.1}>
          <About />
        </SectionTransition>

        <SectionTransition direction="left" delay={0.2}>
          <Education />
        </SectionTransition>

        <SectionTransition direction="right" delay={0.1}>
          <Skills />
        </SectionTransition>

        <SectionTransition direction="up" delay={0.1}>
          <Certificates />
        </SectionTransition>

        <SectionTransition direction="scale" delay={0.1}>
          <Projects />
        </SectionTransition>

        <SectionTransition direction="up" delay={0.1}>
          <Contact />
        </SectionTransition>

        <SectionTransition direction="fade">
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
