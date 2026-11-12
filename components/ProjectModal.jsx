"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Copy, Check, Monitor, Tablet, Smartphone } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  const [viewport, setViewport] = useState("desktop");
  const [copied, setCopied] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    if (!project) return;
    const isMobile =
      project.filterGroup === "mobile" ||
      project.category?.toLowerCase().includes("mobile") ||
      (project.apkUrl && !project.liveUrl?.startsWith("http"));
    setViewport(isMobile ? "mobile" : "desktop");
    setIframeError(false);

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const live = project.liveUrl || project.live || "";
  const isDirect =
    project.openDirect ||
    live.includes("infinityfreeapp.com") ||
    live.includes("englishwithmhs.com");

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(live || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const viewportWidth =
    viewport === "desktop"
      ? "w-full"
      : viewport === "tablet"
      ? "max-w-[768px]"
      : "max-w-[390px]";

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-[#090D16]/95 shadow-2xl shadow-black/90 backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-[#07090F] px-4 sm:px-6">
            {/* Mac style dots */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-3 w-3 rounded-full bg-[#FF5F56] transition hover:opacity-80"
                  aria-label="Close modal"
                />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="hidden text-xs font-bold text-zinc-300 md:inline max-w-[200px] truncate">
                {project.title}
              </span>
            </div>

            {/* Address Bar */}
            <div className="flex max-w-[480px] flex-1 items-center justify-between gap-2 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 text-xs text-zinc-300 shadow-inner">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="truncate font-mono text-[11px] text-zinc-400">
                  {live || "bk-engine://internal"}
                </span>
              </div>
              <button
                type="button"
                onClick={copyUrl}
                className="shrink-0 text-zinc-400 hover:text-white"
                title="Copy link"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Viewport Toggles & Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center rounded-lg border border-white/10 bg-black/40 p-1">
                <button
                  type="button"
                  onClick={() => setViewport("desktop")}
                  className={`rounded p-1 text-xs transition ${
                    viewport === "desktop" ? "bg-white/15 text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  title="Desktop View"
                >
                  <Monitor size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewport("tablet")}
                  className={`rounded p-1 text-xs transition ${
                    viewport === "tablet" ? "bg-white/15 text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  title="Tablet View"
                >
                  <Tablet size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewport("mobile")}
                  className={`rounded p-1 text-xs transition ${
                    viewport === "mobile" ? "bg-white/15 text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  title="Mobile View"
                >
                  <Smartphone size={14} />
                </button>
              </div>

              {project.apkUrl && (
                <a
                  href={project.apkUrl}
                  download={project.downloadFileName || "application.apk"}
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-royal/50 bg-royal/15 px-3 py-1.5 text-xs font-bold text-royal-light hover:bg-royal hover:text-white transition"
                >
                  <Download size={13} />
                  <span>APK</span>
                </a>
              )}

              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-burgundy via-burgundy-vibrant to-burgundy-deep px-3.5 py-1.5 text-xs font-bold text-white shadow-[0_2px_12px_rgba(155,27,48,0.4)] transition hover:brightness-110"
                >
                  <span>Open</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-full text-zinc-400 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body Frame */}
          <div className="relative flex flex-1 items-center justify-center overflow-auto bg-[#0C0D12] p-2 sm:p-4">
            {isDirect || iframeError ? (
              <div className="flex max-w-md flex-col items-center justify-center text-center p-8">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl border border-burgundy/40 bg-burgundy/15 text-burgundy-light">
                  <ExternalLink size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-burgundy to-burgundy-vibrant px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_16px_rgba(155,27,48,0.4)]"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      download={project.downloadFileName || "application.apk"}
                      className="inline-flex items-center gap-2 rounded-xl border border-royal/50 bg-royal/15 px-5 py-2.5 text-xs font-bold text-royal-light hover:bg-royal hover:text-white transition"
                    >
                      <Download size={14} />
                      <span>Download APK</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div
                className={`relative h-full transition-all duration-300 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white ${viewportWidth}`}
              >
                <iframe
                  src={live}
                  title={project.title}
                  className="h-full w-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  onError={() => setIframeError(true)}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

