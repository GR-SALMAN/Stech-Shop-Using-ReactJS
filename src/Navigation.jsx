// import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProviderContext } from "./ContextAPI/CartContext";

function Navigation() {
  const { cartState } = useContext(ProviderContext);
  return (
    <>
      <nav>
        <ul className="nav-links flex items-center justify-between shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full">
          <li style={{ color: "#b557cf", marginRight: "auto" }}>
            <Link
              style={{
                fontFamily: "Orbitron",
              }}
              to="/"
            >
              <span
                style={{
                  fontSize: 30,
                  background: "linear-gradient(90deg, #0071c5, #7d00ff)", // Gradient
                  WebkitBackgroundClip: "text", // Clip the background to text
                  WebkitTextFillColor: "transparent", // Make the text transparent
                  textShadow: "3px 2px 20px white", // Add shadow effect
                }}
              >
                Stech
              </span>
              <span style={{ fontWeight: "lighter", fontSize: 15 }}>
                ELECTRONICS
              </span>
            </Link>
          </li>

          <div className="flex gap-4">
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="cart">
                <i className="fa-solid fa-cart-shopping"></i> Cart(
                {cartState.reduce((acc, el) => acc + el.quantity, 0)})
              </Link>
            </li>
          </div>

          <li className="flex ml-5" style={{ fontSize: "large" }}>
            <Link to="Login">
              {" "}
              <button id="LogIn p-3">Login</button>
              <button className="ml-2 p-2 bg-purple-500 text-white">
                Register
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>

      <footer>
        <div id="footerLogo" style={{ color: "#b557cf" }}>
          <Link
            style={{
              fontFamily: "Orbitron",
            }}
            to="/"
          >
            <span
              style={{
                fontSize: 30,
                background: "linear-gradient(90deg, #0071c5, #7d00ff)", // Gradient
                WebkitBackgroundClip: "text", // Clip the background to text
                WebkitTextFillColor: "transparent", // Make the text transparent
                textShadow: "3px 2px 20px white", // Add shadow effect
              }}
            >
              Stech
            </span>
            <span style={{ fontWeight: "lighter", fontSize: 15 }}>
              ELECTRONICS
            </span>
          </Link>
        </div>

        <div className="footerLinks">
          <ul>
            <li>
              <ul className="Support-UL flex-col items-center">
                <li>
                  <strong>Support</strong>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i> BCS Computer
                  City, IDB Bhaban, Dhaka 1212
                </li>
                <li>
                  <a href="#">StechElect@gmail.com</a>
                </li>
                <li>
                  <a href="#">+88015-88888-9999</a>
                </li>
              </ul>
            </li>

            <li>
              <ul className="account-UL flex-col items-center">
                <li>
                  <strong>Account</strong>
                </li>
                <li>My Account</li>
                <li>Login/Register</li>
                <li>
                  <Link to="cart">
                    Cart(
                    {cartState.reduce((acc, el) => acc + el.quantity, 0)})
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <ul className="Quick-UL flex-col items-center">
                <li>
                  <strong>Quick Links</strong>
                </li>
                <li>Privacy</li>
                <li>Terms of Use</li>
                <li>FAQ</li>
              </ul>
            </li>

            <li>
              <ul className="flex-row flex-row gap-4 socialIcons">
                <li>
                  <Link>
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-discord"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Navigation;
