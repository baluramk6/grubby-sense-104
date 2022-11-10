
import {
    GET_PRODUCT_DATA_REQUEST,
    GET_PRODUCT_DATA_SUCCESS,
    GET_PRODUCT_DATA_FAILURE,
  } from "./actionType";
  
  const initialState = {
    products: [],
    isLoading: false,
    isError: false,
  };
  
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCT_DATA_REQUEST: {
        return {
          isLoading: true,
        };
      }
      case GET_PRODUCT_DATA_SUCCESS: {
        return {
          isLoading:false,
          products: payload,
        };
      }
  
      case GET_PRODUCT_DATA_FAILURE: {
        return {
          isLoading:false,
          products: "",
          isError: true,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  
  export { reducer };