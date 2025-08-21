import Image from 'next/image'
import React from 'react'
import P1 from '@/public/home/products/Frame1.png'
import P2 from '@/public/home/products/Frame2.png'
import P3 from '@/public/home/products/Frame3.png'
import P4 from '@/public/home/products/Frame4.png'
import P5 from '@/public/home/products/Frame5.png'
import P6 from '@/public/home/products/Frame6.png'
import P7 from '@/public/home/products/Frame7.png'

const ProductsShowcase = () => {
  return (
    <div className='bg-[#141414] p-[48px] w-screen flex flex-col gap-[48px] justify-center items-center' > 
        <div className='grid grid-cols-3 gap-[24px] w-[100%]' >

            <div className='flex flex-col gap-[24px]' >
                <Image src={P1} alt='Product Image' className='w-auto h-[600px]' />
                <Image src={P2} alt='Product Image' className='w-auto h-[600px]' />
            </div>

            <div className='flex flex-col gap-[24px]' >
                <Image src={P3} alt='Product Image' className='w-auto h-[288px]' />
                <Image src={P4} alt='Product Image' className='w-auto h-[600px]' />
                <Image src={P5} alt='Product Image' className='w-auto h-[288px]' />
            </div>

            <div className='flex flex-col gap-[24px]' >
                <Image src={P6} alt='Product Image' className='w-auto h-[600px]' />
                <Image src={P7} alt='Product Image' className='w-auto h-[600px]' />
            </div>

        </div>
        <button className='text-[16px] border border-[#F8F8F5] border-solid rounded-[48px] w-fit px-[20px] py-[12px] flex gap-[16px]' >
            See What We’ve Created
            <div className='bg-white w-[24px] h-[24px] rounded-[24px] flex justify-center items-center ' >
                <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
        </button>
    </div>
  )
}

export default ProductsShowcase