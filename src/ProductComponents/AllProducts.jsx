import { useContext } from "react";
import { ProviderContext } from "../ContextAPI/CartContext";
import CartMapItems from "../Pages/Cart Components/CartMapItems";

const AllProducts = () => {
  const { Item } = useContext(ProviderContext);

  return (
    <>
      <>
        {Item.map((item) => (
          <CartMapItems key={item.id} item={item} />
        ))}
      </>
    </>
  );
};
export default AllProducts;
