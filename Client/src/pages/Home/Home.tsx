import { useRef } from "react";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/header/Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import DSASection from "./DSASection";
import ExperienceTimeline from "./ExperienceTimeline";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import TechMarquee from "./TechMarquee";
import Contact from "./Contact";
import Footer from "./Footer";

// UI Enhancements
import MouseFollower from "../../components/MouseFollower";
import ScrollProgress from "../../components/ScrollProgress";
import ScrollToTop from "../../components/ScrollToTop";
import LoadingScreen from "../../components/LoadingScreen";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      const yOffset = -90; // offset navbar height
      const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageWrapper>
      {/* Premium UI Enhancements */}
      <LoadingScreen />
      <MouseFollower />
      <ScrollProgress />
      <ScrollToTop />

      {/* Main Layout Flow */}
      <Header scrollToContact={scrollToContact} />
      
      <main className="relative bg-[#030712]">
        <Hero scrollToContact={scrollToContact} />
        
        {/* About Section */}
        <About />
        
        {/* Infinite Tech Marquee */}
        <TechMarquee />

        {/* Skills Section */}
        <Skills />

        {/* DSA Section */}
        <DSASection />
        
        {/* Services Section */}
        <Services />
        
        {/* Projects Section */}
        <Projects />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <Contact innerRef={contactRef} />
      </main>

      {/* Footer */}
      <Footer />
    </PageWrapper>
  );
}
