
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "BrainBox App",
  description: "BrainBox App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
