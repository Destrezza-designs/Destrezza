'use'
import React from 'react'

type RedirectButtonProps = {
  text: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ text,onClick }) => {
  return (
    <button onClick={onClick} className='text-[16px] text-white border bg-black rounded-[48px] w-fit px-[20px] py-[12px] flex gap-[16px] uppercase font-[600] hover:bg-white hover:text-black transition-all duration-300' >
        {text}
        <div className='bg-white w-[24px] h-[24px] rounded-[24px] flex justify-center items-center transition-all duration-300' >
            <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        
    </button>
  )
}

export default RedirectButton