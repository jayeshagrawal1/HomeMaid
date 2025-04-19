import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <div className=' border-t-[1px] border-[#AFB2BF] mt-9'></div>

            <div className='flex flex-col justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4 text-[#AFB2BF]'>
                <div className='w-11/12 max-w-[1160px] flex items-center justify-between'>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <p className='text-md font-semibold'>Contact Us</p>
                        <p className='text-sm'>9xxxxxxxxx</p>
                        <p className='text-sm'>support@xyz.com</p>
                    </div>

                    <div className='flex max-w-[300px] gap-1'>
                        <AiFillLinkedin fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer ml-16' />
                        <AiOutlineInstagram fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                        <AiFillFacebook fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                        <AiFillYoutube fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                        <AiOutlineTwitter fontSize={30} fill='#AFB2BF' className='hover:scale-110 ease-in duration-300 cursor-pointer' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <p className='text-md font-semibold'>Address</p>
                        <p className='text-sm'>Lig-18A,Kalpana Nagar,Bhopal</p>
                        <p className='text-sm'>462022</p>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 HomeMaid - All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
