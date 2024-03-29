import type { Metadata } from "next";
import Sidebar from "@/components/shared/Sidebar";
import '../globals.css'
import Header from "@/components/shared/Header";


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
 
        <main className="grid grid-cols-1 lg:grid-cols-5 max-w-[1560px] mx-auto h-screen">
          <aside className="hidden lg:flex col-span-1 text-body-text border-r-[2px] p-8 h-full">
          <Sidebar/>
          </aside>
          <div className="col-span-1 sm:col-span-4">   
          <Header/>
            {children}
          </div>
        </main>
  );
}
