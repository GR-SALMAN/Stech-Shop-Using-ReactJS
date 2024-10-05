// import React from "react";

import { useContext } from "react";
import CartMapItems from "./Cart Components/CartMapItems";
import { ProviderContext } from "../ContextAPI/CartContext";

const Products = () => {
  const { Item } = useContext(ProviderContext);

  return (
    <div className="products">
      <div className="mainPage p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Item.map((item) => (
            <CartMapItems key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
