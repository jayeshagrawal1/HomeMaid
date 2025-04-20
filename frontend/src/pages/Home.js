import React from 'react'
import Feature from '../components/Feature'
import babysitter from '../images/icon_baby_care.jpg'
import cooks from '../images/icon_cook_chef.jpg'
import allrounder from '../images/icon-fd.jpg'
import domestichelp from '../images/icon_dom.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();

  function clickHandler(event)
  {
    navigate("/services");
  }
  return (
    <div className='flex flex-col  w-11/12 max-w-[1160px] py-4 mx-auto my-11' >
        <div className=' text-white flex mb-11 gap-11'>
          <div className=' flex flex-col items-start'>
            <h1 className='text-5xl font-bold tracking-wide mt-2'>INDIA'S </h1>
            <h1 className='text-5xl font-bold tracking-wide mt-2'>TRUSTED </h1>
            <h1 className='text-yellow-50 text-5xl font-bold tracking-wide mt-2'> HOME MAKERS</h1>
            <p className='text-richblack-100 text-xl tracking-wide mt-9 sm:w-[400px] leading-7'>HomeMaid is the simplest way to get your life in order with the right domestic help</p>
            <button onClick={clickHandler}
            className='text-white mt-9 rounded-[8px] font-medium uppercase p-3 border border-richblack-700 hover:bg-[#08111f] hover:text-yellow-50 transition-all duration-200'> Book Now</button>
          </div>
          <div className='md:flex md:flex-wrap gap-11 hidden bg-service '>
            <img src={babysitter} className='h-[260px] w-[145px] hover:scale-105 transition-all duration-200'></img>
            <img src={domestichelp} className='h-[260px] w-[145px] self-end -mb-4 hover:scale-105 transition-all duration-200'></img>
            <img src={cooks} className='h-[260px] w-[145px] hover:scale-105 transition-all duration-200'></img>
            <img src={allrounder} className='h-[260px] w-[145px] self-end -mb-4 hover:scale-105 transition-all duration-200'></img>
          </div>
        </div>
        <Feature/>
    </div>
  )
}

export default Home