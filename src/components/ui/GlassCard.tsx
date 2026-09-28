"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  spotlight?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  spotlight = true,
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (spotlight) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      if (!isHovered) setIsHovered(true);
    }
    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (spotlight) {
      setIsHovered(false);
      setMousePos(null);
    }
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden",
        "bg-white/85 backdrop-blur-md border border-slate-200/80",
        "shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]",
        "rounded-2xl md:rounded-3xl",
        hoverEffect &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/90 hover:bg-white/95 hover:shadow-[0_16px_36px_-6px_rgba(2,132,199,0.12)]",
        glow &&
          "before:absolute before:-top-24 before:-right-24 before:w-48 before:h-48 before:bg-sky-400/10 before:rounded-full before:blur-2xl before:pointer-events-none",
        className
      )}
      {...props}
    >
      {/* Interactive Landing.love Radial Mouse Spotlight */}
      {spotlight && isHovered && mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 132, 199, 0.08), transparent 75%)`
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
