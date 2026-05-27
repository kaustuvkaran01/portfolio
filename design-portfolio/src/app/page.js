
import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";

const experienceItems = [
  "Architecting microservices for secure transaction processing using Spring Boot and distributed systems design.",
  "Optimizing database queries and runtime hotspots to reduce end-to-end response times by nearly 30%.",
  "Collaborating with frontend and platform teams to ship modern React interfaces alongside resilient Java services.",
];

const projectCards = [
  {
    title: "Nexus Core",
    description:
      "High-throughput event streaming platform built for real-time financial workflows and resilient back-pressure handling.",
    tags: ["Spring Cloud", "Kafka"],
    accent: "from-zinc-700 via-zinc-950 to-zinc-900",
    preview: "Code architecture for low-latency pipelines",
  },
  {
    title: "Aether UI",
    description:
      "Design system and component library focused on technical products, accessibility, and crisp developer ergonomics.",
    tags: ["React", "Tailwind"],
    accent: "from-zinc-800 via-zinc-900 to-black",
    preview: "Composable dashboards with dense data views",
  },
  {
    title: "Vault Secure",
    description:
      "Self-hosted secrets management tooling powered by strong encryption and infrastructure-first deployment controls.",
    tags: ["Go", "Docker"],
    accent: "from-zinc-600 via-zinc-950 to-black",
    preview: "Encrypted storage with operational simplicity",
  },
  {
    title: "Pulse Stream",
    description:
      "Distributed telemetry stream processor for observability pipelines with adaptive buffering and query-time rollups.",
    tags: ["Java", "Redis"],
    accent: "from-zinc-700 via-zinc-900 to-black",
    preview: "Live metrics over resilient stream partitions",
  },
  {
    title: "Orbit Auth",
    description:
      "Identity and session service with policy-aware access control, audit trails, and secure token rotation workflows.",
    tags: ["Node", "PostgreSQL"],
    accent: "from-zinc-800 via-zinc-950 to-zinc-900",
    preview: "Authorization flows built for enterprise scale",
  },
  {
    title: "Canvas Ops",
    description:
      "Internal operations dashboard for release tracking, failure triage, and performance drill-down across squads.",
    tags: ["React", "GraphQL"],
    accent: "from-zinc-600 via-zinc-900 to-zinc-950",
    preview: "Unified operational visibility for fast teams",
  },
  {
    title: "Nimbus Deploy",
    description:
      "Progressive deployment control plane enabling canary rollouts, automated rollback signals, and environment parity checks.",
    tags: ["Kubernetes", "AWS"],
    accent: "from-zinc-700 via-zinc-950 to-black",
    preview: "Confident releases with safer production gates",
  },
  {
    title: "Ledger Flow",
    description:
      "Transaction reconciliation engine with deterministic matching rules, exception workflows, and SLA-first processing.",
    tags: ["Spring Boot", "Kafka"],
    accent: "from-zinc-600 via-zinc-900 to-zinc-950",
    preview: "Reconciliation accuracy at financial throughput",
  },
];

