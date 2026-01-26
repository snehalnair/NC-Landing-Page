import { Users, Heart, Building2 } from "lucide-react";

export default function BusinessModel() {
  const streams = [
    {
      icon: Users,
      stream: "Freemium Insights",
      description: "Self-awareness reports + AI nudges",
      value: "Broad user funnel",
      color: "#8CA3B0"
    },
    {
      icon: Heart,
      stream: "Couple Mode Subscription",
      description: "Relationship OS for couples",
      value: "High-LTV recurring model",
      price: "£15–£20/mo",
      color: "#E7A59C"
    },
    {
      icon: Building2,
      stream: "Corporate Wellness API",
      description: "Workforce relationship analytics",
      value: "Scalable B2B revenue",
      color: "#8CA3B0"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/30 to-[#F5F6F7]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
            Sustainable Growth Through Connection
          </h2>
          <p className="text-lg text-[#717182]">
            Multiple revenue streams designed for scale and impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {streams.map((stream, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                style={{ backgroundColor: stream.color + "20" }}
              >
                <stream.icon 
                  className="w-7 h-7" 
                  style={{ color: stream.color }} 
                />
              </div>

              {/* Stream Name */}
              <h3 className="mb-3 text-[#2C3E50]">{stream.stream}</h3>
              
              {/* Price if available */}
              {stream.price && (
                <div className="mb-4">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-sm text-white"
                    style={{ backgroundColor: stream.color }}
                  >
                    {stream.price}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-[#717182] mb-4">{stream.description}</p>

              {/* Value Proposition */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-[#8CA3B0]">
                  <span className="opacity-60">Value:</span> {stream.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <p className="text-[#717182] text-lg">
            A diversified model balancing social impact with financial sustainability
          </p>
        </div>
      </div>
    </section>
  );
}
