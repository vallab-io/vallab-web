import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vallab - 가치를 만드는 실험실",
  description: "단순히 서비스를 만들어드리는 것이 아닌 가치를 만들겠습니다",
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
