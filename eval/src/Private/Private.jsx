import React from "react";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

export const Private = ({ children }) => {
    let nav=useNavigate();
  const token = useSelector((state) => state.auth.token);
    console.log(token,"token");
    
 React.useEffect(() => {
    if (!token) {
        nav('/login')
         return ;
      }
 
   
 }, [])
 
  
  return children;
};