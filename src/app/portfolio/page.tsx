import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Portfolio — Ember Studios" };

const projects = [
  { title: "Tel-Trans Permit System", cat: "Web Platform", desc: "Full permit management with PDF generation, batch invoicing, and payment tracking. Built with Laravel + Livewire.", stack: ["Laravel", "Livewire", "Tailwind", "MySQL"], gradient: "from-emerald-500/20 to-teal-500/20" },
  { title: "Ember Intel Dashboard", cat: "AI + Analytics", desc: "Real-time intelligence dashboard with AI-powered insights, data visualization, and automated reporting.", stack: ["React", "Python", "LLM", "PostgreSQL"], gradient: "from-cyan-500/20 to-blue-500/20" },
  { title: "Multi-Agent Orchestration", cat: "Infrastructure", desc: "AI agent system managing development, QA, and project management workflows autonomously.", stack: ["OpenClaw", "Matrix", "TypeScript"], gradient: "from-violet-500/20 to-purple-500/20" },
  { title: "E-Commerce Platform", cat: "Web Platform", desc: "High-performance online store with real-time inventory, payment processing, and admin dashboard.", stack: ["Laravel", "Vue", "Stripe", "Redis"], gradient: "from-amber-500/20 to-orange-500/20" },
  { title: "Healthcare Portal", cat: "Mobile App", desc: "Patient management app with appointment scheduling, telehealth integration, and secure messaging.", stack: ["Flutter", "Firebase", "HIPAA"], gradient: "from-rose-500/20 to-pink-500/20" },
  { title: "Real-Time Analytics", cat: "Data Engineering", desc: "Streaming data pipeline with real-time dashboards, anomaly detection, and alerting.", stack: ["Kafka", "Python", "React", "TimescaleDB"], gradient: "from-sky-500/20 to-indigo-500/20" },
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">work.</span>
          </h1>
          <p className="text-lg text-ember-muted max-w-2xl mx-auto">
            Real projects, real results. Here&apos;s a selection of what we&apos;ve built.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-ember-border overflow-hidden hover:border-ember-accent/30 transition-all h-full flex flex-col">
                <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <div className="w-16 h-16 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <ExternalLink size={24} className="text-white/60" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-ember-accent font-medium">{p.cat}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm text-ember-muted leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-ember-elevated text-ember-dim">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <p className="text-ember-muted mb-6">Have a project in mind?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all">
            Let&apos;s Talk <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
