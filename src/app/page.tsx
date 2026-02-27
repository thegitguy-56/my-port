"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaLocationArrow, FaRegStar } from "react-icons/fa";
import TerminalIntro from "../components/TerminalIntro";

type Project = {
  title: string;
  desc: string;
  impact: string;
  stack: string[];
  highlight: string;
  demoUrl: string;
  repoUrl: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "SnapFind — AI Lost & Found Platform",
    desc: "Full-stack Flutter + Firebase system for matching lost reports with found-item sightings in real time.",
    impact: "Designed moderation + matching flows that cut manual triage time for admins.",
    stack: ["Flutter", "Firebase", "Cloud Functions", "Maps API"],
    highlight: "Built trust-first verification workflow for false-claim reduction.",
    demoUrl: "#",
    repoUrl: "#",
    accent: "from-cyan-400/55 via-blue-500/60 to-indigo-500/60",
  },
  {
    title: "Energy Consumption ML Forecasting",
    desc: "Time-series forecasting pipeline with dashboards for pattern detection and scenario exploration.",
    impact: "Improved forecasting visibility with model-driven insights and explainable trends.",
    stack: ["Python", "Pandas", "Scikit-learn", "Plotly"],
    highlight: "Created forecasting views usable by both technical and non-technical users.",
    demoUrl: "#",
    repoUrl: "#",
    accent: "from-fuchsia-400/55 via-violet-500/60 to-indigo-500/60",
  },
  {
    title: "Project Management Web App",
    desc: "Collaboration suite with role-based workflows, sprint tasking, and milestone tracking.",
    impact: "Centralized planning and execution into a single workflow-oriented workspace.",
    stack: ["Flask", "PostgreSQL", "JavaScript", "SQLAlchemy"],
    highlight: "Implemented role-aware actions to keep teams aligned on delivery.",
    demoUrl: "#",
    repoUrl: "#",
    accent: "from-emerald-400/55 via-teal-500/60 to-cyan-500/60",
  },
];

const skills = [
  {
    title: "Core Programming",
    items: "Dart • Python • SQL • JavaScript",
  },
  {
    title: "App Development",
    items: "Flutter Mobile • Flutter Web • UI/UX • Navigation Architecture",
  },
  {
    title: "Backend & Cloud",
    items: "Flask • SQLAlchemy • Postgres • Firebase • Render Deployment",
  },
  {
    title: "Data & AI",
    items: "Time-Series Forecasting • Dashboards • Applied ML • Data Features",
  },
];

const stats = [
  { label: "Products shipped", value: "12+" },
  { label: "Avg. UX lift", value: "38%" },
  { label: "Cloud workflows", value: "20+" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introSeen = window.localStorage.getItem("portfolio_intro_seen") === "true";

    return !reduceMotion && !introSeen;
  });

  const statusText = useMemo(() => "Available for internships & selective freelance projects", []);

  const handleIntroComplete = () => {
    window.localStorage.setItem("portfolio_intro_seen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <TerminalIntro onComplete={handleIntroComplete} />}

      {!showIntro && (
        <main className="min-h-screen bg-brand-night text-white">
          <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#040917]/70 backdrop-blur-2xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
              <motion.h1
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold tracking-wide text-cyan-100 md:text-xl"
              >
                Rohan // Product Engineer
              </motion.h1>

              <div className="hidden items-center gap-8 text-sm text-slate-200 sm:flex">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          <section className="section-grid relative overflow-hidden px-6 py-24 text-center md:py-30">
            <div className="hero-aura hero-aura-left" />
            <div className="hero-aura hero-aura-right" />

            <div className="relative mx-auto max-w-5xl">
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="chip mx-auto mb-7 inline-flex"
              >
                <FaRegStar className="text-[10px]" />
                {statusText}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 text-5xl font-bold text-balance md:text-7xl"
              >
                <span className="text-gradient">Sleek interfaces.</span> Smart systems. <br />
                Delightful digital products.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200/95 md:text-xl"
              >
                I build mobile-first products, ML-backed experiences, and cloud systems that transform complex operations into polished, high-conversion user journeys.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-11 flex flex-wrap justify-center gap-4"
              >
                <a href="#projects" className="btn-primary">
                  Explore Work <FaArrowRight className="text-xs" />
                </a>
                <a href="#contact" className="btn-secondary">
                  Let&apos;s Build Together
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card rounded-2xl p-5 text-left">
                    <p className="text-3xl font-semibold text-cyan-100">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="projects" className="section-contrast border-y border-white/10 px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-5 text-center text-3xl font-semibold text-cyan-100 md:text-4xl"
              >
                Project Stories, Not Just Screenshots
              </motion.h2>
              <p className="mx-auto mb-14 max-w-2xl text-center text-slate-300">
                Every project below is designed for performance + clarity, with modern UI patterns that keep users engaged and confident.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    transition={{ delay: index * 0.12 }}
                    className="group glass-card relative overflow-hidden rounded-3xl border border-white/10 p-7"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />

                    <h3 className="mb-3 text-xl font-semibold text-cyan-100">{project.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.desc}</p>
                    <p className="mb-5 text-sm text-cyan-200/90">{project.impact}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-cyan-200/25 bg-cyan-100/5 px-3 py-1 text-xs text-cyan-100/90">
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="mb-6 text-sm text-slate-400 transition group-hover:text-slate-200">{project.highlight}</p>

                    <div className="flex items-center gap-4 text-sm">
                      <a href={project.demoUrl} className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-100">
                        Live Demo <FaArrowRight className="text-xs" />
                      </a>
                      <a href={project.repoUrl} className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
                        Code <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-14 text-center text-3xl font-semibold text-cyan-100 md:text-4xl">Technical Stack</h2>

              <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.12 }}
                    whileHover={{ scale: 1.03 }}
                    className="glass-card rounded-2xl border border-white/10 p-6"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-cyan-300">{skill.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{skill.items}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section-contrast border-t border-white/10 px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-semibold text-cyan-100 md:text-4xl">Let&apos;s create your next wow moment.</h2>

              <p className="mb-3 text-slate-200">Open to internships, product collaborations, and ambitious engineering projects.</p>
              <p className="mb-10 text-sm text-cyan-200/85">Average response time: within 24 hours.</p>

              <a href="mailto:volapurohan@gmail.com" className="btn-primary mx-auto mb-6 inline-flex">
                Email Me <FaLocationArrow className="text-xs" />
              </a>

              <div>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 underline underline-offset-4 hover:text-white"
                >
                  View Resume
                </a>
              </div>

              <div className="mt-10 flex justify-center gap-8 text-3xl text-cyan-300">
                <a
                  href="https://github.com/thegitguy-56"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="transition hover:scale-110 hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/rohanvolapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="transition hover:scale-110 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/10 py-12 text-center text-slate-400">© 2026 Rohan V — vrohan.xyz</footer>
        </main>
      )}
    </>
  );
}
