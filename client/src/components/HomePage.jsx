import React from 'react'
import ProductList from './ProductList'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='p-4'>
        <div className='w-fit mx-auto my-5'>
        <Link to='/additem' className='w-fit mx-auto bg-black text-white p-4 rounded-lg text-center'>Add Product</Link>
        </div>
        <ProductList/>
    </div>
  )
}

export default HomePage