import { useContext } from "react";
import CartContext, { ProviderContext } from "../../ContextAPI/CartContext";
import CartTable from "./CartTable";

CartContext;
CartTable;
useContext;

const Cart = () => {
  const { cartState, dispatch } = useContext(ProviderContext);
  let totalPrice = 0;
  cartState.forEach(
    (element) => (totalPrice += element.quantity * element.price)
  );

  const shipFee = 60;

  // let totalPrice = cartState.reduce((acc, element) => {
  //   return (acc += element.quantity * element.price);
  // }, 0);

  console.log(totalPrice);
  return (
    <div className="Cart mb-10 mt-10">
      <table className="table-auto">
        <thead className="border-b border-b-2 border-b-blue-500">
          <tr>
            <th>Product</th>
            <th>Product Type</th>
            <th>Model</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartState.length === 0 ? (
            <tr aria-colspan={7}>
              <td colSpan={7}>
                <img
                  style={{
                    height: "500px",
                    width: "inherit",
                    objectFit: "fill",
                  }}
                  src="public/SadChild.png"
                  alt="Nothing In the Bucket"
                />
              </td>
            </tr>
          ) : (
            cartState.map((el) => {
              return <CartTable el={el} key={el.id} />;
            })
          )}
        </tbody>
        {cartState.length > 0 && (
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "CLEAR_CART",
              })
            }
            className=" m-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <i className="fa-solid fa-broom"></i>
            Clear Cart
          </button>
        )}
      </table>

      {cartState.length > 0 && (
        <div className="CartSummery flex flex-col mt-10 mb-10">
          <h1 className="m-4">Order Summary</h1>
          <div className="OrderSummery">
            <h2>
              <strong>Subtotal</strong>
            </h2>
            <h2>
              {cartState.reduce((acc, el) => {
                return acc + el.quantity;
              }, 0)}{" "}
              (Items)
            </h2>
            <h2>Shipping Fee</h2>
            <h2>${shipFee}</h2>
            <h2>
              {" "}
              <strong>Total:</strong>{" "}
            </h2>{" "}
            <h2>${Math.floor(totalPrice + shipFee)}</h2>
          </div>
          <button className="CheckOutButton m-4">
            {" "}
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">PROCEED TO CHECKOUT</span>
            </a>{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
