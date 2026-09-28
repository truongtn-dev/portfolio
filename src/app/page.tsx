"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Hero } from "@/components/sections/Hero";
import { MetricsMatrix } from "@/components/sections/MetricsMatrix";
import { Capabilities } from "@/components/sections/Capabilities";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
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
