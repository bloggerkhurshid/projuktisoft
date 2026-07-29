"use client";

import { motion } from "framer-motion";
import { BookOpen, ShoppingBag, Rocket, Smartphone, ArrowUpRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Education & EdTech",
      icon: BookOpen,
      badge: "Bilingual Systems",
      description:
        "Custom exam prep tools, mock test platforms, Assamese/English learning systems, and automated student progress tracking.",
      highlights: ["Timer Mock Tests", "Leaderboards & Ranks", "PDF Note Downloads"],
    },
    {
      title: "Retail & Local Business",
      icon: ShoppingBag,
      badge: "Billing & POS",
      description:
        "Fast GST invoice generation, sales inventory dashboards, and custom management tools for shops and local enterprises.",
      highlights: ["GST Invoice Generator", "Stock Tracker", "Daily Revenue Reports"],
    },
    {
      title: "Startups & Founders",
      icon: Rocket,
      badge: "Rapid MVPs",
      description:
        "Transform raw ideas into production-grade web applications in weeks. Scalable MERN stack foundation built for growth.",
      highlights: ["Clean Codebase", "Auth & Payments", "Cloud Ready"],
    },
    {
      title: "Android & Mobile",
      icon: Smartphone,
      badge: "Play Store Apps",
      description:
        "Responsive cross-platform mobile experiences published directly to the Google Play Store with offline capabilities.",
      highlights: ["Play Store Deployment", "Push Notifications", "Fast Mobile UX"],
    },
  ];

  return (
    <section id="industries" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block text-[#247c57] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#37B37F]/10 border border-[#37B37F]/30 mb-3 backdrop-blur-md">
              TARGET SECTORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Industries & <span className="text-[#37B37F]">use-cases</span> served
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md">
            Purpose-built solutions tailored to specific industry workflows, student needs, and commercial operations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-[#37B37F]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center group-hover:bg-[#37B37F] transition-all">
                      <IconComp className="w-6 h-6 text-[#37B37F] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#37B37F] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1.5 pt-4 border-t border-slate-100 mb-4">
                    {ind.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#37B37F]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#37B37F] group-hover:text-slate-900 transition-colors"
                  >
                    <span>Discuss Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
