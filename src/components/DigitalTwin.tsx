import { MessageSquare, Brain, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function DigitalTwin() {
  const features = [
    {
      icon: MessageSquare,
      title: "Micro-Counseling Prompts",
      description: "Real-time, contextual phrasing support.",
      color: "#8CA3B0"
    },
    {
      icon: Brain,
      title: "Behavioral Insights Engine",
      description: "Tone, empathy, and rhythm analysis.",
      color: "#E7A59C"
    },
    {
      icon: Heart,
      title: "Relationship OS",
      description: "A shared dashboard for couples or teams.",
      color: "#8CA3B0"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
            The AI Digital Twin: A Living Model of Connection.
          </h2>
          <p className="text-lg text-[#717182] leading-relaxed">
            A continuously evolving relationship model that mirrors your communication style, predicts emotional friction, and guides you through real-time micro-interventions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderTop: `4px solid ${feature.color}` }}
            >
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: feature.color + "20" }}
                >
                  <feature.icon 
                    className="w-8 h-8" 
                    style={{ color: feature.color }} 
                  />
                </div>
                <h3 className="mb-3 text-[#2C3E50]">{feature.title}</h3>
                <p className="text-[#717182]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Representation */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-64 h-64">
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8CA3B0] to-[#E7A59C] opacity-20 animate-pulse"></div>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8CA3B0]"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E7A59C]"></div>
            </div>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="w-12 h-12 text-[#8CA3B0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
