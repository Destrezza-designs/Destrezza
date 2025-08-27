import Image from 'next/image'
import React from 'react'
import Img from '@/public/home/visit/Img.png'
import RedirectButton from '@/components/utils/RedirectButton'

const Visit = () => {
  return (
    <div className='mt-[80px] mx-[48px] flex gap-[48px] text-black' >
        <div className='flex flex-1 flex-col justify-between items-start ' >
            <div className='' >
                <p className='text-[36px] uppercase' >Visit Us, Feel the Craft</p>
                <p className='mt-[24px] text-[18px] font-[400]' >Discover the beauty of furniture you can see, touch, and truly feel. Our studio is more than a showroom — it's where design, craftsmanship, and comfort come together. From carefully selected materials to intricate finishes, you’ll experience the process and passion behind every piece.</p>
            </div>
            <RedirectButton text='Place your Visit' />
        </div>
        <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={Img} alt='Image' className='w-[628px] h-[594px] rounded-[32px]' />
    </div>
  )
}

export default Visit