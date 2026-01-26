import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Problem() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/30 to-[#F5F6F7]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
              Connected — yet misunderstood.
            </h2>
            <p className="text-lg text-[#717182] leading-relaxed mb-6">
              Every day, subtle miscommunication erodes emotional safety, creativity, and trust. Traditional dating apps and therapy tools address fragments of the problem — not the whole human experience.
            </p>
            <p className="text-lg text-[#717182] leading-relaxed">
              NeuralConnexions bridges this gap through an <span className="text-[#8CA3B0]">AI Relationship Concierge</span> that continuously learns and adapts to how people connect and grow.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Text Chaos */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-red-200">
                <p className="text-xs text-[#717182] mb-2 opacity-60">Before</p>
                <div className="space-y-2">
                  <div className="bg-red-50 p-2 rounded text-xs text-red-600">
                    "You never listen"
                  </div>
                  <div className="bg-red-50 p-2 rounded text-xs text-red-600">
                    "That's not what I meant!"
                  </div>
                  <div className="bg-red-50 p-2 rounded text-xs text-red-600">
                    "Why are you being defensive?"
                  </div>
                </div>
              </div>

              {/* Calm Guided Conversation */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200">
                <p className="text-xs text-[#717182] mb-2 opacity-60">After</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                    "I feel heard when..."
                  </div>
                  <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                    "Help me understand..."
                  </div>
                  <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                    "What I appreciate is..."
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Indicator */}
            <div className="absolute -bottom-4 -right-4 bg-[#8CA3B0] text-white px-4 py-2 rounded-full shadow-lg text-sm">
              AI-Guided
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
