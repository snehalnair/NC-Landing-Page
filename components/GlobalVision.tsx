"use client";

import { Globe, Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export default function GlobalVision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
              Built in the UK. Designed for Global Empathy.
            </h2>
            <p className="text-lg text-[#717182] leading-relaxed">
              Aligned with the UK's AI Opportunities Action Plan, NeuralConnexions advances ethical AI with measurable social impact — building emotional intelligence infrastructure for humanity.
            </p>
          </motion.div>

          {/* Visual Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1759752394757-323a0adc0d62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb25uZWN0aW9uJTIwY29tbXVuaXR5JTIwcGVvcGxlfGVufDF8fHx8MTc3MDY3MTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global human connection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-2xl font-medium">A borderless approach to relational health.</p>
            </div>
          </motion.div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#8CA3B0]/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#8CA3B0]" />
              </div>
              <h4 className="mb-2 text-[#2C3E50]">Global Scale</h4>
              <p className="text-sm text-[#717182]">
                Empathy infrastructure for billions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#E7A59C]/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#E7A59C]" />
              </div>
              <h4 className="mb-2 text-[#2C3E50]">Ethical AI</h4>
              <p className="text-sm text-[#717182]">
                Privacy-first, transparent design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#8CA3B0]/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#8CA3B0]" />
              </div>
              <h4 className="mb-2 text-[#2C3E50]">Social Impact</h4>
              <p className="text-sm text-[#717182]">
                Measurable relational health outcomes
              </p>
            </div>
          </div>

          {/* Quote or Highlight */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#DCE7F3] to-[#E7A59C]/20 rounded-2xl">
            <blockquote className="text-center">
              <p className="text-xl text-[#2C3E50] italic mb-4">
                "The future of AI isn't just about intelligence — it's about understanding what makes us human."
              </p>
              <footer className="text-[#8CA3B0]">
                — NeuralConnexions Mission
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
