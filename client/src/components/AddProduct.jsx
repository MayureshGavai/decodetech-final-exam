import React from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <div className='text-center mt-6'>
        <h1 className='mb-6'>Add Product</h1>
        <Link to='/' className='bg-black p-2 rounded-md text-white'>Home</Link>
    </div>
    
  )
}

export default AddProduct