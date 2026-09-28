"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/types/portfolio";
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: "vi" | "en";
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  lang
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl sm:max-w-3xl max-h-[92vh] flex flex-col bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-auto">
        {/* Header Bar (Always pinned at top) */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/90 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            {project.badge && (
              <Badge variant="cobalt" className="text-xs">
                {project.badge}
              </Badge>
            )}
            <span className="text-xs text-slate-500 font-mono font-medium">{project.period}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6 overscroll-contain">
          {/* Project Image Banner (Full aspect ratio, uncropped) */}
          {project.image && (
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 shadow-xs flex items-center justify-center p-1 sm:p-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[340px] object-contain rounded-xl"
              />
            </div>
          )}

          <div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-sky-700 inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {project.role}
            </p>
          </div>

          {/* Detailed sections */}
          <div className="space-y-4">
            {/* Challenge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs tracking-wider uppercase mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{lang === "vi" ? "Thử thách & Bài toán lõi" : "Challenge & Core Problem"}</span>
              </div>
              <p className="text-sm text-slate-750 leading-relaxed font-normal">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-xs tracking-wider uppercase mb-2">
                <Layers className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{lang === "vi" ? "Giải pháp & Kiến trúc thực hiện" : "Solution & Architecture"}</span>
              </div>
              <p className="text-sm text-slate-750 leading-relaxed font-normal">{project.solution}</p>
            </div>

            {/* Impact */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs tracking-wider uppercase mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === "vi" ? "Kết quả định lượng & Tác động thực tế" : "Quantifiable Impact & Results"}</span>
              </div>
              <p className="text-sm text-slate-750 leading-relaxed font-normal">{project.impact}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              {lang === "vi" ? "Công nghệ & Công cụ sử dụng" : "Technologies & Tooling"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-medium border border-slate-200/80 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions (Always pinned at bottom) */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>

          <Button variant="glass" size="sm" onClick={onClose}>
            {lang === "vi" ? "Đóng cửa sổ" : "Close Window"}
          </Button>
        </div>
      </div>
    </div>
  );
};
