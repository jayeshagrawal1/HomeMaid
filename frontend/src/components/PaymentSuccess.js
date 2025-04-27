import React, { useEffect } from 'react'
import tick from "../images/greenTick.png"

const PaymentSuccess = () => {

    let urlElements = window.location.href.split('=')

    const saveProductInfo = async () => {
        try {
            //get user info firsxt
            const res = await fetch(`${process.env.REACT_APP_API_URL}/getUser`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                credentials: "include"
            });

            const data = await res.json();

            // saving order into this user
            const { email } = data;
            const refrence_id=urlElements[1];
            const {serviceType,duration,price}=JSON.parse(window.localStorage.getItem('userServiceCart'));
            
            const response = await fetch(`${process.env.REACT_APP_API_URL}/saveBooking`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    refrence_id,
                    serviceType,
                    duration,
                    price
                })
            });


            if(response.status===409){
                return;
            }


        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        saveProductInfo();
    }, [])


    return (
        <div className='flex flex-col justify-center items-center text-white gap-2 mt-5'>
            <img src={tick} width={210}></img>
            <h2 className='uppercase font-nunito text-3xl font-bold tracking-wide'>Order Successfull</h2>
            <p className='font-nunito text-xl font-semibold tracking-wide mb-5'>Reference No.{urlElements[1]}</p>

        </div>
    )
}

export default PaymentSuccess