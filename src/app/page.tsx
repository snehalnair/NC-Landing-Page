"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Sprout,
  Heart,
  MessageSquare,
  Brain,
  Users,
  Menu,
  X,
  Play,
  Check,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8CA3B0] to-[#E7A59C] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-[#2C3E50] text-lg tracking-tight">
              NeuralConnexions
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {["How it works", "Science", "Team", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 text-[15px] text-[#5a6875] hover:text-[#2C3E50] transition-colors rounded-lg hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-[15px] text-[#5a6875] hover:text-[#2C3E50] px-4 py-2">
              Log in
            </a>
            <button className="bg-[#2C3E50] text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#1d2d3a] transition-colors">
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#2C3E50]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2C3E50]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-1">
            {["How it works", "Science", "Team", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-3 text-[#5a6875] hover:bg-gray-50 rounded-lg"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t mt-4">
              <button className="w-full bg-[#2C3E50] text-white py-3 rounded-full font-medium">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ============================================
// HERO
// ============================================
function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#FAFBFC]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#DCE7F3] via-[#DCE7F3]/50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E7A59C]/30 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#8CA3B0 1px, transparent 1px), linear-gradient(90deg, #8CA3B0 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 mb-8 shadow-sm">
            <span className="bg-gradient-to-r from-[#8CA3B0] to-[#E7A59C] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              NEW
            </span>
            <span className="text-sm text-[#5a6875]">Beta access now available</span>
            <ArrowRight className="w-4 h-4 text-[#8CA3B0]" />
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-[#2C3E50] leading-[1.1] tracking-tight mb-6">
            The AI that helps you
            <br />
            <span className="text-[#8CA3B0]">truly connect</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#5a6875] leading-relaxed mb-10 max-w-2xl">
            NeuralConnexions is your cognitive companion — understanding how you communicate and guiding you toward deeper, more meaningful relationships.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="group bg-[#2C3E50] text-white pl-6 pr-5 py-4 rounded-full font-medium text-lg inline-flex items-center gap-3 hover:bg-[#1d2d3a] transition-all hover:shadow-xl hover:shadow-[#2C3E50]/20">
              Start free trial
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button className="group bg-white text-[#2C3E50] pl-5 pr-6 py-4 rounded-full font-medium text-lg inline-flex items-center gap-3 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
              <span className="w-8 h-8 rounded-full bg-[#2C3E50]/5 flex items-center justify-center">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              Watch demo
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                "bg-[#8CA3B0]",
                "bg-[#E7A59C]",
                "bg-[#2C3E50]",
                "bg-[#DCE7F3]",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-medium`}
                >
                  {["SN", "JD", "AK", "MP"][i]}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-[#2C3E50] font-semibold">2,000+</span>
              <span className="text-[#5a6875]"> beta users</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] hidden lg:block">
          <div className="relative">
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100">
              {/* Chat interface mockup */}
              <div className="space-y-4">
                {/* AI suggestion */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8CA3B0] to-[#E7A59C] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#F5F7F9] rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                    <p className="text-sm text-[#2C3E50]">
                      Try saying: <span className="text-[#8CA3B0] font-medium">&quot;I feel heard when you give me your full attention&quot;</span>
                    </p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#2C3E50] text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                    <p className="text-sm">I feel heard when you give me your full attention during our conversations.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E7A59C] flex items-center justify-center shrink-0 text-white text-xs font-medium">
                    SN
                  </div>
                </div>

                {/* Partner response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8CA3B0] flex items-center justify-center shrink-0 text-white text-xs font-medium">
                    JD
                  </div>
                  <div className="bg-[#F5F7F9] rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                    <p className="text-sm text-[#2C3E50]">Thank you for telling me that. I&apos;ll make sure to put my phone away when we talk.</p>
                  </div>
                </div>

                {/* AI insight */}
                <div className="bg-gradient-to-r from-[#8CA3B0]/10 to-[#E7A59C]/10 rounded-xl p-4 border border-[#8CA3B0]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-[#8CA3B0]" />
                    <span className="text-xs font-semibold text-[#8CA3B0] uppercase tracking-wide">Insight</span>
                  </div>
                  <p className="text-sm text-[#5a6875]">Great progress! This conversation shows a 40% improvement in emotional clarity.</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-16 top-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2C3E50]">Conflict resolved</p>
                  <p className="text-xs text-[#5a6875]">3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-16 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E7A59C]/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#E7A59C]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2C3E50]">+28% empathy</p>
                  <p className="text-xs text-[#5a6875]">This week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// LOGOS / TRUST
// ============================================
function LogoCloud() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-[#5a6875] mb-8">
          Built on research from leading institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50">
          {["Stanford", "MIT", "Oxford", "Cambridge", "Imperial"].map((name) => (
            <span key={name} className="text-xl font-semibold text-[#2C3E50] tracking-tight">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FEATURES
// ============================================
function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time guidance",
      description: "Get contextual suggestions for what to say in difficult conversations, right when you need them.",
      color: "#8CA3B0",
    },
    {
      icon: Brain,
      title: "Behavioral insights",
      description: "Understand your communication patterns and learn what triggers conflict or connection.",
      color: "#E7A59C",
    },
    {
      icon: Users,
      title: "Shared dashboard",
      description: "Track relationship health together with your partner, friend, or team in one place.",
      color: "#2C3E50",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[#8CA3B0] font-semibold text-sm tracking-wide uppercase mb-3">
            Features
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-4">
            Everything you need for healthier relationships
          </h2>
          <p className="text-lg text-[#5a6875]">
            Our AI learns how you communicate and helps you connect more deeply with the people who matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: feature.color + "15" }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#5a6875] leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#8CA3B0] font-medium mt-6 group-hover:gap-2 transition-all"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS
// ============================================
function Process() {
  const steps = [
    {
      number: "01",
      title: "Find",
      subtitle: "Intentional Discovery",
      description: "Our AI helps you understand yourself first — your communication style, triggers, and strengths.",
      color: "#8CA3B0",
    },
    {
      number: "02",
      title: "Nurture",
      subtitle: "Proactive Growth",
      description: "Get real-time guidance during conversations to express yourself clearly and empathetically.",
      color: "#E7A59C",
    },
    {
      number: "03",
      title: "Sustain",
      subtitle: "Lasting Connection",
      description: "Track your progress over time and build habits that lead to deeper, lasting relationships.",
      color: "#2C3E50",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#E7A59C] font-semibold text-sm tracking-wide uppercase mb-3">
            The Process
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-4">
            Find. Nurture. Sustain.
          </h2>
          <p className="text-lg text-[#5a6875]">
            A simple framework for every stage of your relationship journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Step number */}
              <span
                className="text-7xl font-bold absolute top-6 right-8 opacity-10"
                style={{ color: step.color }}
              >
                {step.number}
              </span>

              {/* Badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-6"
                style={{ backgroundColor: step.color }}
              >
                {step.title}
              </span>

              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">
                {step.subtitle}
              </h3>
              <p className="text-[#5a6875] leading-relaxed">
                {step.description}
              </p>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-white border-2 border-gray-200 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIAL
// ============================================
function Testimonial() {
  return (
    <section className="py-24 lg:py-32 bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-10 h-10 text-[#E7A59C] mx-auto mb-8" />
          <blockquote className="text-3xl lg:text-4xl font-medium text-white leading-snug mb-8">
            &ldquo;NeuralConnexions helped us communicate in ways we never thought possible. After 10 years of marriage, we&apos;re finally understanding each other.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-[#8CA3B0] border-2 border-[#2C3E50] flex items-center justify-center text-white font-medium">
                S
              </div>
              <div className="w-12 h-12 rounded-full bg-[#E7A59C] border-2 border-[#2C3E50] flex items-center justify-center text-white font-medium">
                J
              </div>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Sarah & James</p>
              <p className="text-white/60 text-sm">Beta users since 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TEAM
// ============================================
function Team() {
  const team = [
    {
      name: "Swapna Nair",
      role: "CEO & Co-founder",
      focus: "Behavioral Design",
      initials: "SN",
      gradient: "from-[#8CA3B0] to-[#6b8a9a]",
    },
    {
      name: "Dr. Sohan Seth",
      role: "Chief AI Scientist",
      focus: "NLP & Machine Learning",
      initials: "SS",
      gradient: "from-[#E7A59C] to-[#d4887d]",
    },
    {
      name: "Snehal Nair",
      role: "Lead Data Scientist",
      focus: "Systems Architecture",
      initials: "SN",
      gradient: "from-[#2C3E50] to-[#1a2836]",
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#8CA3B0] font-semibold text-sm tracking-wide uppercase mb-3">
            Our Team
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-4">
            Built by experts in AI and human behavior
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div
                  className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-semibold shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-1">
                {member.name}
              </h3>
              <p className="text-[#8CA3B0] font-medium text-sm mb-1">
                {member.role}
              </p>
              <p className="text-[#5a6875] text-sm">{member.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA
// ============================================
function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#8CA3B0] to-[#E7A59C] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            Ready to transform your relationships?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of people building deeper connections with AI-powered guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-[#2C3E50] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Start free trial
            </button>
            <button className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
              Talk to sales
            </button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
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
    <footer className="bg-[#1a1f24] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8CA3B0] to-[#E7A59C] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">NeuralConnexions</span>
            </div>
            <p className="text-[#8a919a] max-w-sm mb-6">
              The world&apos;s first cognitive companion. Building emotional intelligence infrastructure for humanity.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#8a919a]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-[#8a919a]">
              {["Features", "Pricing", "Beta Access", "Roadmap"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-[#8a919a]">
              {["About", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8a919a] text-sm">
            © 2025 NeuralConnexions. Built in the UK.
          </p>
          <div className="flex gap-6 text-[#8a919a] text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoCloud />
      <Features />
      <Process />
      <Testimonial />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
