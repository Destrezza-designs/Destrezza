'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/header/Vector86.png'
import brand from '@/public/header/Brand.png'
import { useRouter } from 'next/navigation'


const Header = () => {

  const router = useRouter()

  return (
    <header className="w-full flex flex-1 bg-[#1A1F26] px-[48px] py-[13px]">
      <div className="flex flex-1 items-center justify-between">
        {/* Left Logo */}
        <div className='w-[303px] cursor-pointer' >
            <Image className=' bg-red' width={101} height={58} src={logo} alt='logo' />
        </div>
        {/* Nav Menu */}
        <nav className=' flex justify-center items-center ' >
          <ul className="hidden md:flex gap-8 text-sm text-white tracking-widest">
            <li className="cursor-pointer hover:text-yellow-400">
              <button>HOME</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button onClick={() => router.push('/about')} >ABOUT US</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button>PRODUCTS</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button>OUR LOGO</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button onClick={() => router.push('/contact')} >CONTACT</button>
            </li>
          </ul>
        </nav>

        {/* Right Logo/Text */}
        <Image className='' src={brand} alt="Brand" width={303} height={58} />
      </div>
    </header>
  )
}

export default Header