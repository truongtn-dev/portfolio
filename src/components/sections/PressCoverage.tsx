"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export const PressCoverage: React.FC = () => {
  const { data } = useLanguage();
  const pressData = data.press;

  // Fallback if data is not available
  if (!pressData || !pressData.items || pressData.items.length === 0) {
    return null;
  }

  // Infinite marquee duplicate array for smooth loop
  // Duplicating 4 times to ensure it spans wide screens fully
  const marqueeItems = [...pressData.items, ...pressData.items, ...pressData.items, ...pressData.items];

  return (
    <section id="press" className="py-10 border-b border-slate-200/50 bg-slate-50/50 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Simple Label */}
        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-8 text-center">
          {pressData.title || pressData.kicker}
        </p>

        {/* --- INFINITE ANIMATED PRESS LOGO MARQUEE --- */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#f8fafc] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#f8fafc] after:to-transparent">
          <motion.div
            className="flex items-center gap-6 w-max will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeItems.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.title} - ${item.outlet}`}
                className="group relative flex items-center justify-center p-3 px-6 rounded-2xl border bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer shrink-0"
              >
                <div className="relative w-36 h-12 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.outlet}
                    fill
                    className="object-contain transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)] group-hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
