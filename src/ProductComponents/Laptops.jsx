import { useContext } from "react";
import { ProviderContext } from "../ContextAPI/CartContext";
import CartMapItems from "../Pages/Cart Components/CartMapItems";

const Laptops = () => {
  const { Item } = useContext(ProviderContext);
  const laptops = Item.filter((el) => el.type === "Gaming Laptop");

  return (
    <>
      {laptops.map((item) => (
        <CartMapItems key={item.id} item={item} />
      ))}
    </>
  );
};

export default Laptops;
