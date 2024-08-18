/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { CartReducer } from "../Pages/Cart Components/Reducer/CartReducer";

// Create context
export const ProviderContext = createContext();

// Context provider component
const CartContext = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, []);

  const value = { cartState, dispatch };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export default CartContext;
