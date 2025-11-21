"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wine, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Final CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Protege tu legado. <br />
            <span className="text-gray-300">Únete a Vinifica.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Sé parte de los primeros vinicultores en acceder a trazabilidad premium
            con tecnología simple y verificable.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 group"
            >
              <span>Acceso Temprano — Únete Ahora</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2">
                <Wine className="w-6 h-6" strokeWidth={1.5} />
                <span className="text-xl font-bold">Vinifica</span>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left">
                Trazabilidad premium para vinicultores.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                href="/waitlist"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Lista de Espera
              </Link>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <a
                href="mailto:contacto@vinifica.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Vinifica. Todos los derechos reservados.</p>
            <p className="mt-2">
              Diseñado para vinicultores que valoran la excelencia y la transparencia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
