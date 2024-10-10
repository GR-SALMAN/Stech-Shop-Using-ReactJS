// import React from "react";
import { Outlet, Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex container">
      {/* Sidebar for filtering options */}
      <div className="w-1/4 p-4 border-r">
        <h2 className="text-lg font-semibold">Filter by</h2>
        <ul>
          <li>
            <Link to="products" className="block py-2 hover:text-blue-500">
              All Products
            </Link>
          </li>
          <li>
            <Link to="GraphicsCards" className="block py-2 hover:text-blue-500">
              Graphics Cards
            </Link>
          </li>
          <li>
            <Link to="Laptops" className="block py-2 hover:text-blue-500">
              Laptops
            </Link>
          </li>
          <li>
            <Link to="Console" className="block py-2 hover:text-blue-500">
              Consoles
            </Link>
          </li>
          <li>
            <Link to="SmartPhones" className="block py-2 hover:text-blue-500">
              Smart Phones
            </Link>
          </li>
          <li>
            <Link to="Monitors" className="block py-2 hover:text-blue-500">
              Monitors
            </Link>
          </li>
        </ul>
      </div>

      {/* Main area for rendering selected product component */}
      <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
