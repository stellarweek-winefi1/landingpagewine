"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Wine, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const ctaItem = { href: "/waitlist", label: "Unirme al Waitlist", icon: Wine };

  return (
    <nav 
      className="sticky top-0 z-50 bg-white border-b border-gray-200" 
      role="navigation" 
      aria-label="Navegación principal"
    >
      <div ref={menuRef} className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-900 hover:text-black transition-colors flex-shrink-0"
            aria-label="Vinifica - Ir a inicio"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Wine className="w-6 h-6 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-lg font-semibold whitespace-nowrap">Vinifica</span>
          </Link>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href={ctaItem.href}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                pathname === ctaItem.href
                  ? "bg-black text-white shadow-lg"
                  : "bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-xl"
              )}
            >
              <ctaItem.icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              <span>{ctaItem.label}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile CTA Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white py-4 px-4">
            <Link
              href={ctaItem.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 w-full touch-manipulation",
                pathname === ctaItem.href
                  ? "bg-black text-white shadow-lg"
                  : "bg-black text-white hover:bg-gray-800 shadow-md"
              )}
            >
              <ctaItem.icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <span>{ctaItem.label}</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

