"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  Sparkles,
  Building,
  GraduationCap
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export const Experience: React.FC = () => {
  const { data, language } = useLanguage();

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.035em]"
          >
            {data.experience.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed"
          >
            {data.experience.subtitle}
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200/90 ml-4 sm:ml-32 space-y-10">
          {data.experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="relative pl-6 sm:pl-9 group"
            >
              {/* Timeline Marker Dot with Pulsing Radar Ring for Active Items */}
              <div className="absolute -left-[11px] top-6 flex items-center justify-center">
                {item.isCurrent ? (
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-tr from-sky-500 to-blue-600 border-2 border-white shadow-xs group-hover:scale-125 transition-transform duration-200" />
                  </span>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-300 shadow-xs flex items-center justify-center group-hover:scale-125 group-hover:border-sky-500 transition-all duration-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-sky-500 transition-colors" />
                  </div>
                )}
              </div>

              {/* Timestamp label on left for desktop */}
              <div className="hidden sm:block absolute -left-36 top-5 w-28 text-right">
                <span className="text-xs font-mono font-semibold text-slate-500 group-hover:text-slate-800 transition-colors block leading-tight">
                  {item.period}
                </span>
                {item.isCurrent && (
                  <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {language === "vi" ? "Hiện tại" : "Active"}
                  </span>
                )}
              </div>

              {/* Glass Card content */}
              <GlassCard className="p-6 sm:p-7 border-slate-200/90 hover:border-sky-300">
                {/* Mobile Period Indicator */}
                <div className="sm:hidden flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-sky-700">
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <Badge variant="emerald" className="text-[10px] py-0.5">
                      {language === "vi" ? "Đang diễn ra" : "Active"}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-sky-600" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <Badge variant="outline" className="text-[11px]">
                    {item.type}
                  </Badge>
                </div>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 mb-4">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
