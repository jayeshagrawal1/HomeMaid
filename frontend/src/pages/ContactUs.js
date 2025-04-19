import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import flag from '../images/Group 19080.svg'
import { AiFillLinkedin, AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import emailjs from '@emailjs/browser';


const ContactUs = () => {

    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("form :",form);
        emailjs.sendForm('service_pold6rj', 'template_lznhu7c', form.current, 'lXk9jWUXFp7c72CSH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };


    function submitHandler(event) {
        sendEmail(event);
        toast.success("we'll get back soon!");        
    }


    return (
        <div className='flex justify-around w-11/12 max-w-[1160px] py-8 mx-auto gap-x-12 gap-y-0 h-screen'>

            <div className='flex flex-col w-11/12 max-w-[450px]'>

                <p className='text-[#AFB2BF] text-xl'>Hey we are here!</p>
                <p className='text-[#ebecf0] font-bold text-3xl mt-1'>Get in touch with us</p>

                <form ref={form} onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>

                    {/* full Name  and mobile number*/}
                    <div className='flex gap-x-4 mt-2'>
                        <label className="w-full">
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Full Name <sup className='text-pink-200'>*</sup></p>
                            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] '
                                required
                                type='text'
                                name="user_name"
                                placeholder='Enter your Name'
                            />
                        </label>

                        <label className='w-full relative'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Mobile Number <sup className='text-pink-200'>*</sup></p>
                            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] text-center'
                                required
                                type='text'
                                name="user_mobile"
                                placeholder='9xxxxxxxxx'
                            />
                            <img className='absolute top-7' src={flag} />
                        </label>
                    </div>

                    {/* email */}
                    <label className='w-full mt-1'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]'
                            required
                            type='email'
                            name='user_email'
                            placeholder='Enter email address'
                        />
                    </label>

                    {/* message */}
                    <label className='w-full mt-1'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Message</p>
                        <textarea className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]'
                            name='message'
                            placeholder='Enter your query'
                        />
                    </label>

                    <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-1'>Contact Us</button>
                </form>

                {/* links  */}
                <div className='flex flex-wrap gap-6 mx-auto mt-10'>
                    <AiFillLinkedin fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                    <AiOutlineInstagram fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                    <AiFillFacebook fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                    <AiFillYoutube fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                    <AiOutlineTwitter fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                </div>

            </div>

        </div>
    )
}

export default ContactUs