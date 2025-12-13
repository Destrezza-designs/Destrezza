'use client'

import Image from 'next/image'
import React from 'react'
import P1 from '@/public/Cover/2.jpg'
import P2 from '@/public/Cover/5.jpg'
import P3 from '@/public/Cover/6.jpg'
import P4 from '@/public/Cover/8.jpg'
import P5 from '@/public/Cover/9.jpg'
import P6 from '@/public/Cover/10.jpg'
import P7 from '@/public/Cover/12.jpg'
import { useRouter } from 'next/navigation'

const ProductsShowcase = () => {
    const router = useRouter();
  return (
    <div
        style={{boxShadow: "0px -16px 16px rgba(0,0,0,0.25)"}}
        
        className="hidden lg:flex mt-[0px] rounded-[48px]  relative bg-black p-[0px] py-[40px] lg:py-[48px] lg:px-[48px] w-screen  flex-col gap-[48px] justify-center items-center " > 

        <div className="absolute inset-0 rounded-[48px]  bg-white/10  z-0"></div>
        <div  
            className="relative hidden rounded-[48px] lg:grid grid-cols-3 gap-[24px] w-[100%] ">
        
            <div data-aos="fade-up" className='flex flex-col gap-[24px]' >
                <Image   
                src={P1} alt='Product Image' className='popup rounded-[16px] w-auto h-[600px] object-cover' />
                <Image   
                src={P2} alt='Product Image' className='popup rounded-[16px] w-auto h-[600px] object-cover' />
            </div>

            <div data-aos="fade-up" className='flex flex-col gap-[24px]' >
                <Image   
                src={P6} alt='Product Image' className='popup rounded-[16px] w-auto h-[600px] object-cover' />
                <Image   
                src={P7} alt='Product Image' className='popup rounded-[16px] w-auto h-[600px] object-cover' />
            </div>
            <div data-aos="fade-up" className='flex flex-col gap-[24px]' >
                <Image   
                src={P3} alt='Product Image' className='popup rounded-[16px] w-auto h-[393px] object-cover' />
                <Image   
                src={P4} alt='Product Image' className='popup rounded-[16px] w-auto h-[393px] object-cover' />
                <Image   
                src={P5} alt='Product Image' className='popup rounded-[16px] w-auto h-[393px] object-cover object-bottom' />
            </div>

        </div>

        <div data-aos="fade-up" className='flex lg:hidden flex-col gap-[5px]' >
            <Image   
            src={"/12.jpeg"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-[100%] !h-auto' />
            <Image   
            src={"/14.jpeg"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />
            <Image   
            src={"/32.jpeg"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />
            <Image   
            src={"/36.jpeg"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />
            <Image   
            src={"/60.jpeg"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />


        </div>
        <button 
            data-aos="fade-up"
            onClick={() => router.push('/gallery')}
            className='text-[16px] border border-[#F8F8F5] border-solid rounded-[48px] w-fit px-[20px] py-[12px] flex gap-[16px] uppercase font-[600] hover:bg-[#F8F8F5] hover:text-[#141414] hover:transition-all duration-300' >
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