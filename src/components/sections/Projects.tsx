"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/types/portfolio";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Trophy,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  LayoutGrid,
  ListFilter
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { KineticText } from "@/components/ui/KineticText";
import { cn } from "@/lib/utils";

export const Projects: React.FC = () => {
  const { data, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "engineering" | "research" | "growth">("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const INITIAL_SHOW = 6;

  // Filter projects by category
  const filteredProjects = data.projects.items.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  // Calculate counts dynamically
  const counts = {
    all: data.projects.items.length,
    engineering: data.projects.items.filter((i) => i.category === "engineering").length,
    research: data.projects.items.filter((i) => i.category === "research").length,
    growth: data.projects.items.filter((i) => i.category === "growth").length
  };

  // Determine displayed items: on "all" grid tab, slice unless expanded; on other tabs or list, show all
  const displayedProjects =
    activeFilter === "all" && viewMode === "grid" && !isExpanded
      ? filteredProjects.slice(0, INITIAL_SHOW)
      : filteredProjects;

  const hasMore =
    activeFilter === "all" && viewMode === "grid" && filteredProjects.length > INITIAL_SHOW;

  const handleFilterChange = (key: "all" | "engineering" | "research" | "growth") => {
    setActiveFilter(key);
    // Keep expanded state or reset smoothly
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <KineticText
            text={data.projects.title}
            className="justify-center text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.035em]"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed"
          >
            {data.projects.subtitle}
          </motion.p>
        </div>

        {/* Toolbar: Category Filters + View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200/60">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(
              [
                { key: "all", label: data.projects.filterLabels.all, count: counts.all },
                { key: "engineering", label: data.projects.filterLabels.engineering, count: counts.engineering },
                { key: "research", label: data.projects.filterLabels.research, count: counts.research },
                { key: "growth", label: data.projects.filterLabels.growth, count: counts.growth }
              ] as const
            ).map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleFilterChange(tab.key)}
                  className={cn(
                    "relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none",
                    isActive
                      ? "text-white font-bold"
                      : "bg-white/80 backdrop-blur-md text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200/80"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full shadow-md shadow-sky-500/25 border border-sky-500"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    <span>{tab.label}</span>
                    <span
                      className={cn(
                        "px-1.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      )}
                    >
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle (Grid vs Compact List) */}
          <div className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-2xs shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                viewMode === "grid"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              )}
              title={language === "vi" ? "Chế độ xem lưới" : "Grid view"}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === "vi" ? "Lưới thẻ" : "Grid"}</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                viewMode === "list"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              )}
              title={language === "vi" ? "Chế độ xem danh sách rút gọn" : "Compact list view"}
              aria-label="List view"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === "vi" ? "Bảng danh sách" : "List"}</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: 3-Column Visual Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="h-full"
                >
                  <GlassCard className="p-5 sm:p-6 h-full flex flex-col justify-between group hover:border-sky-300">
                    <div>
                      {/* Top Row: Category, Badge & Period */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className="flex items-center gap-2 overflow-hidden">
                          {project.badge && (
                            <Badge variant="cobalt" className="text-[11px] truncate max-w-[180px]">
                              {project.badge}
                            </Badge>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono shrink-0">
                          {project.period}
                        </span>
                      </div>

                      {/* Project Image Preview (Streamlined 16:9 ratio) */}
                      {project.image && (
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="relative w-full h-44 mb-4 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs group-hover:shadow-md transition-all duration-300 cursor-pointer"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                          {/* Shine reflection sweep */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}

                      {/* Title */}
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors mb-1.5 leading-snug line-clamp-2 cursor-pointer"
                        title={project.title}
                      >
                        {project.title}
                      </h3>

                      {/* Role */}
                      <p className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-1.5 truncate">
                        <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="truncate">{project.role}</span>
                      </p>

                      {/* Compact Summary Snippet */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {project.impact || project.challenge}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1 mb-5">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[10px] font-medium border border-slate-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="px-1.5 py-0.5 bg-slate-50 text-slate-400 rounded-md text-[10px]">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <Button
                        variant="glass"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        icon={<ChevronRight className="w-4 h-4 text-sky-600" />}
                        iconPosition="right"
                        className="text-xs"
                      >
                        {data.projects.viewDetailsLabel}
                      </Button>

                      <div className="flex items-center gap-1">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors cursor-pointer"
                            aria-label="View demo"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                            aria-label="View code on GitHub"
                            title="GitHub"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* View Mode 2: Compact List Rows (Ultra Dense & Fast to scan) */
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  onClick={() => setSelectedProject(project)}
                  className="group/row p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0 group-hover/row:scale-105 transition-transform"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {project.badge && (
                          <Badge variant="cobalt" className="text-[10px] px-2 py-0.5 truncate">
                            {project.badge}
                          </Badge>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono">{project.period}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover/row:text-sky-600 transition-colors text-base truncate">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium truncate">{project.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="hidden lg:flex flex-wrap gap-1 max-w-[260px]">
                      {project.stack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors cursor-pointer"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 group-hover/row:translate-x-1 transition-transform">
                        <span>{data.projects.viewDetailsLabel}</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Expand / Collapse Button for "All" tab in Grid Mode */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>
                {isExpanded
                  ? (language === "vi" ? "Thu gọn bớt dự án" : "Show Less")
                  : (language === "vi"
                      ? `Xem thêm ${filteredProjects.length - INITIAL_SHOW} dự án khác (${filteredProjects.length} dự án)`
                      : `Show ${filteredProjects.length - INITIAL_SHOW} More Projects`)}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-sky-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-sky-600" />
              )}
            </button>
          </motion.div>
        )}

        {/* Project Detailed Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          lang={language}
        />

      </div>
    </section>
  );
};
