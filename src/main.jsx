import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "./router/router.jsx";

// Rendering the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={RootRouter} />
  </StrictMode>
);
