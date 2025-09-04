'use client'
import React,{useEffect,useState} from 'react'
import styles from './FullPageLoader.module.css';


const FullPageLoader = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // start 5 sec timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // lock scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup on unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (!isLoading) return null;
  return (
    <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-[#ffffffbb] flex flex-col justify-center items-center text-black`} >
        <p className='text-[36px] font-[700] ' >DESTREZZZA</p>
        <div className={`${styles.animateFade} text-[8px] font-[700] flex gap-[74px] `} >
            <p>WE CRAFT FURNITURES</p>
            <p>SINCE 2020</p>
        </div>
    </div>
  )
}

export default FullPageLoader