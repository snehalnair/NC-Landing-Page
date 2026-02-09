"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export default function Problem() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/30 to-[#F5F6F7]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
              Connected — yet misunderstood.
            </h2>
            <p className="text-lg text-[#717182] leading-relaxed mb-6">
              Every day, subtle miscommunication erodes emotional safety, creativity, and trust. Traditional dating apps and therapy tools address fragments of the problem — not the whole human experience.
            </p>
            <p className="text-lg text-[#717182] leading-relaxed">
              NeuralConnexions bridges this gap through an <span className="text-[#8CA3B0]">AI Relationship Concierge</span> that continuously learns and adapts to how people connect and grow.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mb-8 rounded-3xl overflow-hidden shadow-xl aspect-video relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758524944669-8194fae9813e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN1bmRlcnN0YW5kaW5nJTIwc2FkbmVzcyUyMGNvbnZlcnNhdGlvbiUyMGNvdXBsZXxlbnwxfHx8fDE3NzA2NzE0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Emotional friction"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-[#E7A59C]/10 mix-blend-overlay"></div>
            </div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
