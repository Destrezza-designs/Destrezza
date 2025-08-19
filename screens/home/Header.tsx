import React from 'react'
import Image from 'next/image'
import logo from '@/public/header/Vector86.png'
import brand from '@/public/header/Brand.png'

const Header = () => {
  return (
    <header className="w-full flex flex-1 bg-[#1A1F26] px-[48px] py-[13px]">
      <div className="flex flex-1 items-center justify-between">
        {/* Left Logo */}
        <div className='w-[303px]' >
            <Image className=' bg-red' width={101} height={58} src={logo} alt='logo' />
        </div>
        {/* Nav Menu */}
        <nav className=' flex justify-center items-center ' >
          <ul className="hidden md:flex gap-8 text-sm text-white tracking-widest">
            <li className="cursor-pointer hover:text-yellow-400">HOME</li>
            <li className="cursor-pointer hover:text-yellow-400">ABOUT US</li>
            <li className="cursor-pointer hover:text-yellow-400">PRODUCTS</li>
            <li className="cursor-pointer hover:text-yellow-400">OUR LOGO</li>
            <li className="cursor-pointer hover:text-yellow-400">CONTACT</li>
          </ul>
        </nav>

        {/* Right Logo/Text */}
        <Image className='' src={brand} alt="Brand" width={303} height={58} />
      </div>
    </header>
  )
}

export default Header