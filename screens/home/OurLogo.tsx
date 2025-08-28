import React from 'react'
import logo from '@/public/home/logo/logo.png'
import bg from '@/public/home/logo/Wide.png'
import Image from 'next/image'

const OurLogo = () => {
  return (
    <div 
      id="target-section"
      className='mx-[48px] mt-[80px] text-[#141414]' >
        <p className='text-[14px] text-[#868684] uppercase' >the story of z/z</p>
        <p className='text-[36px] uppercase mt-[14px]' >Our signature mark</p>
        <p className='text-[18px] font-[400] leading-[28px] w-[60%]' >Our logo is more than just a symbol — it represents who we are, what we believe in, and how we build. Every line and curve reflects our commitment to timeless design, refined craftsmanship, and thoughtful detail.</p>
        <div className='relative mt-[45px] flex flex-1 justify-center items-center'>
            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={bg} alt="Background Image"  objectFit="cover" />
            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600' 
              src={logo}
              alt='logo'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35%] h-auto'
            />
        </div>
        <div className='mt-[60px] text-[#141414] ' >
          <p className='text-[24px] uppercase w-[70%] text-black' >The twin diagonal lines form a seamless geometry — minimalist yet memorable. Each line stands for motion, partnership, and purpose.</p>
          <p className='text-[18px] leading-[28px] font-[400] w-[65%] mt-[24px]' >Crafted not just as a logo, but as a legacy, the Z/Z emblem represents more than design. It’s the language of precision, unity, and movement — the core of customizable luxury.Born from architectural inspiration and driven by modern elegance, Z/Z is our badge of excellence. Like the Nike swoosh or the Adidas stripes, it carries identity — and intention.Every angle reflects structure. Every line tells a story of partnership, strength, and sophistication.</p>
          <p className='text-center text-[18px] leading-[28px] font-[400] mt-[18px]' >“Where you see the Z/Z, you see more than furniture. You see Destrezza.”</p>
        </div>
    </div>
  )
}

export default OurLogo