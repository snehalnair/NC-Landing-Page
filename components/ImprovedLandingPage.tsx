import React from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  HeartHandshake,
  Lock,
  Sparkles,
  Stars,
  Users,
  Wand2,
} from "lucide-react";
import { Button, Card, Section } from "@/components/ui";

const ImprovedLandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-soft">
              <Brain className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold">NeuralConnexions</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#workflow" className="text-sm text-neutral-600 hover:text-primary-600">
              How it works
            </a>
            <a href="#trust" className="text-sm text-neutral-600 hover:text-primary-600">
              Trust
            </a>
            <a href="#pricing" className="text-sm text-neutral-600 hover:text-primary-600">
              Pricing
            </a>
          </div>
          <Button variant="primary" size="sm">
            Join Beta
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-primary-700 shadow-soft">
              <Stars className="h-4 w-4" />
              Beta now open • Limited spots
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 md:text-5xl">
              Calm, connected communication for modern relationships.
            </h1>
            <p className="text-lg text-neutral-600">
              NeuralConnexions blends emotional intelligence with AI guidance so you
              can feel understood, respond with clarity, and build lasting trust.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                See how it works
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-success-600" />
                GDPR-ready privacy
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent-600" />
                Built with attachment science
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-primary-600" />
                14-day free trial
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-100 via-white to-accent-100 blur-2xl" />
            <div className="relative grid gap-6">
              <Card variant="elevated" className="bg-white/80 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-neutral-500">Connection Index</p>
                    <p className="text-2xl font-semibold text-neutral-900">82%</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                    <Wand2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-neutral-100">
                  <div className="h-2 w-4/5 rounded-full bg-primary-600" />
                </div>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card variant="outline" className="bg-white/70">
                  <p className="text-sm font-medium text-neutral-700">Today’s insight</p>
                  <p className="mt-3 text-sm text-neutral-500">
                    You communicate best when you begin with reassurance.
                  </p>
                </Card>
                <Card variant="outline" className="bg-white/70">
                  <p className="text-sm font-medium text-neutral-700">Next step</p>
                  <p className="mt-3 text-sm text-neutral-500">
                    Try a 2-minute grounding prompt before the next check-in.
                  </p>
                </Card>
              </div>

              <Card variant="gradient">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs uppercase text-rose-100">Weekly progress</p>
                    <p className="text-2xl font-semibold">+26% clarity</p>
                  </div>
                  <Users className="h-8 w-8" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Soft tech highlights */}
      <Section background="white" padding="md">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Conversation blueprints",
              description: "Personalized prompts that diffuse tension before it spikes.",
            },
            {
              title: "Emotion-aware coaching",
              description: "Real-time suggestions tuned to tone, intent, and context.",
            },
            {
              title: "Shared progress space",
              description: "Track wins together and reinforce what works.",
            },
          ].map((item) => (
            <Card key={item.title} variant="outline" hover className="bg-white/80">
              <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section background="gray" padding="lg" id="workflow">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-900 md:text-4xl">
            A soft-tech flow that feels human
          </h2>
        </div>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-3">
          <div className="absolute left-1/2 top-10 hidden h-0.5 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-200 to-transparent lg:block" />
          {[
            {
              icon: Sparkles,
              title: "Sense",
              description: "Capture signals from conversations and shared reflections.",
            },
            {
              icon: HeartHandshake,
              title: "Translate",
              description: "Surface the emotional subtext and reframed language.",
            },
            {
              icon: Stars,
              title: "Synchronize",
              description: "Turn insights into rituals that keep you aligned.",
            },
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} variant="elevated" className="relative">
                <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-medium">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="pt-6">
                  <p className="text-xs uppercase text-neutral-400">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Social proof */}
      <Section background="gradient" padding="lg">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500">Outcomes</p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-900 md:text-4xl">
            Real couples, calmer conversations
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "We finally have a shared language. It’s like the tension drops before it starts.",
              author: "Sarah & Michael",
            },
            {
              quote:
                "The prompts feel gentle and personal. It keeps us aligned week to week.",
              author: "James & Alex",
            },
            {
              quote:
                "We’re more intentional now. The progress tracker makes wins visible.",
              author: "Priya & David",
            },
          ].map((item) => (
            <Card key={item.author} variant="outline" className="bg-white/80">
              <p className="text-sm text-neutral-600">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-neutral-900">{item.author}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trust */}
      <Section background="white" padding="lg" id="trust">
        <Card variant="elevated" className="bg-white/90">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Privacy & trust
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
                Your data stays yours.
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                Built for intimacy, not advertising. Encryption and consent are
                defaults, not features.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "End-to-end encryption",
                "No model training on private data",
                "Export or delete anytime",
                "GDPR-ready compliance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-success-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* Pricing */}
      <Section background="gray" padding="lg" id="pricing">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-900 md:text-4xl">
            Simple plans for real growth
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card variant="outline" className="bg-white/90">
            <p className="text-sm uppercase text-neutral-400">Individual</p>
            <h3 className="mt-3 text-3xl font-semibold">Free</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Personal insights and daily emotional clarity.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              {[
                "Personal communication insights",
                "Weekly pattern summaries",
                "Guided reflection prompts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="outline" size="md" fullWidth>
                Start Free
              </Button>
            </div>
          </Card>
          <Card variant="gradient" className="text-white">
            <p className="text-sm uppercase text-rose-100">Couples</p>
            <h3 className="mt-3 text-3xl font-semibold">£15 / month</h3>
            <p className="mt-3 text-sm text-rose-100">
              Shared progress, real-time coaching, and rituals that stick.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-rose-100">
              {[
                "Everything in Individual",
                "Shared relationship dashboard",
                "Real-time coaching prompts",
                "Couple rituals and check-ins",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="outline" size="md" fullWidth>
                Start free trial
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="brand" padding="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Build a relationship that feels safe.
          </h2>
          <p className="mt-4 text-rose-100">
            Let NeuralConnexions guide the hard conversations with care.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="outline" size="lg">
              Start free trial
            </Button>
            <Button variant="ghost" size="lg">
              Talk to our team
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 md:flex-row">
          <span>© 2025 NeuralConnexions. Built in the UK.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-600">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-600">
              Terms
            </a>
            <a href="#" className="hover:text-primary-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImprovedLandingPage;
