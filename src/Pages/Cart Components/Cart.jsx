import { useContext } from "react";
import CartContext from "../../ContextAPI/Cart";
import CartTable from "./CartTable";
console.log("From cart section");
CartContext;
CartTable;
// import React from "react";
useContext;
const Cart = () => {
  const [cartState, dispatch] = useContext(CartContext);
  return (
    <div className="Cart ">
      <h1>Your Bucket list</h1>
      <table>
        <thead className="grid grid-cols-6 gap-10 p-6 b-1 border-b-4 border-indigo-500">
          <th>ID</th>
          <th>Peroduct</th>
          <th>Model</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Delete</th>
        </thead>
        <tbody className="grid grid-cols-5 gap-10">
          {cartState.map((el) => {
            return <CartTable cartState={cartState} key={el} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
