"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Code2,
  FlaskConical,
  LineChart,
  Cpu,
  ArrowRight,
  CheckCircle2,
  HeartPulse
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export const Capabilities: React.FC = () => {
  const { data } = useLanguage();

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-sky-600" />;
      case "FlaskConical":
        return <FlaskConical className="w-6 h-6 text-amber-600" />;
      case "LineChart":
        return <LineChart className="w-6 h-6 text-emerald-600" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      default:
        return <Code2 className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.035em]"
          >
            {data.capabilities.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed"
          >
            {data.capabilities.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid 4 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.capabilities.items.map((item, index) => {
            const cornerGlows = [
              "before:bg-sky-400/10",
              "before:bg-amber-400/10",
              "before:bg-emerald-400/10",
              "before:bg-rose-400/10"
            ];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <GlassCard
                  className="p-7 md:p-8 h-full flex flex-col justify-between group border-slate-200/90 hover:border-sky-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-slate-100/90 border border-slate-200/70 shadow-xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                        {getCapabilityIcon(item.icon)}
                      </div>
                      <Badge variant="cobalt" className="text-xs font-semibold">
                        {item.subtitle}
                      </Badge>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-sky-800 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-6">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Pills */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-100/80 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 text-slate-600 text-[11px] font-semibold border border-slate-200/60 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Horizontal Glass Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-6"
        >
          <div className="p-6 md:p-8 bg-white/85 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_8px_30px_rgba(2,132,199,0.06)] relative overflow-hidden">
            <div className="mb-6 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-black text-sky-600 uppercase tracking-widest block mb-1">
                  ENGINEERING WORKFLOW
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  {data.capabilities.workflowTitle}
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 hidden md:block">
                5-Stage End-to-End Pipeline
              </span>
            </div>

            {/* Workflow steps pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
              {data.capabilities.workflowSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="group/step relative p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 text-white text-xs font-black flex items-center justify-center shadow-xs group-hover/step:scale-110 transition-transform">
                        {step.step}
                      </span>
                      {idx < data.capabilities.workflowSteps.length - 1 && (
                        <ArrowRight className="hidden md:block w-4 h-4 text-slate-300 group-hover/step:text-sky-500 group-hover/step:translate-x-0.5 transition-all" />
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug group-hover/step:text-sky-700 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
