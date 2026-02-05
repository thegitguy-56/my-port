"use client";

import { motion } from "framer-motion";
import TerminalIntro from "../components/TerminalIntro";
import { useState } from "react";

const projects = [
  {
    title: "SnapFind — AI Lost & Found Platform",
    desc: "Full-stack Flutter + Firebase + cloud-based AI-assisted lost-and-found system with real-time sync, admin moderation workflows, and scalable backend architecture."
  },
  {
    title: "Energy Consumption ML Forecasting",
    desc: "Time-series forecasting pipeline using statistical ML models with interactive dashboards for analysing and predicting energy usage trends."
  },
  {
    title: "Online Software Project Management Tool",
    desc: "Full-stack project management platform with user roles, team collaboration, task scheduling, progress tracking and agile workflow monitoring for software teams."
  }
];

const skills = [
  {
    title: "Core Programming",
    items: "Dart (Flutter) • Python • SQL • JavaScript"
  },
  {
    title: "App & Product Development",
    items: "Flutter Mobile • Flutter Web • UI/UX Flow Design • Admin Dashboards • State & Navigation Architecture"
  },
  {
    title: "Backend, Cloud & Databases",
    items: "Flask REST APIs • SQLAlchemy • Postgres • Firebase (Auth, Firestore, Storage, Security Rules) • Render Cloud Deployment"
  },
  {
    title: "Data & AI Systems",
    items: "Time-Series Forecasting • Data Dashboards • Applied ML Integration • Data-driven Feature Design"
  }
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <TerminalIntro onComplete={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#030b1a] text-white overflow-hidden">

          {/* NAVBAR */}
          <nav className="flex justify-between items-center px-10 py-6 border-b border-blue-900/30 backdrop-blur-xl">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-semibold tracking-wider text-blue-300"
            >
              vrohan.xyz
            </motion.h1>

            <div className="space-x-8 text-sm text-blue-200">
              <a className="hover:text-white transition">Projects</a>
              <a className="hover:text-white transition">Skills</a>
              <a className="hover:text-white transition">Contact</a>
            </div>

          </nav>


          {/* HERO */}
          <section className="relative flex flex-col items-center justify-center text-center py-40 px-6">

            <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
            >
              ROHAN V
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100 max-w-2xl leading-relaxed"
            >
              Full-stack product engineer building mobile-first applications,
              cloud-backed systems and data-driven intelligent software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-14 flex gap-6"
            >
              <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold text-black hover:scale-105 transition">
                Explore Work
              </button>

              <button className="px-10 py-4 rounded-xl border border-blue-400/40 hover:border-blue-300 transition">
                Contact
              </button>
            </motion.div>

          </section>


          {/* PROJECTS */}
          <section className="px-6 py-28 max-w-7xl mx-auto">

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-semibold mb-20 text-center text-blue-200"
            >
              Featured Engineering Work
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12">

              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group p-8 rounded-3xl bg-blue-900/10 border border-blue-800/30 backdrop-blur-xl hover:bg-blue-800/20 transition"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-200 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-blue-100/80 leading-relaxed">
                    {project.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </section>


          {/* SKILLS */}
          <section className="px-6 py-28 border-t border-blue-900/30">

            <h2 className="text-4xl font-semibold mb-20 text-center text-blue-200">
              Technical Stack
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-cyan-300">
                    {skill.title}
                  </h3>

                  <p className="text-blue-100/80 leading-relaxed">
                    {skill.items}
                  </p>
                </motion.div>
              ))}

            </div>

          </section>


          {/* FOOTER */}
          <footer className="text-center py-14 text-blue-300/60 border-t border-blue-900/30">
            © 2026 Rohan V — vrohan.xyz
          </footer>

        </main>
      )}
    </>
  );
}
