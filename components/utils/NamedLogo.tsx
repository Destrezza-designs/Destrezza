'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/home/logo/logo.png'
import { useRouter } from 'next/navigation'
const NamedLogo = () => {

  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} className='flex justify-start items-center' >
        <p className='text-[1.2vw] text-black font-[600] flex justify-center items-center' >DESTRE
        <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={logo} alt='logo' className='h-[0.85vw] w-auto mx-[1.5px]'  />A</p>
    </button>
  )
}

export default NamedLogo