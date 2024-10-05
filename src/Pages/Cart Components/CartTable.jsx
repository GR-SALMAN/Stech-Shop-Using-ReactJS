/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { ProviderContext } from "../../ContextAPI/CartContext.jsx";

const CartTable = ({ el }) => {
  // console.log(el, "the El from the cart table");
  const { dispatch } = useContext(ProviderContext);
  let [itemQuantity, setItemQuantity] = useState(el.quantity);

  console.log(itemQuantity, "Item Quantity");
  const { type, id, image, model, price, quantity } = el;

  return (
    <tr>
      <td>
        {" "}
        {/*  /Image feld */}
        <img src={image} alt={model} className="w-12 h-12 object-cover" />
      </td>
      <td>{type}</td>
      <td>{model}</td>
      <td>${price}</td>
      <td className="QuantityInput">
        {" "}
        {/*  /quantity feld */}
        <div className="QuantityInput">
          <button
            onClick={() => {
              if (itemQuantity > 1) {
                dispatch({
                  type: "MODIFY_ITEM_QUANTITY",
                  payload: {
                    id: id,
                    quantity: itemQuantity - 1,
                  },
                });
                setItemQuantity(itemQuantity - 1);
              } else {
                alert("Quantity should not be less than 1");
              }
            }}
          >
            <i className="fa-solid fa-circle-minus"></i>
          </button>
          <input
            type="number"
            value={itemQuantity}
            onChange={(event) => {
              dispatch({
                type: "MODIFY_ITEM_QUANTITY",
                payload: {
                  id: id,
                  quantity: Number(event.target.value),
                },
              });
              setItemQuantity(Number(event.target.value));
            }}
          />
          <button
            onClick={() => {
              dispatch({
                type: "MODIFY_ITEM_QUANTITY",
                payload: {
                  id: id,
                  quantity: itemQuantity + 1,
                },
              });
              setItemQuantity(itemQuantity + 1);
            }}
          >
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>
      </td>
      <td>${Math.floor(quantity * price)}</td>
      <td>
        {" "}
        {/*  /delete button */}
        <button
          onClick={() => {
            alert(`${model} removed from cart`);
            dispatch({ type: "REMOVE_THE_ITEM", payload: id });
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartTable;
