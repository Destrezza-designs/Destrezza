'use client'

import Image from 'next/image'
import React from 'react'
import P1 from '@/public/home/products/Frame1.png'
import P2 from '@/public/home/products/Frame2.png'
import P3 from '@/public/home/products/Frame3.png'
import P4 from '@/public/home/products/Frame4.png'
import P5 from '@/public/home/products/Frame5.png'
import P6 from '@/public/home/products/Frame6.png'
import P7 from '@/public/home/products/Frame7.png'
import { useRouter } from 'next/navigation'

const ProductsShowcase = () => {
    const router = useRouter();
  return (
    <div className='bg-[#141414] p-[0px] py-[40px] lg:py-[48px] lg:px-[48px] w-screen flex flex-col gap-[48px] justify-center items-center mt-[80px]' > 
        <div className='hidden lg:grid grid-cols-3 gap-[24px] w-[100%] ' >

            <div className='flex flex-col gap-[24px]' >
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P1} alt='Product Image' className='w-auto h-[600px]' />
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P2} alt='Product Image' className='w-auto h-[600px]' />
            </div>

            <div className='flex flex-col gap-[24px]' >
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P3} alt='Product Image' className='w-auto h-[288px]' />
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P4} alt='Product Image' className='w-auto h-[600px]' />
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P5} alt='Product Image' className='w-auto h-[288px]' />
            </div>

            <div className='flex flex-col gap-[24px]' >
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P6} alt='Product Image' className='w-auto h-[600px]' />
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={P7} alt='Product Image' className='w-auto h-[600px]' />
            </div>

        </div>

        <div className='flex lg:hidden flex-col gap-[5px]' >
            <Image   
            src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2FPP2-34.jpeg?alt=media&token=4e70a3e3-d15f-46be-94d5-052ce6d981ff"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-[100%] !h-auto' />
            <Image   
            src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F60.jpeg?alt=media&token=9b193c1c-985b-4d2e-aa36-39f99783e5a5"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />
            <Image   
            src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FutilityImage%2FSimplicity.png?alt=media&token=8ed9350e-b94d-4a23-8faa-99ba2b214e81"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />
            <Image   
            src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F14.jpeg?alt=media&token=0baf9070-586b-446a-8a52-ff493d6b8daa"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />
            <Image   
            src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F32.jpeg?alt=media&token=127cc221-3e73-4864-b836-c5f63b5786af"} 
            width={1000} height={1000} alt='Product Image' 
            className='!w-full !h-auto' />


        </div>
        <button 
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