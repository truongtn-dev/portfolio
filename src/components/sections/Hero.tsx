"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  Trophy,
  Sparkles,
  Globe,
  ShieldCheck
} from "lucide-react";
import { GithubIcon, FacebookIcon, ZaloIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CloudinaryUploadModal } from "@/components/ui/CloudinaryUploadModal";

export const Hero: React.FC = () => {
  const { data, language } = useLanguage();
  // Default to real photo nguyenthanhtruong.jpg
  const [avatarUrl, setAvatarUrl] = useState<string>("/images/nguyenthanhtruong.jpg");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("custom_avatar_url");
      if (saved) setAvatarUrl(saved);
    } catch {
      // ignore
    }
  }, []);

  const handleAvatarSuccess = (url: string) => {
    setAvatarUrl(url);
    try {
      localStorage.setItem("custom_avatar_url", url);
    } catch {
      // ignore
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-4 h-4 text-amber-500" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-sky-500" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-emerald-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-sky-500" />;
    }
  };

  return (
    <section id="about" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial gradient flares */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Name, Multi-disciplinary Headline & Bio with Keyword Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Portfolio Kicker */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-sky-600 uppercase bg-sky-50/80 px-3.5 py-1 rounded-full border border-sky-200/70 shadow-2xs">
                {data.hero.kicker || "PORTFOLIO 2026"}
              </span>
            </div>

            {/* Prominent Display Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black text-slate-900 tracking-[-0.04em] leading-[1.05]">
                <span>{data.hero.firstName || (language === "vi" ? "Nguyễn Thành" : "Thanh")} </span>
                <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {data.hero.lastName || (language === "vi" ? "Trương" : "Truong")}
                </span>
              </h1>

              {/* Multi-disciplinary Skill Capsules (3 Core Pillars) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {(data.hero.skillPills || (language === "vi" ? [
                  { label: "Kỹ thuật Phần mềm & AI" },
                  { label: "Quản trị Vận hành Y tế" },
                  { label: "Tối ưu Tăng trưởng & SEO" }
                ] : [
                  { label: "Software Engineering & AI" },
                  { label: "Healthcare Operations & Management" },
                  { label: "Growth Optimization & SEO" }
                ])).map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 hover:bg-sky-50/90 text-slate-850 hover:text-sky-700 text-xs sm:text-[13.5px] font-bold border border-slate-200/90 hover:border-sky-300 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 select-none cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shrink-0 shadow-2xs" />
                    <span>{skill.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Rich Bio with Highlighted Keywords for HR */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {language === "vi" ? (
                  <>
                    <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">Kỹ sư phần mềm phát triển sản phẩm</strong> với thế mạnh kết nối giữa <strong className="font-semibold text-slate-900">kiến trúc công nghệ</strong> và <strong className="font-semibold text-slate-900">thực tiễn vận hành chuyên sâu</strong>. Xuất phát điểm liên ngành giữa <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">kỹ thuật hệ thống</strong> và <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">quản trị y tế</strong> cho phép tôi nhanh chóng nắm bắt các bài toán nghiệp vụ phức tạp, từ đó xây dựng các ứng dụng chuẩn xác về mặt kỹ thuật, tối ưu hóa khả năng tiếp cận và thực sự giải phóng áp lực vận hành ngoài đời thực. Dù tham gia phát triển phần mềm độc lập hay đồng hành cùng các sản phẩm công nghệ chăm sóc sức khỏe, tôi luôn theo đuổi một tiêu chuẩn nhất quán: <strong className="font-semibold text-slate-900">mã nguồn sạch</strong>, <strong className="font-semibold text-slate-900">trải nghiệm trực quan</strong> và <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">hiệu quả đo lường được bằng giá trị thực tế</strong>.
                  </>
                ) : (
                  <>
                    <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">Product-focused software engineer</strong> with a distinct strength in bridging <strong className="font-semibold text-slate-900">technology architecture</strong> and <strong className="font-semibold text-slate-900">deep operational realities</strong>. An interdisciplinary foundation in <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">systems engineering</strong> and <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">healthcare management</strong> empowers me to quickly grasp complex domain problems, engineering technically robust applications that optimize accessibility and tangibly relieve real-world operational bottlenecks. Whether building independent software, <strong className="font-semibold text-slate-900">digitizing healthcare workflows</strong>, or co-creating healthtech solutions, I stay committed to one consistent standard: <strong className="font-semibold text-slate-900">clean code</strong>, <strong className="font-semibold text-slate-900">intuitive experience</strong>, and <strong className="font-bold text-slate-900 underline decoration-sky-400/70 decoration-wavy underline-offset-[5px]">measurable real-world impact</strong>.
                  </>
                )}
              </p>
            </div>

            {/* Work Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-xs font-semibold text-emerald-800 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{data.hero.workStatus}</span>
            </div>

            {/* CTA Buttons (Strictly NO black buttons) */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-1">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection("projects")}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:via-blue-500 hover:to-indigo-500 text-white font-bold px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_22px_rgba(2,132,199,0.45)] border border-sky-400/25"
              >
                {data.hero.primaryCta}
              </Button>

              <Button
                variant="glass"
                size="md"
                onClick={() => scrollToSection("contact")}
                className="bg-white/90 hover:bg-white text-slate-800 font-bold px-6 py-3 rounded-full border border-slate-300 shadow-xs"
              >
                {data.hero.secondaryCta}
              </Button>
            </div>

            {/* Social Quick Links (Reference style) */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-3 text-xs sm:text-sm font-semibold text-slate-600">
              <a
                href={data.contact.info.facebook || "https://facebook.com/truongnguyen.dev"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4 text-sky-600" />
                <span>Facebook</span>
              </a>

              <a
                href={data.contact.info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${data.contact.info.email}`}
                className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-700" />
                <span>Email</span>
              </a>

              <a
                href={`tel:${data.contact.info.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>{data.contact.info.displayPhone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Prominent Portrait Frame + Floating Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">

              {/* Animated Glow Aura behind Portrait */}
              <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-tr from-sky-500/30 via-blue-600/20 to-indigo-500/30 blur-2xl opacity-80 animate-pulse pointer-events-none" />

              {/* Portrait Frame Container with Gradient Border */}
              <div className="relative w-full aspect-[3/4] rounded-[36px] p-2 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-[0_20px_50px_rgba(2,132,199,0.25)] group/avatar">
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-slate-100">
                  <img
                    src={avatarUrl}
                    alt="Nguyễn Thành Trương"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/avatar:scale-105"
                  />

                  {/* Subtle shine sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent -translate-x-full group-hover/avatar:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/75 via-slate-900/35 to-transparent pointer-events-none" />

                  {/* Name overlay on photo */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white pointer-events-none">
                    <span className="text-sm font-bold tracking-tight block drop-shadow-md">
                      NGUYỄN THÀNH TRƯƠNG
                    </span>
                    <span className="text-[11px] text-sky-200 tracking-wider uppercase font-semibold block drop-shadow-md">
                      Software Engineer & Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 -right-4 sm:-right-8 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-amber-200/90 shadow-[0_8px_24px_rgba(245,158,11,0.2)] flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  <div className="p-1.5 rounded-lg bg-amber-50">
                    {getBadgeIcon(data.hero.badges[0].icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {data.hero.badges[0].title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {data.hero.badges[0].subtitle}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge 2: Mid Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-10 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-sky-200/90 shadow-[0_8px_24px_rgba(2,132,199,0.2)] flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  <div className="p-1.5 rounded-lg bg-sky-50">
                    {getBadgeIcon(data.hero.badges[1].icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {data.hero.badges[1].title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {data.hero.badges[1].subtitle}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge 3: Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-5 -right-2 sm:-right-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200/90 shadow-[0_8px_24px_rgba(16,185,129,0.2)] flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-50">
                    {getBadgeIcon(data.hero.badges[2].icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {data.hero.badges[2].title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {data.hero.badges[2].subtitle}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Cloudinary Image Upload Modal */}
      <CloudinaryUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSuccess={handleAvatarSuccess}
        title={language === "vi" ? "Cập nhật ảnh đại diện (Cloudinary)" : "Update Profile Photo (Cloudinary)"}
        folder="portfolio/avatar"
      />
    </section>
  );
};
