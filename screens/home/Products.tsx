'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Products = () => {

    const router = useRouter();

  return (

    <div className='relative hidden lg:block text-[#141414] mt-[80px] overflow-hidden' >
        <div className='hidden lg:hidden absolute top-0 left-0 z-[-1]' >
            <svg width="1440" height="2230" viewBox="0 0 1440 2230" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 2230L1331.04 756.711L0 0L146.048 1826.72L1440 2230Z" fill="#CEB578"/>
            </svg>
        </div>
        {/* <div className='px-[18px] lg:px-[48px]' >
            <p data-aos="fade-up" className='text-[#868684] text-[14px] uppercase' >Designed to be loved</p>
            <p data-aos="fade-up" className='text-[36px] font-[500] uppercase' >Our Products</p>
            <div data-aos="fade-up" className='flex lg:flex-row flex-col gap-[20px] lg:gap-[48px] mt-[20px]' >
                <Image 
                      
                    src={"/62.jpeg"} 
                    height={718} width={682} alt='products Image' 
                    style={{ width: '682px', height: '618px' }}
                    className='popup border-2 border-white hidden lg:flex rounded-[32px] object-cover' 
                />
                <Image 
                      
                    src={"/62.jpeg"} 
                    height={718} width={682} alt='products Image' 
                    style={{ width: '682px', height: '383px' }}
                    className=' border-2 border-white object-right lg:hidden rounded-[32px] object-cover' 
                />
                <div className=' w-full lg:w-[55%]' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Noir Cabinet</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Noir Cabinet embodies quiet sophistication through its clean lines and refined detailing. Crafted from rich wood with a rhythmic fluted front, it merges utility with artistry, offering both storage and statement. Its minimal silhouette makes it versatile—equally at home in a dining area, living room, or hallway—while its timeless design invites a sense of grounded elegance into any interior.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='flex flex-col-reverse lg:flex-row gap-[20px] lg:gap-[48px] mt-[48px]' >
                <div className='w-full lg:w-[55%] ' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Lureth Chair</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Lureth Chair is an elegant balance of tradition and modernity, designed to bring warmth and refinement to any space. Its handcrafted wooden frame, paired with a woven cane backrest, evokes timeless craftsmanship, while the patterned upholstered seat adds a touch of contemporary charm.</p>
                </div>
                <Image 
                      
                    src={"/36.jpeg"} 
                    height={718} width={682} alt='products Image'
                    style={{ width: '682px', height: '618px', objectPosition: 'right' }} 
                    className='popup object-cover border-2 hidden lg:flex border-white rounded-[32px]' />
                <Image 
                      
                    src={"/36.jpeg"} 
                    height={718} width={682} alt='products Image'
                    style={{ width: '682px', height: '383px', objectPosition: 'right' }} 
                    className='object-cover border-2 lg:hidden border-white rounded-[32px]' />
            </div>

            <div data-aos="fade-up" className='flex lg:flex-row flex-col gap-[20px] lg:gap-[48px] mt-[48px]' >
                <Image  
                      
                    src={"/Cosmos1.png"} 
                    alt='products Image' 
                    height={718} width={682}
                    style={{ width: '682px', height: '618px' }}
                    className='popup w-[45%] h-fit object-cover hidden lg:flex border-2 border-white rounded-[32px]' />
                <Image  
                      
                    src={"/Cosmos1.png"} 
                    alt='products Image' 
                    height={718} width={682}
                    style={{ width: '682px', height: '383px' }}
                    className='w-[45%] h-fit object-cover border-2 lg:hidden border-white rounded-[32px]' />
                <div className='w-full lg:w-[55%] ' >
                    <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Cosmos Console</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] mt-[14px] lg:mt-[20px]' >The Cosmos Console embodies refined minimalism with a striking modern twist. Its natural wood frame is paired with a bold, deep blue fluted panel that adds depth and texture to the design. The open shelving provides versatile display space, while the sliding door conceals storage with elegance.</p>
                </div>
            </div>

        </div> */}
        
        <div className='hidden lg:flex justify-center items-center '>
            <div className='grid grid-cols-2 gap-[5px] w-full mx-[138px] justify-center items-center place-items-center '>
                <div className='relative h-[428px] rounded-[20px] overflow-hidden'>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                    <Image 
                        src={"/36.jpeg"} alt='products Image' 
                        className=" h-full object-cover"
                        width={1000} height={1000} />
                    <div className='absolute bottom-0 left-0 p-[20px] text-white'>
                        <p className='text-[36px] font-medium] uppercase'>Lureth Chair</p>
                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'>Lureth Chair</p>
                    </div>
                    
                </div>
                <div className='relative h-[428px] rounded-[20px] overflow-hidden'>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                    <Image 
                        src={"/gallery-images/gallery-images15.jpeg"} 
                        alt='products Image' 
                        className=" h-full object-cover"
                        width={1000} height={1000} />
                    <div className='absolute bottom-0 left-0 p-[20px] text-white'>
                        <p className='text-[36px] font-medium uppercase'>ZEPHYRA</p>
                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'>Console</p>
                    </div>
                    
                </div>
                <div className='relative h-[428px] rounded-[20px] overflow-hidden'>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                    <Image 
                        src={"/gallery-images/gallery-images12.jpeg"} alt='products Image' 
                        className=" h-full object-cover"
                        width={1000} height={1000} />
                    <div className='absolute bottom-0 left-0 p-[20px] text-white'>
                        <p className='text-[36px] font-medium] uppercase'>Cavora</p>
                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'>Console</p>
                    </div>
                    
                </div>
                <div className='relative h-[428px] rounded-[20px] overflow-hidden'>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                    <Image 
                        src={"/gallery-images/gallery-images6-dv.jpeg"} 
                        alt='products Image' 
                        className=" h-full object-cover"
                        width={1000} height={1000} />
                    <div className='absolute bottom-0 left-0 p-[20px] text-white'>
                        <p className='text-[36px] font-medium uppercase'>SAVANNAH</p>
                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'>NIGHT stand</p>
                    </div>
                    
                </div>
                <div className='relative h-[428px] rounded-[20px] overflow-hidden'>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                    <Image 
                        src={"/gallery-images/gallery-images3.jpeg"} alt='products Image' 
                        className=" h-full object-cover"
                        width={1000} height={1000} />
                    <div className='absolute bottom-0 left-0 p-[20px] text-white'>
                        <p className='text-[36px] font-medium] uppercase'></p>
                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'></p>
                    </div>
                    
                </div>
                <div className='relative h-[428px] rounded-[20px] overflow-hidden'>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                    <Image 
                        src={"/gallery-images/gallery-images10.jpg"} 
                        alt='products Image' 
                        className=" h-full object-cover"
                        width={1000} height={1000} />
                    <div className='absolute bottom-0 left-0 p-[20px] text-white'>
                        <p className='text-[36px] font-medium uppercase'></p>
                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'></p>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center items-center mt-[-210px] mb-[50px]' >
            <button 
                data-aos="fade-up"
                onClick={() => router.push('/gallery')}
                className='text-[16px]  bg-white rounded-[48px] w-fit px-[20px] py-[12px] flex gap-[16px] uppercase font-[600] hover:bg-[#F8F8F5] hover:text-[#141414] hover:transition-all duration-300' >
                See What We’ve Created
                <div className='bg-white w-[24px] h-[24px] rounded-[24px] flex justify-center items-center ' >
                    <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
            </button>
        </div>
    </div>
  )
}

export default Products