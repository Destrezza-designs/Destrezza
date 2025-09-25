import React from 'react'
import Header from '../../components/utils/Header'
import paper from '@/public/home/Paper44.png'
import Image from 'next/image'
import chair from '@/public/home/Img.png'
import Img2 from '@/public/home/Img2.png'
import Img3 from '@/public/home/Img3.png'
import smBg from '@/public/home/bg-sm-landing.jpg'


const Main = () => {
  return (
    <div>
        <div 
            className="
                bg-center lg:bg-center bg-no-repeat
                bg-[url('/home/bg-sm-landing.jpg')]
                bg-[length:112%_330px]  
                lg:bg-[url('/bg.png')] // for lg and above
                lg:bg-cover " 
            // style={{ backgroundImage: `url('/bg.png')` , backgroundRepeat:'no-repeat'}}
            >
            <div className='w-full  lg:min-h-screen  lg:mt-[-20px] bg-[#14141433]' >
                <div className="flex flex-1 pt-[0px] lg:pt-[40px]">
                    <Header />
                </div>
                <div className={`min-h-[218px] px-[16px] lg:px-[0px] flex flex-1 flex-col justify-start text-left lg:justify-center items-start lg:items-center gap-[24px] lg:text-center mt-[22px] lg:mt-[48px] `} >
                    <p className='text-[25px] lg:text-[58px] font-[500] uppercase leading-[30px] lg:leading-[74px]' >Transform your space with our <br className='hidden lg:flex' /> exquisite furniture collection</p>
                    <p className='hidden lg:block px-[20%] text-[18px] font-[400] leading-[28px]' >Experience the art of fine furniture. Where craftsmanship meets passion. Each piece is thoughtfully designed, precisely built, and elegantly finished to bring luxury and function into your space.</p>
                </div>
            
            </div>
        </div>

        <div>
            <div className=' text-[#141414] mt-[14px] lg:mt-[-103px]' >
                <div className='hidden lg:block' >
                    <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  src={paper} className='w-screen h-fit' alt='paper' />
                </div>
                <div className='block lg:flex gap-[48px] flex-1 mt-[14px] lg:mt-[-103px] bg-white px-[16px] lg:px-[48px]' >
                    <div className='w-full lg:w-[50%]' >
                        <p className='uppercase text-[28px] lg:text-[58px] font-[800] text-[#141414BF]' >About Us</p>
                        <p className='hidden lg:block text-[18px] font-[400] leading-[28px] mt-[33px]' >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
                        From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle, offering comfort, style, and reliability in equal measure. <br />
                        What truly sets us apart is the passion we pour into every creation. Each design carries a unique story — one of tradition, innovation, and care — making our furniture not just something you own, but something you cherish. <br />
                        This dedication is why our customers return time and again: they know they can trust us to deliver pieces that elevate their spaces, enrich their everyday lives, and stand the test of time.</p>
                        <p className='block lg:hidden text-[18px] font-[400] leading-[28px] mt-[14px] lg:mt-[33px]' >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
                        From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle,...</p>
                    </div>
                    <div className='flex gap-[14px] mt-[14px] lg:mt-[0px] lg:gap-[24px] justify-center items-center' >
                        <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  alt='chair' src={chair} className='h-fit w-[338px] rounded-[18px] lg:rounded-[32px]' />
                        <div className='flex flex-col gap-[14px] lg:gap-[24px]' >
                            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  alt='chair' src={Img2} className='h-auto w-[338px] rounded-[18px] lg:rounded-[32px]' />
                            <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  alt='chair' src={Img3} className='h-auto w-[338px] rounded-[18px] lg:rounded-[32px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-[40px] lg:mt-[92px] flex flex-col lg:flex-row  justify-center lg:justify-between items-center text-center lg:text-left text-[#141414] px-[48px] mx-[56px]' >
            <div>
                <p className='text-[48px] font-[600] text-[#CEA338]' >2022</p>
                <p className='text-[18px] font-[500] text-[]' >Year of establishment</p>
                <p className='text-[14px] text-[#868684] ' >More than 5 years in the field</p>
            </div>
            <div>
                <p className='text-[48px] font-[600] text-[#CEA338]' >1596</p>
                <p className='text-[18px] font-[500] text-[]' >Products launched</p>
                <p className='text-[14px] text-[#868684] ' >Crafted with care. Built to inspire.</p>
            </div>
            <div>
                <p className='text-[48px] font-[600] text-[#CEA338]' >124</p>
                <p className='text-[18px] font-[500] text-[]' >Clients are satisfied</p>
                <p className='text-[14px] text-[#868684] ' >These People  love us</p>
            </div>
            <div>
                <p className='text-[48px] font-[600] text-[#CEA338]' >14</p>
                <p className='text-[18px] font-[500] text-[]' >Prestigious awards</p>
                <p className='text-[14px] text-[#868684] ' >Honors that speak our story</p>
            </div>
        </div>
    </div>
  )
}

export default Main