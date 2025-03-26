"use client"; // Mark as client component

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { dark } from '@clerk/themes'
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ClerkProvider appearance={{
          baseTheme: dark
        }}>
          {mounted ? (
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <Header />
              <main className="min-h-screen sm:px-8 md:px-12 lg:px-16 px-4">{children}</main>
              <Toaster richColors/>
              <Footer />
            </ThemeProvider>
          ) : null}
        </ClerkProvider>
      </body>
    </html>
  );
}
