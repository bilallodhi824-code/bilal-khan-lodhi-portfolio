"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Smooth({ ready = true }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (ready) lenisRef.current.start();
    else lenisRef.current.stop();
  }, [ready]);

  return null;
}

