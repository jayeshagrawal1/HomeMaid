import React from 'react'
import error from '../images/not-found.png'

const Error404 = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <img src={error} className='h-[200px]' />
        <h2 className='text-white font-semibold tracking-wide text-lg'>Item not found</h2>
    </div>
  )
}

export default Error404