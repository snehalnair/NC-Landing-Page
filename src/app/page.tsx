"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Sprout,
  Heart,
  MessageSquare,
  Brain,
  Dna,
  RefreshCw,
  Activity,
  Users,
  Building2,
  BookOpen,
  ExternalLink,
  Globe,
  Shield,
  TrendingUp,
  Download,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#DCE7F3] via-[#F5F6F7] to-[#E7A59C]/20">
      {/* Background Neural Network Visual */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8CA3B0] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E7A59C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Logo & Tagline */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-8 h-8 text-[#8CA3B0]" />
            <span className="tracking-widest text-[#8CA3B0] uppercase font-medium">
              NeuralConnexions
            </span>
          </div>
          <p className="text-[#8CA3B0] italic font-serif">Find • Nurture • Sustain</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl mb-6 text-[#2C3E50] max-w-4xl mx-auto font-serif">
          The World&apos;s First Cognitive Companion
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#717182] mb-12 max-w-3xl mx-auto">
          AI that understands human connection — guiding you from first contact
          to lifelong growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#8CA3B0] hover:bg-[#7a93a0] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 font-medium">
            Explore the AI Companion
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-[#8CA3B0] text-[#8CA3B0] hover:bg-[#8CA3B0] hover:text-white px-8 py-4 rounded-lg transition-all font-medium">
            Join the Beta
          </button>
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

// ============================================
// PROBLEM SECTION
// ============================================
function Problem() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/30 to-[#F5F6F7]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
              Connected — yet misunderstood.
            </h2>
            <p className="text-lg text-[#717182] leading-relaxed mb-6">
              Every day, subtle miscommunication erodes emotional safety,
              creativity, and trust. Traditional dating apps and therapy tools
              address fragments of the problem — not the whole human experience.
            </p>
            <p className="text-lg text-[#717182] leading-relaxed">
              NeuralConnexions bridges this gap through an{" "}
              <span className="text-[#8CA3B0] font-medium">
                AI Relationship Concierge
              </span>{" "}
              that continuously learns and adapts to how people connect and
              grow.
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
                    &quot;You never listen&quot;
                  </div>
                  <div className="bg-red-50 p-2 rounded text-xs text-red-600">
                    &quot;That&apos;s not what I meant!&quot;
                  </div>
                  <div className="bg-red-50 p-2 rounded text-xs text-red-600">
                    &quot;Why are you being defensive?&quot;
                  </div>
                </div>
              </div>

              {/* Calm Guided Conversation */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200">
                <p className="text-xs text-[#717182] mb-2 opacity-60">After</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                    &quot;I feel heard when...&quot;
                  </div>
                  <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                    &quot;Help me understand...&quot;
                  </div>
                  <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                    &quot;What I appreciate is...&quot;
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Indicator */}
            <div className="absolute -bottom-4 -right-4 bg-[#8CA3B0] text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
              AI-Guided
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CORE CONCEPT SECTION
// ============================================
function CoreConcept() {
  const features = [
    {
      icon: Compass,
      title: "Intentional Discovery",
      color: "#8CA3B0",
    },
    {
      icon: Sprout,
      title: "Proactive Growth",
      color: "#E7A59C",
    },
    {
      icon: Heart,
      title: "Sustained Harmony",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
            AI for Human Augmentation
          </h2>
          <p className="text-lg text-[#717182] leading-relaxed">
            NeuralConnexions redefines human-AI synergy. Our proprietary AI
            Digital Twin helps you offload the cognitive strain of
            communication, empowering emotional clarity, productivity, and
            deeper relationships.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    backgroundColor: feature.color + "20",
                    border: `2px solid ${feature.color}`,
                  }}
                >
                  <feature.icon
                    className="w-10 h-10"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-[#2C3E50] font-serif text-lg">{feature.title}</h3>
              </div>

              {index < features.length - 1 && (
                <div className="hidden md:block">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="text-[#8CA3B0]"
                  >
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
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
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
          <p className="text-[#8CA3B0] italic text-lg font-serif">
            Find → Nurture → Sustain
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DIGITAL TWIN SECTION
// ============================================
function DigitalTwin() {
  const features = [
    {
      icon: MessageSquare,
      title: "Micro-Counseling Prompts",
      description: "Real-time, contextual phrasing support.",
      color: "#8CA3B0",
    },
    {
      icon: Brain,
      title: "Behavioral Insights Engine",
      description: "Tone, empathy, and rhythm analysis.",
      color: "#E7A59C",
    },
    {
      icon: Heart,
      title: "Relationship OS",
      description: "A shared dashboard for couples or teams.",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
            The AI Digital Twin: A Living Model of Connection.
          </h2>
          <p className="text-lg text-[#717182] leading-relaxed">
            A continuously evolving relationship model that mirrors your
            communication style, predicts emotional friction, and guides you
            through real-time micro-interventions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 text-center"
              style={{ borderTop: `4px solid ${feature.color}` }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: feature.color + "20" }}
              >
                <feature.icon
                  className="w-8 h-8"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="mb-3 text-[#2C3E50] font-serif text-xl">{feature.title}</h3>
              <p className="text-[#717182]">{feature.description}</p>
            </div>
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
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "20s" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8CA3B0]"></div>
            </div>
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "15s", animationDirection: "reverse" }}
            >
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

// ============================================
// LIFECYCLE JOURNEY SECTION
// ============================================
function LifecycleJourney() {
  const phases = [
    {
      phase: "Find",
      aiFunction: "Smart matchmaking & pre-conversation modeling",
      userValue: "Authentic, low-stress introductions",
      color: "#8CA3B0",
    },
    {
      phase: "Nurture",
      aiFunction: "Real-time communication nudges",
      userValue: "Emotional awareness & proactive growth",
      color: "#E7A59C",
    },
    {
      phase: "Sustain",
      aiFunction: "Predictive simulations & shared goal tracking",
      userValue: "Long-term relational health",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/40 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
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
              <span className="text-[#8CA3B0] font-serif font-medium">Find</span>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-8">
              <span className="text-[#E7A59C] font-serif font-medium">Nurture</span>
            </div>
            <div className="absolute bottom-0 left-0 -translate-x-8">
              <span className="text-[#8CA3B0] font-serif font-medium">Sustain</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#DCE7F3] to-[#E7A59C]/30">
                  <th className="p-4 text-left text-[#2C3E50] font-serif">Phase</th>
                  <th className="p-4 text-left text-[#2C3E50] font-serif">AI Function</th>
                  <th className="p-4 text-left text-[#2C3E50] font-serif">User Value</th>
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
                        className="inline-block px-3 py-1 rounded-full text-white text-sm font-medium"
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

// ============================================
// INNOVATION SECTION
// ============================================
function Innovation() {
  const pillars = [
    {
      icon: Dna,
      title: "Neuro-Linguistic Profiling",
      description: "Analyzes communication tone, syntax, and emotion.",
      color: "#8CA3B0",
    },
    {
      icon: RefreshCw,
      title: "Behavioral Reinforcement Learning",
      description: "Predicts and adapts to relational outcomes.",
      color: "#E7A59C",
    },
    {
      icon: Activity,
      title: "Cognitive Augmentation R&D",
      description:
        "Integrates biometric and neural data to retrain emotional resilience.",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#2C3E50] font-serif">
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

                <h3 className="mb-4 text-[#2C3E50] font-serif text-xl">{pillar.title}</h3>
                <p className="text-[#717182] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional visual */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#8CA3B0] to-[#E7A59C] text-white rounded-full shadow-lg font-medium">
            3 Innovation Pillars • Infinite Possibilities
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// BUSINESS MODEL SECTION
// ============================================
function BusinessModel() {
  const streams = [
    {
      icon: Users,
      stream: "Freemium Insights",
      description: "Self-awareness reports + AI nudges",
      value: "Broad user funnel",
      color: "#8CA3B0",
    },
    {
      icon: Heart,
      stream: "Couple Mode Subscription",
      description: "Relationship OS for couples",
      value: "High-LTV recurring model",
      price: "£15–£20/mo",
      color: "#E7A59C",
    },
    {
      icon: Building2,
      stream: "Corporate Wellness API",
      description: "Workforce relationship analytics",
      value: "Scalable B2B revenue",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/30 to-[#F5F6F7]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
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
              <h3 className="mb-3 text-[#2C3E50] font-serif text-xl">{stream.stream}</h3>

              {/* Price if available */}
              {stream.price && (
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm text-white font-medium"
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
            A diversified model balancing social impact with financial
            sustainability
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// IMAGE WITH FALLBACK COMPONENT
// ============================================
function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...props} />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setDidError(true)}
      {...props}
    />
  );
}

// ============================================
// RESEARCH HUB SECTION
// ============================================
function ResearchHub() {
  const featuredResearch = [
    {
      title: "How Attachment Shapes Adult Intimacy",
      abstract: "How childhood patterns influence adult relationships.",
      image:
        "https://images.unsplash.com/photo-1680603007731-d8da76c235ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByZWxhdGlvbnNoaXB8ZW58MXx8fHwxNzYwMDA0MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Emotional Safety: The Hidden Currency of Relationships",
      abstract: "Co-regulation and trust through the lens of Polyvagal Theory.",
      image:
        "https://images.unsplash.com/photo-1555728333-5ff9f9ff9538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGNvbm5lY3Rpb24lMjBoYW5kc3xlbnwxfHx8fDE3NjAwMDQxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Why We Pick Who We Pick",
      abstract: "Attachment pairings and repetition compulsion explained.",
      image:
        "https://images.unsplash.com/photo-1556695725-3cc4a29d4ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwdGhlcmFweXxlbnwxfHx8fDE3NjAwMDQxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const academicReferences = [
    {
      title: "Attachment in Adulthood",
      authors: "Mikulincer & Shaver",
      year: "2007",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      title: "Attachment, Emotion Regulation, and Wellbeing in Couples",
      authors: "Brandão et al.",
      year: "2019",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      title: "Polyvagal Theory",
      authors: "Porges",
      year: "2011",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#DCE7F3]/20 via-white to-[#E7A59C]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-[#8CA3B0]" />
            <h2 className="text-4xl md:text-5xl text-[#2C3E50] font-serif">
              The Science of Human Connection.
            </h2>
          </div>
          <p className="text-lg text-[#717182]">
            Explore the psychology, neuroscience, and AI research behind
            NeuralConnexions.
          </p>
        </div>

        {/* Featured Research Series */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-[#2C3E50] text-center font-serif">
            Featured Research Series
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredResearch.map((research, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={research.image}
                    alt={research.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h4 className="mb-3 text-[#2C3E50] group-hover:text-[#8CA3B0] transition-colors font-serif text-lg">
                    {research.title}
                  </h4>
                  <p className="text-sm text-[#717182] mb-4 leading-relaxed">
                    {research.abstract}
                  </p>
                  <button className="text-[#8CA3B0] hover:text-[#7a93a0] p-0 h-auto inline-flex items-center gap-1 font-medium text-sm">
                    Read <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic References */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl mb-8 text-[#2C3E50] text-center font-serif">
            Academic References
          </h3>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {academicReferences.map((ref, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="flex-1">
                    <h4 className="text-[#2C3E50] mb-1 font-serif">{ref.title}</h4>
                    <p className="text-sm text-[#717182]">
                      {ref.authors} ({ref.year})
                    </p>
                  </div>
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8CA3B0] hover:text-[#7a93a0] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="border-2 border-[#8CA3B0] text-[#8CA3B0] hover:bg-[#8CA3B0] hover:text-white px-6 py-3 rounded-lg transition-all font-medium">
              Subscribe for new research drops
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// GLOBAL VISION SECTION
// ============================================
function GlobalVision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
              Built in the UK. Designed for Global Empathy.
            </h2>
            <p className="text-lg text-[#717182] leading-relaxed">
              Aligned with the UK&apos;s AI Opportunities Action Plan,
              NeuralConnexions advances ethical AI with measurable social impact
              — building emotional intelligence infrastructure for humanity.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#8CA3B0]/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#8CA3B0]" />
              </div>
              <h4 className="mb-2 text-[#2C3E50] font-serif text-lg">Global Scale</h4>
              <p className="text-sm text-[#717182]">
                Empathy infrastructure for billions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#E7A59C]/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#E7A59C]" />
              </div>
              <h4 className="mb-2 text-[#2C3E50] font-serif text-lg">Ethical AI</h4>
              <p className="text-sm text-[#717182]">
                Privacy-first, transparent design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#8CA3B0]/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#8CA3B0]" />
              </div>
              <h4 className="mb-2 text-[#2C3E50] font-serif text-lg">Social Impact</h4>
              <p className="text-sm text-[#717182]">
                Measurable relational health outcomes
              </p>
            </div>
          </div>

          {/* Quote or Highlight */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#DCE7F3] to-[#E7A59C]/20 rounded-2xl">
            <blockquote className="text-center">
              <p className="text-xl text-[#2C3E50] italic mb-4 font-serif">
                &quot;The future of AI isn&apos;t just about intelligence —
                it&apos;s about understanding what makes us human.&quot;
              </p>
              <footer className="text-[#8CA3B0] font-medium">
                — NeuralConnexions Mission
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TEAM SECTION
// ============================================
function Team() {
  const team = [
    {
      name: "Swapna Nair",
      role: "CEO / Visionary Lead",
      focus: "Behavioral design & ethics",
      initials: "SN",
      color: "#8CA3B0",
    },
    {
      name: "Dr. Sohan Seth",
      role: "Chief AI Scientist",
      focus: "NLP & predictive modeling",
      initials: "SS",
      color: "#E7A59C",
    },
    {
      name: "Snehal Nair",
      role: "Lead Data Scientist",
      focus: "Cloud systems & scalability",
      initials: "SN",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50] font-serif">
            The Minds Behind the Machine.
          </h2>
          <p className="text-lg text-[#717182]">
            A multidisciplinary team united by a vision of human-AI synergy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div
                  className="w-32 h-32 rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-2xl text-white font-serif"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <h3 className="mb-2 text-[#2C3E50] font-serif text-xl">{member.name}</h3>
              <p className="text-sm text-[#8CA3B0] mb-3 font-medium">{member.role}</p>
              <p className="text-sm text-[#717182] italic">{member.focus}</p>
            </div>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#DCE7F3] to-[#E7A59C]/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-[#2C3E50] leading-relaxed">
              We believe that the most powerful technology doesn&apos;t replace
              human connection — it amplifies it. Our diverse backgrounds in
              psychology, AI, and systems design converge on one mission: making
              empathy scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8CA3B0] via-[#8CA3B0] to-[#E7A59C] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-serif">
            The Future of Human Connection Starts Here.
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join us in building the world&apos;s first cognitive companion
            platform. Be part of the journey from first contact to lifelong
            growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-[#8CA3B0] hover:bg-gray-100 px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2 font-medium">
              Join the Beta
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all inline-flex items-center gap-2 font-medium">
              <Download className="w-5 h-5" />
              Download Whitepaper
            </button>
          </div>

          {/* Abstract Neural Visual */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-64 h-32">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                {/* Two profiles facing each other */}
                <ellipse
                  cx="60"
                  cy="50"
                  rx="30"
                  ry="40"
                  fill="white"
                  opacity="0.2"
                />
                <ellipse
                  cx="140"
                  cy="50"
                  rx="30"
                  ry="40"
                  fill="white"
                  opacity="0.2"
                />

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
                <circle
                  cx="100"
                  cy="50"
                  r="8"
                  fill="white"
                  opacity="0.6"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-white/80 text-lg italic font-serif">
            Shared empathy • Neural threads • Infinite growth
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#8CA3B0]" />
              <span className="tracking-wide font-serif text-lg">NeuralConnexions</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              The world&apos;s first cognitive companion platform. Building
              emotional intelligence infrastructure for humanity.
            </p>
            <p className="text-white/50 text-xs italic font-serif">
              Find • Nurture • Sustain
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white/90 font-serif">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  AI Companion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Digital Twin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-white/90 font-serif">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 NeuralConnexions. Built in the UK. Designed for global
            empathy.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <CoreConcept />
      <DigitalTwin />
      <LifecycleJourney />
      <Innovation />
      <BusinessModel />
      <ResearchHub />
      <GlobalVision />
      <Team />
      <CTASection />
      <Footer />
    </main>
  );
}
