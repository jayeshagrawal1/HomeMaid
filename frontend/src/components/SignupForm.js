import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from './url';

const SignupForm = () => {

    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const [showPassword,setShowPassword]=useState(false);

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
        const {first_name,last_name,email,password}=formData;

        const res=await fetch(`${baseUrl}/register`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                first_name,
                last_name,
                email,
                password
            })
        });
        const data=await res.json();
        // console.log(res.status);
        if(res.status===422 || !data)
        {
            toast.error("Invalid Registration");
        }
        else if(res.status===409)
        {
            toast.error("User Already Exist");
        }
        else{
            toast.success("Registration Successfull");
            // setIsLoggedIn(true);
            navigate("/login");
        }

        
    }


  return (
    <div>

        
        <form onSubmit={submitHandler} method='POST' className='flex flex-col w-full gap-y-4 mt-6'>
            {/* firstName LastName */}
            <div className='flex gap-x-4 mt-2'>
                <label className="w-full">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]'
                        required
                        type='text'
                        name="first_name"
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.first_name}
                    />
                </label>
                
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]'
                        required
                        type='text'
                        name="last_name"
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.last_name}
                    />
                </label>
            </div>

            {/* email */}
            <label className='w-full mt-2'>
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

            {/* createPassword */}
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
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
            </label>


            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] hover:bg-[#efce27] transition-all duration-200'>Create Account</button>
        </form>

    </div>
  )
}

export default SignupForm