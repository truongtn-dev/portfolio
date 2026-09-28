"use client";

import React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Base Light Background */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Top Ambient Glow (Sky & Cyan) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-sky-200/35 via-blue-100/20 to-transparent blur-3xl opacity-70" />

      {/* Side Ambient Accent Glows (Zero CPU cost, pure CSS) */}
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-2/3 -left-32 w-[450px] h-[450px] bg-sky-100/35 rounded-full blur-3xl opacity-60" />
    </div>
  );
};
