import { useState, useContext } from "react";
import { ProviderContext } from "../../ContextAPI/CartContext.jsx";

const CartTable = ({ el }) => {
  const { dispatch } = useContext(ProviderContext);
  const [itemQuantity, setItemQuantity] = useState(el.quantity);
  const { id, image, model, price, quantity } = el;

  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src={image} alt={model} className="w-10 h-10" />
      </td>
      <td>{model}</td>
      <td>{price}</td>
      <td>
        <div className="qty_input">
          <button
            onClick={() => {
              if (itemQuantity > 1) {
                dispatch({
                  type: "MODIFY_QUANTITY_OF_AN_ITEM",
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
            -
          </button>
          <input
            type="number"
            value={itemQuantity}
            onChange={(event) => {
              dispatch({
                type: "MODIFY_QUANTITY_OF_AN_ITEM",
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
                type: "MODIFY_QUANTITY_OF_AN_ITEM",
                payload: {
                  id: id,
                  quantity: itemQuantity + 1,
                },
              });
              setItemQuantity(itemQuantity + 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{quantity * price}</td>
      <td>
        <button
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: id })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartTable;
