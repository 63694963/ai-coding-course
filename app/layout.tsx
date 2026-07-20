import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe coding 交互讲解 · 从 Token 到四种能力",
  description: "从 Token 到四种能力的交互式课程讲稿。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
