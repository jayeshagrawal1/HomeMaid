import React, { useContext, useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { userContext } from '../App';
import { baseUrl } from './url';

const LoginForm = () => {

    const {state,dispatch}=useContext(userContext);

    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        email:"",password:""
    });

    const [showPassword,setShowPassword]=useState(false);

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    async function submitHandler(event){
        event.preventDefault();
        const {email,password}=formData;
        
        const res=await fetch(`${baseUrl}/signin`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,password
            }),
            credentials: 'include'
        });

        const data=await res.json();
        if(res.status===400 || !data)
        {
            toast.error("Invalid Credentials");
        }
        else
        {
            dispatch({type:"USER",payload:true})
            window.localStorage.setItem('isLoggedIn',true);
            toast.success("Logged In");
            navigate("/");
        }
 
    }
  return (
    <form onSubmit={submitHandler} method='POST' className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]'
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                />
        </label>
        <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]'
                required
                type={showPassword?("text"):("password")}
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter password'
                />
                
                <span className='absolute right-3 top-[34px] cursor-pointer'
                 onClick={()=>{ setShowPassword((prev)=>!prev)} } >
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
                </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] hover:bg-[#efce27] transition-all duration-200'
        >Sign In</button>
    </form>

  )
}

export default LoginForm