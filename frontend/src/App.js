import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { createContext, useReducer, } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import PaymentSuccess from "./components/PaymentSuccess";
import { initialState, reducer } from "./reducer/UseReducer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import MyBookings from "./pages/MyBookings";

// useContext API for user login info 
export const userContext = createContext();

// contextapi for storing booking information
export const serviceContext = createContext();

//Routes
const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mybookings" element={
                <PrivateRoute >
                    <MyBookings />
                </PrivateRoute>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

function App() {
    // changing state using reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="  bg-richblack-900 flex flex-col ">
            <userContext.Provider value={{ state, dispatch }}>
                <Navbar />
                <Routing />
                <Footer />
            </userContext.Provider>
        </div>
    );
}

export default App;
