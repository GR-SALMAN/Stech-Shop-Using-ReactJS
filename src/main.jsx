import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "./router/router.jsx";
import CartContext from "./ContextAPI/Cart.jsx";
CartContext;
// Rendering the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContext>
      <RouterProvider router={RootRouter} />
    </CartContext>
  </StrictMode>
);
