"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeTickerProps {
  items?: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  "Next.js 16",
  "TypeScript",
  "React 19",
  "AI Engineering",
  "Healthcare Systems",
  "Tailwind CSS v4",
  "Docker & Cloud CI/CD",
  "Growth & SEO",
  "Node.js",
  "Python",
  "PostgreSQL",
  "System Architecture",
  "UI/UX Design"
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  direction = "left",
  speed = 30,
  className = ""
}) => {
  // Duplicate items 4x for smooth seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden py-3 select-none ${className}`}>
      {/* Left & Right Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      {/* Sliding Track */}
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
        className="flex items-center gap-3 w-max hover:[animation-play-state:paused]"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-2xs hover:border-sky-300 hover:shadow-xs hover:bg-sky-50/50 transition-all duration-200 cursor-default shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700 tracking-tight whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
