import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";


export const metadata: Metadata = {
  title: "Nosen: Flexible payroll solution for businesses in Africa.",
  description: "Discover Nosen: Your Flexible Payroll Solution Tailored for Businesses Across Africa. Streamline Your Payroll Processes with Ease and Precision",
};


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen " >
        <main className="grid grid-col-1 lg:grid-cols-5 max-w-[1560px] mx-auto h-full ">
            <aside className="hidden lg:flex col-span-1 text-body-text border-r-[2px] p-8 h-full ">
                <Sidebar />
            </aside>
            <section className="col-span-4 ">
                <Header />
                {children}</section>
        </main>
        
        </body>
    </html>
  );
}
