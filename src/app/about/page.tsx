import Header from '@/components/product/Header'
import RedirectButton from '@/components/utils/RedirectButton'
import Image from 'next/image'
import React from 'react'
import I1 from '@/public/About/Img.png'
import I2 from '@/public/About/Approch.png'
import I3 from '@/public/About/Imageback.jpg'
import Footor from '@/components/Footor'



const page = () => {
  return (
    <div className='text-[#141414]' >
        <div className='mx-[48px] mt-[48px]' >
            <Header />
            <div className='mt-[80px]' >
                <p className='text-[14px] text-[#868684] uppercase' >ABOUT us</p>
                <p className='text-[58px] font-[500] uppercase leading-[68px] mt-[14px]' >Crafting Elegance in <br /> Every Detail.</p>
                <p className='text-[18px] font-[400] leading-[28px] w-[70%] mt-[24px] mb-[53px]' >We are a bespoke furniture studio dedicated to timeless design and masterful craftsmanship. With a deep respect for materials and form, we create pieces that embody sophistication, comfort, and enduring beauty — tailored for spaces that deserve nothing less.</p>
                <RedirectButton text='View our products' />
            </div>
        </div>
        <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={I1} className='w-screen h-auto mt-[74px]' alt='Image' />

        <div className='mt-[80px] flex flex-col justify-center items-center gap-[148px]' >
            
                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[80px] font-[700] uppercase text-center bg-[url('https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FutilityImage%2FEleagence.jpg?alt=media&token=3c271e61-9709-47ce-861f-72463df8a418')] bg-cover bg-center text-transparent bg-clip-text">
                        ELEGANCE
                    </h1>
                    <p className='text-[#868684] w-[70%] text-[18px] font-[400] leading-[28px] text-center' >Every curve, edge, and finish is thoughtfully designed to exude timeless sophistication. We believe elegance lies in subtlety — where form enhances space without overpowering it.</p>
                </div>

                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[80px] font-[700] uppercase text-center bg-[url('https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FutilityImage%2FUtility.png?alt=media&token=a8375984-35b5-4dd2-9e32-3cdef8ccc8fd')] bg-cover bg-center text-transparent bg-clip-text">
                        Utility
                    </h1>
                    <p className='text-[#868684] w-[70%] text-[18px] font-[400] leading-[28px] text-center' >True beauty is functional. Our pieces are created with purpose, offering comfort, durability, and intelligent design that integrates seamlessly into everyday living.</p>
                </div>

                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[80px] font-[700] uppercase text-center bg-[url('https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FutilityImage%2FSimplicity.png?alt=media&token=8ed9350e-b94d-4a23-8faa-99ba2b214e81')] bg-cover bg-center text-transparent bg-clip-text">
                        Simplicity
                    </h1>
                    <p className='text-[#868684] w-[70%] text-[18px] font-[400] leading-[28px] text-center' >We embrace clean lines and intentional choices. Simplicity isn&lsquo;t about less — it&lsquo;s about clarity, balance, and allowing quality materials and craftsmanship to speak for themselves.</p>
                </div>
            
        </div>

        <div className='mt-[80px] mx-[48px] h-[80vh] overflow-hidden flex gap-[48px] justify-center items-center' >
            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={I2} className='w-[50%] h-auto mt-[74px]' alt='Image' />
            <div className='flex flex-1 h-full flex-col justify-between items-start max-w-[50%]' >
                <div className='flex flex-col flex-1' >
                    <p className='text-[36px] uppercase font-[500]' >Our Approach to Timeless Craft</p>
                    <p className='text-[18px] font-[400] leading-[28px] ' >At the heart of our process is a deep respect for design, material, and the spaces we help shape. From initial sketches to final finishes, our approach blends traditional craftsmanship with modern precision — ensuring every piece we create is as functional as it is beautiful. We listen, we collaborate, and we build with intention, crafting furniture that feels personal, purposeful, and enduring.</p>
                </div>
                <div>
                    <ul className='text-[18px] font-[400] uppercase flex flex-col gap-[28px]' >
                        <li><p>01. We begin with understanding your vision.</p></li>
                        <li><p>02. We shape ideas into thoughtful, functional designs.</p></li>
                        <li><p>03. Our artisans bring each design to life with precision.</p></li>
                        <li><p>04. We deliver and install with care, ready to be lived with.</p></li>
                    </ul>
                </div>
            </div>
        </div>  

        
        <div className='relative w-screen h-[720px] mt-[80px]' >
            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={I3} className='w-screen h-[400px] object-cover' alt='Image' layout="fill" />
            <div className='absolute inset-0 bg-[#1414144D] flex justify-center items-center px-[5%]' >
                <p className='text-white text-[78px] leading-[78px] uppercase text-center font-[500]' >“We craft more than furniture — we create tailored pieces that reflect your lifestyle, taste, and story.”</p>
            </div>
        </div>
        
        <Footor />
    </div>
  )
}

export default page