"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CursorSpotlight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-precision smooth physics spring follower
  const springConfig = { damping: 30, stiffness: 350, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.dataset.interactive === "true")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handlePointerOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handlePointerOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* 1. Ultra-subtle Ambient Light Aura (Small, soft & faint) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.12 : 0.06
        }}
        transition={{ duration: 0.2 }}
        className="absolute w-32 h-32 rounded-full bg-sky-500 blur-xl pointer-events-none"
      />

      {/* 2. Sleek Translucent Cursor Follower Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          width: isHovered ? 40 : 20,
          height: isHovered ? 40 : 20,
          borderColor: isHovered ? "rgba(2, 132, 199, 0.7)" : "rgba(148, 163, 184, 0.4)",
          backgroundColor: isHovered ? "rgba(2, 132, 199, 0.08)" : "rgba(255, 255, 255, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="absolute rounded-full border backdrop-blur-[1px] pointer-events-none hidden sm:block shadow-2xs"
      />
    </div>
  );
};
