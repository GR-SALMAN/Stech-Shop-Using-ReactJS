import { createBrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs"; // Corrected casing in import path
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart Components/Cart";
import Products from "../Pages/Brands";
export const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "products", element: <Products /> }, // Removed leading '/'
      { path: "about", element: <AboutUs /> }, // Removed leading '/'
      { path: "contact", element: <Contact /> }, // Removed leading '/'
      { path: "cart", element: <Cart /> }, // Removed leading '/'
    ],
  },
]);
