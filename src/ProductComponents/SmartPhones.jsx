import { useContext } from "react";
import { ProviderContext } from "../ContextAPI/CartContext";
import CartMapItems from "../Pages/Cart Components/CartMapItems";

const SmartPhones = () => {
  const { Item } = useContext(ProviderContext);
  const smartphones = Item.filter((el) => el.type === "Smartphone");

  return (
    <>
      {smartphones.map((item) => (
        <CartMapItems key={item.id} item={item} />
      ))}
    </>
  );
};

export default SmartPhones;
