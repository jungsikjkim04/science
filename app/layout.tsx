import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "통합과학 메타인지 진단",
  description:
    "통합과학 문항별 확신도와 오답 원인을 분석해 내신부터 수능형 학습까지 복습 우선순위를 제안하는 진단 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
