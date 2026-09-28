import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cobalt" | "emerald" | "amber" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className
}) => {
  const variantStyles = {
    default: "bg-slate-100/90 text-slate-700 border-slate-200/90",
    cobalt: "bg-sky-50 text-sky-700 border-sky-200/80 font-medium",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/80 font-medium",
    amber: "bg-amber-50 text-amber-800 border-amber-200/80 font-medium",
    outline: "bg-white/60 text-slate-600 border-slate-200/80"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs tracking-normal border transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
