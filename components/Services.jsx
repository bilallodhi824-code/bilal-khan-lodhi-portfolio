"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/portfolio";
import { Globe, Smartphone, Server, Database, ArrowUpRight, Check } from "./Icons";

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Server: Server,
  Database: Database,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
      {/* Section Header */}
      <div className="relative mb-10 sm:mb-14">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy-light font-mono">
          BK Architecture Capabilities
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Engineering Services &amp; Solutions
        </h2>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
        />
      </div>

      {/* 2x2 Clean Grid Matching durvix-portfolio */}
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((svc, index) => {
          const IconComponent = iconMap[svc.icon] || Globe;

          return (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass spot relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div>
                {/* Header Icon & Tagline */}
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-burgundy/40 bg-burgundy/15 text-burgundy-light shadow-[0_0_20px_rgba(155,27,48,0.25)]">
                    <IconComponent size={22} />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-royal-light uppercase">
                    {svc.tagline}
                  </span>
                </div>

                <h3 className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {svc.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
                  {svc.description}
                </p>

                {/* Tech Pills */}
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {svc.tech?.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Deliverables Checklist */}
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-4">
                  {svc.deliverables?.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-royal/20 text-[10px] font-bold text-royal-light">
                        ✓
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-burgundy-light transition hover:text-white"
                >
                  <span>Inquire About Solution</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
