import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { userContext } from '../App';

const PrivateRoute = ({children}) => {

    const {state}=useContext(userContext);

    if(state)
    {
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute