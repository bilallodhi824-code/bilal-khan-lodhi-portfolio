"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile, heroTechPills } from "@/lib/portfolio";
import { ArrowUpRight, MessageCircle, CheckCircle } from "./Icons";

export default function Hero() {
  const [karachiTime, setKarachiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setKarachiTime(`${timeStr} PKT`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      aria-label="Introduction & Architecture Overview"
      className="relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden bg-ink pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Background Volumetric Glows & Monogram Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid place-items-center bg-[radial-gradient(ellipse_at_75%_25%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(ellipse_at_25%_75%,rgba(155,27,48,0.22),transparent_60%),#0C0D12] overflow-hidden"
      >
        <span className="select-none text-[clamp(8rem,28vw,26rem)] font-black tracking-[-0.08em] text-white/[0.04]">
          {profile.initials}
        </span>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,18,0.85)_0%,rgba(12,13,18,0.55)_35%,rgba(12,13,18,0.2)_65%,transparent_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Status Badge & Location Time */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.18)] backdrop-blur-md"
            >
              <span className="h-2 w-2 shrink-0 animate-pulseDot rounded-full bg-emerald-400" />
              <span>{profile.badge}</span>
            </motion.div>

            {karachiTime && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md font-medium"
              >
                <span>Karachi, PK</span>
                <span className="font-semibold text-white">· {karachiTime}</span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-burgundy/40 bg-burgundy/10 px-3 py-1.5 text-xs font-semibold text-rose-300 backdrop-blur-md"
            >
              <CheckCircle size={13} />
              <span>Meta Certified Front-End</span>
            </motion.div>
          </div>

          {/* Monumental Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-6 font-display break-words text-[clamp(2.4rem,6.8vw,4.8rem)] font-extrabold uppercase leading-[0.96] tracking-tight text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.9)]"
          >
            Muhammad Bilal <span className="text-zinc-300">Khan Lodhi</span>
          </motion.h1>

          {/* Role Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 text-base sm:text-lg font-semibold text-rose-300 tracking-normal [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]"
          >
            {profile.role}
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2 max-w-2xl"
          >
            {heroTechPills.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-md transition hover:border-burgundy/60 hover:text-white"
              >
                {tech}
              </li>
            ))}
          </motion.ul>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-burgundy via-burgundy-vibrant to-burgundy-light px-6 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(155,27,48,0.45)] transition hover:scale-[1.03] hover:brightness-110 active:scale-95"
            >
              <span>View Engineered Works (20)</span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-royal/60 hover:bg-white/[0.12] hover:text-royal-light active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:scale-[1.03] hover:bg-emerald-500 hover:text-white active:scale-95"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          {/* Verified Accreditation Card (Credibility know-how without exposing raw PDF) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-8 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 sm:px-4 backdrop-blur-md max-w-xl"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-royal/20 text-royal-light shadow-[0_0_16px_rgba(37,99,235,0.25)]">
              <CheckCircle size={20} />
            </div>
            <div className="text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white">Meta Certified Front-End Developer</span>
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">Verified Credential</span>
              </div>
              <p className="mt-0.5 text-xs text-zinc-400">
                Authorized by <span className="text-zinc-200 font-medium">Meta Platforms & Coursera</span> · Credential ID: <span className="font-semibold text-zinc-200">META-FED-8240-2026</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
