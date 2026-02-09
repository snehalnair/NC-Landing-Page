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
import { Button, Card, Section } from "@/components/ui";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <Section background="white" padding="sm">
        <Card variant="outline" className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Ready to begin?
            </h2>
            <p className="text-gray-600">
              Get started with NeuralConnexions in minutes.
            </p>
          </div>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Card>
      </Section>
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