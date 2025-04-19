import React, { useEffect, useState} from 'react'
import Spinner from "../components/Spinner"
import BookingCard from "../components/BookingCard"
import { baseUrl } from '../components/url'

const MyBookings = () => {

    const [outputArr,setOutputArr]=useState([]);
    const [loading,setLoading]=useState(true);
    const viewBookings = async () => {
        try {
            //get user info first
            const res = await fetch(`${baseUrl}/getUser`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                credentials: "include"
            });

            const data = await res.json();

            // retrieving all bookings of current user
            const { email } = data;
            const response=await fetch(`${baseUrl}/showBookings`,{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-User-email":email
                },
                
            });
            
            const output=await response.json();
            setOutputArr(output.services);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        viewBookings();
    }, [])


    return (
        <div className=' h-screen '>
            <div className='flex justify-center'>
                <p className='text-white text-4xl font-semibold tracking-wide text-center my-7 mb-9 font-nunito'>Booking History</p>
            </div>
        {
            loading?(<Spinner/>):(<BookingCard services={outputArr} />)
        }
        </div>
    )
}

export default MyBookings