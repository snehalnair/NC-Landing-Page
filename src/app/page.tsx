"use client";

import { useState, useEffect } from "react";
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
  Globe,
  Shield,
  TrendingUp,
  Download,
  Mail,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Sparkles className={`w-6 h-6 ${scrolled ? "text-[#8CA3B0]" : "text-[#8CA3B0]"}`} />
          <span className={`font-serif text-xl tracking-wide ${scrolled ? "text-[#2C3E50]" : "text-[#2C3E50]"}`}>
            NeuralConnexions
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solution" className={`text-sm font-medium transition-colors hover:text-[#8CA3B0] ${scrolled ? "text-[#717182]" : "text-[#717182]"}`}>
            Solution
          </a>
          <a href="#science" className={`text-sm font-medium transition-colors hover:text-[#8CA3B0] ${scrolled ? "text-[#717182]" : "text-[#717182]"}`}>
            Science
          </a>
          <a href="#team" className={`text-sm font-medium transition-colors hover:text-[#8CA3B0] ${scrolled ? "text-[#717182]" : "text-[#717182]"}`}>
            Team
          </a>
          <button className="bg-[#8CA3B0] hover:bg-[#7a93a0] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg">
            Join Beta
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 space-y-4">
          <a href="#solution" className="block text-[#717182] hover:text-[#8CA3B0] font-medium">Solution</a>
          <a href="#science" className="block text-[#717182] hover:text-[#8CA3B0] font-medium">Science</a>
          <a href="#team" className="block text-[#717182] hover:text-[#8CA3B0] font-medium">Team</a>
          <button className="w-full bg-[#8CA3B0] text-white py-3 rounded-full font-medium">
            Join Beta
          </button>
        </div>
      )}
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DCE7F3] via-[#F5F6F7] to-[#faf5f4]">
        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-[#8CA3B0]/20 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#E7A59C]/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DCE7F3]/50 rounded-full blur-[120px]" />
        
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(#8CA3B0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#8CA3B0]/20 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-[#E7A59C] rounded-full animate-pulse" />
            <span className="text-sm text-[#717182] font-medium">Now accepting beta users</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#2C3E50] mb-6 leading-[1.1] tracking-tight">
            The World&apos;s First
            <span className="block mt-2 bg-gradient-to-r from-[#8CA3B0] to-[#E7A59C] bg-clip-text text-transparent">
              Cognitive Companion
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#717182] mb-10 max-w-2xl mx-auto leading-relaxed">
            AI that understands human connection — guiding you from first contact to lifelong growth.
          </p>

          {/* Tagline */}
          <p className="text-[#8CA3B0] font-serif italic text-lg mb-12">
            Find • Nurture • Sustain
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-[#2C3E50] hover:bg-[#1a2836] text-white pl-8 pr-6 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 font-medium text-lg">
              Explore the Platform
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            <button className="text-[#717182] hover:text-[#2C3E50] px-8 py-4 font-medium text-lg transition-colors inline-flex items-center gap-2">
              Watch Demo
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Main illustration container */}
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 p-8 md:p-12">
                {/* Connection visualization */}
                <svg className="w-full h-48 md:h-64" viewBox="0 0 400 200">
                  {/* Left person silhouette */}
                  <ellipse cx="80" cy="100" rx="45" ry="60" fill="#8CA3B0" opacity="0.15" />
                  <circle cx="80" cy="60" r="25" fill="#8CA3B0" opacity="0.2" />
                  
                  {/* Right person silhouette */}
                  <ellipse cx="320" cy="100" rx="45" ry="60" fill="#E7A59C" opacity="0.15" />
                  <circle cx="320" cy="60" r="25" fill="#E7A59C" opacity="0.2" />
                  
                  {/* Connection paths */}
                  <path d="M 120 80 Q 200 40 280 80" stroke="#8CA3B0" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="8 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M 120 100 Q 200 100 280 100" stroke="#2C3E50" strokeWidth="3" fill="none" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M 120 120 Q 200 160 280 120" stroke="#E7A59C" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="8 4">
                    <animate attributeName="stroke-dashoffset" from="24" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Central AI node */}
                  <circle cx="200" cy="100" r="30" fill="url(#centerGradient)" opacity="0.9">
                    <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="100" r="20" fill="white" />
                  
                  {/* Pulse rings */}
                  <circle cx="200" cy="100" r="40" stroke="#8CA3B0" strokeWidth="1" fill="none" opacity="0.3">
                    <animate attributeName="r" values="35;55;35" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Small nodes */}
                  <circle cx="150" cy="70" r="6" fill="#8CA3B0" opacity="0.5" />
                  <circle cx="250" cy="70" r="6" fill="#E7A59C" opacity="0.5" />
                  <circle cx="150" cy="130" r="6" fill="#E7A59C" opacity="0.5" />
                  <circle cx="250" cy="130" r="6" fill="#8CA3B0" opacity="0.5" />
                  
                  <defs>
                    <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8CA3B0" />
                      <stop offset="100%" stopColor="#E7A59C" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Labels */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-[#717182]">
                    <span className="w-3 h-3 bg-[#8CA3B0] rounded-full" />
                    Person A
                  </span>
                  <span className="flex items-center gap-2 text-[#717182]">
                    <span className="w-3 h-3 bg-gradient-to-r from-[#8CA3B0] to-[#E7A59C] rounded-full" />
                    AI Twin
                  </span>
                  <span className="flex items-center gap-2 text-[#717182]">
                    <span className="w-3 h-3 bg-[#E7A59C] rounded-full" />
                    Person B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8CA3B0]">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#8CA3B0]/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#8CA3B0]/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROBLEM / SOLUTION SECTION
// ============================================
function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#DCE7F3]/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[#E7A59C] font-medium text-sm tracking-wider uppercase mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C3E50] leading-tight mb-6">
            Connected — yet deeply misunderstood.
          </h2>
          <p className="text-xl text-[#717182] leading-relaxed">
            Every day, subtle miscommunication erodes emotional safety, creativity, and trust. Traditional tools address fragments — not the whole human experience.
          </p>
        </div>

        {/* Before/After comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Before */}
          <div className="group">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="text-xs text-red-400 font-medium tracking-wider uppercase">Without AI</span>
                  <h3 className="text-[#2C3E50] font-serif text-xl">Miscommunication</h3>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "You never listen to me",
                  "That's not what I meant!",
                  "Why are you being so defensive?"
                ].map((text, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-red-100 text-red-600 text-sm shadow-sm">
                    &ldquo;{text}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After */}
          <div className="group">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <span className="text-xs text-emerald-500 font-medium tracking-wider uppercase">With NeuralConnexions</span>
                  <h3 className="text-[#2C3E50] font-serif text-xl">True Understanding</h3>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "I feel heard when you...",
                  "Help me understand your perspective",
                  "What I appreciate about you is..."
                ].map((text, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-emerald-100 text-emerald-700 text-sm shadow-sm">
                    &ldquo;{text}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8CA3B0] to-[#E7A59C] text-white px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Powered by AI Micro-Interventions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS
// ============================================
function HowItWorks() {
  const steps = [
    {
      icon: Compass,
      phase: "Find",
      title: "Intentional Discovery",
      description: "Smart matchmaking & pre-conversation modeling for authentic, low-stress introductions.",
      color: "#8CA3B0",
    },
    {
      icon: Sprout,
      phase: "Nurture",
      title: "Proactive Growth",
      description: "Real-time communication nudges that build emotional awareness and deeper connection.",
      color: "#E7A59C",
    },
    {
      icon: Heart,
      phase: "Sustain",
      title: "Lasting Harmony",
      description: "Predictive simulations & shared goal tracking for long-term relational health.",
      color: "#8CA3B0",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F6F7] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #8CA3B0 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#8CA3B0] font-medium text-sm tracking-wider uppercase mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-6">
            The Relationship Lifecycle
          </h2>
          <p className="text-xl text-[#717182]">
            A complete framework for every stage of human connection
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#8CA3B0]/30 to-[#E7A59C]/30" />
              )}
              
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative">
                {/* Phase badge */}
                <div 
                  className="absolute -top-4 left-8 px-4 py-1.5 rounded-full text-white text-sm font-medium shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.phase}
                </div>
                
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: step.color + "15" }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>
                
                <h3 className="font-serif text-2xl text-[#2C3E50] mb-4">{step.title}</h3>
                <p className="text-[#717182] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
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
      description: "Real-time, contextual phrasing support when you need it most.",
    },
    {
      icon: Brain,
      title: "Behavioral Insights",
      description: "Deep analysis of tone, empathy patterns, and communication rhythm.",
    },
    {
      icon: Users,
      title: "Relationship Dashboard",
      description: "A shared space for couples or teams to track growth together.",
    },
  ];

  return (
    <section id="science" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-[#E7A59C] font-medium text-sm tracking-wider uppercase mb-4 block">Core Technology</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-6 leading-tight">
              Your AI Digital Twin
            </h2>
            <p className="text-xl text-[#717182] mb-10 leading-relaxed">
              A continuously evolving relationship model that mirrors your communication style, predicts emotional friction, and guides you through real-time interventions.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-14 h-14 bg-[#DCE7F3] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#8CA3B0] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#8CA3B0] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#2C3E50] mb-1">{feature.title}</h4>
                    <p className="text-[#717182] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#DCE7F3] animate-spin" style={{ animationDuration: "60s" }} />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-[#8CA3B0]/20" />
              
              {/* Inner glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#8CA3B0]/20 to-[#E7A59C]/20 animate-pulse" />
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <Brain className="w-16 h-16 text-[#8CA3B0]" />
                </div>
              </div>
              
              {/* Orbiting nodes */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#8CA3B0] rounded-full shadow-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E7A59C] rounded-full shadow-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s" }}>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-[#2C3E50] rounded-full shadow-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
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
// SCIENCE SECTION
// ============================================
function Science() {
  const pillars = [
    {
      icon: Dna,
      title: "Neuro-Linguistic Profiling",
      description: "Analyzes communication tone, syntax, and emotional undertones in real-time.",
    },
    {
      icon: RefreshCw,
      title: "Behavioral Reinforcement",
      description: "Learns from outcomes to predict and prevent relational friction.",
    },
    {
      icon: Activity,
      title: "Cognitive Augmentation",
      description: "Integrates biometric data to build lasting emotional resilience.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#2C3E50] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8CA3B0]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E7A59C]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E7A59C] font-medium text-sm tracking-wider uppercase mb-4 block">The Science</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Where Neuroscience Meets AI
          </h2>
          <p className="text-xl text-white/70">
            Three research pillars powering the future of human connection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#8CA3B0] to-[#E7A59C] rounded-2xl flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl mb-4">{pillar.title}</h3>
              <p className="text-white/60 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
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
      role: "CEO & Visionary",
      focus: "Behavioral Design & Ethics",
      initials: "SN",
      color: "#8CA3B0",
    },
    {
      name: "Dr. Sohan Seth",
      role: "Chief AI Scientist",
      focus: "NLP & Predictive Modeling",
      initials: "SS",
      color: "#E7A59C",
    },
    {
      name: "Snehal Nair",
      role: "Lead Data Scientist",
      focus: "Cloud Systems & Scale",
      initials: "SN",
      color: "#2C3E50",
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-to-b from-[#F5F6F7] to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8CA3B0] font-medium text-sm tracking-wider uppercase mb-4 block">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-6">
            The Minds Behind It
          </h2>
          <p className="text-xl text-[#717182]">
            A multidisciplinary team united by empathy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white text-3xl font-serif shadow-xl group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <div 
                  className="absolute -inset-2 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: member.color }}
                />
              </div>
              <h3 className="font-serif text-xl text-[#2C3E50] mb-1">{member.name}</h3>
              <p className="text-[#8CA3B0] font-medium text-sm mb-2">{member.role}</p>
              <p className="text-[#717182] text-sm">{member.focus}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
            <p className="text-xl md:text-2xl text-[#2C3E50] font-serif italic leading-relaxed mb-6">
              &ldquo;The most powerful technology doesn&apos;t replace human connection — it amplifies it.&rdquo;
            </p>
            <span className="text-[#8CA3B0] font-medium">— Our Mission</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#8CA3B0] via-[#9ab0bc] to-[#E7A59C] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Ready to Transform How You Connect?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands building deeper, more meaningful relationships with AI-powered guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#8CA3B0] hover:bg-gray-50 px-10 py-5 rounded-full shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 inline-flex items-center gap-3 font-semibold text-lg hover:-translate-y-1">
              Join the Beta
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20 px-10 py-5 rounded-full transition-all duration-300 inline-flex items-center gap-3 font-medium text-lg hover:-translate-y-1">
              <Download className="w-5 h-5" />
              Get Whitepaper
            </button>
          </div>

          <p className="mt-10 text-white/60 text-sm">
            Free beta access • No credit card required • Cancel anytime
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
    <footer className="bg-[#1a2836] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#8CA3B0]" />
              <span className="font-serif text-xl">NeuralConnexions</span>
            </div>
            <p className="text-white/50 mb-4 max-w-sm">
              The world&apos;s first cognitive companion. Building emotional intelligence infrastructure for humanity.
            </p>
            <p className="text-[#8CA3B0] font-serif italic">Find • Nurture • Sustain</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4 text-white/80">Platform</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beta Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white/80">Company</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 NeuralConnexions. Built in the UK.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter className="w-4 h-4 text-white/60" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="w-4 h-4 text-white/60" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4 text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Solution />
      <HowItWorks />
      <DigitalTwin />
      <Science />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
