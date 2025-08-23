import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import React from 'react'

const page = () => {
  return (
    <div className='text-black' >
        <div className='mt-[48px] mx-[48px]' >
            <Header />
            <div className='mt-[80px]' >
                <p className='text-[#868684] text-[14px] uppercase text-center' >products</p>
                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[80px] leading-[68px] mt-[19px] font-[600] uppercase text-center bg-[url('@/public/product/Img.jpg')] bg-cover bg-center text-transparent bg-clip-text">
                        Designed to Define, Built <br /> to Last
                    </h1>
                </div>
            </div>
        </div>
        <Footor />
    </div>
  )
}

export default page