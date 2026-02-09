import React from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Heart,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const phaseColorClasses = {
  rose: {
    container: "bg-rose-100",
    icon: "text-rose-600",
  },
  indigo: {
    container: "bg-indigo-100",
    icon: "text-indigo-600",
  },
  emerald: {
    container: "bg-emerald-100",
    icon: "text-emerald-600",
  },
} as const;

const ImprovedLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-rose-600" />
            <span className="text-xl font-semibold text-gray-900">
              NeuralConnexions
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-rose-600 transition"
            >
              How It Works
            </a>
            <a
              href="#research"
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Research
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Pricing
            </a>
          </div>
          <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition">
            Join Beta
          </button>
        </div>
      </nav>

      {/* Hero Section - Simplified and Focused */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-rose-100 rounded-full">
            <span className="text-rose-800 text-sm font-medium">
              Beta Now Open • Limited Spots
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Communication that strengthens
            <span className="bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              relationships
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            An AI companion that helps you understand your partner better,
            communicate with clarity, and build lasting emotional connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-700 transition flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition">
              Watch Demo (2 min)
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            14-day free trial • No credit card required
          </p>
        </div>

        {/* Product Screenshot Placeholder */}
        <div className="max-w-5xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-rose-100 to-indigo-100 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-16 h-16 text-rose-600 mx-auto mb-4" />
              <p className="text-gray-600">Product Interface Screenshot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - More Relatable */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The communication gap we all feel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Small misunderstandings compound into bigger issues. We&apos;ve all
              been there.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "You&apos;re misunderstood",
                description: "Your intentions don&apos;t match how your words land",
                icon: "💬",
              },
              {
                title: "Patterns repeat",
                description: "The same arguments happen over and over",
                icon: "🔄",
              },
              {
                title: "Connection fades",
                description:
                  "Emotional distance grows without either person meaning it to",
                icon: "💔",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Clear and Specific */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Three ways NeuralConnexions helps
          </h2>

          <div className="space-y-16">
            {[
              {
                phase: "1. Understand",
                title: "See your communication patterns",
                description:
                  "Get insights into how you and your partner communicate differently, what triggers misunderstandings, and where your styles clash or complement.",
                features: [
                  "Attachment style analysis",
                  "Communication pattern mapping",
                  "Emotional trigger identification",
                ],
                icon: Brain,
                color: "rose",
              },
              {
                phase: "2. Improve",
                title: "Communicate with confidence",
                description:
                  "Real-time suggestions help you express yourself clearly and understand your partner better, without feeling like you&apos;re reading from a script.",
                features: [
                  "Contextual phrasing suggestions",
                  "Emotion-aware responses",
                  "De-escalation techniques",
                ],
                icon: Heart,
                color: "indigo",
              },
              {
                phase: "3. Grow",
                title: "Build lasting connection",
                description:
                  "Track progress together, celebrate improvements, and work toward shared relationship goals with guided exercises and check-ins.",
                features: [
                  "Shared relationship dashboard",
                  "Progress tracking",
                  "Guided growth exercises",
                ],
                icon: Users,
                color: "emerald",
              },
            ].map((phase, idx) => {
              const Icon = phase.icon;
              const colors = phaseColorClasses[phase.color];

              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl ${colors.container} flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {phase.phase}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.features.map((feature, fidx) => (
                        <li
                          key={fidx}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full md:w-96 h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500">UI Example {idx + 1}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof - Critical Missing Element */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Trusted by couples building stronger relationships
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We went from arguing every other day to actually understanding each other. The real-time suggestions feel natural, not robotic.",
                author: "Sarah & Michael",
                timeframe: "Together 3 years",
              },
              {
                quote:
                  "I was skeptical about AI relationship help, but the insights into our communication patterns were eye-opening.",
                author: "James & Alex",
                timeframe: "Beta testers since Nov 2024",
              },
              {
                quote:
                  "Finally feels like we&apos;re on the same team instead of opponents. The progress dashboard keeps us motivated.",
                author: "Priya & David",
                timeframe: "Using for 4 months",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.timeframe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Clear and Simple */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Start free, upgrade when you&apos;re ready
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Individual",
                price: "Free",
                description: "Understand yourself better",
                features: [
                  "Personal communication insights",
                  "Weekly pattern reports",
                  "Basic AI suggestions",
                  "Self-guided exercises",
                ],
                cta: "Start Free",
                highlight: false,
              },
              {
                name: "Couples",
                price: "£15/mo",
                description: "Grow together",
                features: [
                  "Everything in Individual",
                  "Shared relationship dashboard",
                  "Real-time communication coach",
                  "Couple exercises & goals",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For teams & organizations",
                features: [
                  "Workplace communication tools",
                  "Team analytics dashboard",
                  "SSO & security compliance",
                  "Dedicated account manager",
                  "Custom integration",
                ],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-rose-600 to-indigo-600 text-white shadow-xl scale-105"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.highlight ? "text-rose-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span
                      className={
                        plan.highlight ? "text-rose-100" : "text-gray-600"
                      }
                    >
                      {" "}
                      /month
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start">
                      <CheckCircle
                        className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                          plan.highlight ? "text-white" : "text-green-600"
                        }`}
                      />
                      <span
                        className={
                          plan.highlight ? "text-white" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-medium transition ${
                    plan.highlight
                      ? "bg-white text-rose-600 hover:bg-rose-50"
                      : "bg-rose-600 text-white hover:bg-rose-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security - Essential for Relationship Data */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Your privacy is non-negotiable
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "End-to-end encryption",
                description:
                  "Your conversations never leave your devices unencrypted",
              },
              {
                icon: CheckCircle,
                title: "GDPR compliant",
                description: "Full compliance with UK & EU data protection",
              },
              {
                icon: Brain,
                title: "No data selling",
                description: "We never sell your data. Ever.",
              },
              {
                icon: Users,
                title: "You own your data",
                description: "Export or delete everything at any time",
              },
            ].map((trust, idx) => {
              const Icon = trust.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {trust.title}
                  </h3>
                  <p className="text-sm text-gray-600">{trust.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Foundation - Simplified */}
      <section id="research" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built on relationship science
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our approach integrates decades of research in attachment theory,
            emotional regulation, and interpersonal neurobiology.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Attachment Theory", authors: "Bowlby, Ainsworth" },
              { title: "Polyvagal Theory", authors: "Porges, 2011" },
              { title: "Emotionally Focused Therapy", authors: "Johnson, Greenberg" },
            ].map((research, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {research.title}
                </h3>
                <p className="text-sm text-gray-600">{research.authors}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-8 text-rose-600 font-medium hover:text-rose-700"
          >
            Read our research methodology →
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to strengthen your relationship?
          </h2>
          <p className="text-xl text-rose-100 mb-10">
            Join hundreds of couples building deeper connection with
            NeuralConnexions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-50 transition">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition">
              Talk to Our Team
            </button>
          </div>

          <p className="text-sm text-rose-100 mt-6">
            14-day free trial • Cancel anytime • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-5 h-5 text-rose-500" />
              <span className="text-white font-semibold">NeuralConnexions</span>
            </div>
            <p className="text-sm">
              Building emotional intelligence infrastructure for humanity.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© 2025 NeuralConnexions. Built in the UK. Designed for global empathy.</p>
        </div>
      </footer>
    </div>
  );
};

export default ImprovedLandingPage;
