import {
    GET_LOADING,
    GET_SUCCESS,
    GET_ERROR,
  } from "./actionType";
  
  export const loginLoading = () => {
    return {
      type: GET_LOADING,
    };
  };
  
  export const loginSuccess = (payload) => {
    return {
      type: GET_SUCCESS,
    };
  };
  
  export const loginError = () => {
    return {
      type: GET_ERROR,
    };
  };
  
  
