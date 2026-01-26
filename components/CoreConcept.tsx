import { Compass, Sprout, Heart } from "lucide-react";

export default function CoreConcept() {
  const features = [
    {
      icon: Compass,
      title: "Intentional Discovery",
      color: "#8CA3B0"
    },
    {
      icon: Sprout,
      title: "Proactive Growth",
      color: "#E7A59C"
    },
    {
      icon: Heart,
      title: "Sustained Harmony",
      color: "#8CA3B0"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
            AI for Human Augmentation
          </h2>
          <p className="text-lg text-[#717182] leading-relaxed">
            NeuralConnexions redefines human-AI synergy. Our proprietary AI Digital Twin helps you offload the cognitive strain of communication, empowering emotional clarity, productivity, and deeper relationships.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: feature.color + "20", border: `2px solid ${feature.color}` }}
                >
                  <feature.icon className="w-10 h-10" style={{ color: feature.color }} />
                </div>
                <h3 className="text-[#2C3E50]">{feature.title}</h3>
              </div>
              
              {index < features.length - 1 && (
                <div className="hidden md:block">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#8CA3B0]">
                    <path 
                      d="M 10 20 L 30 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker 
                        id="arrowhead" 
                        markerWidth="10" 
                        markerHeight="7" 
                        refX="9" 
                        refY="3.5" 
                        orient="auto"
                      >
                        <polygon 
                          points="0 0, 10 3.5, 0 7" 
                          fill="currentColor" 
                        />
                      </marker>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <p className="text-[#8CA3B0] italic text-lg">
            Find → Nurture → Sustain
          </p>
        </div>
      </div>
    </section>
  );
}
