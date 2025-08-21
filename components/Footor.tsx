import Image from 'next/image'
import React from 'react'
import logo from '@/public/home/logo/logo.png'

const Footor = () => {
  return (
    <footer className='bg-[#141414] text-white mt-[80px] pb-[16px]'>
        <div className='mx-[48px] pt-[48px]'>
            <div className='flex justify-between items-start'>
                <p className='text-[18px] font-[400] leading-[28px] w-[40%]'>
                    Destrezza crafts exquisite, personalized furniture with expert precision.
                    Contact us to bring your vision to life.
                </p>

                <div className='text-[18px] font-[400] flex gap-x-[36px]'>
                    <button>Home</button>
                    <button>About Us</button>
                    <button>Products</button>
                    <button>Gallery</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className='mt-[111px]' >
                <p className='text-[24px] font-[400] ' >hello@destrezzzaarthouse.com</p>
                <div className='flex gap-[68px] mt-[48px]' >
                    <div>
                        <p className='text-[18px] uppercase' >PHONE NUMBER</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>+91 9765438781</p>
                        <p className='text-[16px] font-[400]'>+91 9865487981</p>
                    </div>
                    <div>
                        <p className='text-[18px] uppercase' >ADDRESS</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>1234 Elmwood Avenue, 690548 <br />Trissur, Kerala, India</p>
                    </div>
                    <div>
                        <p className='text-[18px] uppercase' >Opening Hours</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>Mon to Sat,    8AM - 8PM</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-[46px]' >
                <div className='flex justify-between gap-[24px]' >
                    <p className='text-[18px] font-[400]' >Cookie Policy</p>
                    <p className='text-[18px] font-[400]' >Privacy Policy</p>
                    <p className='text-[18px] font-[400]' >Terms & Conditions</p>
                </div>
                <div className='flex justify-between gap-[24px]' >
                    <p className='text-[18px] font-[400]' >Facebook</p>
                    <p className='text-[18px] font-[400]' >Instagram</p>
                    <p className='text-[18px] font-[400]' >YouTube</p>
                </div>
            </div>

            <div className='flex justify-center items-center' >
                <p className='text-[17vw] font-[600] flex justify-center items-center' >DESTRE
                    <Image src={logo} alt='logo' className='h-[12vw] w-auto '  />A</p>
            </div>
            <div className='flex justify-between items-center mt-[-35px]' >
                <p className='text-[12px] font-[300] uppercase text-[#FFFFFF80]' >© 2025. Destrezzza Art House. All Rights Reserved</p>
                <p className='text-[12px] font-[300] uppercase text-[#FFFFFF80]' >Designed with intent by Dosense Creative Co.</p>
            </div>
        </div>
    </footer>

  )
}

export default Footor