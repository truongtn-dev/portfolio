"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView, animate } from "framer-motion";
import {
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  Building2,
  GraduationCap,
  Home
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

// Animated counter component for numeric values
interface AnimatedCounterProps {
  valueString: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ valueString }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Extract raw number and suffix/prefix (e.g., "10,000+" -> number: 10000, suffix: "+", formatted: true)
    const rawNumberMatch = valueString.match(/\d[\d,]*/);
    if (!rawNumberMatch) {
      if (ref.current) ref.current.textContent = valueString;
      return;
    }

    const numberStr = rawNumberMatch[0].replace(/,/g, "");
    const targetVal = parseInt(numberStr, 10);
    const prefix = valueString.substring(0, rawNumberMatch.index || 0);
    const suffix = valueString.substring((rawNumberMatch.index || 0) + rawNumberMatch[0].length);
    const hasCommas = rawNumberMatch[0].includes(",");

    const controls = animate(0, targetVal, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          const currentFormatted = hasCommas
            ? Math.floor(value).toLocaleString("en-US")
            : Math.floor(value).toString();
          ref.current.textContent = `${prefix}${currentFormatted}${suffix}`;
        }
      }
    });

    return () => controls.stop();
  }, [isInView, valueString]);

  return <span ref={ref}>{valueString}</span>;
};

export const MetricsMatrix: React.FC = () => {
  const { data } = useLanguage();

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-5 h-5 text-sky-600" />;
      case "Award":
        return <Award className="w-5 h-5 text-amber-500" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-violet-600" />;
      case "Home":
        return <Home className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="metrics" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.035em]"
          >
            {data.metrics.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed"
          >
            {data.metrics.description}
          </motion.p>
        </div>

        {/* 6-Card Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {data.metrics.items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard className="p-6 md:p-7 h-full flex flex-col justify-between group border-slate-200/80 hover:border-sky-300/90">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-100/90 border border-slate-200/60 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {getMetricIcon(item.icon)}
                      </div>
                      {item.highlight && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100/80 text-slate-700 border border-slate-200/70 group-hover:border-sky-300/60 group-hover:bg-sky-50/70 group-hover:text-sky-800 transition-colors duration-200">
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    {/* Big Animated Number */}
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1 bg-gradient-to-r from-slate-900 via-sky-900 to-sky-700 bg-clip-text text-transparent group-hover:from-sky-600 group-hover:to-blue-700 transition-all duration-300">
                      <AnimatedCounter valueString={item.number} />
                    </div>

                    {/* Label */}
                    <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-slate-950 transition-colors">
                      {item.label}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
