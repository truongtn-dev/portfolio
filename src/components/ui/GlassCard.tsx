"use client";

import React, { useState, useRef } from "react";
import { motion, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  spotlight?: boolean;
  tilt?: boolean;
  shimmerBorder?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  spotlight = true,
  tilt = true,
  shimmerBorder = true,
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Spring Physics
  const springConfig = { stiffness: 350, damping: 25 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      if (tilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Max tilt range: +/- 8 deg
        const rotX = ((y - centerY) / centerY) * -8;
        const rotY = ((x - centerX) / centerX) * 8;
        rotateX.set(rotX);
        rotateY.set(rotY);
      }

      if (!isHovered) setIsHovered(true);
    }
    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    setMousePos(null);
    if (tilt) {
      rotateX.set(0);
      rotateY.set(0);
    }
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden group/card perspective-1000",
        "bg-white/85 backdrop-blur-xl border border-slate-200/90",
        "shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
        "rounded-2xl md:rounded-3xl transition-shadow duration-300",
        hoverEffect &&
          "hover:border-sky-300/90 hover:bg-white/95 hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.18)]",
        className
      )}
      {...props}
    >
      {/* 1. Animated Shimmering Gradient Border Beam on Hover */}
      {shimmerBorder && (
        <div
          className={cn(
            "absolute -inset-[1px] rounded-[inherit] pointer-events-none transition-opacity duration-500 z-0",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "linear-gradient(135deg, rgba(2, 132, 199, 0.4), rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.4), rgba(2, 132, 199, 0.4))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1.5px"
          }}
        />
      )}

      {/* 2. Interactive Radial Mouse Spotlight */}
      {spotlight && isHovered && mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 132, 199, 0.12), transparent 70%)`
          }}
        />
      )}

      {/* 3. Subtle Glass Reflection Sweep */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-0" />

      {/* 4. Content Container with Z-Index Depth */}
      <div className="relative z-10 [transform:translateZ(12px)]">{children}</div>
    </motion.div>
  );
};
