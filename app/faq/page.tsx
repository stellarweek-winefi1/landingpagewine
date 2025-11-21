"use client";

import dynamic from "next/dynamic";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <main className="overflow-x-hidden">
      <FAQSection />
      <Footer />
    </main>
  );
}

