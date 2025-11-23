"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Wine, Menu, X, HelpCircle, PlayCircle, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

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

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const navItems = [
    { href: "/", label: t.nav.home, icon: Wine },
    { href: "/faq", label: t.nav.faq, icon: HelpCircle },
  ];

  const ctaItem = { href: "/waitlist", label: t.nav.waitlist, icon: Wine };

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Navigation Links */}
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer",
                        isActive
                          ? "text-black font-semibold"
                          : "text-gray-700 hover:text-black"
                      )}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(e) => {
                        // Ensure link works properly
                        setIsLanguageMenuOpen(false);
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                    {isActive && (
                      <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-black" />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Demo Button */}
            <Link
              href="/demo"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-md hover:shadow-lg"
            >
              <PlayCircle className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              <span>{t.nav.demo}</span>
            </Link>

            {/* Language Switcher */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-gray-700 hover:text-black hover:bg-gray-100"
                aria-label="Change language"
                type="button"
              >
                <Languages className="w-5 h-5" strokeWidth={1.5} />
                <span className="uppercase">{language}</span>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-[60]">
                  <button
                    onClick={() => {
                      setLanguage("es");
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === "es"
                        ? "bg-gray-100 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    type="button"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === "en"
                        ? "bg-gray-100 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    type="button"
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <ul className="flex flex-col py-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors touch-manipulation",
                        isActive
                          ? "text-black font-semibold bg-gray-50"
                          : "text-gray-700 hover:text-black hover:bg-gray-50"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
              {/* Mobile Demo Button */}
              <li className="mt-2 px-4">
                <Link
                  href="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 w-full touch-manipulation bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-md"
                >
                  <PlayCircle className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <span>{t.nav.demo}</span>
                </Link>
              </li>
              {/* Mobile Language Switcher */}
              <li className="mt-2 px-4">
                <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-sm font-medium w-full touch-manipulation border border-gray-200">
                  <Languages className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setLanguage("es");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded transition-colors ${
                        language === "es"
                          ? "bg-black text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded transition-colors ${
                        language === "en"
                          ? "bg-black text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </li>
              {/* Mobile CTA */}
              <li className="mt-2 px-4">
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
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

