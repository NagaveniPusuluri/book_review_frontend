
import React, {createContext, useState, useContext} from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn]= useState(localStorage.getItem('isLoggedIn') === 'false');

    const login =()=> {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    }

    const logout =()=>{
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    }
    // const signup=()=>{
    //      setIsLoggedIn(true);
    //      localStorage.setItem('isLoggedIn', 'true');
    // }

return(
    <AuthContext.Provider value={{ isLoggedIn,login, logout }}>
        {children}
    </AuthContext.Provider>
)
}

export const useAuth = ()=> useContext(AuthContext);
