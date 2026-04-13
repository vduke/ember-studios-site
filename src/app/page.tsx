"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Code2, Smartphone, Brain, ArrowRight, Sparkles, Zap, Shield, Users,
  ChevronRight, Star, Globe, Cpu, Terminal, Layout, Rocket, CheckCircle2,
  Quote
} from "lucide-react";
import Link from "next/link";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ember-accent/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ember-cyan/8 rounded-full blur-[128px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-accent/20 bg-ember-accent/5 mb-8"
        >
          <Sparkles size={14} className="text-ember-accent" />
          <span className="text-xs text-ember-accent font-medium">Now Building the Future</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
        >
          Digital products
          <br />
          <span className="gradient-text">that ignite.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-ember-muted max-w-2xl mx-auto mb-10"
        >
          We architect and build web platforms, mobile apps, and AI-powered solutions
          that don&apos;t just work — they <em className="text-ember-text not-italic font-medium">wow</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-ember-border text-ember-text font-medium hover:border-ember-border-hover hover:bg-ember-surface transition-all"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-ember-border bg-ember-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ember-border">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-ember-dim font-mono">ember-studios</span>
            </div>
            <div className="p-6 font-mono text-sm text-left">
              <p className="text-ember-dim mb-2"># What we build</p>
              <p>
                <span className="text-ember-accent">npx</span>{" "}
                <span className="text-ember-cyan">create-ember-app</span>{" "}
                <span className="text-ember-text">--stack full</span>
              </p>
              <p className="text-ember-muted mt-2">
                ✓ Laravel backend &nbsp; ✓ React/Flutter frontend &nbsp; ✓ AI integration
              </p>
              <p className="text-ember-accent mt-2">✓ Ready to deploy → <span className="animate-pulse">▊</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    icon: Code2,
    title: "Web Platforms",
    desc: "Scalable web applications built with Laravel, React, and Next.js. From SaaS to enterprise portals.",
    tags: ["Laravel", "React", "Next.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-quality cross-platform mobile apps with Flutter and React Native. iOS & Android, one codebase.",
    tags: ["Flutter", "React Native", "iOS/Android"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "Custom AI integrations — LLMs, agents, computer vision, and automation that give your business an edge.",
    tags: ["LLMs", "Agents", "Computer Vision"],
  },
];

function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            End-to-end <span className="gradient-text">digital craft.</span>
          </h2>
          <p className="text-ember-muted max-w-xl mx-auto">
            We don&apos;t just write code. We architect systems, design experiences, and ship products.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="group relative p-8 rounded-2xl border border-ember-border bg-ember-surface hover:border-ember-accent/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-ember-accent/10 flex items-center justify-center mb-6 group-hover:bg-ember-accent/20 transition-colors">
                  <s.icon size={24} className="text-ember-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-ember-muted mb-6 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-ember-elevated text-ember-dim border border-ember-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Showcase ─── */
const projects = [
  {
    title: "Tel-Trans Permit System",
    category: "Web Platform",
    desc: "Full permit management system with PDF generation, batch invoicing, and payment tracking for a logistics company.",
    tags: ["Laravel", "Livewire", "Tailwind"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Ember Intel Dashboard",
    category: "AI + Analytics",
    desc: "Real-time intelligence dashboard with AI-powered insights, data visualization, and automated reporting.",
    tags: ["React", "Python", "LLM"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "AI Agent Orchestration",
    category: "Infrastructure",
    desc: "Multi-agent system orchestrating specialized AI workers for development, QA, and project management tasks.",
    tags: ["OpenClaw", "Matrix", "Agents"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

function Showcase() {
  return (
    <section className="py-24 md:py-32 bg-ember-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            Built to <span className="gradient-text">impress.</span>
          </h2>
          <p className="text-ember-muted max-w-xl mx-auto">
            Real projects solving real problems. Here&apos;s a taste of what we ship.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-ember-border overflow-hidden hover:border-ember-accent/30 transition-all duration-300">
                {/* Project preview */}
                <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    {i === 0 ? <Layout size={28} className="text-emerald-400" /> : i === 1 ? <Globe size={28} className="text-cyan-400" /> : <Cpu size={28} className="text-violet-400" />}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-ember-accent font-medium">{p.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm text-ember-muted mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-ember-elevated text-ember-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-ember-accent hover:text-ember-accent-hover transition-colors font-medium">
            View All Projects <ChevronRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Process ─── */
const steps = [
  { icon: Terminal, title: "Discovery", desc: "We dig into your problem, map the landscape, and define the scope." },
  { icon: Code2, title: "Architect", desc: "Design the system, choose the stack, plan the sprints." },
  { icon: Rocket, title: "Build", desc: "Ship iteratively. Test continuously. Communicate daily." },
  { icon: Shield, title: "Deliver", desc: "Deploy, monitor, and iterate. We don't disappear after launch." },
];

function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Ship fast. <span className="gradient-text">Ship right.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="relative p-6 text-center">
                <div className="text-xs text-ember-dim font-mono mb-4">0{i + 1}</div>
                <div className="w-14 h-14 rounded-2xl bg-ember-accent/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-ember-accent" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-ember-muted leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: "Ember Studios didn't just deliver a product — they delivered a vision. The permit system they built handles everything we threw at it.",
    author: "Logistics Director",
    company: "Tel-Trans Inc.",
    stars: 5,
  },
  {
    quote: "Working with Ember felt like having a senior engineering team embedded in our company. Fast, smart, and no BS.",
    author: "CTO",
    company: "Tech Startup",
    stars: 5,
  },
  {
    quote: "The AI dashboard they built gives us insights we didn't even know we needed. Game-changer for our operations.",
    author: "Operations Manager",
    company: "Enterprise Client",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ember-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Trusted by <span className="gradient-text">builders.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-ember-border bg-black h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-ember-accent fill-ember-accent" />
                  ))}
                </div>
                <p className="text-ember-muted text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-ember-dim">{t.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ember-accent/10 via-transparent to-ember-cyan/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember-accent/5 rounded-full blur-[128px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to build something <span className="gradient-text">extraordinary?</span>
          </h2>
          <p className="text-ember-muted text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s talk about your project. No pitch decks required — just tell us the problem and we&apos;ll show you the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-lg"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
