import Link from "next/link";
import { GitBranch, Globe, Link2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ember-border bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ember-accent to-ember-cyan flex items-center justify-center text-black font-black text-sm">
                E
              </div>
              <span className="font-semibold">Ember Studios</span>
            </div>
            <p className="text-ember-muted text-sm max-w-sm">
              Building cutting-edge digital solutions that transform businesses. Based in Plainfield, Indiana.
            </p>
            <div className="flex gap-4 mt-6">
              {[GitBranch, Globe, Link2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-ember-border flex items-center justify-center text-ember-dim hover:text-ember-accent hover:border-ember-accent/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Portfolio", "Contact"].map((l) => (
                <Link key={l} href={`/${l.toLowerCase()}`} className="text-sm text-ember-muted hover:text-ember-text transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {["Web Development", "Mobile Apps", "AI Solutions", "API Integration"].map((s) => (
                <span key={s} className="text-sm text-ember-muted">{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-ember-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ember-dim">&copy; {new Date().getFullYear()} Ember Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-ember-dim hover:text-ember-muted cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-ember-dim hover:text-ember-muted cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
