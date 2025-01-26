import React from 'react'
import ProductList from '../components/AllProducts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function productGrid() {
  return (
    <div>
        <Navbar/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default productGrid