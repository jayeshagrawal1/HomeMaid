import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submitHandler = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password } = formData;

    // Validate email
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name, last_name, email, password })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      toast.error('Invalid Registration');
    } else if (res.status === 409) {
      toast.error('User Already Exists');
    } else {
      toast.success('Registration Successful');
      navigate('/login');
    }
  };

  return (
    <form onSubmit={submitHandler} method="POST" className="flex flex-col w-full gap-y-4 mt-6">
      
      <div className="flex gap-x-4 mt-2">
        <label className="w-full">
          <p className="text-sm text-richblack-5 mb-1">First Name <sup className="text-pink-200">*</sup></p>
          <input
            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-2"
            required
            type="text"
            name="first_name"
            onChange={changeHandler}
            value={formData.first_name}
            placeholder="Enter First Name"
          />
        </label>
        <label className="w-full">
          <p className="text-sm text-richblack-5 mb-1">Last Name <sup className="text-pink-200">*</sup></p>
          <input
            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-2"
            required
            type="text"
            name="last_name"
            onChange={changeHandler}
            value={formData.last_name}
            placeholder="Enter Last Name"
          />
        </label>
      </div>

      
      <label className="w-full mt-2">
        <p className="text-sm text-richblack-5 mb-1">Email Address <sup className="text-pink-200">*</sup></p>
        <input
          className="bg-richblack-800 rounded-md text-richblack-5 w-full p-2"
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
        />
      </label>

      
      <label className="relative w-full">
        <p className="text-sm text-richblack-5 mb-1">Create Password <sup className="text-pink-200">*</sup></p>
        <input
          className="bg-richblack-800 rounded-md text-richblack-5 w-full p-2"
          required
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
        />
        <span
          className="absolute right-3 top-[34px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword
            ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
        </span>
      </label>

      <button
        type="submit"
        className="bg-yellow-50 rounded-md font-medium text-richblack-900 px-4 py-2 hover:bg-[#efce27] transition-all duration-200"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
