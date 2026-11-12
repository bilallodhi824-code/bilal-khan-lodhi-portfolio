"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/portfolio";
import { Copy, Check, MessageCircle, Mail, Send, GitHub, LinkedIn, Facebook, Instagram, ArrowUpRight } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", projectType: "Full-Stack Web App" });

  const currentYear = new Date().getFullYear();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Project Inquiry (${formData.projectType}) from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Scope:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  const socialChannels = [
    {
      label: `WhatsApp (${profile.whatsappDisplay})`,
      href: profile.whatsappLink,
      Icon: MessageCircle,
      highlight: true,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      Icon: LinkedIn,
    },
    {
      label: "GitHub",
      href: profile.github,
      Icon: GitHub,
    },
    {
      label: "Facebook",
      href: profile.facebook,
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: profile.instagram,
      Icon: Instagram,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#0C0D12]">
      {/* Background Volumetric Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[min(40rem,100vw)] -translate-x-1/2"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-r from-burgundy/25 via-rose-900/15 to-royal/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy-light font-mono">
            Start a conversation
          </p>
          <h2 className="max-w-4xl text-[clamp(2.25rem,7vw,5rem)] font-black leading-[1.08] tracking-tight text-white">
            Let&apos;s build digital excellence together.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Have a project in mind, looking to hire a senior full-stack architect, or discuss an enterprise consultation? Reach out directly.
          </p>

          {/* Email Row with 1-Click Copy */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 max-w-full items-center gap-2 break-all text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-burgundy-light via-rose-200 to-royal-light underline decoration-burgundy/40 underline-offset-8 transition hover:decoration-burgundy-light sm:text-2xl lg:text-3xl"
            >
              <Mail className="hidden shrink-0 text-burgundy-light sm:block" size={22} aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 text-xs font-semibold text-zinc-200 transition hover:border-burgundy/60 hover:text-burgundy-light"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check size={15} aria-hidden="true" className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={15} aria-hidden="true" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Channels Pills */}
          <ul className="mt-8 flex flex-wrap gap-2.5 text-sm font-semibold">
            {socialChannels.map(({ label, href, Icon, highlight }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`glass group inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                    highlight
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]"
                      : "border-white/10 bg-white/[0.04] text-zinc-200 hover:border-burgundy hover:bg-burgundy/15 hover:text-white hover:shadow-[0_0_20px_rgba(155,27,48,0.35)]"
                  }`}
                >
                  <Icon
                    size={16}
                    className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? "text-emerald-400" : "text-zinc-400 group-hover:text-burgundy-light"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Project Inquiry Form */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-10 space-y-6 max-w-3xl"
          >
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Direct Project Inquiry</h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                Send your specifications directly to Bilal&apos;s primary inbox. We typically reply within 24 hours.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                  Your Name / Organization
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-type" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                Project Type
              </label>
              <select
                id="contact-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white transition focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
              >
                <option value="Full-Stack Web App">Full-Stack Web Application (React / Next.js / Angular)</option>
                <option value="Mobile App (Flutter)">Cross-Platform Mobile App (Flutter &amp; Dart)</option>
                <option value="Enterprise Backend">Enterprise Backend &amp; APIs (ASP.NET Core / Laravel)</option>
                <option value="Database & Cloud DevOps">Database Architecture &amp; Cloud DevOps</option>
                <option value="Full-Time Engineering Role">Full-Time Engineering Role / Contract</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                Project Scope &amp; Deliverables
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, timeline, target features, and stack requirements..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-gradient-to-r from-burgundy via-burgundy-vibrant to-burgundy-deep px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_24px_rgba(155,27,48,0.45)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95"
              >
                <span>Dispatch Inquiry</span>
                <Send size={15} />
              </button>

              {formSent && (
                <span className="font-mono text-xs font-bold text-emerald-400">
                  ✓ Mail client opened. Thank you!
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:mt-24 sm:flex-row sm:items-center sm:justify-between font-mono">
          <p>© {currentYear} Bilal Khan. All rights reserved.</p>
          <p>
            Designed &amp; Engineered by{" "}
            <span className="text-zinc-200 font-semibold">{profile.name}</span>.
          </p>
        </footer>
      </div>
    </section>
  );
}
