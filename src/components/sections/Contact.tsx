"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useClipboard } from "@/hooks/useClipboard";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  Clock,
  ArrowRight,
  Download,
  MessageSquare,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { GithubIcon, FacebookIcon, ZaloIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export const Contact: React.FC = () => {
  const { data, language } = useLanguage();
  const { copy, isCopied } = useClipboard();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    topic: "job",
    message: ""
  });

  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const topicDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (topicDropdownRef.current && !topicDropdownRef.current.contains(e.target as Node)) {
        setIsTopicDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Thay YOUR_ACCESS_KEY bằng Access Key bạn nhận được từ Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a6a45df2-d8d6-40b7-b9e2-80f3054c7021", // <--- ĐIỀN KEY CỦA BẠN VÀO ĐÂY
          name: formState.name,
          email: formState.email,
          organization: formState.org,
          topic: data.contact.form.topicOptions.find(opt => opt.value === formState.topic)?.label || formState.topic,
          message: formState.message,
          subject: `Tin nhắn mới từ Portfolio - ${formState.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          org: "",
          topic: "job",
          message: ""
        });
        setTimeout(() => setIsSubmitted(false), 7000);
      } else {
        setIsSubmitting(false);
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Có lỗi kết nối, vui lòng kiểm tra lại mạng!");
    }
  };

  const scrollToContactForm = () => {
    const el = document.getElementById("contact-form-anchor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">

        {/* Top Call-to-Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white shadow-[0_16px_40px_-8px_rgba(2,132,199,0.35)]">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent rounded-full pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/20 via-sky-400/5 to-transparent rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline and Call-to-Actions */}
              <div className="lg:col-span-7 xl:col-span-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wider uppercase mb-4 text-sky-100 border border-white/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  {language === "vi" ? "Sẵn sàng hợp tác" : "Open for Opportunities"}
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black tracking-[-0.035em] text-white mb-6 leading-tight">
                  {data.contact.bannerTitle}
                </h2>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={scrollToContactForm}
                    className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>{data.contact.bannerCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`mailto:${data.contact.info.email}?subject=${encodeURIComponent(
                      language === "vi" ? "Yêu cầu CV Nguyễn Thành Trương" : "Request CV of Nguyen Thanh Truong"
                    )}`}
                    className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-sm backdrop-blur-md border border-white/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>{data.contact.bannerCv}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Status & Quick Connect Card */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="p-6 rounded-2xl bg-white/12 backdrop-blur-xl border border-white/25 shadow-xl space-y-4">
                  {/* Profile mini header */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative shrink-0">
                      <img
                        src="/images/nguyenthanhtruong.jpg"
                        alt="Nguyễn Thành Trương"
                        className="w-13 h-13 rounded-full object-cover border-2 border-white/70 shadow-sm"
                      />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-indigo-700 animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-white text-sm sm:text-base leading-snug">Nguyễn Thành Trương</h4>
                        <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                      </div>
                      <p className="text-xs text-sky-100/90 font-medium">
                        {language === "vi" ? "Kỹ sư Phần mềm & R&D AI" : "Software Engineer & AI Researcher"}
                      </p>
                    </div>
                  </div>

                  {/* Status beacon pill */}
                  <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between text-xs">
                    <span className="text-sky-100 font-medium">
                      {language === "vi" ? "Trạng thái:" : "Status:"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {language === "vi" ? "Sẵn sàng nhận dự án" : "Available for hire"}
                    </span>
                  </div>

                  {/* Highlight stats */}
                  <div className="space-y-2 text-xs text-sky-100/90 pt-1">
                    <div className="flex items-center justify-between py-1 border-b border-white/10">
                      <span className="text-sky-200">{language === "vi" ? "Phản hồi cam kết:" : "Response time:"}</span>
                      <span className="font-bold text-white">&lt; 24 giờ</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/10">
                      <span className="text-sky-200">{language === "vi" ? "Hình thức làm việc:" : "Work mode:"}</span>
                      <span className="font-bold text-white">Hybrid / Remote / On-site</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sky-200">{language === "vi" ? "Email trực tiếp:" : "Direct email:"}</span>
                      <button
                        onClick={() => copy(data.contact.info.email)}
                        className="font-mono font-semibold text-white hover:text-sky-200 underline cursor-pointer text-xs transition-colors"
                        title={language === "vi" ? "Nhấn để sao chép" : "Click to copy"}
                      >
                        {isCopied(data.contact.info.email) ? (language === "vi" ? "✓ Đã sao chép!" : "✓ Copied!") : data.contact.info.email}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Contact Framework */}
        <div id="contact-form-anchor" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Connection Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-7 md:p-8 h-full space-y-6 border-slate-200/90">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                  Connect
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {data.contact.directTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {data.contact.subtitle}
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4">
                {/* Email with 1-click copy */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200/80 shadow-2xs shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Email
                      </span>
                      <a
                        href={`mailto:${data.contact.info.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors truncate block"
                      >
                        {data.contact.info.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copy(data.contact.info.email)}
                    className="p-2 text-slate-400 hover:text-sky-600 hover:bg-white rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                    title={language === "vi" ? "Sao chép email" : "Copy email"}
                    aria-label="Copy email address"
                  >
                    {isCopied(data.contact.info.email) ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-white text-emerald-600 border border-slate-200/80 shadow-2xs shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {language === "vi" ? "Điện thoại / Zalo" : "Phone / Zalo"}
                      </span>
                      <a
                        href={`tel:${data.contact.info.phone.replace(/\s+/g, "")}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors truncate block"
                      >
                        {data.contact.info.displayPhone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copy(data.contact.info.phone)}
                    className="p-2 text-slate-400 hover:text-sky-600 hover:bg-white rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                    title={language === "vi" ? "Sao chép số điện thoại" : "Copy phone number"}
                    aria-label="Copy phone number"
                  >
                    {isCopied(data.contact.info.phone) ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-amber-600 border border-slate-200/80 shadow-2xs shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {language === "vi" ? "Địa chỉ" : "Location"}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug block">
                      {data.contact.info.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Buttons */}
              <div className="pt-2">
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {language === "vi" ? "Mạng xã hội & Kênh nghề nghiệp" : "Social Profiles"}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={data.contact.info.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={data.contact.info.facebook || "https://www.facebook.com/nguyn.thnh.trng/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <FacebookIcon className="w-4 h-4 text-sky-600" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={data.contact.info.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <ZaloIcon className="w-4 h-4" />
                    <span>Zalo</span>
                  </a>
                </div>
              </div>

              {/* SLA Response Commitment */}
              <div className="mt-4 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-3 text-xs text-sky-900">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-medium leading-relaxed">
                  {data.contact.info.responseTimeCommitment}
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-7 md:p-8 border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                  Message
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-6">
                  {data.contact.formTitle}
                </h3>
              </div>

              {/* Success Notification */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">
                    {data.contact.form.successMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {data.contact.form.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={data.contact.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {data.contact.form.emailLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder={data.contact.form.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {data.contact.form.orgLabel}
                    </label>
                    <input
                      type="text"
                      value={formState.org}
                      onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                      placeholder={data.contact.form.orgPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>

                  {/* Custom Luxury Inquiry Topic Dropdown */}
                  <div className="relative" ref={topicDropdownRef}>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {data.contact.form.topicLabel}
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsTopicDropdownOpen(!isTopicDropdownOpen)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-sky-300 text-xs sm:text-sm text-slate-800 flex items-center justify-between shadow-2xs hover:shadow-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    >
                      <span className="font-medium truncate">
                        {data.contact.form.topicOptions.find((opt) => opt.value === formState.topic)?.label ||
                          data.contact.form.topicOptions[0].label}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2",
                          isTopicDropdownOpen && "rotate-180 text-sky-600"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isTopicDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-0 right-0 top-full mt-1.5 p-1.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl z-50 space-y-1"
                        >
                          {data.contact.form.topicOptions.map((opt) => {
                            const isSelected = formState.topic === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                  setFormState({ ...formState, topic: opt.value });
                                  setIsTopicDropdownOpen(false);
                                }}
                                className={cn(
                                  "w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer",
                                  isSelected
                                    ? "bg-sky-50 text-sky-700 font-bold border border-sky-200/60 shadow-2xs"
                                    : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 font-medium"
                                )}
                              >
                                <span className="truncate">{opt.label}</span>
                                {isSelected && (
                                  <Check className="w-4 h-4 text-sky-600 shrink-0 ml-2" />
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {data.contact.form.messageLabel} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={data.contact.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting
                      ? data.contact.form.submittingBtn
                      : data.contact.form.submitBtn}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
