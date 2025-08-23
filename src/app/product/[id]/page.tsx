'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/product/Header';
import Footor from '@/components/Footor';
import Image from 'next/image';

const data = [
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09099%20Large.png?alt=media&token=a819db1c-2d9f-4124-a150-3a5b8e3c8fb0",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09123%20Large.png?alt=media&token=cc13fea2-6a8b-4de3-aefc-de0f610b711b",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FGenerative%20Fill%20copy%20Large.png?alt=media&token=56dc1a6e-964e-4324-be3f-fe22f89a8412",
        "name" : "KIzuki",
        "title" : "Study table and chair",
        "disc" : "Rooted in calm, functional elegance, the Kizuki Study Table & Chair set is a nod to mindful living and purposeful work. Inspired by Japanese simplicity and crafted with natural materials, it creates a serene workspace where clarity, creativity, and comfort coexist.Whether it’s for a home office, creative nook, or reading corner, this set offers a peaceful no clutter, no distractions. Just you and your thoughts.",
        "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane / Matte Water-Based Lacquer Finish / Powder-Coated Steel or Brass Connectors (Hidden Joints)",
        "color":"Natural Wood (Warm Oak)Optional finish: Soft Charcoal Stain or Light Ash",
        "care":"Wipe With Soft Damp Cloth Only. Avoid Direct Sunlight, Excess Moisture, Or Abrasive Cleaners. Use Coasters and Mats to Prevent Surface Marks. Periodically Check and Tighten Joints Every 6–8 Months.",
        "year":"2024 Collection"
    }
]

const page = () => {

    const {id} = useParams();
    const idNum = Number(id);


  return (
    <div>
        <div className='mx-[48px] mt-[48px] text-black' >
            <Header />

            <div className='my-[40px] flex gap-[14px] h-[500px] overflow-hidden' >
                <Image unoptimized  src={data[idNum-1].mainImage} width={600} height={100} className='w-[60%] h-auto object-contain' alt='Main Image' />
                <Image unoptimized  src={data[idNum-1].image} width={400} height={100}  className='w-[40%] h-auto object-cover' alt='Main Image' />
            </div>
            <div>
                <p className='text-[58px] leading-[68px] uppercase' >{data[idNum-1].name} <br /> {data[idNum-1].title}</p>
            </div>
            <div className='mt-[60px]' >
                <div className='flex justify-between items-start' >
                    <p className='text-[18px]' >Description</p>
                    <p className='text-[24px] w-[70%]' >{data[idNum-1].disc}</p>
                </div>

                <div className='flex justify-between items-start mt-[64px] ' >
                    <p className='text-[18px]' >Technical <br /> Specification</p>
                    <div className='w-[70%]' >
                        <div className='flex justify-between items-start border-t-[1px] border-[#00000040] py-[24px]' >
                            <p className='text-[18px] leading-[27px] font-[400]' >MATERIAL</p>
                            <p className='text-[18px] leading-[27px] font-[400] w-[80%]' >{data[idNum-1].disc}</p>
                        </div>
                        <div className='flex justify-between items-start border-t-[1px] border-[#00000040] py-[24px]' >
                            <p className='text-[18px] leading-[27px] font-[400]' >COLOR</p>
                            <p className='text-[18px] leading-[27px] font-[400] w-[80%]' >{data[idNum-1].color}</p>
                        </div>
                        <div className='flex justify-between items-start border-t-[1px] border-[#00000040] py-[24px]' >
                            <p className='text-[18px] leading-[27px] font-[400]' >CARE INSTRUCTION</p>
                            <p className='text-[18px] leading-[27px] font-[400] w-[80%]' >{data[idNum-1].care}</p>
                        </div>
                        <div className='flex justify-between items-start border-t-[1px] border-[#00000040] py-[24px]' >
                            <p className='text-[18px] leading-[27px] font-[400]' >YEAR</p>
                            <p className='text-[18px] leading-[27px] font-[400] w-[80%]' >{data[idNum-1].year}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Image
                    src={data[idNum-1].image2}
                    className='w-full h-[570px] object-cover'
                    alt='Main Image'
                    width={1024}
                    height={576}
                />
                
            </div>
        </div>
        <Footor />
    </div>
  )
}

export default page