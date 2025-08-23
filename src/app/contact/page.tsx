import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import RedirectButton from '@/components/utils/RedirectButton'
import Image from 'next/image'
import React from 'react'
import p1 from '@/public/contact/location.png'

const page = () => {
  return (
    <div className='text-black' >
         <div className='mx-[48px] mt-[48px] ' >
            <Header />
            <div className='mt-[80px]' >
              <p className='text-[58px] leading-[68px] uppercase' >Find Us Here</p>
              <p className='text-[18px] font-[400] mt-[24px] w-[70%]' >Come visit us and experience Destrezza up close. Whether you're seeking inspiration, exploring our latest designs, or just dropping by — we’re here. Step into our space and see where creativity meets craftsmanship.</p>
              <div className='flex gap-[68px] mt-[80px]' >
                <div>
                  <p className='text-[18px] uppercase' >PHONE NUMBER</p>
                  <p className='text-[16px] font-[400]' >+91 9765438781</p>
                  <p className='text-[16px] font-[400]' >+91 9865487981</p>
                </div>
                <div>
                  <p className='text-[18px] uppercase' >ADDRESS</p>
                  <p className='text-[16px] font-[400]' >1234 Elmwood Avenue, 690548</p>
                  <p className='text-[16px] font-[400]' >Trissur, Kerala, India</p>
                </div>
                <div>
                  <p className='text-[18px] uppercase' >Opening Hours</p>
                  <p className='text-[16px] font-[400]' >Mon to Sat,    8AM - 8PM</p>
                </div>
              </div>
            </div>
            <Image src={p1} alt='Location Image' className='w-full h-auto mt-[80px]'  />
            <div className='flex flex-1 h-[550px] justify-between items-center mt-[80px] ' >
              <div className='w-[50%] flex flex-col h-full justify-between  bg-red-500' > 
                <div className='flex flex-col flex-1 ' >
                  <p className='text-[14px] text-[#868684] uppercase' >CONTACT</p>
                  <p className='text-[36px] uppercase mt-[14px]'  >Reach out, connect, <br /> and let’s <br /> craft something beautiful.</p>
                </div>
                <div className='flex flex-col ' >
                  <p className='text-[16px] font-[400] uppercase' >looking for experienced assistance?</p>
                  <p className='text-[16px] font-[400] uppercase mt-[18px]' >+91 9765438781</p>
                  <p className='text-[16px] font-[400] uppercase' >+91 9865487981</p>
                  <p className='text-[16px] font-[400] uppercase mt-[24px]' >hello@destrezzzaarthouse.com</p>
                </div>
              </div>
              <div className='w-[50%] ' >
                <div className='flex flex-1 w-full gap-[14px]' >
                  <input className='premadeBorder rounded-[8px] px-[34px] py-[17px] flex flex-1 w-full' placeholder='Full name' type="text" />
                  <input className='premadeBorder rounded-[8px] px-[34px] py-[17px] flex flex-1 w-full' placeholder='Email address' type="email" />
                </div>
                <textarea className='premadeBorder rounded-[8px] px-[34px] py-[17px] flex flex-1 w-full mt-[14px]' placeholder='How can we help you?' rows={15} ></textarea>
                <button className='uppercase text-[16px] font-[600] bg-black text-white w-full mt-[14px] rounded-[8px] py-[17px]' >SEND MESSAGE</button>
              </div>
            </div>
        </div>

        <Footor />
    </div>
  )
}

export default page