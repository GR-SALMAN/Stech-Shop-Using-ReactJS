/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { useState, useEffect } from "react"; //State and api
import { CartReducer } from "../Pages/Cart Components/Reducer/CartReducer.jsx";

// Create context
export const ProviderContext = createContext();

// Context provider component
const CartContext = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, []);
  const [GPU, setGPU] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Products")
      .then((res) => res.json())
      .then((data) => setGPU(data));
  }, []);

  const value = { cartState, dispatch, GPU, setGPU };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export default CartContext;
