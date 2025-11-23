"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, HelpCircle, Globe, MapPin } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Daños en lotes",
      description: "Temperatura, vibración, errores de almacenaje. Tus vinos están expuestos a múltiples riesgos.",
    },
    {
      icon: TrendingDown,
      title: "Pérdidas económicas",
      description: "Un lote dañado puede representar miles de dólares en pérdidas y afectar tu reputación.",
    },
    {
      icon: HelpCircle,
      title: "Falta de evidencia",
      description: "¿Dónde ocurrió el daño? Sin trazabilidad, es imposible identificar el problema.",
    },
    {
      icon: Globe,
      title: "Riesgo en exportación",
      description: "El transporte internacional expone tus vinos a condiciones que no puedes controlar.",
    },
    {
      icon: MapPin,
      title: "Punto ciego",
      description: "Sin visibilidad en la cadena, no sabes qué pasa con tu producto después de salir de bodega.",
    },
  ];

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
              alt="Bodega de vinos"
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
              El problema que enfrentas
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Como vinicultor, sabes que proteger tus lotes es fundamental. Pero sin trazabilidad,
              estás navegando a ciegas.
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
                &ldquo;Cada lote dañado no solo es una pérdida económica, es un golpe a tu reputación.
                Y sin evidencia, recuperar esa confianza es casi imposible.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
