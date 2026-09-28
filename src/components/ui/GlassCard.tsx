"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "bg-white/80 backdrop-blur-md border border-slate-200/80",
        "shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]",
        "rounded-2xl md:rounded-3xl",
        hoverEffect &&
          "transition-all duration-200 hover:-translate-y-1 hover:border-sky-300/90 hover:bg-white/90 hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.1)]",
        glow &&
          "before:absolute before:-top-24 before:-right-24 before:w-48 before:h-48 before:bg-sky-400/10 before:rounded-full before:blur-2xl before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
