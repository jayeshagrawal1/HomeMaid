import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc"

const Template = ({ formtype }) => {
    return (
        <div className='flex justify-around w-11/12 max-w-[1160px] py-8 mx-auto gap-x-12 gap-y-0 h-screen'>

            <div className='flex flex-col w-11/12 max-w-[450px]'>

                <h1 className='text-richblack-5 font-semibold text-[1.775rem] leading-[1.575rem] '>
                    {formtype === "signup" ? "Create an Account" : "Welcome Back"}
                </h1>
                {formtype === "signup" ?
                    (<SignupForm />) :
                    (<LoginForm />)
                }
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem] '>OR</p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 p-[8px] gap-x-2 mt-3 hover:bg-[#08111f] transition-all duration-200'>
                    <FcGoogle />
                    <p> Sign in with Google</p>
                </button>
            </div>

        </div>
    )
}

export default Template