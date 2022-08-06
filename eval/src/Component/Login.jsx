import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux';
import { loginError, loginLoading, loginSuccess } from "../Redux/auth/action";
import { Navigate } from "react-router-dom";
export const Login = () => {
    const token=useSelector((state) => state.auth.token);

    const dispatch=useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    dispatch(loginLoading())
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: loginData,
    }).then(res=>{
        console.log("res",res)
        dispatch(loginSuccess(res.data.token))
    }).catch(err => { dispatch(loginError())});
  };
  if(token) {
    <Navigate to="/" />
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(loginData).map((el) => (
        <TextField
          id={el}
          key={el}
          value={el.loginData}
          name={el}
          onChange={handleLoginChange}
          label={el.toLocaleUpperCase()}
          variant="outlined"
        />
      ))}
      <br />
      <Button onClick={handleLogin} variant="outlined">
        Login
      </Button>
    </Box>
  );
};