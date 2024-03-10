import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className=''>
        <div className='max-w-[1560px] w-full flex justify-between px-8 py-2 sticky'>
        <Link href="/" className="text-2xl font-bold">Nosen.</Link>
        <div className='flex gap-8 items-center'>
            <p>Solutions</p>
            <p>UseCases</p>
            <p>Pricing</p>
            <p>Resources</p>
        </div>
        <div className='flex gap-4 items-center'>
         
            <button>Login</button>
            <button className='bg-cta-button-default hover:bg-cta-button-hover text-white rounded-sm sm:rounded-md px-8 py-2 flex items-center'>Get Started</button>
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