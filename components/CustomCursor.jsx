"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TARGET_SELECTOR = "a, button, [role='button'], summary, [data-cursor], input, textarea";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on devices that support fine hover pointer
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    setMounted(true);
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const onOver = (e) => {
      const target = e.target;
      setIsHovered(Boolean(target?.closest?.(TARGET_SELECTOR)));
    };

    const onLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    root.addEventListener("pointerleave", onLeave);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[200] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Outer Spring Ring */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div
          className={`-ml-[18px] -mt-[18px] h-9 w-9 rounded-full border transition-all duration-200 ease-out ${
            isHovered
              ? "scale-[1.7] border-[#9B1B30]/85 bg-[#9B1B30]/15 shadow-[0_0_20px_rgba(155,27,48,0.45)]"
              : "scale-100 border-white/35 bg-transparent"
          }`}
        />
      </motion.div>

      {/* Inner Pin Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div
          className={`-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#9B1B30] to-[#2563EB] shadow-[0_0_8px_#2563EB] transition-opacity duration-150 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
      </motion.div>
    </div>
  );
}
