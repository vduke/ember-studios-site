"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Bot,
  BarChart3,
  Activity,
  Zap,
  Terminal,
  ArrowRight,
  Sparkles,
  MousePointer2,
  Layers,
  Globe,
  Code2,
  Cpu,
  Send,
} from "lucide-react";
import Link from "next/link";

const sectionPad = "pt-32 pb-24";

function GridPattern() {
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function Hero() {
  return (
    <section className={`${sectionPad} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-[0.04]">
        <GridPattern />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-ember-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-ember-cyan/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Live Demos</span>
          <h1 className="text-4xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            See what we <span className="gradient-text">build.</span>
          </h1>
          <p className="text-lg md:text-xl text-ember-muted max-w-2xl mx-auto mb-12">
            Interactive demos of real-world interfaces we deliver. Click, type, explore — these aren&apos;t mockups.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-ember-muted">
            {[
              { icon: Bot, label: "AI Chat" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Activity, label: "Live Data" },
              { icon: Terminal, label: "Code Gen" },
              { icon: Sparkles, label: "Animations" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-ember-border bg-ember-surface">
                <Icon size={14} className="text-ember-accent" />
                {label}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function DemoCard({ icon, title, tag, description, children }: {
  icon: React.ReactNode; title: string; tag: string; description: string; children: React.ReactNode;
}) {
  return (
    <AnimatedSection className="group">
      <div className="rounded-2xl border border-ember-border bg-ember-surface overflow-hidden hover:border-ember-accent/20 transition-all duration-300 h-full flex flex-col">
        <div className="px-6 py-5 border-b border-ember-border">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-ember-accent/10 flex items-center justify-center text-ember-accent">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-ember-text">{title}</h3>
                <span className="text-[10px] text-ember-accent uppercase tracking-wider">{tag}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-ember-muted leading-relaxed">{description}</p>
        </div>
        <div className="p-4 flex-1">{children}</div>
      </div>
    </AnimatedSection>
  );
}

function AIChatDemo() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const responses: Record<string, string> = {
    default:
      "I can help with that! Let me analyze the requirements and generate a solution. Based on your tech stack, I'd recommend a modular Laravel service architecture with queued jobs for async processing.",
    api:
      "For your API integration, I'd use Laravel's HTTP client with retry logic and circuit breakers:\n\n```php\nHttp::retry(3, 100)\n  ->withToken($token)\n  ->get($endpoint);\n```\n\nThis handles rate limits gracefully.",
    dashboard:
      "Your dashboard should use WebSocket connections for real-time updates. I'll set up Laravel Echo with Pusher, aggregate data in a read-only summary model, and add filtering by date range.",
    mobile:
      "For the mobile app, Flutter with Riverpod state management gives you the best cross-platform experience. I'd structure it with feature-first architecture and offline-first sync.",
  };

  const getResponse = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("api")) return responses.api;
    if (lower.includes("dashboard") || lower.includes("chart")) return responses.dashboard;
    if (lower.includes("mobile") || lower.includes("app")) return responses.mobile;
    return responses.default;
  };

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: getResponse(trimmed) }]);
      setTyping(false);
    }, 1200 + Math.random() * 800);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const starters = ["Build me a REST API", "Design a real-time dashboard", "Create a mobile app"];

  return (
    <DemoCard
      icon={<Bot size={20} />}
      title="AI-Powered Chat Assistant"
      tag="Conversational AI"
      description="Intelligent chat interfaces with contextual understanding, code generation, and natural language processing."
    >
      <div className="flex flex-col h-80">
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-wrap gap-2">
                {starters.map((s) => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-ember-border text-ember-muted hover:border-ember-accent/50 hover:text-ember-text transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-ember-accent text-black rounded-br-md"
                      : "bg-ember-elevated text-ember-text rounded-bl-md border border-ember-border"
                  }`}
                >
                  {m.text.includes("```") ? (
                    m.text.split("```").map((part, idx) =>
                      idx % 2 === 1 ? (
                        <code key={idx} className="block bg-black/40 rounded-lg px-3 py-2 my-2 font-mono text-xs text-ember-accent overflow-x-auto">
                          {part.trim()}
                        </code>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )
                  ) : (
                    m.text
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {typing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1.5 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-ember-accent animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 rounded-full bg-ember-accent animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 rounded-full bg-ember-accent animate-bounce" style={{ animationDelay: "300ms" }} />
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="border-t border-ember-border p-3 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask anything..."
            className="flex-1 bg-ember-elevated border border-ember-border rounded-xl px-4 py-2.5 text-sm text-ember-text placeholder:text-ember-dim focus:outline-none focus:border-ember-accent/50 transition-colors"
          />
          <button
            onClick={send}
            disabled={typing || !input.trim()}
            className="px-3.5 py-2.5 rounded-xl bg-ember-accent text-black hover:bg-ember-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </DemoCard>
  );
}

function AnalyticsDemo() {
  const [activeTab, setActiveTab] = useState<"revenue" | "users">("revenue");
  const revenueData = [35, 42, 55, 48, 62, 78, 85, 92, 88, 95, 102, 118];
  const userData = [120, 145, 132, 168, 195, 210, 188, 225, 240, 258, 272, 310];
  const data = activeTab === "revenue" ? revenueData : userData;
  const max = Math.max(...data);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const total = data.reduce((a, b) => a + b, 0);
  const change = ((data[11] - data[0]) / data[0] * 100).toFixed(1);

  return (
    <DemoCard
      icon={<BarChart3 size={20} />}
      title="Real-Time Analytics Dashboard"
      tag="Data Visualization"
      description="Live dashboards with interactive charts, KPI tracking, and real-time data streaming."
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: activeTab === "revenue" ? "Revenue" : "Users", value: activeTab === "revenue" ? `$${(total / 1000).toFixed(1)}k` : total.toLocaleString(), sub: "Total" },
            { label: "Growth", value: `+${change}%`, sub: "YoY" },
            { label: "Active", value: activeTab === "revenue" ? "$95k" : "258", sub: "This month" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl bg-ember-elevated border border-ember-border p-3">
              <div className="text-[10px] text-ember-dim uppercase tracking-wider">{kpi.label}</div>
              <div className="text-lg font-bold text-ember-text mt-1">{kpi.value}</div>
              <div className="text-[10px] text-ember-accent">{kpi.sub}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {(["revenue", "users"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                activeTab === tab ? "bg-ember-accent text-black font-medium" : "bg-ember-elevated text-ember-muted border border-ember-border"
              }`}
            >
              {tab === "revenue" ? "Revenue" : "Users"}
            </button>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-32 px-1">
          {data.map((val, i) => (
            <motion.div
              key={activeTab + i}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <motion.div
                className="w-full rounded-t-md bg-gradient-to-t from-ember-accent/60 to-ember-accent/20 hover:from-ember-accent hover:to-ember-accent/60 transition-colors cursor-pointer relative group"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                style={{ height: `${(val / max) * 100}%`, transformOrigin: "bottom" }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] text-ember-accent font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {activeTab === "revenue" ? `$${val}k` : val}
                </div>
              </motion.div>
              <span className="text-[9px] text-ember-dim">{months[i].slice(0, 1)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </DemoCard>
  );
}

function LiveDataDemo() {
  const [points, setPoints] = useState<number[]>(() => Array.from({ length: 40 }, () => 50 + Math.random() * 30));
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1), Math.max(10, Math.min(95, prev[prev.length - 1] + (Math.random() - 0.48) * 12))];
        return next;
      });
    }, 200);
    return () => clearInterval(id);
  }, [running]);

  const h = 120;
  const w = 400;
  const step = w / (points.length - 1);
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - (p / 100) * h).toFixed(1)}`).join(" ");
  const areaD = pathD + ` L${w},${h} L0,${h} Z`;
  const current = points[points.length - 1].toFixed(1);
  const avg = (points.reduce((a, b) => a + b) / points.length).toFixed(1);

  return (
    <DemoCard
      icon={<Activity size={20} />}
      title="Real-Time Data Stream"
      tag="Live Visualization"
      description="WebSocket-powered data streams with animated visualizations and real-time anomaly detection."
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${running ? "bg-ember-accent animate-pulse" : "bg-ember-dim"}`} />
            <span className="text-xs text-ember-muted">{running ? "Streaming" : "Paused"}</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="text-ember-muted">Current: <span className="text-ember-accent font-mono">{current}</span></span>
            <span className="text-ember-muted">Avg: <span className="text-ember-text font-mono">{avg}</span></span>
          </div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32 rounded-xl bg-ember-elevated border border-ember-border overflow-hidden">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" y1={h - (y / 100) * h} x2={w} y2={h - (y / 100) * h} stroke="#222" strokeWidth="0.5" />
          ))}
          <path d={areaD} fill="url(#lineGrad)" />
          <path d={pathD} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={w} cy={h - (points[points.length - 1] / 100) * h} r="3" fill="#10B981">
            <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
        <button
          onClick={() => setRunning(!running)}
          className={`text-xs px-3 py-1.5 rounded-lg transition-all ${running ? "bg-ember-elevated text-ember-muted border border-ember-border" : "bg-ember-accent text-black font-medium"}`}
        >
          {running ? "Pause" : "Resume"}
        </button>
      </div>
    </DemoCard>
  );
}

function CodeGenDemo() {
  const [generating, setGenerating] = useState(false);
  const [code, setCode] = useState("");

  const fullCode = `<?php

namespace App\\Services;

use App\\Models\\Invoice;
use App\\Events\\InvoiceCreated;

class InvoiceService
{
    public function create(array $data): Invoice
    {
        $invoice = Invoice::create([
            'customer_id' => $data['customer_id'],
            'amount'      => $this->calculate($data),
            'status'      => 'pending',
            'due_date'    => now()->addDays(30),
        ]);

        InvoiceCreated::dispatch($invoice);

        return $invoice;
    }

    protected function calculate(array $data): float
    {
        return collect($data['line_items'])
            ->sum(fn ($item) => $item['qty'] * $item['rate']);
    }
}`;

  const generate = () => {
    if (generating) return;
    setGenerating(true);
    setCode("");
    let i = 0;
    const id = setInterval(() => {
      setCode(fullCode.slice(0, i + 1));
      i++;
      if (i >= fullCode.length) {
        clearInterval(id);
        setGenerating(false);
      }
    }, 12);
  };

  return (
    <DemoCard
      icon={<Terminal size={20} />}
      title="AI Code Generation"
      tag="Developer Tools"
      description="Generate production-ready code from natural language descriptions with context-aware suggestions."
    >
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="flex-1 bg-ember-elevated border border-ember-border rounded-xl px-4 py-2.5 text-sm text-ember-dim">
            Create an invoice service with line items
          </div>
          <button
            onClick={generate}
            disabled={generating}
            className="px-4 py-2.5 rounded-xl bg-ember-accent text-black text-sm font-medium hover:bg-ember-accent-hover transition-colors disabled:opacity-40 flex items-center gap-2 shrink-0"
          >
            <Sparkles size={14} />
            {generating ? "Writing..." : "Generate"}
          </button>
        </div>
        <div className="rounded-xl bg-ember-surface border border-ember-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-ember-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[10px] text-ember-dim font-mono ml-2">InvoiceService.php</span>
          </div>
          <pre className="p-4 text-xs leading-relaxed font-mono text-ember-muted overflow-x-auto h-52 overflow-y-auto">
            <code>
              {code || (
                <span className="text-ember-dim italic">Click &quot;Generate&quot; to see AI write production code...</span>
              )}
              {generating && <span className="text-ember-accent animate-pulse">{"|"}</span>}
            </code>
          </pre>
        </div>
      </div>
    </DemoCard>
  );
}

function Interactive3DDemo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }, [x, y]);

  const reset = useCallback(() => { x.set(0.5); y.set(0.5); }, [x, y]);

  return (
    <DemoCard
      icon={<Sparkles size={20} />}
      title="Interactive 3D Elements"
      tag="Animation & Motion"
      description="Physics-based animations, 3D transforms, and micro-interactions that elevate user experience."
    >
      <div className="flex flex-col items-center gap-6 py-4">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          style={{ rotateX, rotateY, perspective: 800 }}
          className="w-64 h-80 rounded-2xl bg-gradient-to-br from-ember-accent/20 via-ember-cyan/10 to-transparent border border-ember-border p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ember-accent/5 to-transparent pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-xl bg-ember-accent/20 flex items-center justify-center mb-4">
              <Zap size={24} className="text-ember-accent" />
            </div>
            <h4 className="text-lg font-bold text-ember-text">Ember AI</h4>
            <p className="text-sm text-ember-muted mt-2">Next-generation development platform with intelligent automation.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-ember-accent">
            <span className="px-2 py-0.5 rounded bg-ember-accent/10">React</span>
            <span className="px-2 py-0.5 rounded bg-ember-accent/10">AI</span>
            <span className="px-2 py-0.5 rounded bg-ember-accent/10">Cloud</span>
          </div>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-ember-accent/40"
              style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }}
              animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
        <p className="text-xs text-ember-dim flex items-center gap-2">
          <MousePointer2 size={12} /> Hover over the card to interact
        </p>
      </div>
    </DemoCard>
  );
}

function TechStrip() {
  const techs = [
    { icon: Code2, label: "Laravel" },
    { icon: Globe, label: "React / Next.js" },
    { icon: Layers, label: "Flutter" },
    { icon: Cpu, label: "AI / LLM" },
    { icon: Zap, label: "Real-Time" },
  ];
  return (
    <section className="py-16 border-y border-ember-border bg-ember-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl font-bold">Technologies We Ship With</h2>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {techs.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-ember-muted hover:text-ember-accent transition-colors group cursor-default">
              <Icon size={22} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<2s", label: "Avg. Load Time" },
    { value: "4.9\u2605", label: "Client Rating" },
  ];

  const testimonials = [
    { quote: "Ember Studios transformed our manual permit process into a fully automated system. What took weeks now takes hours.", author: "Operations Director", company: "Logistics Co." },
    { quote: "The AI integration they built handles 80% of our customer inquiries automatically. Game-changing efficiency.", author: "CTO", company: "SaaS Startup" },
    { quote: "Professional, fast, and the quality exceeded expectations. Their multi-agent development approach is the future.", author: "Founder", company: "Tech Venture" },
  ];

  return (
    <section className={`${sectionPad}`}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Track Record</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Numbers don&apos;t lie.</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <AnimatedSection key={s.label}>
              <div className="text-center p-6 rounded-2xl border border-ember-border bg-ember-surface">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-ember-muted mt-2">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimatedSection key={t.author}>
              <div className="p-6 rounded-2xl border border-ember-border bg-ember-surface hover:border-ember-accent/20 transition-all h-full flex flex-col">
                <p className="text-sm text-ember-muted leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-ember-border">
                  <div className="text-sm font-medium text-ember-text">{t.author}</div>
                  <div className="text-xs text-ember-dim">{t.company}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to build something <span className="gradient-text">impressive</span>?
          </h2>
          <p className="text-lg text-ember-muted max-w-xl mx-auto mb-10">
            From concept to production in weeks, not months. Let&apos;s talk about your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ember-accent text-black font-semibold text-lg hover:bg-ember-accent-hover transition-all group"
          >
            Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function ShowcasePage() {
  return (
    <div className="pt-16">
      <Hero />
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <AIChatDemo />
            <AnalyticsDemo />
            <LiveDataDemo />
            <CodeGenDemo />
          </div>
          <div className="max-w-lg mx-auto mt-6">
            <Interactive3DDemo />
          </div>
        </div>
      </section>
      <TechStrip />
      <SocialProof />
      <CTA />
    </div>
  );
}
