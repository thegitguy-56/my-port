"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
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
    accent: "from-cyan-400/50 to-blue-500/50",
  },
  {
    title: "Energy Consumption ML Forecasting",
    desc: "Time-series forecasting pipeline with dashboards for pattern detection and scenario exploration.",
    impact: "Improved forecasting visibility with model-driven insights and explainable trends.",
    stack: ["Python", "Pandas", "Scikit-learn", "Plotly"],
    highlight: "Created forecasting views usable by both technical and non-technical users.",
    demoUrl: "#",
    repoUrl: "#",
    accent: "from-fuchsia-400/50 to-indigo-500/50",
  },
  {
    title: "Project Management Web App",
    desc: "Collaboration suite with role-based workflows, sprint tasking, and milestone tracking.",
    impact: "Centralized planning and execution into a single workflow-oriented workspace.",
    stack: ["Flask", "PostgreSQL", "JavaScript", "SQLAlchemy"],
    highlight: "Implemented role-aware actions to keep teams aligned on delivery.",
    demoUrl: "#",
    repoUrl: "#",
    accent: "from-emerald-400/50 to-teal-500/50",
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

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introSeen = window.localStorage.getItem("portfolio_intro_seen") === "true";

    return !reduceMotion && !introSeen;
  });

  const handleIntroComplete = () => {
    window.localStorage.setItem("portfolio_intro_seen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <TerminalIntro onComplete={handleIntroComplete} />}

      {!showIntro && (
        <main className="min-h-screen bg-brand-night text-white">
          <nav className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-40 bg-[#040917]/85">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg md:text-xl font-semibold tracking-wide text-cyan-200"
              >
                Rohan // Product Engineer
              </motion.h1>

              <div className="space-x-4 md:space-x-10 text-sm text-slate-200">
                <a href="#projects" className="hover:text-cyan-300 transition">
                  Projects
                </a>
                <a href="#skills" className="hover:text-cyan-300 transition">
                  Skills
                </a>
                <a href="#contact" className="hover:text-cyan-300 transition">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          <section className="relative text-center py-24 md:py-32 px-6 overflow-hidden section-grid">
            <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-cyan-500/20 blur-[170px] rounded-full" />

            <div className="relative max-w-5xl mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 mb-5"
              >
                Engineering Human-Centered Systems
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-200 via-blue-200 to-fuchsia-200 bg-clip-text text-transparent"
              >
                I design software that feels cinematic and performs like infrastructure.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-base md:text-xl text-slate-200/95 leading-relaxed max-w-3xl mx-auto"
              >
                I build mobile-first products, ML-backed experiences, and cloud systems that turn complex workflows into simple, addictive interactions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-cyan-200/90 mt-5 text-sm md:text-base"
              >
                Currently obsessed with AI-assisted products that are fast, reliable, and emotionally memorable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-11 flex flex-wrap justify-center gap-4"
              >
                <a href="#projects" className="btn-primary">
                  Explore Work
                </a>

                <a href="#contact" className="btn-secondary">
                  Let&apos;s Build Together
                </a>
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-24 px-6 section-contrast border-y border-white/10">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-semibold mb-5 text-center text-cyan-100"
              >
                Project Stories, Not Just Screenshots
              </motion.h2>
              <p className="text-center text-slate-300 mb-14 max-w-2xl mx-auto">
                Each build below focuses on one thing: combining technical depth with an experience people actually remember.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12 }}
                    className="group rounded-3xl border border-white/10 bg-[#090f24] p-7 relative overflow-hidden"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />

                    <h3 className="text-xl font-semibold mb-3 text-cyan-100">{project.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.desc}</p>
                    <p className="text-cyan-200/90 text-sm mb-5">{project.impact}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full border border-cyan-200/25 text-cyan-100/90"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-400 group-hover:text-slate-200 transition mb-6">{project.highlight}</p>

                    <div className="flex items-center gap-4 text-sm">
                      <a href={project.demoUrl} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition">
                        Live Demo <FaArrowRight className="text-xs" />
                      </a>
                      <a href={project.repoUrl} className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
                        Code <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center text-cyan-100">Technical Stack</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.14 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-cyan-300">{skill.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{skill.items}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 px-6 section-contrast border-t border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-100">Let&apos;s create your next wow moment.</h2>

              <p className="text-slate-200 mb-3">
                Open to internships, product collaborations, and ambitious engineering projects.
              </p>
              <p className="text-cyan-200/85 mb-10 text-sm">Average response time: within 24 hours.</p>

              <a href="mailto:volapurohan@gmail.com" className="btn-primary inline-block mb-6">
                Email Me
              </a>

              <div>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
                >
                  View Resume
                </a>
              </div>

              <div className="flex justify-center gap-8 text-3xl text-cyan-300 mt-10">
                <a
                  href="https://github.com/thegitguy-56"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="hover:text-white transition transform hover:scale-110"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/rohanvolapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="hover:text-white transition transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>

          <footer className="text-center py-12 text-slate-400 border-t border-white/10">© 2026 Rohan V — vrohan.xyz</footer>
        </main>
      )}
    </>
  );
}
