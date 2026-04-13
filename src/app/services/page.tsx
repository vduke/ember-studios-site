import { AnimatedSection } from "@/components/AnimatedSection";
import { Code2, Smartphone, Brain, Zap, ArrowRight, Shield, BarChart3, Wrench, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Ember Studios",
  description:
    "Full-stack web development, mobile apps, AI solutions, and API integrations. End-to-end digital products built with Laravel, React, Flutter, and cutting-edge AI.",
  openGraph: {
    title: "Services — Ember Studios",
    description: "Web, mobile, AI, and integration services. Built to ship.",
  },
};

const services = [
  {
    icon: Code2,
    title: "Web Platforms",
    desc: "Full-stack web applications that scale. From SaaS platforms and dashboards to enterprise portals — we architect, build, and deploy the whole thing.",
    details: [
      "Custom Laravel backends with robust APIs",
      "React & Next.js frontends with server-side rendering",
      "Livewire for rapid, reactive interfaces",
      "Database design, migrations, and optimization",
      "Authentication, authorization, and role management",
    ],
    stack: ["Laravel", "React", "Next.js", "Livewire", "Tailwind CSS", "PostgreSQL"],
    gradient: "from-emerald-500/10 to-emerald-500/0",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps that feel truly native. iOS and Android from a single codebase — no compromises on performance or UX.",
    details: [
      "Flutter and React Native development",
      "Platform-native look and feel on both iOS & Android",
      "Offline-first architecture with smart sync",
      "Push notifications and deep linking",
      "App Store and Play Store submission handling",
    ],
    stack: ["Flutter", "React Native", "Dart", "Swift", "Kotlin"],
    gradient: "from-cyan-500/10 to-cyan-500/0",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "Custom AI solutions that give your business a real edge. From intelligent agents to computer vision — we integrate intelligence where it matters.",
    details: [
      "Custom LLM-powered chatbots and assistants",
      "Autonomous AI agents for workflow automation",
      "Computer vision and image recognition",
      "RAG pipelines with your company's data",
      "AI-powered analytics and anomaly detection",
    ],
    stack: ["OpenAI", "LangChain", "RAG", "Computer Vision", "Python", "Agents"],
    gradient: "from-violet-500/10 to-violet-500/0",
  },
  {
    icon: Zap,
    title: "API Integration",
    desc: "Connect your systems end-to-end. Payment gateways, CRMs, ERPs, third-party services — we make them all talk seamlessly.",
    details: [
      "RESTful and GraphQL API design",
      "Payment processing (Stripe, PayPal, Square)",
      "CRM/ERP integration (Salesforce, HubSpot, SAP)",
      "Webhook orchestration and event pipelines",
      "OAuth2 and secure authentication flows",
    ],
    stack: ["REST", "GraphQL", "Webhooks", "OAuth2", "gRPC"],
    gradient: "from-amber-500/10 to-amber-500/0",
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    desc: "Keep your platform safe and running. Security audits, CI/CD pipelines, infrastructure as code, and 24/7 monitoring.",
    details: [
      "Security audits and penetration testing",
      "CI/CD pipeline design and implementation",
      "Docker containerization and orchestration",
      "Infrastructure as code (Terraform, Ansible)",
      "Monitoring, alerting, and incident response",
    ],
    stack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS/GCP"],
    gradient: "from-red-500/10 to-red-500/0",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Turn data into decisions. Custom dashboards, real-time metrics, automated reports, and data visualization that tells the story.",
    details: [
      "Custom analytics dashboards",
      "Real-time data pipelines and ETL",
      "Automated PDF and email reporting",
      "Data warehouse design and optimization",
      "Business intelligence and KPI tracking",
    ],
    stack: ["Chart.js", "D3.js", "SQL", "Python", "Metabase"],
    gradient: "from-blue-500/10 to-blue-500/0",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We dig into your problem, map the landscape, and define what success looks like." },
  { step: "02", title: "Architecture", desc: "Design the system, choose the stack, plan the sprints. No surprises." },
  { step: "03", title: "Build & Iterate", desc: "Ship iteratively. Test continuously. Communicate daily. Demo weekly." },
  { step: "04", title: "Launch & Support", desc: "Deploy, monitor, and iterate. We stick around after launch." },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <AnimatedSection className="text-center mb-24">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-6 tracking-tight">
            Everything we <span className="gradient-text">build.</span>
          </h1>
          <p className="text-lg md:text-xl text-ember-muted max-w-2xl mx-auto leading-relaxed">
            End-to-end digital solutions. From architecture to deployment,
            we handle the full lifecycle — so you can focus on your business.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="space-y-8 mb-32">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <div
                className={`group relative p-8 md:p-10 rounded-2xl border border-ember-border bg-ember-surface hover:border-ember-accent/20 transition-all duration-300 overflow-hidden`}
              >
                {/* Subtle gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-ember-accent/10 flex items-center justify-center shrink-0 group-hover:bg-ember-accent/20 transition-colors">
                        <s.icon size={28} className="text-ember-accent" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{s.title}</h3>
                    </div>
                    <p className="text-ember-muted leading-relaxed mb-6 max-w-xl text-base">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg bg-ember-elevated text-ember-dim border border-ember-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-80 shrink-0">
                    <h4 className="text-xs uppercase tracking-widest text-ember-dim mb-4 font-medium">
                      What you get
                    </h4>
                    <ul className="space-y-3">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-ember-muted">
                          <CheckCircle2
                            size={16}
                            className="text-ember-accent shrink-0 mt-0.5"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Ship fast. <span className="gradient-text">Ship right.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {process.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.1}>
              <div className="relative p-8 rounded-2xl border border-ember-border bg-ember-surface text-center h-full">
                <div className="text-3xl font-black gradient-text mb-4 font-mono">
                  {p.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-ember-muted leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-ember-accent/10 blur-[80px] rounded-full" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build?
              </h2>
              <p className="text-ember-muted mb-8 max-w-lg mx-auto">
                Tell us your problem. We&apos;ll show you the solution. No pitch decks required.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-lg"
              >
                Start a Project <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
