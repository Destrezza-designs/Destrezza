'use client'
import React, { useEffect, useState } from 'react'
import Main from './home/Main'
import Products from './home/Products'
import ProductsShowcase from './home/ProductsShowcase'
import Visit from './home/Visit'
import OurLogo from './home/OurLogo'
import Footor from '@/components/Footor'
import FullPageLoader from '@/components/utils/FullPageLoader'

const Landing = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },5000)
  },[])
  return (
    <div>

        {loading && <FullPageLoader />}

        <Main />
        <Products />
        <ProductsShowcase />
        <Visit />
        <OurLogo />
        <Footor />
    </div>
  )
}

export default Landing