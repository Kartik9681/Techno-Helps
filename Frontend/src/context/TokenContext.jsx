import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const TokenContext = createContext();

export const TokenProvoder = ({children}) => {
    const[loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState();
    const authToken = `Bearer ${token}`;

    const storeToken = (token) =>{
        setToken(token);
        return localStorage.setItem("token", token);
    }
    let isLoggedIn = !!token;
    console.log("isLoggedIN ", isLoggedIn);
  
    // tackling the logout functionality
    const LogoutUser = () => {
      setToken("");
      return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/user/user', 
                {
                    method: 'GET', 
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            if(response.ok){
                const data = await response.json();
                console.log(data.userData);
                setUser(data.userData);
                setLoading(false);
            }
            else{
                setLoading(false);
            }
        } catch (error) {
            console.log("cant get data");
        }
    }
    useEffect(() =>{
        userAuthentication();
    }, []);
    return <TokenContext.Provider value={{storeToken, user, authToken, isLoggedIn, LogoutUser, loading}}>
        {children}
    </TokenContext.Provider>
}

export const useTokenContext = () => {
    return useContext(TokenContext);
}