// import React from "react";
import { useContext } from "react";
import { ProviderContext } from "../ContextAPI/CartContext";
import CartMapItems from "../Pages/Cart Components/CartMapItems";

const Monitors = () => {
  const { Item } = useContext(ProviderContext);
  const Mon = Item.filter((el) => {
    return el.type == "Monitor";
  });
  return (
    <>
      {Mon.map((item) => (
        <CartMapItems key={item} item={item} />
      ))}
    </>
  );
};

export default Monitors;
