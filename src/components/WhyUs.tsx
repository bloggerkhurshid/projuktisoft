"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Rocket, UserCheck, ArrowRight, Check } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: ShieldCheck,
      benefit: "Your product, your ownership",
      description:
        "Full source code repository and cloud infrastructure handed over cleanly. Zero hidden fees or vendor lock-in.",
    },
    {
      icon: Cpu,
      benefit: "Built for your exact use case",
      description:
        "No generic WordPress templates or bloated site-builders. Tailored MERN architecture tuned to your workflow.",
    },
    {
      icon: Rocket,
      benefit: "Production-grade, not prototype",
      description:
        "Battle-tested, security-hardened code base deployed with automated pipelines and post-launch stability support.",
    },
    {
      icon: UserCheck,
      benefit: "One person, full accountability",
      description:
        "Direct line to the lead engineer crafting your product. Fast iterations, clear communication, zero account manager delay.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#37B37F]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#247c57] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#37B37F]/10 border border-[#37B37F]/30 mb-4 backdrop-blur-md">
            ENGINEERING PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why work with <span className="text-[#37B37F]">ProjuktiSoft</span>
          </h2>
          <p className="text-slate-600 text-base mt-4">
            We partner directly with founders and business owners to build software that drives real revenue and real impact.
          </p>
        </div>

        {/* 4-column feature block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#37B37F]/40 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#37B37F] transition-all">
                    <Icon className="w-6 h-6 text-[#37B37F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#37B37F] transition-colors">
                    {item.benefit}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Check className="w-3.5 h-3.5 text-[#37B37F]" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Bold Line & CTA Link */}
        <div className="text-center pt-6 border-t border-slate-200">
          <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Ready to convert your vision into a live, scalable product?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#37B37F] font-bold text-base hover:text-slate-900 transition-colors underline decoration-[#37B37F]/40 underline-offset-8 hover:decoration-slate-900"
          >
            <span>See how we work</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
