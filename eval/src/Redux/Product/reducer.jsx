import {
    GET_ERROR,
    GET_LOADING,
    GET_SUCCESS,
  } from "./actionType";
  
  const init = {
    loading: false,
    error: false,
    prod:[]
  };
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case GET_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          prod:payload
        };
  
      case GET_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return {
          ...state,
        };
    }
  };