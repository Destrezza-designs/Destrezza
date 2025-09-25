'use client'
import React from 'react'
import NamedLogo from '../utils/NamedLogo'
import { useRouter } from 'next/navigation'

const Header = () => {

  const router = useRouter();
    
  return (
    <div className='flex w-full justify-between items-center text-black' >
        <NamedLogo />
        <div className='flex text-[14px] gap-[24px] uppercase font-[500]' >
            <button onClick={() => router.push('/')} className='uppercase' >HOME</button>
            <button onClick={() => router.push('/about')} className='uppercase' >ABOUT US</button>
            <button onClick={() => router.push('/product')} className='uppercase' >PRODUCTS</button>
            <button onClick={() => router.push('/gallery')} className='uppercase' >GALLERY</button>
            <button onClick={() => router.push('/contact')} className='uppercase' >CONTACT</button>
        </div>
        
    </div>
  )
}

export default Header