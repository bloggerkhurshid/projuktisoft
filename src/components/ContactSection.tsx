"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, Sparkles, ArrowRight, Globe, Smartphone, Search, Store, Phone, Code2 } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Website Development",
    message: "",
  });

  const projectTypes = [
    { label: "Website Development", icon: Globe },
    { label: "Android Development", icon: Smartphone },
    { label: "SEO Services", icon: Search },
    { label: "Business Tools & Services", icon: Store },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Free FormSubmit AJAX (Delivers straight to contact@projuktisoft.com)
      await fetch("https://formsubmit.co/ajax/contact@projuktisoft.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry from ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          ProjectType: formData.projectType,
          Message: formData.message,
        }),
      });
    } catch (error) {
      console.log("Submission fallback");
    } finally {
      // Also format pre-filled WhatsApp link as direct channel
      const waText = encodeURIComponent(
        `*New Project Inquiry Brief*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone/WhatsApp:* ${formData.phone}\n` +
        `*Project Type:* ${formData.projectType}\n` +
        `*Details:* ${formData.message}`
      );
      window.open(`https://wa.me/917002820458?text=${waText}`, "_blank");

      setLoading(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#fafafa] relative border-t border-slate-200 bg-grid-pattern">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#37B37F]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-[#247c57] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S BUILD TOGETHER</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Got a project in mind? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#37B37F] to-emerald-600">
              Let's talk.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Direct line to the developer engineering your product. Fast response within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl glass-card backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Direct Outreach</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Prefer direct communication over brief forms? Reach out to our lead developer directly anytime via call, WhatsApp, or email.
              </p>

              {/* Info List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#37B37F]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Call / WhatsApp</div>
                    <a
                      href="https://wa.me/917002820458"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-800 hover:text-[#37B37F] transition-colors"
                    >
                      +91 70028 20458
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#37B37F]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Us Directly</div>
                    <a
                      href="mailto:contact@projuktisoft.com"
                      className="text-sm font-semibold text-slate-800 hover:text-[#37B37F] transition-colors"
                    >
                      contact@projuktisoft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#37B37F]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Studio Location</div>
                    <div className="text-sm font-semibold text-slate-800">Kokrajhar, Assam, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 text-[#37B37F]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Lead Developer & Founder</div>
                    <div className="text-sm font-semibold text-slate-800">Khurshid Alom</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#37B37F]/10 border border-[#37B37F]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#37B37F]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Response SLA</div>
                    <div className="text-sm font-semibold text-[#37B37F]">Replies within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct CTA */}
            <div className="pt-6 border-t border-slate-200/80">
              <a
                href="https://wa.me/917002820458?text=Hi%20ProjuktiSoft,%20I'd%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-50 hover:bg-[#37B37F] border border-emerald-200 text-emerald-800 hover:text-white font-bold text-sm transition-all duration-300 group shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#37B37F] group-hover:text-white transition-colors" />
                <span>Chat on WhatsApp Directly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 sm:p-10 rounded-3xl glass-card backdrop-blur-xl flex flex-col justify-center">
              {formSubmitted ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#37B37F]/20 text-[#37B37F] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Brief Submitted!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                      Thank you, <strong>{formData.name}</strong>. Your brief has been sent to <strong>contact@projuktisoft.com</strong>. We will reply within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                    >
                      Submit Another Brief
                    </button>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">Project Inquiry Brief</h3>
                    <span className="text-xs text-[#247c57] font-semibold">Direct Brief Inquiry</span>
                  </div>

                  {/* Name, Email, & Phone inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#37B37F] focus:bg-white transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#37B37F] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#37B37F] focus:bg-white transition-all text-sm"
                    />
                  </div>

                  {/* Project Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                      Select Service / Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {projectTypes.map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.projectType === item.label;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: item.label })}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                              isSelected
                                ? "bg-[#37B37F] text-white shadow-sm shadow-[#37B37F]/30"
                                : "bg-slate-50/80 border border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-white" : "text-[#37B37F]"}`} />
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Overview textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your product vision, target audience, key features, or reference links..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#37B37F] focus:bg-white transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#37B37F] hover:bg-emerald-600 text-white font-bold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(55,179,127,0.3)] hover:shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Brief</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
