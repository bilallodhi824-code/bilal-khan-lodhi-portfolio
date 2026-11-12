"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/portfolio";
import { Code2, Server, Database, ShieldCheck, Workflow } from "./Icons";

const iconMap = {
  Code2: Code2,
  Server: Server,
  Database: Database,
  Workflow: Workflow || ShieldCheck,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
      {/* Section Header */}
      <div className="relative mb-10 sm:mb-14">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-rose-300">
          Core Expertise
        </p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Skills &amp; Technical Toolset
        </h2>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, index) => {
          const Icon = iconMap[cat.icon] || Code2;
          return (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass spot group h-full rounded-3xl p-5 sm:p-6"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-burgundy/40 bg-burgundy/15 text-burgundy-light transition group-hover:shadow-[0_0_24px_rgba(155,27,48,0.35)]">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-base font-bold leading-snug text-zinc-100">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs leading-4 text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
