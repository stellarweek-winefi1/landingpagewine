"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    { code: "us", name: "Estados Unidos", flag: "🇺🇸" },
    { code: "cl", name: "Chile", flag: "🇨🇱" },
    { code: "ar", name: "Argentina", flag: "🇦🇷" },
    { code: "other", name: "Otro", flag: "🌍" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2} />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Bienvenido a Vinifica!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Te hemos agregado a la lista de espera. Te notificaremos por email cuando lancemos.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all"
          >
            Volver al inicio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/assets/gabriel-santos--RsUaWZtAhY-unsplash.jpg"
          alt="Viñedo"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 py-20 min-h-screen">
        <motion.div
          className="max-w-xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Únete a la lista de espera
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sé de los primeros vinicultores en acceder a Vinifica y recibe condiciones especiales de lanzamiento.
              </p>
            </motion.div>
          </div>

          {/* Form Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Country Field */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-3">
                  <Globe className="w-4 h-4 inline mr-2" />
                  País / Región
                </label>
                <div className="space-y-3">
                  {countries.map((c) => (
                    <label
                      key={c.code}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        country === c.code
                          ? "border-black bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="country"
                        value={c.code}
                        checked={country === c.code}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        className="w-5 h-5 text-black focus:ring-black"
                      />
                      <span className="text-2xl">{c.flag}</span>
                      <span className="font-medium text-gray-900">{c.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <span>Unirme a la Lista de Espera</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Privacy Notice */}
            <p className="mt-6 text-center text-sm text-gray-500 leading-relaxed">
              Solo usaremos tu correo para avisarte del lanzamiento de Vinifica.
              <br />
              No compartiremos tu información con terceros.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-black" strokeWidth={2} />
              <span>Acceso prioritario</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-black" strokeWidth={2} />
              <span>Condiciones especiales</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-black" strokeWidth={2} />
              <span>Sin compromiso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
