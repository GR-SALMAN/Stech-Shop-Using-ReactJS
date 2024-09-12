// import React from "react";

import { useContext } from "react";
import CartMapItems from "./Cart Components/CartMapItems";
import { ProviderContext } from "../ContextAPI/CartContext";
const Products = () => {
  const { GPU } = useContext(ProviderContext);
  return (
    <div className="products">
      <div className="mainPage p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {GPU.map((gpu) => (
            <CartMapItems key={gpu} gpu={gpu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
