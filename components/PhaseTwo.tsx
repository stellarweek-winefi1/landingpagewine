"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, DollarSign, TrendingUp, Lock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function PhaseTwo() {
  const { t } = useLanguage();
  
  const icons = [ShoppingBag, DollarSign, TrendingUp, Lock];
  const features = t.phaseTwo.features.map((feature, index) => ({
    icon: icons[index],
    title: feature.title,
    description: feature.description,
  }));

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/gabriel-santos--RsUaWZtAhY-unsplash.jpg"
              alt={t.hero.altText.vineyard}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <p className="text-gray-900 font-semibold text-lg">{t.phaseTwo.comingSoon}</p>
                <p className="text-gray-600 text-sm mt-1">{t.phaseTwo.phaseLabel}</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t.phaseTwo.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.phaseTwo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.phaseTwo.description}
            </p>

            <div className="space-y-5 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-800 font-medium text-lg italic">
                &ldquo;{t.phaseTwo.quote}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
