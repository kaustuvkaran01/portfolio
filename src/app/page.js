
import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import Image from "next/image";
import heroImage from "@/images/heroimg.jpg";
import amexLogo from "@/images/amexlogo.png";

const experienceItems = [
  "Improved turnaround time of two high-volume APIs by 60% and 83%, cutting user journey time by 10 seconds.",
  "Improved three React services by 90% (15s to 1.57s) via lazy loading and refactoring.",
  "Built and launched a React + Spring Boot product with an 8000-user pilot.",
  "Introduced Factory Design Pattern with logging, metrics, and anomaly detection for better scalability.",
  "Refactored 100+ Java classes using Lombok, removing 3400 lines across three services.",
  "Automated dependency upgrades and deployments across 25 repositories, saving 100+ hours yearly.",
];

const researchItems = [
  "Built an end-to-end facial image reconstruction pipeline using GANs and OpenCV.",
  "Prepared a large CelebA-based dataset and tuned a GAN to generate realistic reconstructed faces.",
];

const achievements = [
  "Secure Coding Championship: Ranked 8th out of 600 globally (American Express, Oct 2023).",
  "GCST Hackathon: Ranked 1st out of 800 globally (American Express, Aug 2023).",
  "Smart India Hackathon: Evaluator (2025), National Winner (2019), Intra College Winner (2020).",
];

const projectCards = [
  {
    title: "Leaf Disease Detector",
    description:
      "Website hosting a deep learning based tomato leaf disease predictor with practical disease information for growers.",
    tags: ["Deep Learning", "Computer Vision"],
    accent: "from-zinc-800 via-zinc-900 to-black",
    preview: "AI-powered crop disease prediction interface",
  },
  {
    title: "CodeRED",
    description:
      "Locates nearby clean washrooms and medical supply stores to help users in urgent situations on the go.",
    tags: ["Maps", "Emergency Utility"],
    accent: "from-zinc-700 via-zinc-900 to-zinc-950",
    preview: "Geo-first utility for time-critical needs",
  },
  {
    title: "Expense Tracker",
    description:
      "Web app to track daily transactions. Built with React.js, ContextAPI, MongoDB, Express.js, and Node.js.",
    tags: ["React.js", "MERN"],
    accent: "from-zinc-700 via-zinc-950 to-black",
    preview: "Personal finance tracker with MERN architecture",
  },
];

const techStack = ["React.js", "Spring Boot", "Java", "Couchbase", "Elasticsearch"];

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
              <Image
                src={heroImage}
                alt="Kaustuv Karan portrait"
                fill
                sizes="(max-width: 1024px) 80vw, 390px"
                className="object-cover object-center"
                priority
              />
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
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                  Software Development Engineer 2
                </p>
                <Image
                  src={amexLogo}
                  alt="American Express logo"
                  className="h-14 w-auto shrink-0 object-contain"
                />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                American Express
              </p>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              Jan 2022 - Present
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
            {["React.js", "Redux", "Jest", "Spring Boot", "JUnit5", "Couchbase", "Elasticsearch"].map((skill) => (
              <span
                key={skill}
                className="border border-[var(--border)] bg-[var(--tag-bg)] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--tag-text)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="mt-8 border border-[var(--border)] bg-[var(--surface-1)] p-8 shadow-[var(--shadow-card)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                Researcher
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                Samsung PRISM Program
              </p>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              May 2021 - Dec 2021
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            {researchItems.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-[var(--border)] pb-5 text-[var(--foreground)]/76 last:border-b-0 last:pb-0"
              >
                <span className="mt-1 text-lg leading-none text-[var(--muted)]">{">"}</span>
                <p className="max-w-4xl text-base leading-8">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="border border-[var(--border)] bg-[var(--surface-1)] p-8 shadow-[var(--shadow-card)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">
              Education
            </p>
            <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
              Bachelor of Engineering
            </h3>
            <p className="mt-3 text-lg text-[var(--foreground)]/82">
              Computer Engineering
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]/74">
              Thapar Institute of Engineering and Technology, Patiala, Punjab
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]/74">
              August 2018 - July 2022
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--foreground)]/74">
              CGPA: 8.9 / 10.00 - Received Merit Based Scholarship
            </p>
          </article>

          <article className="border border-[var(--border)] bg-[var(--surface-1)] p-8 shadow-[var(--shadow-card)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">
              Achievements
            </p>
            <div className="mt-6 grid gap-4">
              {achievements.map((item) => (
                <p key={item} className="text-base leading-8 text-[var(--foreground)]/78">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
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
