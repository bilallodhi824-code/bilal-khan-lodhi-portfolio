"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experienceTimeline } from "@/lib/portfolio";
import { Check, Award, Briefcase, GraduationCap } from "./Icons";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 scroll-mt-24">
      {/* Header */}
      <div className="relative mb-12 sm:mb-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-rose-300 font-sans">
          Milestones &amp; Background
        </p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Professional Journey &amp; Leadership
        </h2>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
        />
      </div>

      {/* Timeline List */}
      <div
        ref={containerRef}
        className="relative border-l border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-10 sm:space-y-12"
      >
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="pointer-events-none absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-burgundy via-burgundy/60 to-royal will-change-transform"
        />

        {experienceTimeline.map((exp, index) => {
          const isEmerald = exp.badgeColor === "emerald";
          const isOrange = exp.badgeColor === "brand-orange" || exp.badgeColor === "burgundy";

          return (
            <motion.div
              key={exp.role + index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Node Icon on Timeline */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                  isEmerald
                    ? "border-royal/50 bg-royal/20 text-royal-light shadow-[0_0_16px_rgba(37,99,235,0.35)]"
                    : isOrange
                    ? "border-burgundy/50 bg-burgundy/20 text-burgundy-light shadow-[0_0_16px_rgba(155,27,48,0.35)]"
                    : "border-white/20 bg-black text-zinc-300"
                }`}
              >
                {isEmerald ? (
                  <Award size={16} aria-hidden="true" />
                ) : index === 3 ? (
                  <GraduationCap size={16} aria-hidden="true" />
                ) : (
                  <Briefcase size={16} aria-hidden="true" />
                )}
              </div>

              {/* Card */}
              <article className="glass spot rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-0.5 text-xs font-bold tracking-wide ${
                      isEmerald
                        ? "border-royal/40 bg-royal/10 text-royal-light"
                        : isOrange
                        ? "border-burgundy/40 bg-burgundy/10 text-burgundy-light"
                        : "border-white/15 bg-white/[0.04] text-zinc-300"
                    }`}
                  >
                    {exp.badge}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400 font-sans">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-burgundy-light">
                  {exp.organization || exp.company}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 sm:text-sm"
                    >
                      <Check size={15} className="shrink-0 text-burgundy-light mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
