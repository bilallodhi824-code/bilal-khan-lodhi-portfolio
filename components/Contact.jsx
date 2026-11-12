"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/portfolio";
import { Copy, Check, MessageCircle, Mail, GitHub, LinkedIn, Facebook, Instagram, ArrowUpRight } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
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
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#0C0D12] scroll-mt-24">
      {/* Background Volumetric Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[min(40rem,100vw)] -translate-x-1/2"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-r from-burgundy/25 via-rose-900/15 to-royal/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-rose-300 font-sans">
            Start a conversation
          </p>
          <h2 className="font-display max-w-4xl text-[clamp(2.25rem,7vw,5rem)] font-black leading-[1.08] tracking-tight text-white">
            Let&apos;s build digital excellence together.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base font-sans">
            Have a project in mind, looking to hire a senior full-stack architect, or discuss an enterprise consultation? Reach out directly via WhatsApp, email, or professional social channels.
          </p>

          {/* Email Row with 1-Click Copy */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 max-w-full items-center gap-2 break-all text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-white to-blue-300 underline decoration-burgundy/40 underline-offset-8 transition hover:decoration-rose-300 sm:text-2xl lg:text-3xl"
            >
              <Mail className="hidden shrink-0 text-rose-300 sm:block" size={22} aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 text-xs font-semibold text-zinc-200 transition hover:border-burgundy/60 hover:text-rose-300"
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
                      ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/25 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                      : "border-white/10 bg-white/[0.04] text-zinc-200 hover:border-[#9B1B30] hover:bg-[#9B1B30]/15 hover:text-white hover:shadow-[0_0_20px_rgba(155,27,48,0.35)]"
                  }`}
                >
                  <Icon
                    size={16}
                    className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? "text-emerald-400" : "text-zinc-400 group-hover:text-rose-300"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:mt-20 sm:flex-row sm:items-center sm:justify-between font-sans">
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
