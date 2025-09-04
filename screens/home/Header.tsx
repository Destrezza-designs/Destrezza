'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/header/Vector86.png'
import brand from '@/public/header/Brand.png'
import { useRouter } from 'next/navigation'


  /**
   * A header component that includes a logo, navigation menu and a brand
   * @returns A JSX element representing the header component
   */
const Header = () => {

  const router = useRouter()

  const handleScroll = () => {
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <header className="w-full flex flex-1 bg-[#1A1F26] px-[16px] lg:px-[48px] py-[13px] pt-[40px] lg:py-[13px]">
      <div className="flex flex-1 items-center justify-between">
        {/* Left Logo */}
        <div className='lg:block hidden sm:hidden md:block w-[303px] cursor-pointer' >
            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  className=' bg-red' width={101} height={58} src={logo} alt='logo' />
        </div>
        {/* Nav Menu */}
        <nav className=' lg:flex md:hidden sm:hidden justify-center items-center ' >
          <ul className="hidden md:flex gap-8 text-sm text-white tracking-widest">
            <li className="cursor-pointer hover:text-yellow-400">
              <button>HOME</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button onClick={() => router.push('/about')} >ABOUT US</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button onClick={() => router.push('/product')} >PRODUCTS</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button onClick={handleScroll} >OUR LOGO</button>
            </li>
            <li className="cursor-pointer hover:text-yellow-400">
              <button onClick={() => router.push('/contact')} >CONTACT</button>
            </li>
          </ul>
        </nav>

        {/* Right Logo/Text */}
        <div className='w-full lg:w-fit flex justify-between items-center' >
          <div className='overflow-hidden !w-[180px] !lg:w-[303px]' >
            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  className='' src={brand} alt="Brand" width={303} height={58} />
          </div>
          <button className='flex lg:hidden' >
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 0.875C0.5 0.391751 0.891751 0 1.375 0H20.625C21.1082 0 21.5 0.391751 21.5 0.875C21.5 1.35825 21.1082 1.75 20.625 1.75H1.375C0.891751 1.75 0.5 1.35825 0.5 0.875ZM0.5 7C0.5 6.51675 0.891751 6.125 1.375 6.125H20.625C21.1082 6.125 21.5 6.51675 21.5 7C21.5 7.48325 21.1082 7.875 20.625 7.875H1.375C0.891751 7.875 0.5 7.48325 0.5 7ZM10.125 13.125C10.125 12.6418 10.5168 12.25 11 12.25H20.625C21.1082 12.25 21.5 12.6418 21.5 13.125C21.5 13.6082 21.1082 14 20.625 14H11C10.5168 14 10.125 13.6082 10.125 13.125Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header