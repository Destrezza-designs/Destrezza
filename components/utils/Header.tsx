'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import logo from '@/public/header/Icon.png'
import brand from '@/public/header/Brand.png'
import { useRouter } from 'next/navigation'


  /**
   * A header component that includes a logo, navigation menu a
   * nd a brand
   * @returns A JSX element representing the header component
   */
const Header = () => {

  const router = useRouter()

  const [navbar,setNavbar] = useState(true);

  const handleScroll = () => {
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(()=>{
    setTimeout(() => {
      setNavbar(false);
    }, 250);
  },[])




  return (
    <div className='mb-[80px]' >
      <header className="w-full border-b-[0px] border-white  fixed z-50 shadow-md  shadow-slate-500/10 backdrop-filter backdrop-blur-[10px] bg-[rgba(0,0,0,0.2)]  flex flex-1 pl-[16px] pr-[16px] lg:pr-[48px] lg:pl-[48px] py-[10px] pt-[30px] lg:py-[10px] " >
        <div className="flex flex-1 items-center justify-between ">
          
          <div className=' lg:block hidden sm:hidden md:block w-[10vw] cursor-pointer' >
              <Image   className=' bg-red' width={70} height={43} src={logo} alt='logo' />
          </div>
          
          <nav className=' lg:flex md:hidden sm:hidden justify-center items-center text-[14px]' >
            <ul className="hidden md:flex gap-8 text-sm text-white tracking-widest">
              <li className="cursor-pointer hover:text-yellow-400">
                <button className='text-[12px]' >HOME</button>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <button className='text-[12px]'  onClick={() => router.push('/about')} >ABOUT US</button>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <button className='text-[12px]'  onClick={() => router.push('/product')} >PRODUCTS</button>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <button className='text-[12px]'  onClick={() => router.push('/gallery')} >GALLERY</button>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <button className='text-[12px]'  onClick={handleScroll} >OUR LOGO</button>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <button className='text-[12px]'  onClick={() => router.push('/contact')} >CONTACT</button>
              </li>
            </ul>
          </nav>

          
          <div className='w-full lg:w-fit flex justify-between items-center' >
            <div className='overflow-hidden !w-[180px] !lg:w-[303px]' >
              <Image 
              className='cover' 
              src={brand} 
              alt="Brand" width={303} height={58} />
            </div>
            <button onClick={()=>setNavbar(true)} className='flex lg:hidden' >
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


        <div>
        <div 
  className={`
    fixed z-50 top-0 left-0 shadow-md shadow-slate-500/10 
    w-screen h-[100dvh] 
    transition-all duration-300 ease-in-out transform 
    ${navbar ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}
  `}
>
  <div className='w-full lg:w-fit flex justify-between items-center bg-[#1A1A1A] pt-[30px] pb-[10px] px-[16px]'>
    <div className='overflow-hidden !w-[180px] !lg:w-[303px]'>
      <Image   
        className='' 
        src={brand} 
        alt="Brand" 
        width={303} 
        height={58} 
      />
    </div>
    <button onClick={() => setNavbar(false)} className='flex lg:hidden'>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.98589 17.5L0.285889 15.8L7.08589 9L0.285889 2.2L1.98589 0.5L8.78589 7.3L15.5859 0.5L17.2859 2.2L10.4859 9L17.2859 15.8L15.5859 17.5L8.78589 10.7L1.98589 17.5Z" fill="white"/>
      </svg>
    </button>
  </div>
  
  {/* Enhanced glass morphism with better mobile support */}
  <nav className='
    h-screen w-[85vw] flex flex-col justify-start items-start pt-[60px] 
    px-[16px] 
    bg-[#00000080] 
    backdrop-blur-[20px]
    backdrop-filter
    -webkit-backdrop-blur-[20px]
    supports-backdrop-blur:bg-[#00000040]
    backdrop-saturate-150
    border-r border-white/10
  '>
    <ul className="flex flex-col gap-[18px] text-[32px] font-[400] text-white tracking-widest">
      <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        <button onClick={() => router.push('/')}>HOME</button>
      </li>
      <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        <button onClick={() => router.push('/about')}>ABOUT US</button>
      </li>
      <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        <button onClick={() => router.push('/product')}>PRODUCTS</button>
      </li>
      <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        <button onClick={() => router.push('/gallery')}>GALLERY</button>
      </li>
      <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        <button onClick={() => router.push('/contact')}>CONTACT</button>
      </li>
    </ul>
  </nav>
</div>
        </div>
      </header>
    </div>
  )
}

export default Header