import { useContext } from "react";
import { ProviderContext } from "../ContextAPI/CartContext";
import CartMapItems from "../Pages/Cart Components/CartMapItems";

const Consoles = () => {
  const { Item } = useContext(ProviderContext);
  const consoles = Item.filter((el) => el.type === "Gaming Console");

  return (
    <>
      {consoles.map((item) => (
        <CartMapItems key={item.id} item={item} />
      ))}
    </>
  );
};

export default Consoles;
