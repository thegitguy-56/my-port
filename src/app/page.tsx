"use client";

import { motion } from "framer-motion";
import TerminalIntro from "../components/TerminalIntro";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "SnapFind — AI Lost & Found Platform",
    desc: "Full-stack Flutter + Firebase + cloud-based AI-assisted lost-and-found system with real-time sync, admin moderation workflows, and scalable backend architecture."
  },
  {
    title: "Energy Consumption ML Forecasting",
    desc: "Time-series forecasting pipeline using statistical ML models with interactive dashboards."
  },
  {
    title: "Online Software Project Management Tool",
    desc: "Full-stack project management platform with user roles, team collaboration, task scheduling and agile workflow monitoring."
  }
];

const skills = [
  {
    title: "Core Programming",
    items: "Dart • Python • SQL • JavaScript"
  },
  {
    title: "App Development",
    items: "Flutter Mobile • Flutter Web • UI/UX • Dashboards • Navigation Architecture"
  },
  {
    title: "Backend & Cloud",
    items: "Flask • SQLAlchemy • Postgres • Firebase • Render Deployment"
  },
  {
    title: "Data & AI",
    items: "Time-Series Forecasting • Dashboards • Applied ML • Data Driven Features"
  }
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
        <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#030b1a] text-white">

          {/* NAVBAR */}
          <nav className="border-b border-blue-900/30 backdrop-blur-xl sticky top-0 z-40 bg-[#020617]/80">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg md:text-xl font-semibold tracking-wide text-blue-300"
              >
                My Portfolio
              </motion.h1>

              <div className="space-x-4 md:space-x-10 text-sm text-blue-200">
                <a href="#projects" className="hover:text-white transition">Projects</a>
                <a href="#skills" className="hover:text-white transition">Skills</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>

            </div>
          </nav>

          {/* HERO */}
          <section className="relative text-center py-28 md:py-36 px-6 overflow-hidden">

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/20 blur-[160px] rounded-full" />

            <div className="relative max-w-4xl mx-auto">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
              >
                ROHAN V
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-blue-100 leading-relaxed"
              >
                Full-stack product engineer building mobile-first applications,
                cloud-backed systems and data-driven intelligent software.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold text-black hover:scale-105 transition"
                >
                  Explore Work
                </a>

                <a
                  href="#contact"
                  className="px-8 py-3 rounded-xl border border-blue-400/40 hover:border-blue-300 transition"
                >
                  Contact
                </a>
              </motion.div>

            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-28 px-6">
            <div className="max-w-7xl mx-auto">

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-semibold mb-16 text-center text-blue-200"
              >
                Featured Engineering Work
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="p-8 rounded-3xl bg-blue-900/10 border border-blue-800/30 backdrop-blur-xl hover:bg-blue-800/20 transition"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200">
                      {project.title}
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed text-sm md:text-base">
                      {project.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="py-28 px-6 border-t border-blue-900/30">
            <div className="max-w-6xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-blue-200">
                Technical Stack
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-cyan-300">
                      {skill.title}
                    </h3>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      {skill.items}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-28 px-6 border-t border-blue-900/30">
            <div className="max-w-3xl mx-auto text-center">

              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">
                Contact
              </h2>

              <p className="text-blue-100 mb-10">
                Open to collaboration, internships, and project discussions.
              </p>

              {/* Email Button */}
              <a
                href="mailto:volapurohan@gmail.com"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition inline-block mb-10"
              >
                Email Me
              </a>

              {/* Social Links */}
              <div className="flex justify-center gap-8 text-3xl text-blue-300">

                <a
                  href="https://github.com/thegitguy-56"
                  target="_blank"
                  className="hover:text-white hover:scale-110 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/rohanvolapu"
                  target="_blank"
                  className="hover:text-white hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>
          </section>

          {/* FOOTER */}
          <footer className="text-center py-12 text-blue-300/60 border-t border-blue-900/30">
            © 2026 Rohan V — vrohan.xyz
          </footer>

        </main>
      )}
    </>
  );
}