"use client";
import { profile, navLinks } from "@/lib/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0C0D12] py-12 text-zinc-400">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-burgundy/40 bg-burgundy/15 font-mono text-xs font-black text-burgundy-light shadow-[0_0_16px_rgba(155,27,48,0.3)]">
              {profile.initials}
            </span>
            <div>
              <p className="text-sm font-black text-white tracking-wider">BILAL KHAN</p>
              <p className="text-xs text-zinc-400">Senior Full-Stack &amp; Next.js Architect</p>
            </div>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-300 hover:border-burgundy/50 hover:text-burgundy-light transition"
          >
            Back to Top ↑
          </button>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-zinc-500 font-mono">
          © {new Date().getFullYear()} Bilal Khan. All rights reserved. Designed &amp; Engineered by {profile.name}.
        </div>
      </div>
    </footer>
  );
}
