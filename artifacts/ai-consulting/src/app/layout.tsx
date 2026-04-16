import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIdeate Tech",
  description: "AI consulting and automation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
