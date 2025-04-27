import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import flag from '../images/Group 19080.svg';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contactAnimation from '../../src/lottie/contactus.json';

const ContactUs = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (mobile) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    const mobile = form.current.user_mobile.value;

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validateMobile(mobile)) {
      setMobileError('Mobile number must be exactly 10 digits');
      isValid = false;
    } else {
      setMobileError('');
    }

    if (!isValid) return;

    emailjs
      .sendForm('service_pold6rj', 'template_lznhu7c', form.current, 'lXk9jWUXFp7c72CSH')
      .then(
        (result) => {
          console.log(result.text);
          toast.success("We'll get back to you soon!");
        },
        (error) => {
          console.log(error.text);
          toast.error('Something went wrong.');
        }
      );

    e.target.reset();
  };

  return (
    <div className='flex flex-col md:flex-row justify-around w-11/12 max-w-[1160px] py-8 mx-auto gap-x-12 gap-y-8 items-center'>
      <div className='hidden md:flex w-[400px]'>
        <Lottie animationData={contactAnimation} loop={true} />
      </div>

      <div className='flex flex-col w-11/12 max-w-[450px]'>
        <p className='text-[#AFB2BF] text-xl'>Hey we are here!</p>
        <p className='text-[#ebecf0] font-bold text-3xl mt-1'>Get in touch with us</p>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full gap-y-4 mt-6'>
          <div className='flex gap-x-4 mt-2'>
            <label className='w-full'>
              <p className='text-sm text-richblack-5 mb-1'>Full Name <sup className='text-pink-200'>*</sup></p>
              <input
                className='bg-richblack-800 rounded-md text-richblack-5 w-full p-2'
                required
                name='user_name'
                type='text'
                placeholder='Enter your Name'
              />
            </label>

            <label className='w-full relative'>
              <p className='text-sm text-richblack-5 mb-1'>Mobile Number <sup className='text-pink-200'>*</sup></p>
              <input
                className='bg-richblack-800 rounded-md text-richblack-5 w-full p-2 text-center'
                required
                name='user_mobile'
                type='text'
                maxLength='10'
                pattern='[0-9]*'
                inputMode='numeric'
                placeholder='9xxxxxxxxx'
              />
              <img className='absolute top-7 left-2' src={flag} alt='flag' />
              {mobileError && <p className='text-red-400 text-sm mt-1'>{mobileError}</p>}
            </label>
          </div>

          <label className='w-full'>
            <p className='text-sm text-richblack-5 mb-1'>Email Address <sup className='text-pink-200'>*</sup></p>
            <input
              className='bg-richblack-800 rounded-md text-richblack-5 w-full p-2'
              required
              name='user_email'
              type='email'
              placeholder='Enter email address'
            />
            {emailError && <p className='text-red-400 text-sm mt-1'>{emailError}</p>}
          </label>

          <label className='w-full'>
            <p className='text-sm text-richblack-5 mb-1'>Message</p>
            <textarea
              className='bg-richblack-800 rounded-md text-richblack-5 w-full p-2'
              name='message'
              placeholder='Enter your query'
            />
          </label>

          <button
            type='submit'
            className='bg-yellow-50 rounded-md font-medium text-richblack-900 px-4 py-2 mt-2'
          >
            Contact Us
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactUs;
