import React from 'react'
import Header from '../header/Header'
import paper from '@/public/home/Paper44.png'
import Image from 'next/image'
import chair from '@/public/home/Img.png'
import Img2 from '@/public/home/Img2.png'
import Img3 from '@/public/home/Img3.png'


const Main = () => {
  return (
    <div>
        <div 
            className="bg-center bg-cover " 
            style={{ backgroundImage: `url('/bg.png')`, backgroundSize:'cover' , backgroundRepeat:'no-repeat'}}>
            <div className='w-full min-h-screen mt-[-20px] bg-[#14141433]' >
                <div className="flex flex-1 pt-[40px]">
                    <Header />
                </div>
                <div className='flex flex-1 flex-col justify-center items-center gap-[24px] text-center mt-[48px]' >
                    <p className='text-[58px] font-[400] uppercase leading-[74px]' >Transform your space with our <br /> exquisite furniture collection</p>
                    <p className='px-[20%] text-[18px] font-[300] leading-[28px]' >Experience the art of fine furniture. Where craftsmanship meets passion. Each piece is thoughtfully designed, precisely built, and elegantly finished to bring luxury and function into your space.</p>
                </div>
            
            </div>
        </div>

        <div>
            <div className=' text-[#141414] mt-[-103px]' >
                <Image src={paper} className='w-screen h-fit' alt='paper' />
                <div className='flex gap-[48px] flex-1 mt-[-103px] bg-white px-[48px]' >
                    <div className='w-[50%]' >
                        <p className='uppercase text-[58px] font-[800] text-[#141414BF]' >About Us</p>
                        <p className='text-[18px] font-[400] leading-[28px] mt-[33px]' >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
    From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle, offering comfort, style, and reliability in equal measure. <br />
    What truly sets us apart is the passion we pour into every creation. Each design carries a unique story — one of tradition, innovation, and care — making our furniture not just something you own, but something you cherish. <br />
    This dedication is why our customers return time and again: they know they can trust us to deliver pieces that elevate their spaces, enrich their everyday lives, and stand the test of time.</p>
                    </div>
                    <div className='flex gap-[24px] justify-center items-center' >
                        <Image alt='chair' src={chair} className='h-fit w-[338px] rounded-[32px]' />
                        <div className='flex flex-col gap-[24px]' >
                            <Image alt='chair' src={Img2} className='h-auto w-[338px] rounded-[32px]' />
                            <Image alt='chair' src={Img3} className='h-auto w-[338px] rounded-[32px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-[92px] flex justify-between items-center text-[#141414] px-[48px] ' >
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