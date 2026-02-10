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

import { BlogPost } from "./components/BlogPost";
import { useState } from "react";
import { blogData } from "./data/blogs";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  if (selectedPostId && blogData[selectedPostId]) {
    return (
      <BlogPost 
        post={blogData[selectedPostId]} 
        onBack={() => {
          setSelectedPostId(null);
          // Use a small timeout to allow the main page to render before scrolling
          setTimeout(() => {
            const element = document.getElementById("research");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 0);
        }} 
      />
    );
  }

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
      <ResearchHub onSelectPost={setSelectedPostId} />
      <Team />
      <CTASection />
      <Footer />
    </div>
  );
}