"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { Hero } from "@/components/sections/Hero";
import { MetricsMatrix } from "@/components/sections/MetricsMatrix";
import { PressCoverage } from "@/components/sections/PressCoverage";
import { Capabilities } from "@/components/sections/Capabilities";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorSpotlight />
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PressCoverage />
        <MetricsMatrix />
        <Capabilities />
        <Projects />
        <Experience />
        <TechStack />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
