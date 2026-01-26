import { Dna, RefreshCw, Activity } from "lucide-react";

export default function Innovation() {
  const pillars = [
    {
      icon: Dna,
      title: "Neuro-Linguistic Profiling",
      description: "Analyzes communication tone, syntax, and emotion.",
      color: "#8CA3B0"
    },
    {
      icon: RefreshCw,
      title: "Behavioral Reinforcement Learning",
      description: "Predicts and adapts to relational outcomes.",
      color: "#E7A59C"
    },
    {
      icon: Activity,
      title: "Cognitive Augmentation R&D",
      description: "Integrates biometric and neural data to retrain emotional resilience.",
      color: "#8CA3B0"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#2C3E50]">
            The Science Behind Empathy.
          </h2>
          <p className="text-xl text-[#8CA3B0] mb-8">
            Where neuro-linguistics meets adaptive AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background decoration */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"
                style={{ backgroundColor: pillar.color }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: pillar.color + "20" }}
                >
                  <pillar.icon 
                    className="w-8 h-8" 
                    style={{ color: pillar.color }} 
                  />
                </div>
                
                <h3 className="mb-4 text-[#2C3E50]">{pillar.title}</h3>
                <p className="text-[#717182] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional visual */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#8CA3B0] to-[#E7A59C] text-white rounded-full shadow-lg">
            3 Innovation Pillars • Infinite Possibilities
          </div>
        </div>
      </div>
    </section>
  );
}
