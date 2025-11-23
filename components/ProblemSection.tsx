"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, HelpCircle, Globe, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProblemSection() {
  const { t } = useLanguage();
  
  const problems = t.problem.problems.map((problem, index) => ({
    icon: [AlertTriangle, TrendingDown, HelpCircle, Globe, MapPin][index],
    title: problem.title,
    description: problem.description,
  }));

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/nathan-blackaby-TLccRhX4iD4-unsplash.jpg"
              alt={t.problem.altText.winery}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.problem.title}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t.problem.description}
            </p>

            <div className="space-y-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{problem.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-10 p-6 bg-gray-50 rounded-xl border-l-4 border-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-gray-700 font-medium italic">
                &ldquo;{t.problem.quote}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
