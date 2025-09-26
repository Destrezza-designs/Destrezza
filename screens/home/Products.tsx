'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Products = () => {

    const router = useRouter();

  return (

    <div className='relative hidden lg:block text-[#141414] mt-[40px] overflow-hidden' >
        <div className='hidden lg:flex absolute top-0 left-0 z-[-1]' >
            <svg width="1440" height="2230" viewBox="0 0 1440 2230" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 2230L1331.04 756.711L0 0L146.048 1826.72L1440 2230Z" fill="#CEB578"/>
            </svg>
        </div>
        <div className='px-[18px] lg:px-[48px]' >
            <p data-aos="fade-up" className='text-[#868684] text-[14px] uppercase' >Designed to be loved</p>
            <p data-aos="fade-up" className='text-[36px] font-[500] uppercase' >Our Products</p>
            <div data-aos="fade-up" className='flex lg:flex-row flex-col gap-[20px] lg:gap-[48px] mt-[20px]' >
                <Image 
                      
                    src={"/62.jpeg"} 
                    height={718} width={682} alt='products Image' 
                    style={{ width: '682px', height: '618px' }}
                    className='popup border-2 border-white hidden lg:flex rounded-[32px] object-cover' 
                />
                <Image 
                      
                    src={"/62.jpeg"} 
                    height={718} width={682} alt='products Image' 
                    style={{ width: '682px', height: '383px' }}
                    className=' border-2 border-white object-right lg:hidden rounded-[32px] object-cover' 
                />
                <div className=' w-full lg:w-[55%]' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Noir Cabinet</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Noir Cabinet embodies quiet sophistication through its clean lines and refined detailing. Crafted from rich wood with a rhythmic fluted front, it merges utility with artistry, offering both storage and statement. Its minimal silhouette makes it versatile—equally at home in a dining area, living room, or hallway—while its timeless design invites a sense of grounded elegance into any interior.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='flex flex-col-reverse lg:flex-row gap-[20px] lg:gap-[48px] mt-[48px]' >
                <div className='w-full lg:w-[55%] ' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Lureth Chair</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Lureth Chair is an elegant balance of tradition and modernity, designed to bring warmth and refinement to any space. Its handcrafted wooden frame, paired with a woven cane backrest, evokes timeless craftsmanship, while the patterned upholstered seat adds a touch of contemporary charm.</p>
                </div>
                <Image 
                      
                    src={"/36.jpeg"} 
                    height={718} width={682} alt='products Image'
                    style={{ width: '682px', height: '618px', objectPosition: 'right' }} 
                    className='popup object-cover border-2 hidden lg:flex border-white rounded-[32px]' />
                <Image 
                      
                    src={"/36.jpeg"} 
                    height={718} width={682} alt='products Image'
                    style={{ width: '682px', height: '383px', objectPosition: 'right' }} 
                    className='object-cover border-2 lg:hidden border-white rounded-[32px]' />
            </div>

            <div data-aos="fade-up" className='flex lg:flex-row flex-col gap-[20px] lg:gap-[48px] mt-[48px]' >
                <Image  
                      
                    src={"/32.jpeg"} 
                    alt='products Image' 
                    height={718} width={682}
                    style={{ width: '682px', height: '618px' }}
                    className='popup w-[45%] h-fit object-cover hidden lg:flex border-2 border-white rounded-[32px]' />
                <Image  
                      
                    src={"/32.jpeg"} 
                    alt='products Image' 
                    height={718} width={682}
                    style={{ width: '682px', height: '383px' }}
                    className='w-[45%] h-fit object-cover border-2 lg:hidden border-white rounded-[32px]' />
                <div className='w-full lg:w-[55%] ' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Arvionc Console</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Arvionc Console is a celebration of fine craftsmanship and thoughtful design. Defined by its clean form, layered shelving, and subtle detailing, it offers both utility and aesthetic presence. The warm wooden finish brings natural character, while the spacious shelves and drawers provide versatile storage for everyday essentials or curated displays.</p>
                </div>
            </div>

            {/* <div className='flex flex-col-reverse lg:flex-row  gap-[20px] lg:gap-[48px] mt-[48px]' >
                <div className='w-full lg:w-[55%] ' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Wellash chair</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Wellash Chair is a celebration of gentle curves, detailed craftsmanship, and serene comfort. With its cushioned seated, ergonomic backrest, and sculptural wooden frame. It brings a sense of warmth and elegance to any space - whether used as a dining chair, lounge accent, or work chair. 
                    Designed to be both functional and stylish, the Wellash Chair pairs effortlessly with modern, minimal, or earthy interior themes.</p>
                </div>
                <Image 
                      
                    src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash1.png?alt=media&token=2d733f2c-3912-4cba-ad87-45d394c8ebc5"} 
                    alt='products Image' 
                    height={718} width={682}
                    style={{ width: '682px', height: '618px' }}
                    className='object-cover border-2 hidden lg:flex border-white rounded-[32px]' />
                <Image 
                      
                    src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash1.png?alt=media&token=2d733f2c-3912-4cba-ad87-45d394c8ebc5"} 
                    alt='products Image' 
                    height={718} width={682}
                    style={{ width: '682px', height: '383px' }}
                    className='object-cover border-2 lg:hidden border-white rounded-[32px]' />
            </div> */}

        </div>

        <button data-aos="fade-up" onClick={() => router.push('/product')} className='flex justify-end lg:justify-normal items-center text-[14px] font-[600]  w-full flex-1 gap-[12px] uppercase mx-[0px] mr-[20px] lg:mx-[48px] px-[20px] lg:px-[16px] py-[16px] mt-[24px]' >All Products
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
  )
}

export default Products