'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/home/logo/logo.png'
import { useRouter } from 'next/navigation'

const Footor = () => {

    const router = useRouter();

  return (
    <footer className='bg-[#141414] text-white mt-[80px] pb-[16px]'>
        <div className='mx-[48px] pt-[48px]'>
            <div className='flex justify-between items-start'>
                <p className='text-[18px] font-[400] leading-[28px] w-[40%]'>
                    Destrezza crafts exquisite, personalized furniture with expert precision.
                    Contact us to bring your vision to life.
                </p>

                <div className='text-[18px] font-[400] flex gap-x-[36px]'>
                    <button onClick={() => router.push('/')} >Home</button>
                    <button onClick={() => router.push('/about')} >About Us</button>
                    <button onClick={() => router.push('/product')} >Products</button>
                    <button onClick={() => router.push('/gallery')} >Gallery</button>
                    <button onClick={() => router.push('/contact')} >Contact</button>
                </div>
            </div>
            <div className='mt-[111px]' >
                <p className='text-[24px] font-[400] ' >hello@destrezzzaarthouse.com</p>
                <div className='flex gap-[68px] mt-[48px]' >
                    <div>
                        <p className='text-[18px] uppercase font-[500]' >PHONE NUMBER</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>+91 81295 01494</p>
                        <p className='text-[16px] font-[400]'>+91 79943 17246</p>
                    </div>
                    <div>
                        <p className='text-[18px] uppercase font-[500]' >ADDRESS</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>Destrezzza art house Pvt Ltd, building no.24 <br />
                                                                        Trikkanapuram po <br />
                                                                        Thavanoor road Jn <br />
                                                                        Pincode 679573 <br />
                                                                        Kuttipuram, Malappuram district
                                                                        </p>
                    </div>
                    <div>
                        <p className='text-[18px] uppercase font-[500]' >Opening Hours</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>Mon to Sat,    9AM - 6PM</p>
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
                    <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={logo} alt='logo' className='h-[12vw] w-auto '  />A</p>
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