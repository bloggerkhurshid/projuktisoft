"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Search, Briefcase, ArrowUpRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Website Development",
      icon: Globe,
      badge: "Web Apps & Portals",
      description:
        "Modern responsive websites, custom React/Next.js web applications, client portals, and fast landing pages built for businesses.",
      highlights: ["React & Next.js Stack", "Fast Loading & Mobile First", "Admin Control Dashboards"],
    },
    {
      title: "Android Development",
      icon: Smartphone,
      badge: "Google Play Store",
      description:
        "Custom Android applications published directly to the Play Store with push notifications, offline support, and smooth mobile UX.",
      highlights: ["Play Store Publishing", "Push Notifications", "Fast Mobile UX"],
    },
    {
      title: "SEO Service",
      icon: Search,
      badge: "Google Ranking",
      description:
        "Technical SEO, speed optimization, local SEO, and keyword strategies to boost organic search engine visibility and website traffic.",
      highlights: ["Technical SEO Audit", "Schema Structured Data", "Page Speed Optimization"],
    },
    {
      title: "Business Tools & Services",
      icon: Briefcase,
      badge: "POS, Billing & EdTech",
      description:
        "Custom billing software, GST invoicing, inventory tools, and bilingual EdTech/learning platforms tailored to operational needs.",
      highlights: ["GST Billing & POS", "EdTech Exam Engines", "Inventory Management"],
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
