'use client'
import Image from 'next/image'
import React from 'react'
import P1 from '@/public/home/products/Img.png'
import P2 from '@/public/home/products/Img2.png'
import P3 from '@/public/home/products/Img3.png'
import P4 from '@/public/home/products/Img4.png'
import { useRouter } from 'next/navigation'

const Products = () => {

    const router = useRouter();

  return (

    <div className='relative text-[#141414] mt-[80px] overflow-hidden' >
        <div className='absolute top-0 left-0 z-[-1]' >
            <svg width="1440" height="2230" viewBox="0 0 1440 2230" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 2230L1331.04 756.711L0 0L146.048 1826.72L1440 2230Z" fill="#CEB578"/>
            </svg>
        </div>
        <div className='px-[48px]' >
            <p className='text-[#868684] text-[14px] uppercase' >Designed to be loved</p>
            <p className='text-[36px] uppercase' >Our Products</p>
            <div className='flex gap-[48px] mt-[20px]' >
                <Image src={P1} alt='products Image' className='w-[45%] h-fit max-w-[50%]' />
                <div className='w-[55%]' >
                    <p className='text-[36px] uppercase' >Kizuki STudy table and chair</p>
                    <p className='text-[18px] font-[400] mt-[20px]' >Rooted in calm, functional elegance, the Kizuki Study Table & Chair set is a nod to mindful living and purposeful work. Inspired by Japanese simplicity and crafted with natural materials, it creates a serene workspace where clarity, creativity, and comfort coexist.
                    Whether it’s for a home office, creative nook, or reading corner, this set offers a peaceful no clutter, no distractions. Just you and your thoughts.</p>
                </div>
            </div>

            <div className='flex gap-[48px] mt-[48px]' >
                <div className='w-[55%]' >
                    <p className='text-[36px] uppercase' >Crown Seater</p>
                    <p className='text-[18px] font-[400] mt-[20px]' >Experience luxury and comfort with the Crown Seater. Designed to be the focal point of any living space, this elegant piece combines plush upholstery with a regal design, offering a sophisticated seating solution that excludes style and invites relaxation.</p>
                </div>
                <Image src={P2} alt='products Image' className='w-[45%] h-fit max-w-[50%]' />
            </div>

            <div className='flex gap-[48px] mt-[48px]' >
                <Image src={P3} alt='products Image' className='w-[45%] h-fit max-w-[50%]' />
                <div className='w-[55%]' >
                    <p className='text-[36px] uppercase' >Comfish master</p>
                    <p className='text-[18px] font-[400] mt-[20px]' >Indulge in unparalleled relaxation with the Comfish Master, a perfect blend of luxurious comfort and sophisticated style. Designed to enhance your living space, this masterful piece offers exceptional support and a contemporary aesthetic, making it the ideal choice for any modern home.</p>
                </div>
            </div>

            <div className='flex gap-[48px] mt-[48px]' >
                <div className='w-[55%]' >
                    <p className='text-[36px] uppercase' >Wellash chair</p>
                    <p className='text-[18px] font-[400] mt-[20px]' >The Wellash Chair is a celebration of gentle curves, detailed craftsmanship, and serene comfort. With its cushioned seated, ergonomic backrest, and sculptural wooden frame. It brings a sense of warmth and elegance to any space - whether used as a dining chair, lounge accent, or work chair. 
                    Designed to be both functional and stylish, the Wellash Chair pairs effortlessly with modern, minimal, or earthy interior themes.</p>
                </div>
                <Image src={P4} alt='products Image' className='w-[45%] h-fit max-w-[50%]' />
            </div>
        </div>

        <button onClick={() => router.push('/product')} className='flex gap-[12px] uppercase mx-[48px] px-[16px] py-[16px] mt-[24px]' >All Products
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
  )
}

export default Products