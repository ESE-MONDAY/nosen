export const PrimaryButton =({children}:any) => {
    return(
        <button className='bg-cta-button-default hover:bg-cta-button-hover text-white rounded-sm sm:rounded-md px-8 py-2 flex items-center'>{children}</button>
    )
}