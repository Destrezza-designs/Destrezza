import React from 'react'
import dynamic from 'next/dynamic'
import Footor from '@/components/Footor'

// Dynamic imports for client components
const Main = dynamic(() => import('./home/Main'), {
  loading: () => <div className="h-screen bg-gray-100 animate-pulse" />
})
const Products = dynamic(() => import('./home/Products'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const ProductsShowcase = dynamic(() => import('./home/ProductsShowcase'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const Visit = dynamic(() => import('./home/Visit'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const OurLogo = dynamic(() => import('./home/OurLogo'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

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