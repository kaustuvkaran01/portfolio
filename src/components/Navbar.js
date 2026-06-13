"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/site-logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return document.documentElement.dataset.theme || "dark";
  });

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = (root.dataset.theme || "dark") === "dark" ? "light" : "dark";

    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <Link href="/" className="min-w-0 flex items-center gap-3 text-[var(--foreground)]">
            <div className="flex h-7 w-7 items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-3)]">
              <Image
                src={logo}
                alt="Kaustuv Karan logo"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
            </div>
            <span className="truncate text-lg font-semibold tracking-[-0.04em] sm:text-xl">
              Kaustuv Karan
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <Link
              href="/"
              className={`transition hover:text-[var(--foreground)] ${
                pathname === "/" ? "underline decoration-[var(--foreground)] underline-offset-4 text-[var(--foreground)]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`transition hover:text-[var(--foreground)] ${
                pathname.startsWith("/blog")
                  ? "underline decoration-[var(--foreground)] underline-offset-4 text-[var(--foreground)]"
                  : ""
              }`}
            >
              Blog
            </Link>
            <Link href="/#contact" className="transition hover:text-[var(--foreground)]">
              Contact
            </Link>
            <Link href="/#experience" className="transition hover:text-[var(--foreground)]">
              CV
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-1)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--foreground)] md:inline-flex"
              aria-label="Toggle theme"
            >
              Theme
            </button>

            <a
              href="/kaustuv-karan-resume-feb-26.pdf"
              download="Kaustuv-Karan-Resume.pdf"
              className="hidden items-center justify-center border border-[var(--surface-inverse)] bg-[var(--surface-inverse)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-inverse)] transition hover:opacity-90 md:inline-flex"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-1)] text-[var(--foreground)] transition hover:border-[var(--foreground)] md:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-current transition ${
                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-px w-4 bg-current transition ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-4 bg-current transition ${
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 border border-[var(--border)] bg-[var(--surface-1)] p-3 shadow-[var(--shadow-card)] md:hidden">
            <div className="grid gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-between border border-[var(--border)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--foreground)] transition"
              >
                Theme
                <span className="text-[var(--muted)]">{theme === "dark" ? "Dark" : "Light"}</span>
              </button>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between border px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition ${
                  pathname === "/"
                    ? "border-[var(--foreground)] bg-[var(--surface-2)] text-[var(--foreground)]"
                    : "border-[var(--border)] text-[var(--muted)]"
                }`}
              >
                Home
                <span aria-hidden="true">{"->"}</span>
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between border px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition ${
                  pathname.startsWith("/blog")
                    ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--surface-0)]"
                    : "border-[var(--border-strong)] text-[var(--foreground)]"
                }`}
              >
                Blog
                <span aria-hidden="true">{"->"}</span>
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border border-[var(--border)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)] transition"
              >
                Contact
                <span aria-hidden="true">{"->"}</span>
              </Link>
              <Link
                href="/#experience"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border border-[var(--border)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)] transition"
              >
                CV
                <span aria-hidden="true">{"->"}</span>
              </Link>
            </div>

            <a
              href="/kaustuv-karan-resume-feb-26.pdf"
              download="Kaustuv-Karan-Resume.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center border border-[var(--surface-inverse)] bg-[var(--surface-inverse)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-inverse)] transition hover:opacity-90"
            >
              Download Resume
            </a>
          </div>
        ) : null}
      </div>
    </motion.nav>
  );
}
