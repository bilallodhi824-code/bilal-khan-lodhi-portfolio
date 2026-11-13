"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/portfolio";

export default function Preloader({ onReveal }) {
  const [open, setOpen] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1600;
    let frameId;

    const step = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Premium cubic-bezier out easing
      const eased = Math.min(100, Math.floor((1 - Math.pow(1 - progress, 3.5)) * 100));
      setPercent(eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setPercent(100);
        setTimeout(() => {
          onReveal?.();
          setOpen(false);
        }, 220);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [onReveal]);

  // Dynamic status messages based on load progression
  const getPhaseText = (p) => {
    if (p < 30) return "Initializing Core Architecture";
    if (p < 65) return "Loading Verified Production Sandboxes";
    if (p < 95) return "Compiling Performance Telemetry";
    return "Ready • Welcome to Bilal's Portfolio";
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080C] text-white will-change-transform select-none overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
        >
          {/* Volumetric Dual Radial Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-burgundy/25 blur-[140px] animate-pulse"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-royal/25 blur-[140px] animate-pulse"
          />

          {/* Micro Grid Ambient Texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
          />

          {/* Central Animated Capsule & Crest */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Rotating Orbital Halo */}
            <div className="relative flex items-center justify-center">
              {/* Outer Slow Conic Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                className="absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full border border-transparent bg-[conic-gradient(from_0deg,#9B1B30,#2563EB,transparent_70%)] p-[1.5px] opacity-70"
                style={{
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Counter-rotating dashed particle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                className="absolute h-44 w-44 sm:h-52 sm:w-52 rounded-full border border-dashed border-white/10"
              />

              {/* Inner Glowing Monogram Shield */}
              <motion.div
                initial={{ scale: 0.82, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative grid h-28 w-28 sm:h-32 sm:w-32 place-items-center rounded-3xl border border-white/15 bg-[#0C0D12]/90 shadow-[0_0_40px_rgba(155,27,48,0.35)] backdrop-blur-2xl"
              >
                <span className="font-display text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-rose-100 to-blue-200 drop-shadow-[0_4px_24px_rgba(255,255,255,0.25)]">
                  {profile.initials}
                </span>

                {/* Live Floating Node */}
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#07080C] bg-[#2563EB] shadow-[0_0_12px_#2563EB]" />
                </span>
              </motion.div>
            </div>

            {/* Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 flex flex-col items-center text-center"
            >
              <h1 className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-white">
                MUHAMMAD BILAL KHAN LODHI
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-400 font-sans tracking-wide">
                Senior Full-Stack &amp; Next.js Architect
              </p>
            </motion.div>

            {/* Progress Bar & Real-time Telemetry Status */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-8 w-72 sm:w-96 flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-zinc-300 font-medium flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-ping" />
                  <span className="truncate max-w-[200px] sm:max-w-none">
                    {getPhaseText(percent)}
                  </span>
                </span>
                <span className="font-display font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-blue-400">
                  {percent}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="relative h-[4px] w-full overflow-hidden rounded-full bg-white/10 p-[1px]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#9B1B30] via-[#BE123C] to-[#2563EB] shadow-[0_0_16px_rgba(225,29,72,0.9)] transition-all duration-100 ease-out"
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Micro Vitals Row */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-sans mt-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  100/100 Core Web Vitals
                </span>
                <span>Karachi, Pakistan</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
