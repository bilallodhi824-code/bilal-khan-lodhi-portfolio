"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, navLinks } from "@/lib/portfolio";
import { ArrowUpRight, Menu, X } from "./Icons";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#top");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isManuallyExpanded, setIsManuallyExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const hoverTimerRef = useRef(null);
  const lastScrollYRef = useRef(0);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["top", ...navLinks.map((l) => l.href.slice(1))];
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.15, 0.4] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler without jitter
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // Expand when user scrolls
      if (Math.abs(currentY - lastScrollYRef.current) > 3) {
        setIsScrolling(true);
        lastScrollYRef.current = currentY;
      }

      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }

      // After 2.2 seconds of stillness, contract back if not hovering or locked
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  // Click outside to collapse manual expansion and mobile menu
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsManuallyExpanded(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
    };
  }, []);

  // Escape key collapses manual expansion & mobile menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsManuallyExpanded(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Hover state with grace period to prevent rapid flickering
  const handleMouseEnter = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 280);
  };

  // Nav link click with smooth scroll
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setIsManuallyExpanded(false);

    if (href === "#top") {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -70, duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    }
  }, []);

  // Is expanded when scrolling, manually clicked, hovering, or mobile open
  const isExpanded = isScrolling || isManuallyExpanded || isHovered || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4 pointer-events-none">
      <div className="mx-auto flex justify-center">
        {/* Single Continuous Morphing Dynamic Island Capsule (No unmounting/flicker) */}
        <motion.nav
          ref={navRef}
          layout
          transition={{
            layout: { type: "spring", stiffness: 380, damping: 30, mass: 0.8 },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            if (!isExpanded) setIsManuallyExpanded(true);
          }}
          aria-label="Main navigation"
          className={`pointer-events-auto relative flex items-center rounded-full border border-white/15 bg-[#0C0D12]/92 shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 ${
            isExpanded
              ? "min-h-[48px] w-full max-w-md justify-between gap-2 px-3 py-1.5 sm:px-4 md:w-fit md:max-w-none md:justify-center md:gap-4 lg:gap-6"
              : "min-h-[42px] w-auto gap-2.5 px-3.5 py-1.5 cursor-pointer hover:border-[#2563EB]/70 hover:bg-[#14151D] hover:scale-105 active:scale-95"
          }`}
        >
          {/* Brand Monogram Crest (Unified across both states) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (isExpanded) {
                handleNavClick(e, "#top");
              } else {
                setIsManuallyExpanded(true);
              }
            }}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full text-sm font-black tracking-tight text-white transition hover:opacity-90 cursor-pointer"
            title={isExpanded ? "Scroll to top" : "Click to expand navigation"}
          >
            <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full border border-[#9B1B30]/60 bg-[#9B1B30]/20 font-display text-xs font-black text-rose-300 shadow-[0_0_15px_rgba(155,27,48,0.35)] transition group-hover:scale-105 group-hover:border-[#2563EB] group-hover:text-blue-300">
              {profile.initials}
            </span>
            <span className="font-display font-bold tracking-tight text-white">
              {isExpanded ? (profile.shortName || "Bilal Khan") : (profile.shortName || "BK")}
            </span>
          </button>

          {/* Shrunk State: Pulsing Royal Blue Live Beacon */}
          {!isExpanded && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
            </span>
          )}

          {/* Expanded State: Links & CTA */}
          {isExpanded && (
            <>
              {/* Desktop Nav Links */}
              <ul className="hidden items-center gap-1 md:flex">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        aria-current={isActive ? "location" : undefined}
                        className={`relative inline-flex rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                          isActive ? "text-white" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-pill"
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                            className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-inset ring-white/15"
                          >
                            <span className="absolute inset-x-3 -bottom-px h-[2px] bg-gradient-to-r from-[#9B1B30] to-[#2563EB] shadow-[0_0_10px_#2563EB]" />
                          </motion.span>
                        )}
                        <span className="relative">{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Right Action CTA & Mobile Toggle */}
              <div className="flex shrink-0 items-center gap-2">
                <span className="hidden sm:inline-flex">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#0C0D12] transition-all hover:bg-gradient-to-r hover:from-[#9B1B30] hover:to-[#2563EB] hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </span>

                {/* Mobile Menu Hamburger */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileOpen((prev) => !prev);
                  }}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
                  aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
                </button>
              </div>
            </>
          )}
        </motion.nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25 }}
            style={{ transformOrigin: "top center" }}
            className="pointer-events-auto mx-auto mt-2 flex w-[calc(100%-1.5rem)] max-w-md flex-col rounded-3xl border border-white/15 bg-[#0C0D12]/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? "bg-white/[0.08] text-rose-300" : "text-zinc-200 hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#9B1B30] to-[#2563EB] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(155,27,48,0.4)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
