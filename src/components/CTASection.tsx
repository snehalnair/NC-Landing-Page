import { Button } from "./ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8CA3B0] via-[#8CA3B0] to-[#E7A59C] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-6 text-white">
            The Future of Human Connection Starts Here.
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join us in building the world's first cognitive companion platform. Be part of the journey from first contact to lifelong growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-[#8CA3B0] hover:bg-gray-100 px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              Join the Beta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Whitepaper
            </Button>
          </div>

          {/* Abstract Neural Visual */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-64 h-32">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                {/* Two profiles facing each other */}
                <ellipse cx="60" cy="50" rx="30" ry="40" fill="white" opacity="0.2" />
                <ellipse cx="140" cy="50" rx="30" ry="40" fill="white" opacity="0.2" />
                
                {/* Connection threads */}
                <path 
                  d="M 60 50 Q 100 30 140 50" 
                  stroke="white" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.5"
                  className="animate-pulse"
                />
                <path 
                  d="M 60 50 Q 100 50 140 50" 
                  stroke="white" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.5"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <path 
                  d="M 60 50 Q 100 70 140 50" 
                  stroke="white" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.5"
                  className="animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
                
                {/* Glow effect */}
                <circle cx="100" cy="50" r="8" fill="white" opacity="0.6" className="animate-pulse" />
              </svg>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-white/80 text-lg italic">
            Shared empathy • Neural threads • Infinite growth
          </p>
        </div>
      </div>
    </section>
  );
}
