import React from 'react'
import Header from '../../components/utils/Header'
import paper from '@/public/home/Paper44.png'
import Image from 'next/image'
import chair from '@/public/home/Img.png'
import Img2 from '@/public/home/Img2.png'
import Img3 from '@/public/home/Img3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    cssEase: 'ease-in-out',
    arrows: false,
    pauseOnHover: false,
    ltr: true,
    waitForAnimate: true
  };

  const carouselImages = [
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2FPP2-34.jpeg?alt=media&token=4e70a3e3-d15f-46be-94d5-052ce6d981ff',
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2FATR04761.jpg?alt=media&token=2e202034-e033-420c-9036-fa750f77e376',
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F60.jpeg?alt=media&token=9b193c1c-985b-4d2e-aa36-39f99783e5a5',
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F35.jpeg?alt=media&token=f1e4bc44-2a2e-4629-8055-693bec2740da',
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F32.jpeg?alt=media&token=127cc221-3e73-4864-b836-c5f63b5786af',
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F14.jpeg?alt=media&token=0baf9070-586b-446a-8a52-ff493d6b8daa',
    'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F12.jpeg?alt=media&token=3f50e37d-aacf-4755-b401-afc0db6722d6'
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <div className='lg:hidden' >
            <Slider {...sliderSettings} className="h-fit lg:hidden">
            {carouselImages.map((image, index) => (
                <div key={index} className="h-fit w-full">
                <div 
                    className="h-fit w-full bg-cover bg-center"
                    style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '330px',
                    width: '100%',
                    }}
                />
                </div>
            ))}
            </Slider>
        </div>
        <div className='hidden lg:block ' > 
            <Slider {...sliderSettings} className="hidden lg:block h-screen">
                {carouselImages.map((image, index) => (
                    <div key={index} className="w-full h-[90vh]">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                        backgroundImage: `url(${image})`,
                        }}
                    />
                    </div>
                ))}
            </Slider>
        </div>
        <div className="absolute inset-0 " />
      </div>

      <div className='relative z-10 w-full lg:min-h-screen lg:mt-[-20px]'>
        <div className="flex flex-1 pt-[0px] lg:pt-[40px]">
          <Header />
        </div>
        <div className={`min-h-[218px] px-[16px] lg:px-[0px] flex flex-1 flex-col justify-center items-center gap-[24px] text-center mt-[0px] lg:mt-[48px]`}>
          <p className='text-[25px] lg:text-[58px] font-[500] uppercase leading-[30px] lg:leading-[74px] text-white'>Transform your space with our <br className='hidden lg:flex' /> exquisite furniture collection</p>
          <p className='hidden lg:block px-[20%] text-[18px] font-[400] leading-[28px] text-white'>Experience the art of fine furniture. Where craftsmanship meets passion. Each piece is thoughtfully designed, precisely built, and elegantly finished to bring luxury and function into your space.</p>
        </div>
      </div>

      <div>
        <div className=' text-[#141414] mt-[50px] lg:mt-[-103px]' >
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
              
            </div>
            <div className='flex gap-[14px] mt-[14px] lg:mt-[0px] lg:gap-[24px] justify-center items-center' >
              <Image 
                blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  
                alt='chair' 
                src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F60.jpeg?alt=media&token=9b193c1c-985b-4d2e-aa36-39f99783e5a5"} 
                width={150} height={100}
                className='!h-fit !w-[338px] lg:hidden rounded-[18px] lg:rounded-[32px]' />
              <Image 
                blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  
                alt='chair' 
                src={"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2F60.jpeg?alt=media&token=9b193c1c-985b-4d2e-aa36-39f99783e5a5"} 
                width={1000} height={100}
                className='!h-fit !w-[338px] hidden lg:flex rounded-[18px] lg:rounded-[32px]' />
              <div className='flex flex-col gap-[14px] lg:gap-[24px]' >
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  
                alt='chair' 
                src={'https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fphoto-quality%2FATR04761.jpg?alt=media&token=2e202034-e033-420c-9036-fa750f77e376'} 
                width={338} height={338}
                className='h-auto !w-[338px] rounded-[18px] lg:rounded-[32px]' />
                <Image blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  alt='chair' src={Img3} className='h-auto w-[338px] rounded-[18px] lg:rounded-[32px]' />
              </div>
            </div>
            
            <p className='block lg:hidden text-[14px] font-[400] leading-[18px] mt-[14px] lg:mt-[33px]' >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
            From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle,...</p>
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