"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-xs text-ember-accent font-medium uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Let&apos;s <span className="gradient-text">talk.</span>
          </h1>
          <p className="text-lg text-ember-muted max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-2">
            <AnimatedSection>
              {submitted ? (
                <div className="p-12 rounded-2xl border border-ember-accent/30 bg-ember-accent/5 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-ember-muted">We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-ember-muted mb-2 block">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-ember-surface border border-ember-border text-ember-text focus:border-ember-accent/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-ember-muted mb-2 block">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-ember-surface border border-ember-border text-ember-text focus:border-ember-accent/50 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-ember-muted mb-2 block">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-ember-surface border border-ember-border text-ember-text focus:border-ember-accent/50 focus:outline-none transition-colors">
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>AI / Machine Learning</option>
                      <option>API Integration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-ember-muted mb-2 block">Tell us about your project</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-ember-surface border border-ember-border text-ember-text focus:border-ember-accent/50 focus:outline-none transition-colors resize-none"
                      placeholder="What are you building? What problem are you solving?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-ember-accent text-black font-semibold hover:bg-ember-accent-hover transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl border border-ember-border bg-ember-surface">
                <Mail size={20} className="text-ember-accent mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-ember-muted">hello@ember-studios.com</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-2xl border border-ember-border bg-ember-surface">
                <MapPin size={20} className="text-ember-accent mb-3" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-ember-muted">Plainfield, Indiana</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="p-6 rounded-2xl border border-ember-accent/20 bg-ember-accent/5">
                <h3 className="font-semibold mb-2 text-ember-accent">Quick Response</h3>
                <p className="text-sm text-ember-muted">We reply to every inquiry within 24 hours. Usually much faster.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
