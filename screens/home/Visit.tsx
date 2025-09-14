import Image from 'next/image'
import React from 'react'
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
        <Image 
          blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  
          src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2FATR04761.jpg?alt=media&token=2e202034-e033-420c-9036-fa750f77e376"} alt='Image' 
          height={718} width={682}
          style={{ width: '682px', height: '618px' }}
          className='w-[628px] h-[594px] rounded-[32px] object-cover border-2 border-white rounded-[32px]' />
    </div>
  )
}

export default Visit