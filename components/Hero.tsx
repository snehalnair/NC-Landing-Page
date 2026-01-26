"use client";

import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#DCE7F3] via-[#F5F6F7] to-[#E7A59C]/20">
      {/* Background Neural Network Visual */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8CA3B0] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E7A59C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Logo & Tagline */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-8 h-8 text-[#8CA3B0]" />
            <span className="tracking-widest text-[#8CA3B0] uppercase">NeuralConnexions</span>
          </div>
          <p className="text-[#8CA3B0] italic">Find • Nurture • Sustain</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl mb-6 text-[#2C3E50] max-w-4xl mx-auto">
          The World's First Cognitive Companion
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#717182] mb-12 max-w-3xl mx-auto">
          AI that understands human connection — guiding you from first contact to lifelong growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#8CA3B0] hover:bg-[#7a93a0] text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Explore the AI Companion
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#8CA3B0] text-[#8CA3B0] hover:bg-[#8CA3B0] hover:text-white px-8 py-6"
          >
            Join the Beta
          </Button>
        </div>

        {/* Visual Concept - Abstract Neural Faces */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 relative">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <path 
                  d="M 50 100 Q 100 80 150 100" 
                  stroke="#8CA3B0" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.3"
                  className="animate-pulse"
                />
                <path 
                  d="M 50 100 Q 100 120 150 100" 
                  stroke="#E7A59C" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <circle cx="50" cy="100" r="4" fill="#8CA3B0" opacity="0.6" />
                <circle cx="150" cy="100" r="4" fill="#E7A59C" opacity="0.6" />
                <circle cx="100" cy="80" r="3" fill="#8CA3B0" opacity="0.4" />
                <circle cx="100" cy="120" r="3" fill="#E7A59C" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8CA3B0] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#8CA3B0] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}