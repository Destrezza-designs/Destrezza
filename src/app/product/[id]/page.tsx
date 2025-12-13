'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Footor from '@/components/Footor';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageLoader from '@/components/utils/ImageLoader';
import productData from '../productData'
const { data, categories } = productData;


const Page = () => {

    const {id} = useParams();
    const idNum = Number(id);

    const router = useRouter();

    const [currentImage, setCurrentImage] = useState(data[idNum-1].mainImage);
    const [currentDisc,setCurrentDisc] = useState('Material')


  return (
    <div className='overflow-x-hidden' >
        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>
        
        <div className='lg:hidden text-black flex flex-col mt-[40px] mx-[20px] ' >
            <p className='text-[36px] leading-[40px] font-[500] uppercase  bg-red-5 ' >{data[idNum-1].name}  </p>
            <p className='text-[15px] font-thin' >{data[idNum-1].title}</p>
        </div>

        <div className='hidden lg:flex flex-col m-[48px]' >
            <div className='flex gap' >
                <div className='flex gap-[4px] h-[614px] w-[50vw] ' >
                    <Image 
                        unoptimized  src={currentImage} width={1000} height={1000} className='w-[calc(50vw-250px)] h-full object-cover' alt='Main Image' />
                    <div className='flex flex-col gap-[4px] w-[250px] ' >
                        {[data[idNum-1].mainImage, data[idNum-1].image, data[idNum-1].image2].map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentImage(imgSrc)}
                                className={`w-[205px] h-full overflow-hidden `}
                            >
                                <Image 
                                    unoptimized  
                                    src={imgSrc} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover' 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className='text-black m-[48px] w-[32vw]'  >
                    <p className='text-[36px] font-normal' >{data[idNum-1].name}</p>
                    <p className='text-[15px] font-thin leading-[18px] mt-[-10px]'  >{data[idNum-1].title}</p>
                    <p className='text-[14px] font-light mt-[10px]' >{data[idNum-1].disc}</p>
                    <div className='mt-[25px] gap-[10px]' >
                        <div className='flex text-[14px] font-normal gap-[10px]' >
                            {['Material', 'Designer', 'Type', 'Year'].map((disc) => (
                                <button 
                                    key={disc}
                                    onClick={() => setCurrentDisc(disc)}
                                    className={`border-b ${currentDisc === disc ? 'border-b-black' : 'border-b-transparent'}`}
                                >
                                    {disc}
                                </button>
                            ))}
                        </div>
                        <p className='mt-[10px] text-[13px] font-light' >{
                            currentDisc == 'Material' ? data[idNum-1].disc :  
                            currentDisc == 'Designer' ? data[idNum-1].color :  
                            currentDisc == 'Type' ? data[idNum-1].care :  
                            currentDisc == 'Year' ? data[idNum-1].year :  ''}</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-[64px] hidden lg:block'>
                <p className='text-[36px] font-[500] uppercase text-black'>Other Collections</p>
                <div className="flex flex-row justify-start gap-[14px] mt-[24px] overflow-x-scroll">
                    {data.slice(idNum, idNum + 10).map((item, index) => (
                        <button 
                            key={`desktop-${index}`} 
                            onClick={() => router.push(`/product/${idNum+1+index}`)}
                            className="h-fit relative group bg-white"
                        >
                            <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden">
                                <div className="transition duration-300 ease-in-out group-hover:scale-110 h-full"> {/* Scale container instead */}
                                    <Image 
                                        src={item.mainImage} 
                                        alt={item.name} 
                                        width={1000} 
                                        height={1000} 
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="absolute rounded-[20px] bottom-0 left-0 bg-gradient-to-t from-[#00000040] to-transparent h-1/2 w-full"></div>
                                <div className="absolute bottom-0 left-0 p-[20px] text-white text-left">
                                    <p className="text-[36px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[20px] mt-[-10px] font-extralight uppercase">{item.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </div>

        <div className=' lg:hidden mx-[0px] lg:mx-[48px] mt-[20px] lg:mt-[48px] text-black' >
            <div className='my-[40px] flex lg:flex-row flex-col lg:gap-[14px] gap-y-[5px] lg:gap-y-0  overflow-hidden' >
                <div className='flex flex-col gap-[4px] ' >
                    <Image 
                        unoptimized  src={currentImage} width={1000} height={1000} className='w-full h-[414px] object-cover' alt='Main Image' />
                    <div className='flex  gap-[4px] ' >
                        {[data[idNum-1].mainImage, data[idNum-1].image, data[idNum-1].image2].map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentImage(imgSrc)}
                                className={`w-full h-full overflow-hidden `}
                            >
                                <Image 
                                    unoptimized  
                                    src={imgSrc} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover bg-black aspect-square' 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-[24px] mx-[16px] lg:mt-[64px]' >
                <div className='flex lg:flex-row flex-col justify-between items-start my-[12px]' >
                    <p className='text-[18px] font-[500] uppercase' >Description</p>
                    <p className='mt-[10px] lg:mt-[0px] text-[13px] lg:text-[24px] w-full lg:w-[70%] font-light lg:font-[300]' >{data[idNum-1].disc}</p>
                </div>

                
                <div className='mt-[25px] gap-[10px]' >
                    <div className='flex text-[14px] font-normal gap-[10px]' >
                        {['Material', 'Designer', 'Type', 'Year'].map((disc) => (
                            <button 
                                key={disc}
                                onClick={() => setCurrentDisc(disc)}
                                className={`border-b ${currentDisc === disc ? 'border-b-black' : 'border-b-transparent'}`}
                            >
                                {disc}
                            </button>
                        ))}
                    </div>
                    <p className='mt-[10px] text-[13px] font-light' >{
                        currentDisc == 'Material' ? data[idNum-1].disc :  
                        currentDisc == 'Designer' ? data[idNum-1].color :  
                        currentDisc == 'Type' ? data[idNum-1].care :  
                        currentDisc == 'Year' ? data[idNum-1].year :  ''}</p>
                </div>
                

            </div>

            <div className='mt-[64px]  lg:hidden mx-[20px]' >
                <p className='text-[24px] font-[500] uppercase text-black'  >Other Collections</p>
                <div className="flex flex-row justify-start gap-[14px] mt-[24px] overflow-x-scroll">

                    {data.slice(idNum, idNum + 10).map((item, index) => (
                        <button 
                            key={`desktop-${index}`} 
                            onClick={() => router.push(`/product/${idNum+1+index}`)}
                            className="h-fit relative group bg-white"
                        >
                            <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden">
                                <Image 
                                    src={item.mainImage} 
                                    alt={item.name} 
                                    width={1000} 
                                    height={1000} 
                                    className="h-full object-cover"
                                />
                                <div className="absolute rounded-[20px] bottom-0 left-0 bg-gradient-to-t from-[#00000040] to-transparent h-1/2 w-full"></div>
                                <div className="absolute bottom-0 left-0 p-[20px] text-white group-hover:text-black text-left">
                                    <p className="text-[36px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[20px] mt-[-10px] font-extralight uppercase">{item.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

            </div>
        </div>
        <Footor />
    </div>
  )
}

export default Page