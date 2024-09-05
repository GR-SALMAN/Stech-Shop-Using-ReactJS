// import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProviderContext } from "./ContextAPI/CartContext";
useContext;
function Navigation() {
  const { cartState } = useContext(ProviderContext);
  return (
    <>
      <nav className="navbar">
        <ul
          // style={{ overflow: "hidden" }}
          className="nav-links flex items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        >
          <li style={{ color: "#8581f3" }}>
            <Link style={{ fontFamily: "Orbitron" }} to="/">
              <span style={{ fontSize: 35 }}>Stech</span>
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
              <i className="fa-solid fa-cart-shopping"></i>Cart(
              {cartState.reduce((acc, el) => {
                return acc + el.quantity;
              }, 0)}
              )
            </Link>{" "}
            {/* No leading '/' */}
          </li>

          <li className="flex ml-5" style={{ fontSize: "large" }}>
            <button id="LogIn p-3">Login</button>
            <button
              style={{ color: "white" }}
              className="register ml-2 p-2 bg-purple-500"
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Correct usage of Outlet */}
    </>
  );
}

export default Navigation;
