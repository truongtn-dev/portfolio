"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Server,
  Binary,
  Compass,
  Check,
  Sparkles
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export const TechStack: React.FC = () => {
  const { data } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "LayoutTemplate":
        return <LayoutTemplate className="w-5 h-5 text-sky-600" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-600" />;
      case "Binary":
        return <Binary className="w-5 h-5 text-amber-600" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-emerald-600" />;
      default:
        return <LayoutTemplate className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="tech-stack" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.035em]"
          >
            {data.techStack.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed"
          >
            {data.techStack.subtitle}
          </motion.p>
        </div>

        {/* 4 Categorized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.techStack.categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIdx * 0.03 }}
            >
              <GlassCard className="p-6 md:p-7 h-full flex flex-col justify-between group border-slate-200/90 hover:border-sky-300">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-100/90 border border-slate-200/70 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-sky-800 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:bg-white hover:border-sky-300 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-xs font-bold text-slate-800 group-hover/skill:text-sky-700 transition-colors">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-[10px] font-semibold text-sky-700 bg-sky-100/70 group-hover/skill:bg-sky-500 group-hover/skill:text-white transition-colors px-1.5 py-0.5 rounded-md">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
