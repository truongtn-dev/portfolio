"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = "",
  delay = 0,
  as = "h2"
}) => {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 32,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const Tag = motion[as];

  return (
    <Tag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] perspective-1000 ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block transform-gpu origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};
