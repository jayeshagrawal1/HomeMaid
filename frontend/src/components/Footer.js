import React from 'react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-richblack-900 text-[#AFB2BF] pt-8 px-4'>
      <div className='w-full h-[1px] bg-white/10 mb-8'></div>

      <div className='w-11/12 max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-0'>
        {/* Contact Section */}
        <div className='text-center md:text-left'>
          <p className='text-md font-semibold text-white'>Contact Us</p>
          <p className='text-sm mt-1'>9xxxxxxxxx</p>
          <p className='text-sm'>homemaid2002@gmail.com</p>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-4 justify-center'>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin className='text-2xl hover:text-yellow-50 transition-transform hover:scale-110' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <AiOutlineInstagram className='text-2xl hover:text-yellow-50 transition-transform hover:scale-110' />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <AiFillFacebook className='text-2xl hover:text-yellow-50 transition-transform hover:scale-110' />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <AiFillYoutube className='text-2xl hover:text-yellow-50 transition-transform hover:scale-110' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <AiOutlineTwitter className='text-2xl hover:text-yellow-50 transition-transform hover:scale-110' />
          </a>
        </div>

        {/* Address Section */}
        <div className='text-center md:text-right'>
          <p className='text-md font-semibold text-white'>Address</p>
          <p className='text-sm mt-1'>Sector-19, Koparkhairne, Navi Mumbai</p>
          <p className='text-sm'>400709</p>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-8 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} <span className='text-yellow-50 font-semibold'>HomeMaid</span> — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
