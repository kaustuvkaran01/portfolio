"use client";

import { useState } from "react";

const PAGE_SIZE = 3;

export default function ProjectCards({ projects }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  function handleLoadMore() {
    setVisibleCount((count) => count + PAGE_SIZE);
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="group border border-[var(--border)] bg-[var(--surface-1)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
          >
            <div
              className={`relative flex h-56 items-end overflow-hidden border-b border-zinc-800 bg-gradient-to-br ${project.accent} p-5`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_28%)] opacity-70" />
              <div className="absolute inset-x-5 top-5 h-24 rounded-full border border-white/10 opacity-25 blur-md" />
              <div className="relative font-mono text-xs uppercase tracking-[0.26em] text-white/85">
                {project.preview}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--foreground)]/74">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[var(--cyan)] first:text-[var(--cyan)] last:text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface-1)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--foreground)]"
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}
