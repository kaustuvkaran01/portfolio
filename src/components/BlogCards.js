"use client";

import { useState } from "react";
import Link from "next/link";

const PAGE_SIZE = 4;
const tabs = ["All", "Tech", "Philosophy", "Sci-Fi", "Books"];

export default function BlogCards({ posts }) {
  const [selectedTab, setSelectedTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredPosts =
    selectedTab === "All"
      ? posts
      : posts.filter((post) => post.category === selectedTab);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  function handleLoadMore() {
    setVisibleCount((count) => count + PAGE_SIZE);
  }

  function handleTabChange(tab) {
    setSelectedTab(tab);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabChange(tab)}
            className={`rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              selectedTab === tab
                ? "border-[var(--foreground)] bg-[var(--surface-2)] text-[var(--foreground)]"
                : "border-[var(--border)] bg-[var(--surface-1)] text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visiblePosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
            <article className="h-full rounded-xl border border-[var(--border)] bg-[var(--surface-1)]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]">
              <div className="mb-4 flex items-center justify-between text-xs font-medium text-[var(--muted)]">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                {post.category || "Tech"}
              </p>
              <h2 className="mb-2 text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--foreground)]/74">
                {post.description}
              </p>
            </article>
          </Link>
        ))}
      </div>

      {visiblePosts.length === 0 ? (
        <p className="mt-8 text-sm text-[var(--muted)]">
          No posts in this category yet.
        </p>
      ) : null}

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
