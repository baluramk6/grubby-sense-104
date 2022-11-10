import {
    GET_PRODUCT_DATA_REQUEST,
    GET_PRODUCT_DATA_SUCCESS,
    GET_PRODUCT_DATA_FAILURE,
  } from "./actionType";
  
  const getProductRequest = () => {
    return {
      type: GET_PRODUCT_DATA_REQUEST,
    };
  };
  
  const getProductSuccess = (payload) => {
    return { type: GET_PRODUCT_DATA_SUCCESS, payload };
  };
  
  const getProductFailure = () => {
    return { type: GET_PRODUCT_DATA_FAILURE };
  };
  
  export { getProductRequest, getProductSuccess, getProductFailure };
  