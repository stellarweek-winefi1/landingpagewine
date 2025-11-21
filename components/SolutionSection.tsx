"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { QrCode, Smartphone, CheckCircle, Shield, Eye, ArrowRight } from "lucide-react";

export default function SolutionSection() {
  const steps = [
    {
      icon: QrCode,
      title: "Coloca un QR en el lote",
      description: "Simple. Sin hardware especial. Solo un código QR único por lote.",
    },
    {
      icon: Smartphone,
      title: "Escanea desde cualquier dispositivo",
      description: "Teléfono, tablet, o cualquier dispositivo con cámara. Registra eventos en segundos.",
    },
    {
      icon: CheckCircle,
      title: "Registra cada etapa",
      description: "Viñedo, producción, bodega, almacenamiento, transporte, distribución. Todo rastreado.",
    },
    {
      icon: Eye,
      title: "Identifica el punto exacto",
      description: "¿Dónde se dañó el lote? Vinifica te muestra exactamente en qué momento y lugar.",
    },
    {
      icon: Shield,
      title: "Protege tu reputación",
      description: "Con evidencia verificable, puedes demostrar que cumpliste con todos los estándares.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
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
            La solución: Vinifica
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trazabilidad premium sin complejidad. Vinifica te permite rastrear cada lote desde el viñedo
            hasta el consumidor final, identificando cualquier problema en el camino.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Image with CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Sin hardware especial. Sin complicaciones.
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Vinifica funciona con cualquier smartphone. No necesitas sensores costosos ni equipos especiales.
              Solo tu teléfono y los QR de tus lotes.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-gray-700">Implementación inmediata, sin instalaciones complejas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-gray-700">Compatible con todos los dispositivos móviles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-gray-700">Registros en tiempo real desde cualquier lugar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-gray-700">Preparado para exportación y certificaciones</span>
              </li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 group"
              >
                <span>Quiero acceso temprano</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/nik-f-KSl193viP48-unsplash.jpg"
              alt="Proceso de vinificación"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
