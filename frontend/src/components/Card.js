import React from 'react'
import  babysitter  from "../images/babysitter.jpg"
import  allRounder  from "../images/all rounder.png"
import  cooks  from "../images/cooks.jpg"
import  domesticHelp  from "../images/domestic help.jpg"

const Card = ({ service }) => {

    function getImg(image) {
        if(image.toLowerCase().includes('cooks'))
            return cooks;
        else if(image.toLowerCase().includes('allRounder'))
            return allRounder;
        else if(image.toLowerCase().includes('babysitter'))
            return babysitter;
        else
            return domesticHelp;
    }

    return (
        <div className='w-[300px] bg-bgDark font-nunito opacity-80 rounded-md overflow-hidden hover:scale-105 transition duration-300 ease-in border-[1px]'>
            {
                <img src={getImg(service.serviceType)} alt={service.serviceType} loading="lazy" />
            }
            <div className='p-4 flex flex-col gap-1 items-start '>
                <div>
                    <span className='mt-2 text-white font-semibold text-lg'>Service Type : </span>
                    <span className='text-[#b0bfdc]  text-lg leading-6'>
                        {
                            ` ${service.serviceType}`
                        }
                    </span>
                </div>
                <div>
                    <span className='mt-2 text-white text-lg font-semibold'>Duration : </span>
                    <span className='mt-2 text-[#b0bfdc] ml-3 text-lg'>
                        {
                            ` ${service.duration} month`
                        }
                    </span>
                </div>

                <div>
                    <span className='mt-2 text-white text-lg font-semibold'>Price :</span>
                    <span className='mt-2 text-[#b0bfdc] ml-3 text-lg'>
                        {
                            ` ₹ ${service.price}`
                        }
                    </span>
                </div>

                <div>
                    <span className='mt-2 text-white text-lg font-semibold'>Payment Id : </span>
                    <span className='mt-2 ml-3 text-[#b0bfdc] text-lg'>{service.refrence_id}</span>
                </div>

                <div>
                    <span className='mt-2 text-white text-lg font-semibold'>Booking Date : </span>
                    <span className='mt-2 ml-3 text-[#b0bfdc] text-lg'>{service.booking_date.slice(0, 10)}</span>
                </div>


            </div>
        </div>
    )
}

export default Card