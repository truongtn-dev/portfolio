"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Download, ChevronDown, Menu, X, FileText, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const Navbar: React.FC = () => {
  const { language, setLanguage, data } = useLanguage();
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sectionIds = data.navigation.links.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCvDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadCv = (version: "vi" | "en") => {
    setCvDropdownOpen(false);
    // In production this points to public/cv/NguyenThanhTruong_CV_{vi|en}.pdf
    // For now we can trigger a download of a placeholder or alert/open
    const fileName =
      version === "vi"
        ? "Nguyen_Thanh_Truong_CV_TiengViet.pdf"
        : "Nguyen_Thanh_Truong_CV_English.pdf";
    
    // Create an accessible notification / download anchor
    const link = document.createElement("a");
    link.href = `#contact`;
    link.setAttribute("download", fileName);
    // Smooth scroll to contact if CV file is requested or alert user
    handleScrollTo("contact");
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white/85 backdrop-blur-xl border border-slate-200/90 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto transition-all duration-300">
        
        {/* Left: High-End Brand Logo */}
        <div className="flex items-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("about");
            }}
            className="cursor-pointer group"
            aria-label="Thành Trương Portfolio Home"
          >
            <BrandLogo />
          </a>
        </div>

        {/* Center: Desktop Navigation Links (Scroll Spy) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
          {data.navigation.links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 cursor-pointer select-none",
                  isActive
                    ? "bg-white text-sky-600 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                )}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Language Switcher & CV Dropdown */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher Toggle [VI] | EN */}
          <div className="flex items-center bg-slate-100/80 p-0.5 rounded-full border border-slate-200/80 text-xs font-semibold">
            <button
              onClick={() => setLanguage("vi")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer text-xs font-bold",
                language === "vi"
                  ? "bg-white text-sky-700 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              )}
              aria-label="Chuyển sang Tiếng Việt"
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer text-xs font-bold",
                language === "en"
                  ? "bg-white text-sky-700 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              )}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Download CV Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:via-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-[0_4px_14px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.45)] border border-sky-400/25 transition-all duration-200 cursor-pointer active:translate-y-0.5"
              aria-haspopup="true"
              aria-expanded={cvDropdownOpen}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{data.navigation.downloadCv.label}</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", cvDropdownOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            {cvDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {language === "vi" ? "Chọn phiên bản CV" : "Select CV Version"}
                </div>
                <button
                  onClick={() => handleDownloadCv("vi")}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">{data.navigation.downloadCv.viVersion}</span>
                    <span className="text-[10px] text-slate-400">PDF • Tiếng Việt</span>
                  </div>
                </button>
                <button
                  onClick={() => handleDownloadCv("en")}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">{data.navigation.downloadCv.enVersion}</span>
                    <span className="text-[10px] text-slate-400">PDF • English</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 p-4 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl pointer-events-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {data.navigation.links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer",
                    isActive
                      ? "bg-sky-50 text-sky-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-sky-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
