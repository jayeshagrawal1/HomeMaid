import React from 'react';
import babysitter from "../images/babysitter.jpg";
import allRounder from "../images/all rounder.png";
import cooks from "../images/cooks.jpg";
import domesticHelp from "../images/domestic help.jpg";

const Card = ({ service }) => {

    function getImg(image) {
        if (image.toLowerCase().includes('cooks'))
            return cooks;
        else if (image.toLowerCase().includes('allrounder'))
            return allRounder;
        else if (image.toLowerCase().includes('babysitter'))
            return babysitter;
        else
            return domesticHelp;
    }

    return (
        <div className='w-[320px] bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-yellow-100/20 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in font-inter'>
            <img
                src={getImg(service.serviceType)}
                alt={service.serviceType}
                loading="lazy"
                className='w-full h-[180px] object-cover'
            />

            <div className='p-5 text-white flex flex-col gap-3'>
                <h3 className='text-lg font-semibold text-yellow-50 tracking-wide capitalize'>
                    {service.serviceType}
                </h3>

                <div className='text-sm text-richblack-200 space-y-1'>
                    <p><span className='font-medium text-white'>Duration:</span> {service.duration} month{service.duration > 1 ? 's' : ''}</p>
                    <p><span className='font-medium text-white'>Price:</span> ₹{service.price}</p>
                    <p><span className='font-medium text-white'>Payment ID:</span> {service.refrence_id}</p>
                    <p><span className='font-medium text-white'>Booking Date:</span> {service.booking_date.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
