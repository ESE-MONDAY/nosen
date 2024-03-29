"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PrimaryButton } from './shared/Buttons/button'

const Routes = [
  {
    id:1,
    name: "solutions",
    href: "/solutions"
  },
  {
    id: 2,
    name:"usecase",
    href: "/usecase"
  },
  {
    id:3,
    name: "pricing",
    href: "/pricing"

  },
  {
    id: 4,
    name: "resources",
    href: "/resources"
  }
]


const Header = () => {
  const pathname = usePathname()
  return (
    <div className=''>
        <div className='max-w-[1560px] w-full flex justify-around px-8 py-2 sticky'>
        <Link href="/" className="text-2xl font-bold">Nosen.</Link>
        <div className='flex gap-8 items-center'>
          {Routes.map((route,index) => (
            <Link key={index} href={route.href} className={`capitalize transition-all ${pathname === route.href && "bg-red-500 px-4 py-1"}`}>{route.name}</Link>
          ))}
        </div>
        <div className='flex gap-4 items-center'>
         
            <Link href="/login">Login</Link>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>

        </div>
        <div className='max-w-[1560px] w-full flex  px-8 py-2 gap-4 justify-center bg-body-text text-white'>
            <p>🌎 Pay fiat bills, salaries, and more using your crypto</p>
            <button className='bg-body-text-light px-2 py-1 rounded-full text-xs'>Learn More</button>

        </div>
    </div>
  )
}

export default Header