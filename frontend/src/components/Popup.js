import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import payment from '../images/payment.png';
import axios from 'axios';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from './url';

const Popup = ({ serviceType, setTrigger, trigger }) => {
    const { state } = useContext(userContext);
    const navigate = useNavigate();

    const [paymentDetails, setPaymentDetails] = useState({
        serviceType: '', duration: '', price: ''
    });

    useEffect(() => {
        window.localStorage.setItem('userServiceCart', JSON.stringify(paymentDetails));
    }, [paymentDetails]);

    const checkoutHandler = async (amount) => {
        if (!state) {
            navigate('/login');
            return;
        }

        const { data: { order } } = await axios.post(`${baseUrl}/payment/checkout`, { amount });

        const options = {
            key: "rzp_test_HYK44ARz18AaDT",
            amount: order.amount,
            currency: "INR",
            name: "HomeMaid",
            description: "For service charge only",
            image: payment,
            order_id: order.id,
            callback_url: "/payment/verify",
            prefill: {
                name: "XYZ",
                email: "xyz@example.com",
                contact: "9999999999"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#facc15"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    };

    return trigger ? (
        <div className='bg-black bg-opacity-60 h-screen w-full fixed top-0 left-0 flex justify-center items-center z-50'>
            <div className='bg-richblack-800 shadow-2xl relative w-[90%] max-w-[850px] rounded-2xl p-8 transition-all duration-300'>
                <button className='absolute top-4 right-4 p-2 hover:bg-[#ec0404]/90 rounded-full'>
                    <AiOutlineClose fontSize={20} fill='#fff' onClick={() => setTrigger(false)} />
                </button>

                <h2 className='text-yellow-50 text-4xl font-bold tracking-wide mb-6 font-nunito text-center'>
                    Choose Your Plan
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {[{ duration: 1, price: 1500 }, { duration: 3, price: 4250, original: 4500 }, { duration: 6, price: 8000, original: 9000 }].map((plan) => (
                        <div
                            key={plan.duration}
                            onClick={() => setPaymentDetails({ serviceType, price: plan.price, duration: plan.duration })}
                            className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 hover:scale-105 shadow-md hover:shadow-yellow-200 ${
                                paymentDetails.duration === plan.duration ? 'border-yellow-400 bg-yellow-50/10' : 'border-white/20'
                            }`}
                        >
                            <p className='text-xl font-bold mb-2 text-gray-300'>{plan.duration} {plan.duration > 1 ? 'Months' : 'Month'}</p>
                            <div className='flex items-center space-x-2'>
                                {plan.original && (
                                    <span className='line-through text-sm text-gray-400'>₹{plan.original}</span>
                                )}
                                <span className='text-3xl font-extrabold text-yellow-50'>₹{plan.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center'>
                    <div className='text-white space-y-2 text-sm'>
                        <p><span className='font-semibold'>Service Type:</span> {serviceType}</p>
                        <p><span className='font-semibold'>Platform Fee:</span> ₹<span className='text-yellow-50 font-bold'>49</span></p>
                        <p className='text-xs text-gray-400'><sup className='text-red-600'>*</sup> You only pay the platform fee here.</p>
                    </div>

                    <button
                        onClick={() => checkoutHandler(49)}
                        className='mt-4 md:mt-0 bg-yellow-50 text-richblack-900 font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-200'
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Popup;
