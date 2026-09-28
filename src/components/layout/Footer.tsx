"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Mail, Phone, Heart } from "lucide-react";
import { GithubIcon, FacebookIcon } from "@/components/ui/Icons";

import { BrandLogo } from "@/components/ui/BrandLogo";

export const Footer: React.FC = () => {
  const { data } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/60 backdrop-blur-md pt-12 pb-8 mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <BrandLogo />
            <p className="text-sm text-slate-500 max-w-md leading-relaxed pt-1">
              {data.footer.quote}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {data.navigation.links.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-sky-600 transition-colors inline-block py-0.5 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Channels */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-xs text-slate-600">
              <a
                href={data.contact.info.facebook || "https://www.facebook.com/nguyn.thnh.trng/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>facebook.com/nguyn.thnh.trng</span>
              </a>
              <a
                href={data.contact.info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/truongtn-dev</span>
              </a>
              <a
                href={`mailto:${data.contact.info.email}`}
                className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{data.contact.info.email}</span>
              </a>
              <a
                href={`tel:${data.contact.info.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{data.contact.info.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {data.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-semibold">{data.footer.builtWith}</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
