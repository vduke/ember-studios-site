"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-ember-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ember-accent to-ember-cyan flex items-center justify-center text-black font-black text-sm">
            E
          </div>
          <span className="font-semibold text-ember-text group-hover:text-ember-accent transition-colors">
            Ember Studios
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ember-muted hover:text-ember-text transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-lg bg-ember-accent text-black font-medium hover:bg-ember-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-ember-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-ember-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-ember-muted hover:text-ember-text transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-sm px-4 py-2 rounded-lg bg-ember-accent text-black font-medium text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
