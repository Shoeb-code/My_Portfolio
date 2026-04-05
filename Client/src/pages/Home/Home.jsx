import Header from "../../components/header/Header.jsx";
import Hero from "./Hero";
import Experience from "./Experience";
import Skills from "./Skills";
import DSA from "./DSA";
import Projects from "./Projects";
import Contact from "./Contact";

import { useRef } from "react";
import PageWrapper from "../../components/PageWrapper.jsx"

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrapper>
      <Header scrollToContact={scrollToContact} />
      <Hero scrollToContact={scrollToContact} />
      <Experience />
      <Skills />
      <DSA />
      <Projects />
      <Contact innerRef={contactRef} />
    </PageWrapper>
  );
}
