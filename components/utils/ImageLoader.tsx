import React from 'react'
import styles from './FullPageLoader.module.css';


const ImageLoader = () => {
  return (
    <div className={` w-full h-full bg-[#ffffffbb] flex flex-col justify-center items-center text-black`} >
        <p className='text-[36px] font-[700] ' >DESTREZZZA</p>
        <div className={`${styles.animateFade} text-[8px] font-[700] flex gap-[74px] `} >
            <p>WE CRAFT FURNITURES</p>
            <p>SINCE 2020</p>
        </div>
    </div>
  )
}

export default ImageLoader