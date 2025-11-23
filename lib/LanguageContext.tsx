"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, getTranslation } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") {
        setLanguageState("en");
        document.documentElement.lang = "en";
      } else {
        document.documentElement.lang = "es";
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

