import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MenuLateral } from "@/components/menu-lateral/menu-lateral";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard JS",
  description: "Gerenciador de Sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", `${geistSans.variable} ${geistMono.variable} `)}
      >
        <MenuLateral />

        {children}
      </body>
    </html>
  );
}
