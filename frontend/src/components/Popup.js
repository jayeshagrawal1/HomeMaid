import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import payment from '../images/payment.png'
import axios from 'axios'
import { userContext} from '../App'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from './url'

const Popup = ({ serviceType, setTrigger, trigger }) => {

    const { state} = useContext(userContext);
    const navigate = useNavigate();

    const [paymentDetails, setPaymentDetails] = useState({
        serviceType:'',duration:'',price:''
    });

    useEffect(() => {
        window.localStorage.setItem('userServiceCart',JSON.stringify(paymentDetails));
    }, [paymentDetails])
    

    const checkoutHandler = async (amount) => {

        if (!state) {
            navigate('/login');
            return;
        }

        const { data: { order } } = await axios.post(`${baseUrl}/payment/checkout`, {
            amount
        })

        const options = {
            key: "rzp_test_HYK44ARz18AaDT",
            amount: order.amount,
            currency: "INR",
            name: "HomeMaid",
            description: "For service charge only ",
            image: payment,
            order_id: order.id,
            callback_url: "/payment/verify",
            prefile: {
                name: "XYZ",
                email: "xyz@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }


    return (trigger) ? (
        <div className='bg-richblack-900/54 h-[100vh] w-full fixed top-0 left-0 flex justify-center items-center '>
            <div className='bg-richblack-900 relative w-[800px] h-[530px] rounded-2xl'>
                <button className='rounded-lg  p-2 hover:bg-[#ec0404] absolute top-1 right-1'
                    onClick={() => setTrigger(false)}>
                    <AiOutlineClose fontSize={17} fill='#AFB2BF' className='hover: ease-in duration-300 cursor-pointer' />
                </button>
                <h2 className='text-white text-4xl p-6 font-nunito pt-8 font-bold tracking-wider'>Choose Your Plan</h2>
                <p className='absolute right-1 bottom-1 pr-4 pb-1 text-white font-extralight text-sm'><sup className='text-[#ec0404]'>*</sup>You have to pay only platform fee here.</p>
                <div className='grid grid-cols-2 mt-2 p-7 gap-6' >
                    {/* 1month */}
                    <div className={` text-white  border-[1px] cursor-pointer rounded-lg p-10 
                    ${paymentDetails.duration === 1 ? "bg-opacity-60 border-yellow-50 border-[3px]" : "border-white"}`}
                        onClick={() => {
                            setPaymentDetails((payment) => (
                                {
                                    ...payment,
                                    serviceType: serviceType,
                                    price: 1500,
                                    duration: 1,
                                }
                            ))
                        }}>
                        <p className='font-nunito text-2xl  tracking-wider mb-3'>1 Month</p>
                        <span className='font-nunito text-xl text-yellow-50 mr-3'>₹</span>
                        <span className='font-nunito text-3xl text-yellow-50 font-extrabold'>1500</span>
                    </div>
                    {/* 3month */}
                    <div className={` text-white  border-[1px] cursor-pointer rounded-lg p-10 
                    ${paymentDetails.duration === 3 ? "bg-opacity-60 border-yellow-50 border-[3px]" : "border-white"}`}
                    onClick={() => {
                            setPaymentDetails((payment) => (
                                {
                                    ...payment,
                                    serviceType: serviceType,
                                    price: 4250,
                                    duration: 3,
                                }
                                ))
                        }}>
                        <p className='font-nunito text-2xl  tracking-wider mb-3'>3 Months</p>
                        <span className='font-nunito text-xl text-yellow-50 mr-3'>₹</span>
                        <span className='line-through font-nunito text-xl font-bold text-[#47474c] mr-3'>4500</span>
                        <span className='font-nunito text-3xl text-yellow-50 font-extrabold'>4250</span>
                    </div>
                    {/* 6 month */}
                    <div className={` text-white  border-[1px] cursor-pointer rounded-lg p-10 
                    ${paymentDetails.duration === 6 ? "bg-opacity-60 border-yellow-50 border-[3px]" : "border-white"}`}
                    onClick={() => {
                            setPaymentDetails((payment) => (
                                {
                                    ...payment,
                                    serviceType: serviceType,
                                    price: 8000,
                                    duration: 6,
                                }
                                ))    
                        }}>
                        <p className='font-nunito text-2xl  tracking-wider mb-3'>6 Months</p>
                        <span className='font-nunito text-xl text-yellow-50 mr-3'>₹</span>
                        <span className='line-through font-nunito text-xl font-bold text-[#47474c] mr-3'>9000</span>
                        <span className='font-nunito text-3xl text-yellow-50 font-extrabold'>8000</span>
                    </div>

                    <div className='text-white p-6 relative'>
                        <p className='font-nunito text-2xl font-bold tracking-wider'>Make Payment</p>
                        <span className='font-nunito text-md font-light mr-11'>Service Type:</span>
                        <span className='font-nunito text-md font-light '>{serviceType}</span>
                        <br />
                        <span className='font-nunito text-md font-light mr-4'>Pay platform fee: </span>
                        <span className='font-nunito text-md font-light text-yellow-50'>₹</span>
                        <span className='font-nunito text-lg font-bold text-yellow-50'>49</span>
                        <br />

                        <button className={`absolute right-7 bottom-0 bg-yellow-50 rounded-[8px] font-bold text-richblack-900 px-[12px] py-[8px] hover:bg-[#efce27] hover:text-[#282323] transition-all duration-200`}
                            onClick={() => checkoutHandler(49)}  >Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup
