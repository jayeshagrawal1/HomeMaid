import React,{useEffect,useContext} from 'react'
import Template from './Template'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const Signup = () => {
  const navigate=useNavigate();
  const {state}=useContext(userContext);

  useEffect(() => {
    if(state)
      navigate('/');
  }, []);

  return (
    <div>
        <Template
            formtype="signup"
        />
    </div>
  )
}

export default Signup