"use client";

import Hero from "./components/Hero";
import CoreConcept from "./components/CoreConcept";
import Problem from "./components/Problem";
import DigitalTwin from "./components/DigitalTwin";
import LifecycleJourney from "./components/LifecycleJourney";
import Innovation from "./components/Innovation";
import BusinessModel from "./components/BusinessModel";
import GlobalVision from "./components/GlobalVision";
import ResearchHub from "./components/ResearchHub";
import Team from "./components/Team";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <CoreConcept />
      <Problem />
      <DigitalTwin />
      <LifecycleJourney />
      <Innovation />
      <BusinessModel />
      <GlobalVision />
      <ResearchHub />
      <Team />
      <CTASection />
      <Footer />
    </div>
  );
}