"use client";

import React, { useState, useRef } from "react";
import {
  UploadCloud,
  X,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Image as ImageIcon,
  Loader2,
  ExternalLink
} from "lucide-react";
import { uploadImageToCloudinary } from "@/lib/cloudinary-client";
import { useClipboard } from "@/hooks/useClipboard";
import { Button } from "@/components/ui/Button";

interface CloudinaryUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (url: string) => void;
  title?: string;
  folder?: string;
}

export const CloudinaryUploadModal: React.FC<CloudinaryUploadModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  title = "Tải ảnh lên Cloudinary",
  folder = "portfolio"
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { copy, isCopied } = useClipboard();

  if (!isOpen) return null;

  const handleFileSelect = (selectedFile: File) => {
    if (!selectedFile.type.startsWith("image/")) {
      setErrorMessage("Vui lòng chọn tệp định dạng hình ảnh (PNG, JPG, WEBP, SVG...)");
      return;
    }
    setErrorMessage(null);
    setFile(selectedFile);
    setUploadedUrl(null);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setErrorMessage(null);

    try {
      const res = await uploadImageToCloudinary(file, folder);
      setUploadedUrl(res.secure_url);
      if (onSuccess) {
        onSuccess(res.secure_url);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || "Tải ảnh lên Cloudinary thất bại. Vui lòng thử lại.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreviewUrl(null);
    setUploadedUrl(null);
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col my-auto bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <UploadCloud className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-5">
          {/* Dropzone */}
          {!uploadedUrl ? (
            <div>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 ${
                  dragOver
                    ? "border-sky-500 bg-sky-50/50"
                    : previewUrl
                    ? "border-sky-300 bg-slate-50/50"
                    : "border-slate-200 hover:border-sky-400 hover:bg-slate-50/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileSelect(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />

                {previewUrl ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-slate-600 font-medium truncate max-w-xs">
                      {file?.name} ({(file?.size! / 1024).toFixed(1)} KB)
                    </span>
                    <span className="text-[11px] text-sky-600 hover:underline">
                      Nhấn để đổi ảnh khác
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center space-y-2 py-4">
                    <div className="p-3 rounded-full bg-sky-50 text-sky-600 border border-sky-100">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">
                        Kéo thả hình ảnh vào đây, hoặc <span className="text-sky-600 underline">duyệt tệp</span>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Hỗ trợ PNG, JPG, WEBP, SVG (Tối đa 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          ) : (
            /* Upload Success Result */
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Ảnh đã tải lên Cloudinary thành công!</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-emerald-200 shadow-xs shrink-0 bg-white">
                  <img
                    src={uploadedUrl}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 overflow-hidden space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">
                    Cloudinary CDN URL:
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={uploadedUrl}
                      className="text-xs bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-mono w-full truncate focus:outline-none"
                    />
                    <button
                      onClick={() => copy(uploadedUrl)}
                      className="p-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-sky-600 transition-colors cursor-pointer shrink-0"
                      title="Sao chép liên kết"
                    >
                      {isCopied(uploadedUrl) ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={uploadedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-sky-600 transition-colors cursor-pointer shrink-0"
                      title="Mở trong tab mới"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/60">
          <button
            onClick={uploadedUrl ? handleReset : onClose}
            className="text-xs text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
          >
            {uploadedUrl ? "Tải ảnh khác" : "Hủy bỏ"}
          </button>

          {!uploadedUrl ? (
            <Button
              variant="primary"
              size="sm"
              disabled={!file || isUploading}
              onClick={handleUpload}
              icon={
                isUploading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <UploadCloud className="w-3.5 h-3.5" />
                )
              }
            >
              {isUploading ? "Đang tải lên..." : "Tải lên Cloudinary"}
            </Button>
          ) : (
            <Button variant="primary" size="sm" onClick={onClose}>
              Hoàn tất
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
