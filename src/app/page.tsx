"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ProofStats from "@/components/ProofStats";
import Industries from "@/components/Industries";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00f0ff] selection:text-black">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={() => setBookingOpen(true)} />

      {/* 3. Services Grid */}
      <Services />

      {/* 4. Why Work With ProjuktiSoft */}
      <WhyUs />

      {/* 5. Proof & Built In Public Stats */}
      <ProofStats />

      {/* 6. Industries & Use-Cases Served */}
      <Industries />

      {/* 7. Contact Section */}
      <ContactSection />

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
}
