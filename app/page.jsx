"use client";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SpotlightTracker from "@/components/SpotlightTracker";
import Smooth from "@/components/Smooth";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundMesh from "@/components/BackgroundMesh";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Page() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onReveal={() => setReady(true)} />
      <CustomCursor />
      <SpotlightTracker />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-xl focus:bg-gradient-to-r focus:from-burgundy focus:to-royal focus:px-4 focus:py-2.5 focus:font-sans focus:text-xs focus:font-bold focus:text-white focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      <Smooth ready={ready} />
      <ScrollProgress />
      <BackgroundMesh />
      <Navbar />

      <main id="main" className="relative z-10 w-full overflow-x-clip bg-ink">
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Contact />
      </main>

      <Chatbot />
    </>
  );
}
