// import React from "react";
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProviderContext } from "./ContextAPI/CartContext";
useState;
function Navigation() {
  const { cartState } = useContext(ProviderContext);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {/* -------------------PC Navigation Section-----------------------------------------  */}
      <nav className=" hidden md:block lg:block">
        <ul className="nav-links flex items-center justify-between shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full">
          {/* ---------------- Logo Section ----------------------------- */}

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

      {/* -------------------Mobile Navigation Section-----------------------------------------  */}

      <div
        className=" lg:hidden md:hidden h-20 flex justify-between items-center mx-auto
      "
      >
        <div className="">
          <Link
            style={{
              fontFamily: "Orbitron",
            }}
            to="/"
          >
            <span
              style={{
                background: "linear-gradient(90deg, #0071c5, #7d00ff)", // Gradient
                WebkitBackgroundClip: "text", // Clip the background to text
                WebkitTextFillColor: "transparent", // Make the text transparent
                textShadow: "3px 2px 20px white", // Add shadow effect
              }}
              className="text-3xl font-medium"
            >
              Stech
            </span>
            <span
              style={{
                background: "linear-gradient(90deg, #0071c5, #7d00ff)", // Gradient
                WebkitBackgroundClip: "text", // Clip the background to text
                WebkitTextFillColor: "transparent", // Make the text transparent
                textShadow: "3px 2px 20px white", // Add shadow effect
              }}
              className="text-sm font-medium"
            >
              ELECTRONICS
            </span>
          </Link>
        </div>

        <div
          className={`w-8 h-6 flex flex-col justify-between items-center cursor-pointer ${
            !isOpen ? "hidden" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-full bg-purple-700 rounded transition-transform duration-300 ${
              !isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-purple-700  rounded transition-opacity duration-300 ${
              !isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-purple-700 rounded transition-transform duration-300 ${
              !isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Toggle Menu */}

        <div
          className={`fixed border inset-0 h-100% w-100% z-[9999] bg-white transition-all duration-500 ease-in-out transform flex flex-col mx-auto ${
            !isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 pointer-events-none"
          } `}
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.43)",
          }}
        >
          <div className="relative top-10 bg-[#a85eee] text-white h-[500px] w-[80%] mx-auto flex flex-col justify-center items-center gap-4 rounded-xl font-semibold text-xl transition-all">
            {/* ------------------------ Close menu ----------------------- */}
            <div
              className="w-8 h-6 flex flex-col justify-between items-center cursor-pointer  top-5 right-5 absolute
              "
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                  !isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
                  !isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                  !isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>

            <div onClick={() => setIsOpen(!isOpen)}>
              <Link to="/">Home</Link>
            </div>

            <div onClick={() => setIsOpen(!isOpen)}>
              <Link to="products">Products</Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              <Link to="about">About Us</Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              <Link to="contact">Contact</Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              <Link to="cart">
                <i className="fa-solid fa-cart-shopping"></i> Cart(
                {cartState.reduce((acc, el) => acc + el.quantity, 0)})
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>

      <footer className="mx-auto mt-20 flex lg:flex-row justify-between flex-col ">
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

        <div className="text-gray-700">
          <ul className="flex flex-col lg:flex text-sm lg:flex-row lg:gap-10 justify-between items-center text-center lg:text-left gap-5">
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
              <ul className="flex-row gap-4 flex text-2xl p-10">
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
