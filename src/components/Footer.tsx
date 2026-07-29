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
              Software development studio run by a full-stack MERN developer in Assam, India. Creators of DailyAxom and custom web apps.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#services" className="hover:text-[#37B37F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-[#37B37F] transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-[#37B37F] transition-colors">
                  DailyAxom Showcase
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#37B37F] font-semibold text-[#37B37F] transition-colors">
                  Careers & Internships
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {modalType === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {modalType === "privacy"
                ? "ProjuktiSoft values client privacy. We collect minimal information solely for communication, project scoping, and software delivery. Your data and proprietary source code are strictly confidential and will never be shared."
                : "All client projects built by ProjuktiSoft come with complete source code ownership upon final delivery. Standard guarantees apply for bug fixes and launch stability as specified in individual contract agreements."}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="w-full py-2.5 rounded-xl bg-[#37B37F] text-white font-bold text-xs hover:bg-emerald-600 transition-colors"
            >
              Understand & Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
