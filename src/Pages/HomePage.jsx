// import { useState, useEffect } from "react"; //State and api
import { useContext } from "react";
import CartMapItems from "./Cart Components/CartMapItems.jsx";
import { ProviderContext } from "../ContextAPI/CartContext.jsx";
function HomePage() {
  const { GPU } = useContext(ProviderContext);
  return (
    <>
      <section className="hero">
        <img src="hero-image.jpg" alt="GPU image" />
        <h2>Welcome to Your GPU Shop</h2>
        <p>Discover the latest and greatest graphics cards.</p>
      </section>
      <div className="mainPage p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {GPU.map((gpu) => (
            <CartMapItems key={gpu} gpu={gpu} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
