"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutData } from "@/lib/portfolio";

function ScrollWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const color = useTransform(progress, range, ["#52525b", "#ffffff"]);
  const textShadow = useTransform(
    progress,
    range,
    ["none", "0 0 12px rgba(255, 255, 255, 0.22)"]
  );

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.05em]">
      <motion.span
        style={{ opacity, color, textShadow }}
        className="inline-block transition-colors duration-75 select-none"
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);

  // Tracks scroll progress across the About narrative section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 45%"],
  });

  // Calculate total words across all paragraphs for smooth continuous progression
  const allParagraphsWords = aboutData.paragraphs.map((p) => p.split(/\s+/));
  const totalWords = allParagraphsWords.reduce((acc, words) => acc + words.length, 0);

  let cumulativeIndex = 0;

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pb-24 pt-4 sm:px-8 sm:pb-32 sm:pt-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="gradient-border glass relative overflow-hidden rounded-3xl p-7 sm:p-12 md:p-14"
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
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-wider text-rose-300 font-sans">
              About &amp; Systems Architecture
            </p>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {aboutData.heading}
          </h2>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
          />

          {/* Scroll-Driven Text Reveal Paragraphs */}
          <div
            ref={containerRef}
            className="mt-10 max-w-4xl space-y-7 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose font-normal"
          >
            {allParagraphsWords.map((words, pIdx) => {
              const paragraphStartOffset = cumulativeIndex;
              cumulativeIndex += words.length;

              return (
                <p key={pIdx} className="leading-relaxed sm:leading-relaxed">
                  {words.map((word, wIdx) => {
                    const globalWordIdx = paragraphStartOffset + wIdx;
                    const startRange = globalWordIdx / totalWords;
                    const endRange = Math.min(1, (globalWordIdx + 1.8) / totalWords);

                    return (
                      <ScrollWord
                        key={wIdx}
                        word={word}
                        progress={scrollYProgress}
                        range={[startRange, endRange]}
                      />
                    );
                  })}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
