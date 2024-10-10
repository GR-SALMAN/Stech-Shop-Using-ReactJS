import { createBrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Pages/HomePage";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart Components/Cart";
import Products from "../Pages/Brands";
import AboutUs from "../Pages/AboutSection/AboutUS";
import GraphicsCard from "../ProductComponents/GraphicsCard";
import Laptops from "../ProductComponents/Laptops";
import Consoles from "../ProductComponents/Consoles";
import SmartPhones from "../ProductComponents/SmartPhones";
import Monitors from "../ProductComponents/Monitors";
import AllProducts from "../ProductComponents/AllProducts";
import Auth from "../Pages/LoginSignUp";

export const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "products",
        element: <Products />,
        children: [
          { index: true, element: <AllProducts /> },
          { path: "products", element: <AllProducts /> },
          { path: "GraphicsCards", element: <GraphicsCard /> },
          { path: "Laptops", element: <Laptops /> },
          { path: "Console", element: <Consoles /> },
          { path: "SmartPhones", element: <SmartPhones /> },
          { path: "Monitors", element: <Monitors /> },
        ],
      },
      { path: "about", element: <AboutUs /> }, // Removed leading '/'
      { path: "contact", element: <Contact /> }, // Removed leading '/'
      { path: "cart", element: <Cart /> },
      { path: "Login", element: <Auth /> }, // Removed leading '/'
    ],
  },
]);
