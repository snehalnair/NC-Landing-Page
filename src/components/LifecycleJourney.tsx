export default function LifecycleJourney() {
  const phases = [
    {
      phase: "Find",
      aiFunction: "Smart matchmaking & pre-conversation modeling",
      userValue: "Authentic, low-stress introductions",
      color: "#8CA3B0"
    },
    {
      phase: "Nurture",
      aiFunction: "Real-time communication nudges",
      userValue: "Emotional awareness & proactive growth",
      color: "#E7A59C"
    },
    {
      phase: "Sustain",
      aiFunction: "Predictive simulations & shared goal tracking",
      userValue: "Long-term relational health",
      color: "#8CA3B0"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/40 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
            Lifecycle Journey: Find → Nurture → Sustain
          </h2>
          <p className="text-lg text-[#717182]">
            A complete relationship evolution framework powered by AI
          </p>
        </div>

        {/* Circular Diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative aspect-square max-w-md mx-auto mb-12">
            {/* Circle */}
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <circle 
                cx="100" 
                cy="100" 
                r="80" 
                fill="none" 
                stroke="#DCE7F3" 
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              {/* Phase markers */}
              <circle cx="100" cy="20" r="8" fill="#8CA3B0" />
              <circle cx="169" cy="130" r="8" fill="#E7A59C" />
              <circle cx="31" cy="130" r="8" fill="#8CA3B0" />
              
              {/* Arrows */}
              <path 
                d="M 100 20 Q 169 75 169 130" 
                fill="none" 
                stroke="#8CA3B0" 
                strokeWidth="2"
                opacity="0.3"
              />
              <path 
                d="M 169 130 Q 100 185 31 130" 
                fill="none" 
                stroke="#E7A59C" 
                strokeWidth="2"
                opacity="0.3"
              />
              <path 
                d="M 31 130 Q 66 75 100 20" 
                fill="none" 
                stroke="#8CA3B0" 
                strokeWidth="2"
                opacity="0.3"
              />
            </svg>

            {/* Labels */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
              <span className="text-[#8CA3B0]">Find</span>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-8">
              <span className="text-[#E7A59C]">Nurture</span>
            </div>
            <div className="absolute bottom-0 left-0 -translate-x-8">
              <span className="text-[#8CA3B0]">Sustain</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#DCE7F3] to-[#E7A59C]/30">
                  <th className="p-4 text-left text-[#2C3E50]">Phase</th>
                  <th className="p-4 text-left text-[#2C3E50]">AI Function</th>
                  <th className="p-4 text-left text-[#2C3E50]">User Value</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4">
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.phase}
                      </span>
                    </td>
                    <td className="p-4 text-[#717182]">{item.aiFunction}</td>
                    <td className="p-4 text-[#717182]">{item.userValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
