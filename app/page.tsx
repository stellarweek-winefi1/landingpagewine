"use client";

import dynamic from "next/dynamic";

// Lazy load sections for better performance
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: true,
});

const ProblemSection = dynamic(() => import("@/components/ProblemSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white" />,
});

const SolutionSection = dynamic(() => import("@/components/SolutionSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50" />,
});

const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white" />,
});

const PhaseTwo = dynamic(() => import("@/components/PhaseTwo"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <PhaseTwo />
      <Footer />
    </main>
  );
}
