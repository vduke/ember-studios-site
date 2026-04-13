import { AnimatedSection } from "@/components/AnimatedSection";
import { Users, Target, Lightbulb, Award } from "lucide-react";

export const metadata = { title: "About — Ember Studios" };

const values = [
  { icon: Target, title: "Precision", desc: "Every line of code serves a purpose. We don't pad invoices or over-engineer." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay on the bleeding edge so our clients don't have to worry about falling behind." },
  { icon: Users, title: "Partnership", desc: "We're not vendors — we're an extension of your team. Your wins are our wins." },
  { icon: Award, title: "Quality", desc: "Ship it right or don't ship it. We test, review, and stand behind every release." },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            We&apos;re <span className="gradient-text">Ember Studios.</span>
          </h1>
          <p className="text-lg text-ember-muted max-w-2xl mx-auto">
            Founded in 2020 in Plainfield, Indiana. We build digital products that solve real problems 
            for real businesses — with the craft and care of a team that genuinely gives a damn.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-ember-border bg-ember-surface h-full">
                <v.icon size={24} className="text-ember-accent mb-4" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-ember-muted leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <div className="inline-flex items-baseline gap-8 text-center">
            {[
              { num: "5+", label: "Years" },
              { num: "50+", label: "Projects" },
              { num: "99%", label: "Uptime SLA" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold gradient-text">{s.num}</div>
                <div className="text-sm text-ember-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
