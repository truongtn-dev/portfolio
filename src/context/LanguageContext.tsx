"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, PortfolioData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio-data";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language;
      if (saved === "vi" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // ignore localStorage error in SSR/private browsing
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // ignore
    }
  };

  const data = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      <div data-lang={language} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
