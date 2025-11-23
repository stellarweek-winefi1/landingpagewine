"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Target, FileCheck, Globe, Zap, Users, Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function BenefitsSection() {
  const { t } = useLanguage();
  
  const icons = [Shield, TrendingUp, Target, FileCheck, Globe, Zap, Users, Award];
  const benefits = t.benefits.items.map((benefit, index) => ({
    icon: icons[index],
    title: benefit.title,
    description: benefit.description,
  }));

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.benefits.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.benefits.description}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-gray-900 transition-all duration-300 h-full group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t.benefits.ctaTitle}
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            {t.benefits.ctaDescription}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/waitlist"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {t.benefits.ctaButton}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
