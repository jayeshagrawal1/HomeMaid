import React, { useState } from 'react'
import Feature from '../components/Feature'
import star from '../images/Mystar.svg'
import Popup from '../components/Popup'

const Services = () => {
    const [typeOfService, SetTypeOfService] = useState('');
    const [popupButton, setPopupButton] = useState(false);
    

    return (
        <div className='flex flex-col w-11/12 max-w-[1160px] py-4 mx-auto my-11'>
            <h1 className='text-white text-5xl font-semibold tracking-wide text-center '>Want your chores simplified?</h1>
            <h1 className='text-white text-3xl font-semibold tracking-wide text-center my-6'>Book a HomeMaid</h1>
            <div className='flex flex-wrap gap-11 items-center justify-center my-11 '>

                <div className='flex flex-col justify-between bg-domestichelp h-[179px] w-[400px] bg-cover rounded hover:scale-105 transition-all duration-200 cursor-pointer'
                    onClick={()=> {setPopupButton(true)
                        SetTypeOfService("Domestic Help")}}>
                    <div className='flex gap-2 bg-white w-[15%] px-2 rounded-full mt-1'>
                        <img src={star} alt='star'></img>
                        <p className='font-semibold'>4.7</p>
                    </div>
                    <div className='font-semibold text-white bg-richblack-700 w-[23%] p-1 rounded'>Book Now!</div>
                    <p className='font-semibold bg-yellow-50 w-[30%] p-1 rounded-md'>Domestic Help</p>
                </div>

                <div className='flex flex-col justify-between bg-cooks h-[179px] w-[400px] bg-cover rounded hover:scale-105 transition-all duration-200 cursor-pointer'
                    onClick={() => {
                        setPopupButton(true)
                        SetTypeOfService("Cooks")
                    }}>
                    <div className='flex gap-2 bg-white w-[15%] px-2 rounded-full mt-1'>
                        <img src={star} alt='star'></img>
                        <p className='font-semibold'>4.3</p>
                    </div>
                    <div className='font-semibold text-white bg-richblack-700 w-[23%] p-1 rounded'>Book Now!</div>
                    <p className='font-semibold bg-yellow-50 w-[14%] p-1 rounded-md'>Cooks</p>
                </div>

                <div className='flex flex-col justify-between bg-babysitter h-[179px] w-[400px] bg-cover rounded hover:scale-105 transition-all duration-200 cursor-pointer'
                    onClick={() => {
                        setPopupButton(true)
                        SetTypeOfService("BabySitter")
                    }}>
                    <div className='flex gap-2 bg-white w-[15%] px-2 rounded-full mt-1'>
                        <img src={star} alt='star'></img>
                        <p className='font-semibold'>4.6</p>
                    </div>
                    <div className='font-semibold text-white bg-richblack-700 w-[23%] p-1 rounded'>Book Now!</div>
                    <p className='font-semibold bg-yellow-50 w-[21%] p-1 rounded-md'>Babysitter</p>
                </div>

                <div className='flex flex-col justify-between bg-allrounder h-[179px] w-[400px] bg-cover rounded hover:scale-105 transition-all duration-200 cursor-pointer'
                    onClick={()=> {setPopupButton(true)
                        SetTypeOfService("All Rounder")
                        }}>
                    <div className='flex gap-2 bg-white w-[15%] px-2 rounded-full mt-1'>
                        <img src={star} alt='star'></img>
                        <p className='font-semibold'>4.8</p>
                    </div>
                    <div className='font-semibold text-white bg-richblack-700 w-[23%] p-1 rounded'> Book Now!</div>
                    <p className='font-semibold bg-yellow-50 w-[23%] p-1 rounded-md'>All rounder</p>
                </div>
            </div>
            <Popup trigger={popupButton} setTrigger={setPopupButton} serviceType={typeOfService} />
            <Feature />
        </div>
    )
}

export default Services