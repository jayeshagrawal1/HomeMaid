import React from 'react'
import Card from './Card'

const BookingCard = ({ services }) => {

    return (

        <div className='flex flex-wrap justify-center items-center gap-7'>
            {
                services.length !== 0 ? (services.map((service, index) => (
                    <Card key={index} service={service} />))) :
                    (<div className='text-white text-2xl font-nunito'>No Bookings</div>)
            }
        </div>

    )
}

export default BookingCard