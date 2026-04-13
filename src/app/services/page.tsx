import { AnimatedSection } from "@/components/AnimatedSection";
import { Code2, Smartphone, Brain, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Services — Ember Studios" };

const services = [
  { icon: Code2, title: "Web Development", desc: "Full-stack web applications with Laravel, React, Next.js, and Livewire. APIs, dashboards, platforms — we build the whole thing.", stack: ["Laravel", "React", "Next.js", "Livewire", "Tailwind"] },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform mobile apps that feel native. Flutter and React Native for iOS and Android from a single codebase.", stack: ["Flutter", "React Native", "iOS", "Android"] },
  { icon: Brain, title: "AI & Automation", desc: "Custom AI solutions — from chatbots and agents to computer vision and data pipelines. We integrate intelligence into your workflow.", stack: ["LLMs", "OpenAI", "Computer Vision", "RAG", "Agents"] },
  { icon: Zap, title: "API Integration", desc: "Connect your systems. Payment gateways, CRMs, ERPs, third-party APIs — we make them all talk to each other.", stack: ["REST", "GraphQL", "Webhooks", "OAuth"] },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            What we <span className="gradient-text">build.</span>
          </h1>
          <p className="text-lg text-ember-muted max-w-2xl mx-auto">
            End-to-end digital solutions. From architecture to deployment, we handle the full lifecycle.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="group p-8 md:p-10 rounded-2xl border border-ember-border bg-ember-surface hover:border-ember-accent/20 transition-all">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-ember-accent/10 flex items-center justify-center shrink-0">
                    <s.icon size={28} className="text-ember-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-ember-muted leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-lg bg-ember-elevated text-ember-dim border border-ember-border">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all text-lg">
            Start a Project <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
