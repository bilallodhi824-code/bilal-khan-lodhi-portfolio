"use client";
import { motion } from "framer-motion";
import { aboutData } from "@/lib/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pb-24 pt-4 sm:px-8 sm:pb-32 sm:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="gradient-border glass relative overflow-hidden rounded-3xl p-7 sm:p-12"
      >
        {/* Ambient atmospheric glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-royal/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-burgundy/25 blur-3xl"
        />

        <div className="relative z-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-rose-300">
            Architect Profile & Story
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {aboutData.heading}
          </h2>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
          />

          <div className="mt-8 max-w-4xl space-y-5 text-sm leading-relaxed text-zinc-200 sm:text-base sm:leading-8">
            {aboutData.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
