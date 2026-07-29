"use client";

import { useState } from "react";
import { Mail, MapPin, ArrowUp, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.svg"
                  alt="ProjuktiSoft Logo"
                  width={40}
                  height={40}
                  className="w-auto h-10 object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-bold text-base text-slate-900 tracking-tight leading-tight">
                  ProjuktiSoft
                </span>
                <span className="text-[8px] uppercase tracking-wider text-[#247c57] font-semibold mt-0.5">
                  Learn Today, Lead Tomorrow
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Software development studio run by a full-stack MERN developer in Assam, India. Creators of{" "}
              <a
                href="https://www.dailyaxom.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 hover:text-[#37B37F] underline decoration-emerald-500/40 underline-offset-2 transition-colors"
              >
                DailyAxom
              </a>{" "}
              and custom web apps.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/#services" className="hover:text-[#37B37F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#37B37F] font-medium text-slate-700 hover:text-[#37B37F] transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#37B37F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Studio Info
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#37B37F] shrink-0" />
                <span>Kokrajhar, Assam, India (783370)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <Mail className="w-3.5 h-3.5 text-[#37B37F] shrink-0" />
                <a href="mailto:contact@projuktisoft.com" className="hover:text-[#37B37F] transition-colors font-medium">
                  contact@projuktisoft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ProjuktiSoft. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#37B37F] hover:bg-slate-100 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                {modalType === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed custom-scrollbar">
              {modalType === "privacy" ? (
                <>
                  <p>
                    At <strong>ProjuktiSoft</strong>, accessible from <strong>https://projuktisoft.com</strong>, protecting your personal privacy and client data is one of our top priorities. This Privacy Policy document outlines the types of information collected and how we utilize it.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">1. Information We Collect</h4>
                  <p>
                    When you fill out our project inquiry briefs, contact form, or schedule a discovery call, we collect necessary contact information including your full name, email address, phone/WhatsApp number, and project requirement specifications.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">2. How We Use Your Information</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>To communicate with you regarding your project inquiry, estimates, and updates.</li>
                    <li>To scope, design, and engineer custom web applications, Android apps, and SEO strategies.</li>
                    <li>To provide ongoing support, bug fixes, and technical assistance.</li>
                  </ul>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">3. Data & Intellectual Property Confidentiality</h4>
                  <p>
                    Your proprietary business concepts, designs, user data, and codebase are kept strictly confidential. We do not sell, rent, or trade your personal or business data to third-party marketing services under any circumstances.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">4. Cookies & Analytics</h4>
                  <p>
                    We use minimal essential cookies to analyze site traffic and deliver a smooth browsing experience. You can manage your cookie preferences anytime via our cookie consent settings.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>ProjuktiSoft</strong>. By utilizing our software development services, purchasing custom platforms, or engaging in project contracts, you agree to comply with and be bound by the following terms.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">1. Project Scope & Deliverables</h4>
                  <p>
                    All project milestones, timelines, and deliverables are specified in individual project agreements. Changes or additions beyond the initial scope will be evaluated and billed separately.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">2. Source Code Ownership</h4>
                  <p>
                    Upon completion of full contract payment, <strong>100% full source code ownership</strong> and intellectual property rights for custom-developed applications are transferred directly to the client unless otherwise specified in custom licensing terms.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">3. Warranty & Bug Fix Support</h4>
                  <p>
                    We provide a standard post-launch support period (typically 30 to 90 days depending on contract tier) covering bug fixes, emergency stability patches, and operational guidance for deployed systems.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">4. Payment Terms</h4>
                  <p>
                    Projects generally follow a milestone payment schedule (e.g., initial deposit, mid-project milestone, final deployment). All payments must be cleared prior to final source code repository transfer or production domain launch.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <button
                onClick={() => setModalType(null)}
                className="w-full py-3 rounded-xl bg-[#37B37F] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-md shadow-[#37B37F]/20"
              >
                I Understand & Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
