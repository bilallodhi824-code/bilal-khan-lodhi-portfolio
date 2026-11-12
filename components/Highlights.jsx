"use client";
import { motion } from "framer-motion";
import { heroStats } from "@/lib/portfolio";

const tickerItems = [
  "Next.js 15 & React 19 Architecture",
  "Meta Certified Front-End Developer",
  "TypeScript & Scalable Design Systems",
  "PostgreSQL, Prisma ORM & Clean Backends",
  "20+ Verified Production Deployments",
  "100/100 Core Web Vitals Performance",
  "Cross-Platform Flutter & Mobile Solutions",
  "Microservices, WebSockets & Cloud APIs",
  "Sub-18ms Edge Latency & Security",
];

export default function Highlights() {
  return (
    <div className="relative z-10 w-full">
      {/* 4 Signature Glass Stat Cards with Spotlight Hover */}
      <section
        aria-label="Highlights"
        className="mx-auto -mt-10 mb-16 max-w-6xl px-5 sm:px-8"
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass spot relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-5"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-burgundy/20 blur-2xl"
              />
              <div>
                <span className="block font-display text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-burgundy-light via-rose-200 to-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-2 text-xs sm:text-sm font-bold tracking-normal text-white">
                  {stat.label}
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architectural Marquee */}
      <div
        aria-label="Engineering Architecture Highlights"
        className="w-full overflow-hidden border-y border-white/10 bg-black/60 py-3.5 backdrop-blur-xl"
      >
        {/* Edge gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent" />

        <div className="flex w-max animate-marquee space-x-8 hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 text-xs font-semibold tracking-wide text-zinc-300 transition-colors hover:text-white select-none"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-burgundy-light shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
