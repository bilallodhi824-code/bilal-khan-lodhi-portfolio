"use client";
import { useEffect } from "react";

export default function SpotlightTracker() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover)").matches) {
      return;
    }

    let rafId = 0;
    let pending = null;

    const update = () => {
      rafId = 0;
      if (!pending) return;
      const { card, x, y } = pending;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${x - rect.left}px`);
      card.style.setProperty("--my", `${y - rect.top}px`);
    };

    const handlePointerMove = (e) => {
      if (e.pointerType !== "mouse") return;
      const spotCard = e.target?.closest?.(".spot");
      if (spotCard) {
        pending = { card: spotCard, x: e.clientX, y: e.clientY };
        if (!rafId) {
          rafId = window.requestAnimationFrame(update);
        }
      }
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}

