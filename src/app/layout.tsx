import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Nguyễn Thành Trương | Software Engineer • Product Builder • Growth",
  description:
    "Portfolio cá nhân của Nguyễn Thành Trương - Software Engineer, Product Builder, Technical Growth Specialist và Academic Researcher. Người sáng lập OrcaX MedTech.",
  keywords: [
    "Nguyễn Thành Trương",
    "Nguyen Thanh Truong",
    "Software Engineer",
    "Product Builder",
    "Technical SEO",
    "OrcaX",
    "FPT University",
    "ICTechED 2026",
    "Next.js Developer"
  ],
  authors: [{ name: "Nguyễn Thành Trương", url: "https://github.com/truongtn-dev" }],
  creator: "Nguyễn Thành Trương",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://truongtn.dev",
    title: "Nguyễn Thành Trương | Software Engineer & Technical Growth",
    description:
      "Tư duy kỹ thuật chuẩn mực, năng lực tăng trưởng số và nghiên cứu thực nghiệm tạo nên những sản phẩm công nghệ có tác động thực tế.",
    siteName: "Nguyễn Thành Trương Portfolio"
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        {/* Google Sans Flex & Product Sans Web Fonts with Full Vietnamese Diacritics Support */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/google-sans"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-sky-200 selection:text-sky-900 flex flex-col relative overflow-x-hidden font-google-sans">
        {/* Ambient subtle background mesh */}
        <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50/70 via-slate-50 to-white" />
        
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
