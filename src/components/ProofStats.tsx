"use client";

import { motion } from "framer-motion";
import { Award, Users, Code, Calendar, Sparkles, BookOpen } from "lucide-react";

export default function ProofStats() {
  const stats = [
    {
      value: "15+",
      label: "Projects Shipped",
      detail: "Full-stack MERN & Web products",
      icon: Award,
    },
    {
      value: "5,000+",
      label: "Users Served by DailyAxom",
      detail: "Assam exam-prep platform learners",
      icon: Users,
    },
    {
      value: "10+",
      label: "Technologies Mastered",
      detail: "React, Node, Mongo, Next & Android",
      icon: Code,
    },
    {
      value: "4+",
      label: "Years Engineering",
      detail: "Continuous production experience",
      icon: Calendar,
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-[#fafafa] relative border-t border-slate-200/80 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-[#247c57] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROOF & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Independent studio. <span className="text-[#37B37F]">Real products</span>, live today.
          </h2>
          <p className="text-slate-600 text-base mt-4">
            We don't sell vaporware. Here is our live flagship product and key stats built directly in public.
          </p>
        </div>

        {/* Flagship Product Showcase Card: DailyAxom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden group shadow-xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#37B37F]/15 blur-[140px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#37B37F]/15 text-[#247c57] text-xs font-bold uppercase tracking-wider">
                  Flagship Product
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-100/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live & Active
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
                DailyAxom <span className="text-slate-500 text-lg font-medium font-sans">Exam-Prep Engine</span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                An EdTech and exam preparation platform designed specifically for students in Assam preparing for competitive exams. Features bilingual practice modules (Assamese & English), real-time timed mock tests, automated scoring, and performance analytics.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-3 rounded-xl glass-pill">
                  <div className="text-xs text-slate-500 mb-1">Target Audience</div>
                  <div className="text-sm font-bold text-slate-900">Assam Students</div>
                </div>
                <div className="p-3 rounded-xl glass-pill">
                  <div className="text-xs text-slate-500 mb-1">Content Architecture</div>
                  <div className="text-sm font-bold text-[#37B37F]">Bilingual System</div>
                </div>
                <div className="p-3 rounded-xl glass-pill col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-500 mb-1">Tech Stack</div>
                  <div className="text-sm font-bold text-slate-900">React + Node + Mongo</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#37B37F] text-white font-bold text-sm hover:bg-emerald-600 transition-all shadow-md shadow-[#37B37F]/20"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Build an EdTech Product Like This</span>
                </a>
              </div>
            </div>

            {/* Right Card Visual Widget */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-6 border border-slate-200/90 shadow-xl relative">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">dailyaxom.in</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-700">
                  <div className="p-3 rounded-lg glass-pill flex justify-between items-center">
                    <span className="text-slate-500">Active Test Engine</span>
                    <span className="text-emerald-600 font-semibold">Online (99.9% Uptime)</span>
                  </div>
                  <div className="p-3 rounded-lg glass-pill flex justify-between items-center">
                    <span className="text-slate-500">Question Bank</span>
                    <span className="text-[#37B37F] font-bold">10,000+ MCQs</span>
                  </div>
                  <div className="p-3 rounded-lg glass-pill flex justify-between items-center">
                    <span className="text-slate-500">Language Support</span>
                    <span className="text-slate-900 font-semibold">Assamese + English</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Engineered by ProjuktiSoft</span>
                  <span className="text-[#37B37F] font-bold">100% In-House</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Stat Counters Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group transition-all"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#37B37F]/10 flex items-center justify-center mb-3 group-hover:bg-[#37B37F] transition-all">
                  <IconComp className="w-5 h-5 text-[#37B37F] group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 group-hover:text-[#37B37F] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
