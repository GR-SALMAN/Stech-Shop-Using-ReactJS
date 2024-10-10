/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProviderContext } from "../../ContextAPI/CartContext";

const CartMapItems = ({ item }) => {
  const { addToCartHandler } = useContext(ProviderContext);

  return (
    <div
      key={item.id}
      className="font-bold singleProduct p-4 border rounded shadow w-80 h-auto flex flex-col justify-between"
    >
      <h2
        className="text-xl font-semibold mb-2"
        style={{
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        {item.model}
      </h2>
      <hr />
      <div className="productImage h-40 w-full mb-2">
        <img
          src={item.image}
          alt={item.model}
          className="w-full h-full object-contain"
        />
      </div>

      <ul className="text-left flex-col align-center">
        <li className="text-sm text-center p-2">
          Brand: <span>{item.brand}</span>
        </li>
        {item.info.map((el, index) => (
          <li style={{ fontSize: "small", color: "gray" }} key={index}>
            &bull; {el}
          </li>
        ))}
      </ul>

      <div className="mt-4 text-2xl">
        Price: <span>${item.price ? item.price : "N/A"}</span>
      </div>

      <div className="mt-2">
        <button type="button" onClick={() => addToCartHandler(item)}>
          <a
            href="#_"
            className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">ADD TO CART</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default CartMapItems;
