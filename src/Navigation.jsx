// import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <ul
          // style={{ overflow: "hidden" }}
          className="nav-links flex items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        >
          <li style={{ color: "#8581f3" }}>
            <Link style={{ fontFamily: "Orbitron" }} to="/">
              <span style={{ fontSize: 40 }}>Stech</span>
              <span style={{ fontWeight: "lighter", fontSize: 20 }}>
                ELECTRONICS
              </span>
            </Link>
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
            <Link to="cart">
              <i className="fa-solid fa-cart-shopping"></i>Cart
            </Link>{" "}
            {/* No leading '/' */}
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Correct usage of Outlet */}
    </div>
  );
}

export default Navigation;
