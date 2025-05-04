import React from "react";
import { useState } from "react"
// import users from './assets/users.json'
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./assets/Contexts/authContext";
import LoginCss from './Login.module.css';
import Nav from "./Nav";
const Login = ()=>{
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate= useNavigate();
const {login} = useAuth();
const validateUser =()=>{
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user= users.find((u)=>u.username===username && u.password===password)
    if(user){
        login();
        console.log(user)
        navigate('/home')
    }
    else{
        console.log("Invalid username or password");
    } 
}

return(
    <>
    <Nav>
    <Link to={'/signup'} className={LoginCss.links}>Signup</Link>
    </Nav>
    <div className={LoginCss.login}>
        <label htmlFor="username">Username:</label> 
        <input type="text" name="username" id="username" 
        placeholder="Enter username"
        className={LoginCss.username} 
        onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <label htmlFor="password">Password:</label> 
        <input type="password" name="password" id="password" 
        className={LoginCss.password} 
        placeholder="Enter password"
        onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <button type="submit" 
        onClick={validateUser} 
        className={LoginCss.loginButton}>Login</button>
    </div>

    </>
)

}
export default Login