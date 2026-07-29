"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Code2,
  CheckCircle2,
  Clock,
  Sparkles,
  Send,
  GraduationCap,
  Briefcase,
  FileCheck,
  Users,
  ArrowRight,
  X,
  Zap,
  Check,
  ShieldCheck,
} from "lucide-react";

export default function CareersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    role: "Content Writer Intern",
    duration: "3 Months",
    portfolio: "",
    coverLetter: "",
  });

  const roles = [
    {
      id: "content-writer",
      title: "Content Writer Intern",
      platform: "DailyAxom EdTech Engine",
      type: "Unpaid Internship (3–6 Months)",
      badge: "Certificate + Training",
      icon: BookOpen,
      tagline: "Empower 5,000+ Assam students with high-quality educational content.",
      description:
        "Craft bilingual educational study notes, Assamese & English exam-prep MCQs, syllabus breakdowns, and regional SEO articles for Assam's premier student platform DailyAxom.",
      responsibilities: [
        "Curate and double-check Assamese & English exam MCQs for competitive exams.",
        "Author clear, structured study notes and syllabus topic summaries.",
        "Collaborate with the lead team to schedule daily practice test content.",
        "Apply basic SEO principles to help students find study materials online.",
      ],
      skills: ["Assamese & English Fluency", "EdTech Interest", "Strong Writing", "Research Ability"],
      perks: [
        "Official Verified Certificate of Completion with Training",
        "Performance-based Letter of Recommendation",
        "100% Remote & Flexible Work Hours",
        "Direct impact on thousands of regional learners",
      ],
    },
    {
      id: "junior-developer",
      title: "Junior Developer Intern",
      platform: "ProjuktiSoft Software Studio",
      type: "Unpaid Internship (3–6 Months)",
      badge: "Certificate + Training",
      icon: Code2,
      tagline: "Build live production features using modern MERN stack tools.",
      description:
        "Gain real hands-on development experience in React.js, Node.js, Express, MongoDB, and Tailwind CSS. Work on live production codebases alongside full-stack engineers.",
      responsibilities: [
        "Build modern, responsive UI components using React and Tailwind CSS.",
        "Assist in developing and testing RESTful API endpoints with Node.js.",
        "Participate in Git pull request reviews and bug fixing sprints.",
        "Learn database modeling, state management, and deployment workflows.",
      ],
      skills: ["JavaScript (ES6+)", "React.js Basics", "Tailwind CSS", "Git & GitHub"],
      perks: [
        "Official Verified Certificate of Development Training",
        "1-on-1 Code Reviews & Architecture Mentorship",
        "Build portfolio-worthy live production projects",
        "LinkedIn Skill Endorsement & Recommendation",
      ],
    },
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp application message (No backend required!)
    const waText = encodeURIComponent(
      `*New Internship Application*\n\n` +
      `*Position:* ${applicantData.role}\n` +
      `*Applicant Name:* ${applicantData.name}\n` +
      `*Email:* ${applicantData.email}\n` +
      `*WhatsApp Phone:* ${applicantData.phone}\n` +
      `*College/Location:* ${applicantData.college}\n` +
      `*Tenure:* ${applicantData.duration}\n` +
      `*Portfolio/Resume:* ${applicantData.portfolio || 'N/A'}\n` +
      `*Motivation Note:* ${applicantData.coverLetter}`
    );

    const waUrl = `https://wa.me/917002820458?text=${waText}`;
    
    // Open WhatsApp tab & show completion
    window.open(waUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-[#37B37F] selection:text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 bg-white border-b border-slate-200/80 bg-grid-pattern relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#37B37F]/15 via-teal-200/30 to-emerald-100/40 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#1f6d4d] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37B37F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37B37F]"></span>
            </span>
            <GraduationCap className="w-4 h-4 text-[#37B37F]" />
            <span>CAREERS & INTERNSHIPS (3–6 MONTHS)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6"
          >
            Learn Today, Lead Tomorrow. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#37B37F] via-emerald-600 to-teal-700">
              Build your future with us.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Work on live production products, receive 1-on-1 technical guidance, and earn an official <strong>Certificate of Completion with Training</strong>.
          </motion.p>

          {/* Quick Highlight Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <FileCheck className="w-4 h-4 text-[#37B37F]" />
              <span>Verified Certificate with Training</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <Clock className="w-4 h-4 text-[#37B37F]" />
              <span>3 to 6 Months Tenure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <Users className="w-4 h-4 text-[#37B37F]" />
              <span>Direct Founder Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Roles Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-8">
            <div>
              <span className="inline-block text-[#247c57] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#37B37F]/10 border border-[#37B37F]/30 mb-3">
                OPEN OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Available Internship Roles
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Gain practical skills by contributing to live educational platforms and modern web software.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {roles.map((role) => {
              const IconComp = role.icon;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-slate-200 shadow-xl hover:border-[#37B37F]/50 transition-all bg-white group"
                >
                  <div>
                    {/* Role Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#37B37F] transition-all">
                        <IconComp className="w-7 h-7 text-[#37B37F] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {role.type}
                        </span>
                        <span className="text-[10px] font-bold text-[#247c57] flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          {role.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 group-hover:text-[#37B37F] transition-colors">
                      {role.title}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      {role.platform}
                    </div>

                    <p className="text-sm font-semibold text-[#247c57] mb-3">
                      "{role.tagline}"
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {role.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#37B37F]" />
                        What You Will Do
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#37B37F] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements & Skills */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2">
                        Preferred Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Apply Trigger Button */}
                  <button
                    onClick={() => {
                      setApplicantData({ ...applicantData, role: role.title });
                      setSelectedRole(role.id);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#37B37F] hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md shadow-[#37B37F]/20 cursor-pointer"
                  >
                    <span>Apply for {role.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Certification Guarantee Card */}
          <div className="bg-gradient-to-br from-white via-emerald-50/50 to-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#247c57] px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-3 inline-block">
                  PROGRAM CREDENTIALS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  Certificate with Training Included
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Every intern completing 3 to 6 months receives a verified Certificate of Internship & Training credentials from ProjuktiSoft, a formal Letter of Recommendation, and real project experience to supercharge your resume.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <FileCheck className="w-5 h-5 text-[#37B37F] mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-900">Certificate</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-[#37B37F] mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-900">Training</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <Award className="w-5 h-5 text-[#37B37F] mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-900">Recommendation</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <Briefcase className="w-5 h-5 text-[#37B37F] mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-900">Live Projects</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-36 h-36 rounded-full bg-[#37B37F]/10 border-2 border-[#37B37F]/30 flex flex-col items-center justify-center text-center p-4 shadow-lg">
                  <Award className="w-10 h-10 text-[#37B37F] mb-1" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900">
                    ProjuktiSoft Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  setSelectedRole(null);
                  setFormSubmitted(false);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#37B37F]/20 text-[#37B37F] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Form Opened!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Your application details have been pre-filled into WhatsApp. Click <strong>Send</strong> in WhatsApp to submit your application!
                  </p>
                  <button
                    onClick={() => {
                      setSelectedRole(null);
                      setFormSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#37B37F] text-white font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#37B37F]/10 text-[#247c57] text-xs font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply Now</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Submit Internship Application
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Selected Position: <strong className="text-slate-900">{applicantData.role}</strong>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantData.name}
                        onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                        placeholder="e.g. Ananya Das"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        placeholder="ananya@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        College / Location
                      </label>
                      <input
                        type="text"
                        value={applicantData.college}
                        onChange={(e) => setApplicantData({ ...applicantData, college: e.target.value })}
                        placeholder="e.g. Gauhati University / Kokrajhar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Internship Tenure
                      </label>
                      <select
                        value={applicantData.duration}
                        onChange={(e) => setApplicantData({ ...applicantData, duration: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#37B37F]"
                      >
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Portfolio / GitHub / Resume Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={applicantData.portfolio}
                        onChange={(e) => setApplicantData({ ...applicantData, portfolio: e.target.value })}
                        placeholder="https://github.com/yourusername"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Why are you interested in this internship? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={applicantData.coverLetter}
                      onChange={(e) => setApplicantData({ ...applicantData, coverLetter: e.target.value })}
                      placeholder="Share a short note about your goals, current skills, and weekly availability..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#37B37F] hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md shadow-[#37B37F]/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 inline mr-2" />
                    <span>Submit Application via WhatsApp</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
