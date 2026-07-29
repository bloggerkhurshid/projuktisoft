"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Cookie, X } from "lucide-react";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const consent = localStorage.getItem("cookie_consent_choice");
    if (!consent) {
      // Small delay for natural page load feel, then trigger CSS transition
      const timer = setTimeout(() => {
        setMounted(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeBanner = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent_choice", choice);
    setIsClosing(true);
    // Wait for slide-out/fade-out animation to finish before unmounting
    setTimeout(() => {
      setMounted(false);
    }, 500);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 transition-all duration-500 ease-out transform ${
        isClosing
          ? "opacity-0 translate-y-8 scale-95 pointer-events-none"
          : "opacity-100 translate-y-0 scale-100 animate-slide-up"
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-xl text-white p-5 rounded-2xl shadow-2xl shadow-slate-950/40 border border-slate-800/80 flex flex-col gap-4 relative overflow-hidden group">
        {/* Subtle ambient gradient glow background */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#37B37F]/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#37B37F]/20 duration-700" />

        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#37B37F]/15 text-[#37B37F] flex items-center justify-center shrink-0 border border-[#37B37F]/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Cookie className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-slate-100 flex items-center gap-1.5 tracking-tight">
                We value your privacy
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                We use cookies to enhance your experience, analyze traffic, and improve our services.
              </p>
            </div>
          </div>
          <button
            onClick={() => closeBanner("declined")}
            aria-label="Close cookie banner"
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800/80 transition-all duration-200 shrink-0 hover:rotate-90"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800/80 relative z-10">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#37B37F]" />
            <span>GDPR & Cookie Compliant</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => closeBanner("declined")}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all duration-200 active:scale-95"
            >
              Decline
            </button>
            <button
              onClick={() => closeBanner("accepted")}
              className="px-4 py-1.5 text-xs font-semibold bg-[#37B37F] hover:bg-[#2e9c6e] text-slate-950 rounded-xl transition-all duration-200 shadow-md shadow-[#37B37F]/25 hover:shadow-lg hover:shadow-[#37B37F]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
