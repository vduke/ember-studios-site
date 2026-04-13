import { AnimatedSection } from "@/components/AnimatedSection";
import { Users, Target, Lightbulb, Award, ArrowRight, MapPin, Calendar, Layers, Code2, Smartphone, Brain } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ember Studios",
  description:
    "Founded in 2020 in Plainfield, Indiana. We build digital products that solve real problems — with the craft and care of a team that genuinely gives a damn.",
  openGraph: {
    title: "About — Ember Studios",
    description: "Meet the team behind Ember Studios. Craft, precision, and zero BS.",
  },
};

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every line of code serves a purpose. We don't pad invoices, over-engineer, or ship bloat. Lean, focused, effective.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay on the bleeding edge so our clients don't have to worry about falling behind. AI, agents, modern stacks — we're already there.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We're not vendors — we're an extension of your team. We celebrate your wins, stress about your blockers, and show up every day.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Ship it right or don't ship it. Every feature is tested, reviewed, and battle-hardened before it sees production.",
  },
];

const techStack = [
  { icon: Code2, name: "Laravel", category: "Backend" },
  { icon: Code2, name: "React", category: "Frontend" },
  { icon: Code2, name: "Next.js", category: "Frontend" },
  { icon: Code2, name: "Livewire", category: "Full-Stack" },
  { icon: Smartphone, name: "Flutter", category: "Mobile" },
  { icon: Smartphone, name: "React Native", category: "Mobile" },
  { icon: Brain, name: "OpenAI / LLMs", category: "AI" },
  { icon: Brain, name: "Computer Vision", category: "AI" },
  { icon: Layers, name: "Tailwind CSS", category: "Styling" },
  { icon: Layers, name: "PostgreSQL", category: "Database" },
  { icon: Layers, name: "Docker", category: "DevOps" },
  { icon: Layers, name: "Tailscale", category: "Infrastructure" },
];

const stats = [
  { num: "5+", label: "Years Building" },
  { num: "50+", label: "Projects Shipped" },
  { num: "99%", label: "Uptime SLA" },
  { num: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <AnimatedSection className="text-center mb-24">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-6 tracking-tight">
            We&apos;re <span className="gradient-text">Ember Studios.</span>
          </h1>
          <p className="text-lg md:text-xl text-ember-muted max-w-2xl mx-auto leading-relaxed">
            Founded in 2020 in Plainfield, Indiana. We build digital products that solve real problems
            for real businesses — with the craft and care of a team that genuinely gives a damn.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-8 rounded-2xl border border-ember-border bg-ember-surface"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{s.num}</div>
                <div className="text-sm text-ember-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection className="mb-32 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl border border-ember-border bg-ember-surface overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ember-accent/5 rounded-full blur-[100px]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={18} className="text-ember-accent" />
                <span className="text-sm text-ember-accent font-medium">Plainfield, Indiana</span>
                <span className="text-ember-dim">•</span>
                <Calendar size={18} className="text-ember-accent" />
                <span className="text-sm text-ember-accent font-medium">Est. 2020</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-ember-muted leading-relaxed">
                <p>
                  Ember Studios started the way most good things do — with a frustration. We were tired of
                  watching businesses get sold bloated, over-engineered solutions by agencies that cared more
                  about billable hours than outcomes.
                </p>
                <p>
                  So we built something different. A studio that ships lean, focused products. Where every
                  feature earns its place, every line of code has a reason, and every client relationship is
                  built on trust and results — not retainers.
                </p>
                <p>
                  Today we work with companies across logistics, finance, healthcare, and tech — building
                  everything from permit management systems to AI-powered dashboards. Same philosophy, bigger scale.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Built on <span className="gradient-text">principles.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-ember-border bg-ember-surface hover:border-ember-accent/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-ember-accent/10 flex items-center justify-center mb-6 group-hover:bg-ember-accent/20 transition-colors">
                  <v.icon size={24} className="text-ember-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                <p className="text-sm text-ember-muted leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech Stack */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">
            Our Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Tools we <span className="gradient-text">trust.</span>
          </h2>
          <p className="text-ember-muted max-w-xl mx-auto mt-4">
            We pick the right tool for the job — not the trendiest one. Here&apos;s what we reach for daily.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="group flex items-center gap-4 p-4 rounded-xl border border-ember-border bg-ember-surface hover:border-ember-accent/20 transition-all duration-300"
              >
                <t.icon size={20} className="text-ember-accent shrink-0" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-ember-dim">{t.category}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-ember-accent/10 blur-[80px] rounded-full" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to work together?
              </h2>
              <p className="text-ember-muted mb-8 max-w-lg mx-auto">
                We&apos;d love to hear about your project. Let&apos;s build something great.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-lg"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
