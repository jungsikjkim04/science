import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "통합과학 메타인지 진단 파일럿",
  description:
    "통합과학 문항별 확신도와 오답 원인을 분석해 복습 우선순위를 제안하는 고1·고2 대상 파일럿 프로그램입니다.",
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
