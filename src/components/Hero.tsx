"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Code2, Sparkles, CheckCircle2, Terminal, ShieldCheck, Zap } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const row1Tags = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Next.js",
    "TypeScript",
    "Bilingual Content Systems",
    "Tailwind CSS",
    "REST APIs",
    "Redux Toolkit",
  ];

  const row2Tags = [
    "Android Apps",
    "Firebase",
    "SEO & Analytics",
    "Play Store Publishing",
    "Exam Prep Engines",
    "DailyAxom EdTech",
    "JWT Authentication",
    "Cloud Architecture",
    "Custom POS Tools",
    "Full-Stack MERN",
  ];

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white bg-grid-pattern border-b border-slate-200/80">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#37B37F]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#1f6d4d] text-xs font-bold uppercase tracking-widest mb-8 shadow-xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37B37F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37B37F]"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#37B37F]" />
            <span>SOFTWARE DEVELOPMENT STUDIO</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8"
          >
            <span className="block text-slate-900">Build smarter. Ship faster.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#37B37F] via-emerald-600 to-teal-700">
              Digital products, built to last.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Full-stack MERN development studio crafting high-performance web applications, 
            bilingual EdTech platforms like <strong className="text-slate-900 font-semibold underline decoration-[#37B37F] underline-offset-4">DailyAxom</strong>, 
            and custom freelance builds for ambitious founders and businesses.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#37B37F] text-white font-bold text-base hover:bg-emerald-600 transition-all duration-300 shadow-[0_8px_30px_rgba(55,179,127,0.35)] hover:shadow-[0_12px_35px_rgba(55,179,127,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-base transition-all duration-300 shadow-2xs hover:border-[#37B37F]/50 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#37B37F]" />
              <span>Book a Discovery Call</span>
            </button>
          </motion.div>

          {/* Quick Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-600 font-medium mb-16"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#37B37F]" />
              <span>100% Full Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs">
              <Zap className="w-4 h-4 text-[#37B37F]" />
              <span>MERN Stack + Native Android</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#37B37F]" />
              <span>Based in Kokrajhar, Assam</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Tech Marquee */}
      <div className="relative w-full overflow-hidden py-4 border-t border-slate-200/80 bg-slate-50/70 backdrop-blur-md">
        {/* Row 1 - Scrolling Left */}
        <div className="flex overflow-hidden whitespace-nowrap mb-3 select-none">
          <div className="animate-marquee-left flex gap-3">
            {[...row1Tags, ...row1Tags, ...row1Tags].map((tag, idx) => (
              <span
                key={`r1-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#37B37F] hover:text-slate-900 transition-colors shadow-2xs"
              >
                <Code2 className="w-3.5 h-3.5 text-[#37B37F]" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <div className="animate-marquee-right flex gap-3">
            {[...row2Tags, ...row2Tags, ...row2Tags].map((tag, idx) => (
              <span
                key={`r2-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#37B37F]/10 border border-[#37B37F]/25 text-xs font-semibold text-[#1e6648] hover:bg-[#37B37F]/20 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#37B37F]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