const techStack = ["Java", "Spring", "React", "AWS", "Kubernetes"];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[var(--surface-0)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--spotlight),transparent_68%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <section className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl gap-16 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:items-center lg:px-16">
        <div className="animate-[fade-up_0.8s_ease-out]">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.42em] text-[var(--muted)]">
            <span className="h-px w-14 bg-[var(--border-strong)]" />
            Software Engineer
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Building robust systems with{" "}
            <span className="text-[var(--accent)]">technical precision.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--foreground)]/74 sm:text-lg">
            Software engineer specializing in scalable enterprise applications,
            performance-minded backend systems, and refined React interfaces
            that feel fast under pressure.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center border border-[var(--surface-inverse)] bg-[var(--surface-inverse)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-inverse)] transition hover:-translate-y-0.5 hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border border-[var(--border-strong)] bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--surface-1)]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="animate-[fade-up_1s_ease-out] justify-self-center lg:justify-self-end">
          <div className="relative border border-[var(--border-strong)] bg-[var(--surface-3)] p-3 shadow-[var(--shadow-heavy)]">
            <div className="absolute -left-3 top-3 h-full w-full border border-[var(--border)]" />
            <div className="relative flex aspect-[4/5] w-full min-w-[290px] max-w-[390px] items-end overflow-hidden border border-[var(--border)] bg-[radial-gradient(circle_at_top,var(--hero-glow),transparent_24%),linear-gradient(180deg,var(--surface-1)_0%,var(--surface-3)_100%)] px-5 pb-5 pt-6">
              <div className="absolute inset-x-8 top-7 h-40 rounded-full bg-[radial-gradient(circle,var(--hero-glow-soft),transparent_70%)] blur-2xl" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,var(--shine-line)_50%,transparent_100%)] opacity-60" />
              <div className="absolute inset-x-6 top-8 flex items-center justify-center">
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[radial-gradient(circle_at_50%_35%,var(--hero-glow),var(--surface-3)_70%)] shadow-[0_0_80px_rgba(255,255,255,0.08)]">
                  <div className="absolute top-11 h-20 w-20 rounded-full border border-[var(--border-strong)] bg-[var(--surface-3)]" />
                  <div className="absolute bottom-10 h-28 w-40 rounded-[50%] border border-[var(--border-strong)] bg-[var(--surface-3)]" />
                  <span className="relative mt-16 font-mono text-4xl font-semibold tracking-[0.3em] text-[var(--foreground)]">
                    KK
                  </span>
                </div>
              </div>
              <div className="relative z-10 w-full border border-[var(--code-border)] bg-[var(--code-bg)] px-4 py-3 font-mono text-xs text-[var(--cyan)] shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                <span className="text-[var(--cyan-strong)]">const</span> developer = {"{"}{" "}
                <span className="text-[var(--foreground)]">name:</span>{" "}
                <span className="text-[var(--accent)]">&quot;Kaustuv&quot;</span>{" "}
                {"}"};
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16"
      >
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-14 bg-[var(--border-strong)]" />
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
            Experience
          </h2>
        </div>

        <article className="border border-[var(--border)] bg-[var(--surface-1)] p-8 shadow-[var(--shadow-card)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                Software Engineer
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                American Express
              </p>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              2021 - Present
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            {experienceItems.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-[var(--border)] pb-5 text-[var(--foreground)]/76 last:border-b-0 last:pb-0"
              >
                <span className="mt-1 text-lg leading-none text-[var(--muted)]">{">"}</span>
                <p className="max-w-4xl text-base leading-8">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Java", "Spring Boot", "Kubernetes", "PostgreSQL"].map((skill) => (
              <span
                key={skill}
                className="border border-[var(--border)] bg-[var(--tag-bg)] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--tag-text)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section
        id="projects"
        className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16"
      >
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
            Selected Projects
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--foreground)]/76 transition hover:text-[var(--foreground)]"
          >
            View All Archive
            <span aria-hidden="true" className="text-base">
              {"->"}
            </span>
          </Link>
        </div>

        <ProjectCards projects={projectCards} />
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-6 px-6 pb-24 pt-10 md:px-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-16">
        <article className="border border-[var(--border)] bg-[var(--surface-2)] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">
            Philosophy of Code
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
            Software should feel invisible.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--foreground)]/74">
            Great systems are measured by how quietly they solve meaningful
            problems. I care about maintainability, crisp interfaces, and
            architectures that stay understandable as they scale.
          </p>
        </article>

        <article className="flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--surface-3)] px-8 py-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-strong)] text-lg text-[var(--foreground)]">
            *
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.36em] text-[var(--muted)]">
            Tech Stack
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/78">
            {techStack.join(" / ")}
          </p>
        </article>
      </section>
    </div>
  );
}
