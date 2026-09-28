"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export const Faq: React.FC = () => {
  const { data } = useLanguage();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true // First item open by default
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.035em]"
          >
            {data.faq.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed"
          >
            {data.faq.subtitle}
          </motion.p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {data.faq.items.map((item, index) => {
            const isOpen = !!openIds[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-300",
                    "bg-white/75 backdrop-blur-md border",
                    isOpen
                      ? "border-sky-300/80 shadow-[0_8px_25px_-4px_rgba(2,132,199,0.08)] bg-white/90"
                      : "border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:bg-white/85"
                  )}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="p-2 rounded-xl bg-slate-100 text-sky-600 shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "p-1.5 rounded-full bg-slate-100/80 text-slate-500 transition-transform duration-300 shrink-0",
                        isOpen && "rotate-180 bg-sky-100 text-sky-700"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-4 font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
