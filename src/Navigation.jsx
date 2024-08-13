// import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="brands">Brands</Link> {/* No leading '/' */}
          </li>
          <li>
            <Link to="about">About Us</Link> {/* No leading '/' */}
          </li>
          <li>
            <Link to="contact">Contact</Link> {/* No leading '/' */}
          </li>
          <li>
            <Link to="cart">Cart</Link> {/* No leading '/' */}
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Correct usage of Outlet */}
    </div>
  );
}

export default Navigation;
