import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchItems } from "../store/itemsSlice";

const ProductList = () => {

    const dispatch = useDispatch();
  const { data: itemsData = [], status } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <h1 className="text-3xl w-fit mx-auto mt-3">Loading...</h1>;
  }

  if (status === STATUSES.ERROR || !itemsData) {
    return (
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mt-3 w-fit mx-auto text-red-500">
          Something went wrong..!
        </h1>
        <img
          className="h-[100px] w-[100px]  mx-auto"
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHpxZWtnY2NkbTUxcGRoY24yaWp2ZTd6cnN0OXRvdzIyb28yejByZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S1pFYJvJdO6DdlNsQ3/giphy.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-5 p-5 gap-5'>
        {
            itemsData.map(item => {
                return <div key={item._id} className='border border-black rounded-lg'>
                    <div className='mx-auto w-40 h-40'>
                        <img src={item.image} alt="" className='object-fill w-full h-full' />
                    </div> 
                    <div className='p-3'>
                        <h1 className='font-xl font-medium truncate'>{item.name}</h1>
                        <h1 className='my-2'>Price : <span className='font-bold capitalize'>₹{item.price}</span></h1>
                        <h1 className=''>Category: <span className='font-medium capitalize underline'>{item.category}</span></h1>
                        <h1 className='truncate mt-2'>{item.description}</h1>
                    </div>

                </div>
                
            })
        }
    </div>
  )
}

export default ProductList