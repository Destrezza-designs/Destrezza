import React from 'react'
import Main from './home/Main'
import Products from './home/Products'
import ProductsShowcase from './home/ProductsShowcase'
import Visit from './home/Visit'
import OurLogo from './home/OurLogo'
import Footor from '@/components/Footor'

const Landing = () => {
  return (
    <div>
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