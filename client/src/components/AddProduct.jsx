import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../store/itemsSlice';


const AddProduct = () => {

  const {handleSubmit, register, formState : {errors}, reset} = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    // data.image = data.image[0]
    console.log(data)
    dispatch(addNewItem(data))
    .unwrap()
    .then(()=>{
      toast.success("New Item Added", { position: "top-center" });
    })
    .catch((err)=>{
      console.error("Failed to add new item:", err);
    })
    reset()
    setTimeout(()=>{
      navigate('/')
    },4000)
  }

  return (
    <div className=''>
    <div className='mt-6 w-1/3 mx-auto p-5 border border-black rounded-md'>
        <h1 className='mb-6 text-3xl'>Add New Product</h1>
        <div className=''>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'  encType='multipart/form-data'>
            <div className='w-full mb-2 flex items-center justify-between'>
              <label htmlFor="" className='w-1/4' >Item Name</label>
              <div className='w-3/4'> 
                <input type="text" className='w-full p-1 px-2  border border-black rounded-md' {...register('name',{required:true}) } />
                {errors?.name && <p style={{color:'red'}}>This is required</p>}
              </div>
            </div>
            <div className='w-full mb-2 flex items-center justify-between'>
              <label htmlFor="" className='w-1/4' >Item Price</label>
              <div className='w-3/4'> 
                <input type="number" className='w-full p-1 px-2  border border-black rounded-md' {...register('price',{required:true}) } />
                {errors?.price && <p style={{color:'red'}}>This is required</p>}
              </div>
            </div>
            <div className='w-full mb-2 flex items-center justify-between'>
              <label htmlFor="" className='w-1/4' >Item Category</label>
              <div className='w-3/4'> 
                <input type="text" className='w-full p-1 px-2  border border-black rounded-md' {...register('category',{required:true}) } />
                {errors?.category && <p style={{color:'red'}}>This is required</p>}
              </div>
            </div>
            <div className='w-full mb-2 flex items-start justify-between'>
              <label htmlFor="" className='w-1/4' >Item Description</label>
              <div className='w-3/4'> 
                <textarea rows={6} className='w-full p-1 px-2  border border-black rounded-md' {...register('description',{required:true}) } ></textarea>
                {errors?.description && <p style={{color:'red'}}>This is required</p>}
              </div>
            </div>
            <div className='w-full mb-2 flex items-center justify-between'>
              <label htmlFor="" className='w-1/4' >Item Image</label>
              <div className='w-3/4'> 
                <input type="url" className='w-full p-1 px-2  border border-black rounded-md' {...register('image',{required:true}) } />
                {errors?.image && <p style={{color:'red'}}>This is required</p>}
              </div>
            </div>
            <button type='submit' className='w-full mt-5 mx-auto bg-black text-white px-2 py-1 rounded-md'>Sumbit</button>
          </form>
        </div>
        <ToastContainer />
    </div>
      <div className='w-fit mx-auto mt-6 text-center'>
        <Link to='/' className='bg-black p-2 rounded-md text-white'>Return Home</Link>
      </div>
    </div>
  )
}

export default AddProduct