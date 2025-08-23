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
            <Image src={logo} alt='logo' className='h-[0.9vw] w-auto '  />A</p>
    </button>
  )
}

export default NamedLogo