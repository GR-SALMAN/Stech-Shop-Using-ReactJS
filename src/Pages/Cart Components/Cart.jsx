import { useContext } from "react";
import CartContext, { ProviderContext } from "../../ContextAPI/CartContext";
import CartTable from "./CartTable";
console.log("From cart section");
CartContext;
CartTable;
useContext;

const Cart = () => {
  const { cartState, dispatch } = useContext(ProviderContext);
  let totalPrice = 0;

  cartState.forEach(
    (element) => (totalPrice += element.quantity * element.price)
  );
  return (
    <div className="Cart ">
      <h1>Your Bucket list is here:</h1>
      <table>
        <thead className="grid grid-cols-7 gap-10 p-6 b-1 border-b-4 border-indigo-500">
          <th>ID</th>
          <th>Product</th>
          <th>Model</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Delete</th>
        </thead>
        <tbody className="grid grid-cols-5 gap-10">
          {cartState.map((el) => {
            return <CartTable el={el} key={el.id} />;
          })}
        </tbody>
      </table>
      <h2>Total Price: ${totalPrice}</h2>

      <button
        type="button"
        onClick={dispatch({
          type: "CLEAR_CART",
        })}
      >
        <i className="fa-solid fa-broom"></i>
        Clear Cart{" "}
      </button>
    </div>
  );
};

export default Cart;
