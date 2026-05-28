"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/site-logo.png";

export default function Navbar() {
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3 text-[var(--foreground)]">
          <div className="flex h-7 w-7 items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-3)]">
            <Image
              src={logo}
              alt="Kaustuv Karan logo"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
          </div>
          <span className="text-xl font-semibold tracking-[-0.04em]">
            Kaustuv Karan
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <Link
            href="/"
            className="underline decoration-[var(--foreground)] underline-offset-4 transition hover:text-[var(--foreground)]"
          >
            Home
          </Link>
          <Link href="/blog" className="transition hover:text-[var(--foreground)]">
            Blog
          </Link>
          <Link href="/#contact" className="transition hover:text-[var(--foreground)]">
            Contact
          </Link>
          <Link href="/#experience" className="transition hover:text-[var(--foreground)]">
            CV
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-1)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--foreground)]"
            aria-label="Toggle theme"
          >
            Theme
          </button>

          <a
            href="/kaustuv-karan-resume-feb-26.pdf"
            download="Kaustuv-Karan-Resume.pdf"
            className="inline-flex items-center justify-center border border-[var(--surface-inverse)] bg-[var(--surface-inverse)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-inverse)] transition hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
