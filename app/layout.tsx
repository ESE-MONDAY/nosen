import type { Metadata } from "next";
import { Inter, Playfair } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nosen: Flexible payroll solution for businesses in Africa.",
  description: "Discover Nosen: Your Flexible Payroll Solution Tailored for Businesses Across Africa. Streamline Your Payroll Processes with Ease and Precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
