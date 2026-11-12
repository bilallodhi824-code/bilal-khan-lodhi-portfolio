"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundMesh() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["-5vh", "55vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10vh", "-35vh"]);
  const opacity = useTransform(scrollYProgress, [0.03, 0.14], [0.35, 1]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Burgundy Ambient Light Aura */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-[20vw] top-0 h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(155,27,48,0.16),transparent)] blur-3xl will-change-transform"
      />
      {/* Royal Blue Volumetric Aura */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-[20vw] top-[30vh] h-[75vh] w-[65vw] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.16),transparent)] blur-3xl will-change-transform"
      />
    </motion.div>
  );
}
