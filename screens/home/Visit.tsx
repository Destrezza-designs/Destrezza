import Image from 'next/image'
import React from 'react'
import Img from '@/public/home/visit/Img.png'

const Visit = () => {
  return (
    <div className='mt-[80px] mx-[48px] flex gap-[48px] text-black' >
        <div className='flex flex-1 flex-col justify-between items-start ' >
            <div className='' >
                <p className='text-[36px] uppercase' >Visit Us, Feel the Craft</p>
                <p className='mt-[24px] text-[18px] font-[400]' >Discover the beauty of furniture you can see, touch, and truly feel. Our studio is more than a showroom — it's where design, craftsmanship, and comfort come together. From carefully selected materials to intricate finishes, you’ll experience the process and passion behind every piece.</p>
            </div>
            <button className='text-[16px] text-white border bg-black rounded-[48px] w-fit px-[20px] py-[12px] flex gap-[16px]' >
            Plan Your Visit
            <div className='bg-white w-[24px] h-[24px] rounded-[24px] flex justify-center items-center ' >
                <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
        </button>
        </div>
        <Image src={Img} alt='Image' className='w-[628px] h-[594px] rounded-[32px]' />
    </div>
  )
}

export default Visit