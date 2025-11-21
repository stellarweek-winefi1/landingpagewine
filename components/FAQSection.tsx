"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Desde qué dispositivos puedo usar Vinifica?",
      answer: "Vinifica funciona desde cualquier dispositivo con cámara: smartphones, tablets, o computadoras. No necesitas hardware especial ni aplicaciones complejas.",
    },
    {
      question: "¿Cómo funciona el sistema de QR?",
      answer: "Cada lote recibe un código QR único. Al escanearlo con cualquier dispositivo, puedes registrar eventos, agregar notas, y ver el historial completo de trazabilidad del lote.",
    },
    {
      question: "¿Puedo registrar eventos en cualquier momento?",
      answer: "Sí. Vinifica permite registrar eventos en tiempo real desde cualquier ubicación: viñedo, bodega, transporte, almacenamiento, o distribución.",
    },
    {
      question: "¿Ayuda a detectar problemas en la cadena de distribución?",
      answer: "Absolutamente. Con cada evento registrado, puedes identificar exactamente dónde y cuándo ocurrió un problema, permitiéndote tomar acción inmediata y documentada.",
    },
    {
      question: "¿Necesito sensores o hardware especializado?",
      answer: "No. Vinifica está diseñado para funcionar sin hardware adicional. Solo necesitas los códigos QR de tus lotes y un dispositivo con cámara.",
    },
    {
      question: "¿Es difícil comenzar a usar Vinifica?",
      answer: "Para nada. El proceso es simple: genera QR para tus lotes, pégalos en las cajas o barricas, y empieza a escanear. Tu equipo puede aprender a usarlo en minutos.",
    },
    {
      question: "¿Qué incluye la fase de venta de lotes?",
      answer: "En la segunda fase, podrás listar tus lotes trazables en nuestra plataforma de marketplace, conectarte con compradores globales, y gestionar ventas con transacciones seguras.",
    },
    {
      question: "¿El sistema funciona para exportación internacional?",
      answer: "Sí. Vinifica está diseñado para cumplir con estándares internacionales de trazabilidad, facilitando la documentación para exportación y certificaciones.",
    },
    {
      question: "¿Protege mi reputación ante distribuidores?",
      answer: "Definitivamente. Con evidencia verificable de cada etapa, puedes demostrar que tu vino salió en perfectas condiciones de tu bodega, protegiendo tu marca ante cualquier reclamo.",
    },
    {
      question: "¿Cómo se asegura la autenticidad del lote?",
      answer: "Cada lote tiene un código QR único e inmutable. Los registros son verificables y no pueden ser alterados, garantizando la autenticidad de la trazabilidad.",
    },
    {
      question: "¿Cuánto cuesta Vinifica?",
      answer: "Estamos en fase de waitlist. Los primeros vinicultores que se unan tendrán acceso a condiciones especiales de lanzamiento. Únete a la lista para ser notificado.",
    },
    {
      question: "¿Puedo usar Vinifica con mi equipo completo?",
      answer: "Sí. Vinifica permite que todo tu equipo registre eventos: desde trabajadores en el viñedo hasta personal de almacén y logística. Todos con sus propios dispositivos.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Todo lo que necesitas saber sobre Vinifica
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6">¿Tienes más preguntas?</p>
          <a
            href="/waitlist"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300"
          >
            Únete al Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
