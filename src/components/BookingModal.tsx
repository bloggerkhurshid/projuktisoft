"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, Sparkles, Calendar } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("Tomorrow 3:00 PM IST");

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const slots = [
    "Tomorrow 11:00 AM IST",
    "Tomorrow 3:00 PM IST",
    "Day After 2:00 PM IST",
    "Day After 6:00 PM IST",
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp discovery call booking message (No backend required!)
    const waText = encodeURIComponent(
      `*1-on-1 Discovery Call Booking*\n\n` +
      `*Name:* ${bookingForm.name}\n` +
      `*Email:* ${bookingForm.email}\n` +
      `*Phone/WhatsApp:* ${bookingForm.phone}\n` +
      `*Requested Slot:* ${selectedSlot}`
    );

    const waUrl = `https://wa.me/917002820458?text=${waText}`;
    
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#37B37F]/15 text-[#37B37F] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Booking Opened in WhatsApp!</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Your call slot choice <strong>{selectedSlot}</strong> has been pre-filled into WhatsApp. Click <strong>Send</strong> to confirm your Google Meet session!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-3 rounded-xl bg-[#37B37F] text-white font-bold text-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#37B37F]/10 text-[#247c57] text-xs font-semibold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-on-1 Strategy Call</span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Book a Discovery Call</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct 20-min technical consultation with full-stack lead.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">
                    Select Available Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                          selectedSlot === slot
                            ? "bg-[#37B37F]/15 border-[#37B37F] text-[#247c57]"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Clock className="w-3 h-3 text-[#37B37F]" />
                          <span className="font-bold">20 Mins</span>
                        </div>
                        <div className="truncate">{slot}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="Enter your name"
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
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#37B37F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#37B37F] hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md shadow-[#37B37F]/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  <span>Confirm Discovery Call</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
