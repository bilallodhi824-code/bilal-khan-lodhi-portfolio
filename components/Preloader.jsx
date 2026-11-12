"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/portfolio";

export default function Preloader({ onReveal }) {
  const [open, setOpen] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1400;
    let frameId;

    const step = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = Math.min(100, Math.floor((1 - Math.pow(1 - progress, 3)) * 100));
      setPercent(eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setPercent(100);
        setTimeout(() => {
          onReveal?.();
          setOpen(false);
        }, 180);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [onReveal]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0D12] text-white will-change-transform select-none"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Subtle Burgundy & Royal Blue Atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(155,27,48,0.18),transparent_70%)]"
          />

          {/* Monogram Crest & Live Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.2)]">
                {profile.initials}
              </span>
              <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-[#9B1B30] to-[#2563EB] shadow-[0_0_20px_#2563EB]" />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="font-sans text-xs font-bold tracking-wider text-zinc-300 uppercase">
                BILAL KHAN LODHI
              </span>
            </div>
          </motion.div>

          {/* Progress Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="relative mt-9 flex flex-col items-center gap-2.5 w-64 sm:w-80"
          >
            <div className="flex w-full items-center justify-between font-sans text-xs">
              <span className="text-zinc-300 tracking-wide flex items-center gap-1.5 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B1B30] animate-ping" />
                Preparing Portfolio Experience
              </span>
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-blue-400 text-sm tracking-wide">
                {percent}%
              </span>
            </div>

            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#9B1B30] via-[#BE123C] to-[#2563EB] shadow-[0_0_14px_rgba(155,27,48,0.85)] transition-all duration-75 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className="flex w-full items-center justify-between font-sans text-[11px] text-zinc-400 mt-1 font-medium">
              <span>Full-Stack &amp; Next.js Architect</span>
              <span>Karachi, Pakistan</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
