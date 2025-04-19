import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { userContext } from '../App';
import { baseUrl } from './url';

const Navbar = () => {

    const { state, dispatch } = useContext(userContext);

    function logOutHandler() {
        fetch(`${baseUrl}/logout`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {

            dispatch({ type: "USER", payload: false });
            // window.localStorage.setItem('isLoggedIn',false);
            window.localStorage.removeItem("isLoggedIn");
            toast.success("Logged Out");

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <div>
            <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
                <Link to="/">
                    <h1 className='font-Ysabeau text-yellow-50 text-4xl select-none'> HomeMaid</h1>
                </Link>

                <nav >
                    <ul className='flex gap-x-6 text-white '>
                        <li className="pages">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="pages">
                            <NavLink to="/services">Services</NavLink>
                        </li>

                        {state &&
                            <li className='pages'>
                                <NavLink to="/mybookings">My Bookings</NavLink>
                            </li>
                        }

                        <li className="pages">
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* login signup logout dashboard */}

                <div className='flex items-center gap-x-4'>
                    {!state &&
                        <Link to="/login">
                            <button className='bg-richblack-800 text-richblack-100 py-[9px] px-[9px] rounded-[8px] border border-richblack-700 hover:bg-[#161a21] hover:text-yellow-50 transition-all duration-200'>
                                Log in
                            </button>
                        </Link>
                    }
                    {!state &&
                        <Link to="/signup">
                            <button className='bg-richblack-800 text-richblack-100 py-[9px] px-[9px] rounded-[8px] border border-richblack-700 hover:bg-[#161a21] hover:text-yellow-50 transition-all duration-200'>
                                Sign up
                            </button>
                        </Link>
                    }
                    {state &&
                        <button onClick={logOutHandler}
                            className='bg-richblack-800 text-richblack-100 py-[9px] px-[9px] rounded-[8px] border border-richblack-700 hover:bg-[#161a21] hover:text-yellow-50 transition-all duration-200'>
                            Log out
                        </button>
                    }

                </div>
            </div>
            <div className='w-full h-[1px] border-t-[1px] border-richblack-100'></div>
        </div>

    )
}

export default Navbar