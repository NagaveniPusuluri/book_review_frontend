import React, { useState } from "react";
// import users from './assets/users.json'
import { useNavigate } from "react-router-dom";
import { useAuth } from "./assets/Contexts/authContext";
import SignupCss from './Signup.module.css';
import Nav from "./Nav";


const Signup = ()=>{
const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate= useNavigate();

const validateUser = () => {
    // Check if all fields are filled
    if (!name || !username || !password) {
      setError("Please fill in all fields");
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.username === username);
    if (userExists) {
      setError("Username already taken.");
      return;
    }
    const newUser = { name, username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // signup(); 
    console.log("New user created:", newUser);
    navigate('/login');  
  };

return(
    <>
    <Nav/>
    <div className={SignupCss.signupMain}>
    <label htmlFor="name">Name:</label> 
    <input type="text" name="name" id="name" value={name} 
    className={SignupCss.name}
    placeholder="Enter name"
    onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <label htmlFor="username">Username:</label> 
    <input type="text" name="username" id="username" value={username}  
    placeholder="Enter username"
    className={SignupCss.username}
    onChange={(e)=>setUsername(e.target.value)}/>
    <br/>
    <label htmlFor="password">Password:</label> 
    <input type="password" name="password" id="password" value={password}  
    className={SignupCss.password}
    placeholder="Enter password"
    onChange={(e)=>setPassword(e.target.value)} />
    <br/>
    <button type="button" 
    className={SignupCss.signupButton}
    onClick={validateUser}>Signup</button>
   </div> 
   </>
)
}

export default Signup