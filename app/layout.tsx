import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_layout/header";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./_layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intevoo Shop",
  description: "Application e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
