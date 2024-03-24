import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userSlice';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const onSubmit = async (data) => {
        console.log(data)
        dispatch(loginUser(data))
        .unwrap()
        .then(() => {
            // const user = selectUser(getState()); // Access the user data from the Redux state
            if (data) {
                toast.success("Login Successful", { position: "top-center" });
                navigate('/');
            } else {
                console.error("No user data found after login");
                toast.error("Login Failed", { position: "top-center" });
            }
        })
        .catch((error) => {
          console.error("Login Failed", error);
          toast.error("Login Failed", { position: "top-center" });
        });
    }

  return (
    <div className='w-1/4 mx-auto mt-10 container border shadow-md border-black rounded-md font-Inter'>
            <h1 className='text-center text-2xl mt-5 uppercase font-semibold'>login</h1>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='mb-3 mx-3 p-2'>
            <div className='flex flex-col mb-4'>
                <label htmlFor="" className='mb-1 font-medium'>Name</label>
                <input type="text" className='px-2 py-1 text-lg border rounded-md ' {...register('name', {required: true})} />
                {errors?.name && <p style={{color:'red'}}>This field is required</p>}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="" className='mb-1 font-medium'>Password</label>
                <input type="password" className='px-2 py-1 text-lg border rounded-md ' {...register('password', {required: true})} />
                {errors?.password && <p style={{color:'red'}}>This field is required</p>}
            </div>
            <h1 className='mb-4'>Don't have account? <Link to='/register' className='font-semibold underline'>Register</Link></h1>
            <button type='submit' className='w-full py-2 bg-green-500 rounded-md text-white'>Login</button>
        </form>
      <ToastContainer />

    </div>
  )
}

export default LoginPage