"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  showTagline = true
}) => {
  return (
    <div className={`group flex items-center gap-3 select-none ${className}`}>
      {/* 3D Crystal Liquid Glass Logo Emblem from public/images/favicon.png */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center p-1 rounded-2xl bg-gradient-to-br from-white/90 via-sky-50/50 to-blue-50/30 border border-white/80 shadow-[0_4px_14px_rgba(2,132,199,0.12)]">
        {/* Glow halo behind 3D crystal logo */}
        <div className="absolute inset-0 bg-sky-400/20 rounded-2xl blur-md opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none" />
        
        <img
          src="/images/favicon.png"
          alt="Thành Trương Logo"
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_4px_8px_rgba(2,132,199,0.3)] group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>

      {/* Prominent High-End Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center leading-tight">
          <span className="text-lg sm:text-xl md:text-[22px] font-black tracking-[-0.03em] bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(2,132,199,0.2)] group-hover:from-sky-400 group-hover:via-blue-500 group-hover:to-cyan-500 transition-all duration-300">
            THÀNH TRƯƠNG
          </span>
        </div>

        {showTagline && (
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-sky-600/90 leading-tight mt-0.5">
            Software Engineer
          </span>
        )}
      </div>
    </div>
  );
};
