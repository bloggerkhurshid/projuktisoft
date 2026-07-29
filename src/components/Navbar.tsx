"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "DailyAxom", href: "/#showcase" },
    { name: "Industries", href: "/#industries" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        style={{
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.75)" : "transparent",
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 border-b border-slate-200/80 shadow-xs"
            : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand Header */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              {/* Logo SVG */}
              <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/logo.svg"
                  alt="ProjuktiSoft Logo"
                  width={40}
                  height={40}
                  className="w-auto h-10 object-contain"
                  priority
                />
              </div>

              {/* Small Brand Text Stack */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-slate-900 group-hover:text-[#37B37F] transition-colors leading-tight">
                    ProjuktiSoft
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#37B37F] animate-pulse"></span>
                </div>
                <span className="text-[8px] uppercase tracking-wider text-slate-500 font-medium leading-none mt-0.5">
                  Learn Today, Lead Tomorrow
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Glass Pill Capsule */}
            <nav
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              }}
              className="hidden md:flex items-center gap-1 border border-emerald-500/20 rounded-full px-4 py-1.5 shadow-xs"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-sm font-medium text-slate-700 hover:text-[#37B37F] transition-colors rounded-full hover:bg-white/80"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#37B37F] text-white font-bold text-sm hover:bg-emerald-600 transition-all duration-300 shadow-[0_4px_15px_rgba(55,179,127,0.35)] hover:shadow-lg cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/80 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
            className="fixed inset-x-0 top-[65px] z-40 border-b border-slate-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 hover:text-[#37B37F] py-2 border-b border-slate-100"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#37B37F] text-white font-bold text-base shadow-md shadow-[#37B37F]/20"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
