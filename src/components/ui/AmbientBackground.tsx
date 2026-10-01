"use client";

import React from "react";
import { motion } from "framer-motion";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Base Light Canvas */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Subtle Grid Line Pattern overlay for futuristic agency aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Animated Floating Gradient Orb 1 (Top Center Sky) */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-200/40 via-blue-100/10 to-transparent opacity-80 rounded-[100%]"
      />

      {/* Animated Floating Gradient Orb 2 (Mid Right Indigo) */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 20, 0],
          scale: [1, 1.12, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/40 via-indigo-100/10 to-transparent rounded-full opacity-65"
      />

      {/* Animated Floating Gradient Orb 3 (Lower Left Cyan/Sky) */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-2/3 -left-40 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-200/40 via-sky-200/10 to-transparent rounded-full opacity-65"
      />

      {/* Animated Floating Accent Node 4 (Bottom Right Emerald glow) */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100/30 via-emerald-100/5 to-transparent rounded-full pointer-events-none"
      />
    </div>
  );
};
