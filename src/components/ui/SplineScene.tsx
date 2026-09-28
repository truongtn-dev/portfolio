"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, Loader2 } from "lucide-react";

// Dynamically import Spline to prevent SSR window reference issues
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-slate-900/10 backdrop-blur-md rounded-3xl border border-sky-300/30 min-h-[320px]">
      <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
      <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">
        Loading 3D Spline Scene...
      </span>
    </div>
  )
});

interface SplineSceneProps {
  sceneUrl?: string;
  className?: string;
}

export const SplineScene: React.FC<SplineSceneProps> = ({
  sceneUrl = "https://prod.spline.design/kZ4eeUxIZoKGVcCH/scene.splinecode",
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full min-h-[360px] sm:min-h-[420px] rounded-3xl overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900/90 via-sky-950/80 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-sky-400/30 z-10">
          <div className="p-3 rounded-2xl bg-sky-500/20 border border-sky-400/40 animate-bounce">
            <Sparkles className="w-6 h-6 text-sky-400" />
          </div>
          <span className="text-xs font-black text-sky-300 tracking-widest uppercase">
            3D Interactive Canvas
          </span>
        </div>
      )}

      <Spline
        scene={sceneUrl}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full rounded-3xl"
      />
    </div>
  );
};
