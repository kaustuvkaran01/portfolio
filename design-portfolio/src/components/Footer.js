export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-[var(--border)] bg-[var(--surface-0)] py-10 text-[var(--muted)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
            Kaustuv Karan
          </p>
          <p className="mt-3 text-sm text-[var(--foreground)]/80">
            © {currentYear} Kaustuv Karan. Built with technical precision.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--foreground)]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--foreground)]"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--foreground)]"
          >
            Twitter
          </a>
          <a
            href="mailto:contact@example.com"
            className="transition hover:text-[var(--foreground)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
