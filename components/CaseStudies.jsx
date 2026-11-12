"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/portfolio";
import { Award, ExternalLink } from "./Icons";

export default function CaseStudies() {
  const [selectedId, setSelectedId] = useState(caseStudies[0].id);
  const activeStudy = caseStudies.find((c) => c.id === selectedId) || caseStudies[0];

  return (
    <section id="case-studies" className="relative border-t border-white/10 py-24 sm:py-32 overflow-hidden bg-[#0C0D12]">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-burgundy/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-royal/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="relative mb-10 sm:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy-light font-mono">
            Engineering Case Studies
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Architectural Deep Dives
          </h2>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
          />
        </div>

        {/* Study Navigation Pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {caseStudies.map((study) => {
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-burgundy to-burgundy-vibrant text-white shadow-[0_4px_16px_rgba(155,27,48,0.45)]"
                    : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-burgundy/50 hover:text-white"
                }`}
              >
                <span>{study.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Study Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="glass relative overflow-hidden rounded-3xl border border-white/15 p-6 sm:p-10"
          >
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-burgundy-light">
                    {activeStudy.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-royal/40 bg-royal/10 px-2.5 py-0.5 text-[10px] font-bold text-royal-light">
                    <Award size={12} />
                    {activeStudy.badge}
                  </span>
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                  {activeStudy.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400 font-medium">
                  {activeStudy.tagline}
                </p>
              </div>

              {activeStudy.liveUrl && (
                <a
                  href={activeStudy.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-burgundy via-burgundy-vibrant to-burgundy-deep px-4 py-2 text-xs font-bold text-white shadow-[0_2px_12px_rgba(155,27,48,0.4)] transition hover:brightness-110"
                >
                  <span>Live Platform</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>

            {/* Problem / Solution / Result Columns */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Problem */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-300">
                  01 · The Bottleneck
                </span>
                <h4 className="mt-2 text-base font-bold text-white">Challenge</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {activeStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-royal-light">
                  02 · Engineering Architecture
                </span>
                <h4 className="mt-2 text-base font-bold text-white">Solution</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {activeStudy.solution}
                </p>
              </div>

              {/* Result */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-burgundy-light">
                  03 · Verified Impact
                </span>
                <h4 className="mt-2 text-base font-bold text-white">Result</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {activeStudy.result}
                </p>
              </div>
            </div>

            {/* 4 Performance Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-white/10 pt-6">
              {activeStudy.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-black/40 p-3 sm:p-4 text-center">
                  <p className="font-mono text-sm sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-burgundy-light to-royal-light">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-zinc-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
