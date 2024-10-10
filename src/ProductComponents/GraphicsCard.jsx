import { useContext } from "react";
import { ProviderContext } from "../ContextAPI/CartContext";
import CartMapItems from "../Pages/Cart Components/CartMapItems";

const GraphicsCard = () => {
  const { Item } = useContext(ProviderContext);
  const graphicsCards = Item.filter(
    (el) => el.type === "Computer Graphics Card"
  );

  return (
    <>
      {graphicsCards.map((item) => (
        <CartMapItems key={item.id} item={item} />
      ))}
    </>
  );
};

export default GraphicsCard;
