"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { liveProjects } from "@/lib/portfolio";
import { ExternalLink, ArrowUpRight, Download } from "./Icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: "all", label: `All Projects (${liveProjects.length})` },
    {
      id: "fullstack",
      label: `Full-Stack Web (${liveProjects.filter((p) => p.filterGroup === "fullstack").length})`,
    },
    {
      id: "enterprise",
      label: `Enterprise (.NET / PHP) (${liveProjects.filter((p) => p.filterGroup === "enterprise").length})`,
    },
    {
      id: "mobile",
      label: `Mobile Apps (Flutter) (${liveProjects.filter((p) => p.filterGroup === "mobile").length})`,
    },
    {
      id: "ai",
      label: `AI & Tools (${liveProjects.filter((p) => p.filterGroup === "ai").length})`,
    },
  ];

  const filtered =
    activeFilter === "all"
      ? liveProjects
      : liveProjects.filter((p) => p.filterGroup === activeFilter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
      {/* Header */}
      <div className="relative mb-10 sm:mb-14">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy-light font-mono">
          Verified Systems &amp; Deployments
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Live Engineered Works ({liveProjects.length})
        </h2>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-24 bg-gradient-to-r from-burgundy via-royal to-transparent"
        />
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-gradient-to-r from-burgundy to-burgundy-vibrant text-white shadow-[0_2px_12px_rgba(155,27,48,0.45)]"
                  : "border border-white/10 bg-white/[0.04] text-zinc-300 hover:border-burgundy/50 hover:text-white"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((project) => {
            const live = project.liveUrl || project.live;
            const apk = project.apkUrl;

            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glass spot relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all hover:border-burgundy/40"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-burgundy-light">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="rounded-full border border-royal/40 bg-royal/10 px-2.5 py-0.5 text-[10px] font-semibold text-royal-light shadow-[0_0_12px_rgba(37,99,235,0.2)]">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-3.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags?.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions Footer */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-burgundy via-burgundy-vibrant to-burgundy-deep px-4 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(155,27,48,0.4)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95"
                  >
                    <span>Inspect &amp; Test</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {apk && (
                    <a
                      href={apk}
                      download={project.downloadFileName || "app.apk"}
                      className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-xl border border-royal/40 bg-royal/15 px-3.5 py-2 text-xs font-semibold text-royal-light transition-all hover:scale-[1.02] hover:bg-royal hover:text-white active:scale-95"
                    >
                      <span>APK</span>
                      <Download size={13} />
                    </a>
                  )}

                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white transition-all hover:scale-[1.02] hover:border-burgundy/60 hover:text-burgundy-light active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
