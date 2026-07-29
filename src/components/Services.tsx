"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Store,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  Layers,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  tags: string[];
  features: string[];
  deliverables: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: "web-dev",
      number: "01",
      title: "Web App Development",
      subtitle: "Full-stack MERN web applications & SaaS",
      description:
        "High-performance MongoDB, Express, React, and Node.js web applications, custom interactive dashboards, and administrative panels built for speed and security.",
      icon: Globe,
      tags: ["MERN Stack", "Admin Dashboards", "REST APIs"],
      features: [
        "Single-Page & Server-Side Rendered Web Apps",
        "Role-Based Access Control & Admin Panels",
        "High-throughput RESTful & GraphQL APIs",
        "MongoDB Data Modeling & Performance Indexing",
      ],
      deliverables: [
        "Fully production-ready MERN codebase",
        "CI/CD deployment pipeline setup",
        "API documentation & Architecture diagram",
      ],
    },
    {
      id: "edtech",
      number: "02",
      title: "EdTech & Content Platforms",
      subtitle: "Bilingual learning platforms & examination engines",
      description:
        "Specialized learning platforms inspired by DailyAxom. Features bilingual quiz engines, timed mock tests, student leaderboards, and instant results.",
      icon: GraduationCap,
      tags: ["Exam Prep Engine", "Assamese/English", "Scalable Systems"],
      features: [
        "Interactive Timer-Based Mock Tests & Quizzes",
        "Bilingual Content (English + Regional Languages)",
        "Instant Scoring, Rank Cards & Analytics",
        "Subscription & Razorpay/Stripe Payment Gateway",
      ],
      deliverables: [
        "Scalable EdTech engine codebase",
        "Question bank bulk upload CSV parser",
        "Admin panel for managing students & exams",
      ],
    },
    {
      id: "business-tools",
      number: "03",
      title: "Business & E-commerce Tools",
      subtitle: "Custom inventory, POS, & billing systems",
      description:
        "Tailored web tools for local merchants, retailers, and growing teams. Simplify daily sales tracking, invoice generation, inventory management, and reporting.",
      icon: Store,
      tags: ["Custom POS", "Inventory Apps", "Billing Engines"],
      features: [
        "Fast GST Invoice & Digital Receipt Generator",
        "Real-time Inventory & Low-stock Alerts",
        "Daily/Monthly Profit & Loss Analytics",
        "Multi-device Responsive Interface",
      ],
      deliverables: [
        "Lightweight offline-capable web app",
        "Automated PDF bill generator engine",
        "Secure local & cloud database sync",
      ],
    },
    {
      id: "android-dev",
      number: "04",
      title: "Android App Development",
      subtitle: "Native-feel Android apps published to Google Play",
      description:
        "Smooth, responsive mobile applications for Android users. Built with modern web technologies, WebViews, PWA, or React Native for maximum performance.",
      icon: Smartphone,
      tags: ["Play Store Apps", "WebView / PWA", "Offline Support"],
      features: [
        "Optimized Android Apps & APK/AAB Builds",
        "Push Notifications & Firebase Cloud Messaging",
        "Google Play Console Store Submission",
        "Offline Caching & Fast Mobile Navigation",
      ],
      deliverables: [
        "Google Play Store ready .aab bundle",
        "Play Store listing asset guidance",
        "Push notification setup & dashboard",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#37B37F]/10 border border-[#37B37F]/30 text-[#247c57] text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Solutions built for <span className="text-[#37B37F]">real problems</span>.
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md">
            No bloated bloatware or unmaintained code. We build clean, high-performing digital systems designed to scale with your ambitions.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <div className="absolute right-4 top-4 text-7xl font-black text-slate-900/[0.04] group-hover:text-[#37B37F]/[0.1] transition-colors pointer-events-none select-none">
                  {service.number}
                </div>

                <div>
                  {/* Top bar with icon and number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center group-hover:border-[#37B37F]/50 group-hover:bg-[#37B37F] transition-all">
                      <IconComponent className="w-7 h-7 text-[#37B37F] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-[#37B37F] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#37B37F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 group-hover:border-[#37B37F]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#37B37F] hover:text-slate-900 transition-colors pt-4 border-t border-slate-100 w-full justify-between cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#37B37F]/15 text-[#247c57]">
                  {selectedService.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Detailed Scope & Architecture
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                {selectedService.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                {selectedService.description}
              </p>

              {/* Key Features list */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#37B37F]" />
                  What We Build & Deliver
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#37B37F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables list */}
              <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Key Handover Deliverables
                </h4>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {selectedService.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#37B37F]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#37B37F] hover:bg-emerald-600 text-white text-sm font-bold transition-colors shadow-md shadow-[#37B37F]/20"
                >
                  Request This Solution
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
