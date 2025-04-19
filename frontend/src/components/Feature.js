import React from 'react'
import support from '../images/output-onlinepngtools (1).png'
import privacy from '../images/output-onlinepngtools.png'
import affordable from '../images/output-onlinepngtools (2).png'

const Feature = () => {
    return (
        <div className='my-11'>
            <h2 className='text-white text-5xl font-semibold mt-3 mb-[8%] text-center tracking-wider'>Why choose us ?</h2>

            <div className='flex flex-wrap justify-center items-center gap-9 text-[#AFB2BF] mt-11 '>
                <div className='max-w-[310px]'>
                    <img src={privacy}  className='object-contain'/>
                    <p className='text-xl font-semibold mt-5 text-white'>Experienced and Reliable</p>
                    <p className='mt-4 text-left'>We’re not an agency, but a young startup run by a passionate group of professionals. We train our workers at certified training centers.</p>
                </div>
                <div className='max-w-[300px]'>
                    <img src={affordable} className='object-contain'/>
                    <p className='text-xl font-semibold mt-5 text-white'>Transparent Pricing</p>
                    <p className='mt-4 text-left'>You get what you pay for. Additionally, you get replacement guarantee, Covid-19 test reports, verification documents and more!</p>
                </div>
                <div className='max-w-[300px] -mt-3'>
                    <img src={support} className='object-contain'/>
                    <p className='text-xl font-semibold mt-5 text-white'>Customer Support</p>
                    <p className='mt-4 text-left'>Our executives will always be there to hear you out and solve your issues</p>
                </div>
            </div>

        </div>

    )
}

export default Feature