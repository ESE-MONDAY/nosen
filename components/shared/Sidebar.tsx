"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { IoIosHome, IoMdCog, IoIosHeart } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { FaMoneyBillWheat } from "react-icons/fa6";


const Sidebar = () => {

  const path = usePathname();

  const NavLinks = [
    {
        name: "Dashboard",
        icon: <IoIosHome />,
        href: "/dashboard",
    },
    {
        name: "Invoicing",
        icon: <FaFileInvoiceDollar />,
        href: "/invoicing",
    },
    {
        name: "Payments",
        icon : <MdPayment />,
        href: "/dashboard/payments",
    },
    {
        name: "Payroll & Expenses",
        icon: <FaMoneyBillWheat />,
        href: "/payroll",
    },
    {
        name: "Settings",
        icon: <IoMdCog />,
        href: "/dashboard/settings",
    },
    {
        name: "Claim free credits",
        icon: <IoIosHeart />,
        href: "/pricing",
    },
    
];
  return (
    <nav className="w-full h-full">
        <Link href="/" className="text-2xl font-bold">Nosen.</Link>
        <div className="mt-8 flex flex-col gap-4 text-base w-full ">
            {NavLinks.map((link) => (
                <Link href={link.href} key={link.name} className={`flex gap-4
                 items-center w-full font-semibold p-2 hover:text-cta hover:bg-cta-hover whitespace-nowrap text-sm ${path  === link.href && " text-cta bg-cta-hover"}`} >{link.icon}{link.name}</Link>
            ))}
          
        </div>
    </nav>
  )
}

export default Sidebar