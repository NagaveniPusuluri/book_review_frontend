import React,{useEffect} from 'react';
import { useAuth } from './assets/Contexts/authContext';
import { useNavigate } from 'react-router-dom';
import LogoutCss from './Logout.module.css'

const Logout = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate= useNavigate();

  // useEffect(() => {
  //   logout();
  //   navigate("/login");  
  // }, [logout, navigate]);  

  if (!isLoggedIn) {
    return null;  
  }
  return <button onClick={()=>{logout, navigate("/login")}} 
  className={LogoutCss.logoutButton}>Logout</button>;
};

export default Logout;