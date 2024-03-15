import React,{useContext, useEffect} from 'react'
import Template from './Template'
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'


const Login = () => {
  const navigate=useNavigate();
  const {state}=useContext(userContext);

  useEffect(() => {
    if(state)
      navigate('/');
  }, []);
  

  return (
    <>
        <Template
            formtype="login"
        />

    </>
  )
}

export default Login