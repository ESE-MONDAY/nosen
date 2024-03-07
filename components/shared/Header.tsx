import React from 'react'

const Header = () => {
  return (
    <div className='w-full p-4 flex justify-end gap-8'>
        <div className='hidden sm:flex  items-center px-4 border-r-[1px]'>
          <div className='bg-cta-hover rounded-l-sm p-2 flex gap-1'>
            <p className='text-sm font-medium text-body-text flex '>You&apos;re on free trial!  </p>
            <p className='text-sm text-body-text '>Days remaining:</p>
          </div>
            
            <p className='bg-cta text-sm p-2 text-white rounded-r-sm'>29</p>
        </div>
        <div className='flex px-4 items-center gap-4'>
            <div>
            <p className='text-sm text-body-text-light'>Ese Monday</p>
            <p className='text-sm text-body-text-light'>mondayese8@gmail.com</p>
            </div>
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='User Image' className='rounded-full h-12 w-12' />  
        </div>
    </div>
  )
}

export default Header