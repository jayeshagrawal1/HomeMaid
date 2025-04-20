import React from 'react';
import error from '../images/not-found.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-richblack-900 text-white px-4 text-center'>
      <img
        src={error}
        alt="Not Found"
        className='w-[220px] sm:w-[280px] md:w-[320px] mb-6 animate-fade-in'
      />
      <h1 className='text-3xl sm:text-4xl font-bold text-yellow-50 mb-2'>Oops! Page Not Found</h1>
      <p className='text-gray-400 text-md mb-6'>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className='bg-yellow-50 text-richblack-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-md'
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
