import React, { useEffect, useState } from 'react';
import Spinner from "../components/Spinner";
import BookingCard from "../components/BookingCard";

const MyBookings = () => {
  const [outputArr, setOutputArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const viewBookings = async () => {
    try {
      // Get user info first
      const res = await fetch(`${process.env.REACT_APP_API_URL}/getUser`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const data = await res.json();

      // Retrieving all bookings of the current user
      const { email } = data;
      const response = await fetch(`${process.env.REACT_APP_API_URL}/showBookings`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-User-email": email
        },
      });

      const output = await response.json();
      setOutputArr(output.services);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Something went wrong. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    viewBookings();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex justify-center pt-10">
        <p className="text-white text-4xl font-semibold tracking-wide text-center font-nunito">
          Booking History
        </p>
      </div>

      <div className="flex justify-center pt-4">
        {loading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold p-5 bg-red-900 bg-opacity-70 rounded-md shadow-lg">
            {error}
          </div>
        ) : outputArr.length === 0 ? (
          <div className="text-center text-white font-semibold p-5 bg-gray-900 bg-opacity-50 rounded-md shadow-lg">
            No bookings found. Start booking a service today!
          </div>
        ) : (
          <div className="flex justify-center items-center flex-wrap gap-8 px-4 py-6">
            <BookingCard services={outputArr} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
