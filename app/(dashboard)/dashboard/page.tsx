import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className='p-8'>
        <h1 className='text-3xl font-bold text-body-text'> 👋 Hey Ese</h1>
        <div className='mt-8 border-[1px] rounded-xl p-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-medium text-body-text'>Let&apos;s get you started!</h2>
                <Link href="#" className='text-cta text-sm'>I want to do this later</Link>
            </div>
        </div>
        <div className='mt-8 '>
        <h1 className='text-2xl font-medium text-body-text'>Get Paid</h1>
        <p className='text-body-text-light mt-2 text-xs italic '>Create invoices and get paid in crypto by your clients.</p>
        <div className='flex flex-wrap gap-4 mt-4'>
            <div className='border-body-text/30 hover:border-cta rounded-sm px-8 py-2 border-[1px] w-full sm:max-w-[200px] '>
                <p className='text-xl text-body-text font-medium'>$0.00</p>
                <p className='text-xs text-body-text-light'>Recieved this month</p>
            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm px-8 py-2 border-[1px] w-full sm:max-w-[200px]'>
                <p className='text-xl text-body-text font-medium'>$0.00</p>
                <p className='text-xs text-body-text-light'>To recieve this month</p>
            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm px-8 py-2 border-[1px] w-full sm:max-w-[200px]'>
                <p className='text-xl text-body-text font-medium'>0</p>
                <p className='text-xs text-body-text-light'>Invoices to get paid</p>
            </div>
            <Link href='#' className='text-xl bg-cta-button-default hover:bg-cta-button-hover text-white rounded-sm sm:rounded-md px-8 py-2 flex items-center   w-full sm:max-w-[250px]'>Create New Invoice</Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
            <div className='border-body-text/30 hover:border-cta rounded-sm p-4 border-[1px] col-span-1'>
                <p className='text-base text-body-text font-medium'>Monthly Pay-Ins</p>
                <p className='text-xs text-body-text-light'>Cash Inflows</p>

            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm p-4 border-[1px] col-span-1'>
            <div className='flex justify-between'>
                    <div className='gap-1' >
                    <p className='text-base text-body-text font-medium'>Your Top Clients</p>
                    <p className='text-xs text-body-text-light'>Last 3 months</p>
                    </div>
                    <p className='bg-body-text-light px-2 py-1 rounded-full flex justify-center items-center'>🤝</p>

                </div>

            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm p-4 border-[1px] col-span-1'>
                <p className='text-base text-body-text font-medium'>Your Top Currencies</p>
                <p className='text-xs text-body-text-light'>Last 3 months</p>

            </div>

        </div>

        </div>
        <div className='mt-8 '>
        <h1 className='text-2xl font-medium text-body-text'>Pay</h1>
        <p className='text-body-text-light mt-2 text-xs italic '>Invite your partners to invoice you and save time when paying them in crypto.</p>
        <div className='flex flex-wrap gap-4 mt-8'>
            <div className='border-body-text/30 hover:border-cta rounded-sm px-8 py-2 border-[1px] w-full sm:max-w-[200px]'>
                <p className='text-xl text-body-text font-medium'>$0.00</p>
                <p className='text-xs text-body-text-light'>Paid this month</p>
            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm px-8 py-2 border-[1px] w-full sm:max-w-[200px]'>
                <p className='text-xl text-body-text font-medium'>$0.00</p>
                <p className='text-xs text-body-text-light'>To pay this month</p>
            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm px-8 py-2 border-[1px] w-full sm:max-w-[200px]'>
                <p className='text-xl text-body-text font-medium'>0</p>
                <p className='text-xs text-body-text-light'>Bills to get pay</p>
            </div>
            <Link href='#' className='text-xl bg-cta-button-default hover:bg-cta-button-hover text-white rounded-sm sm:rounded-md px-8 py-2 flex items-center   w-full sm:max-w-[280px]'>Create New Payment</Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
            <div className='border-body-text/30 hover:border-cta rounded-sm p-4 border-[1px] col-span-1'>
                <p className='text-base text-body-text font-medium'>Monthly PayOuts</p>
                <p className='text-xs text-body-text-light'>Cash Outflows</p>

            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm p-4 border-[1px] col-span-1'>
                <div className='flex justify-between'>
                    <div className='gap-1' >
                    <p className='text-base text-body-text font-medium'>Your Top Vendors</p>
                    <p className='text-xs text-body-text-light'>Last 3 months</p>
                    </div>
                    <p className='bg-body-text-light px-2 py-1 rounded-full flex justify-center items-center'>🤝</p>
                </div>
                

            </div>
            <div className='border-body-text/30 hover:border-cta rounded-sm p-4 border-[1px] col-span-1'>
                <p className='text-base text-body-text font-medium'>Your Top Currencies</p>
                <p className='text-xs text-body-text-light'>Last 3 months</p>

            </div>

        </div>

        </div>
    </div>
  )
}

export default Dashboard