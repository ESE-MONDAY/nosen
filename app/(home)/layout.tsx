import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });



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
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
