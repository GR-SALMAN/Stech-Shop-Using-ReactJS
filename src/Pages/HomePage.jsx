import { useState, useEffect } from "react"; //State and api
import CartMapItems from "./Cart Components/CartMapItems.jsx";
function HomePage() {
  const [GPU, setGPU] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Products")
      .then((res) => res.json())
      .then((data) => setGPU(data));
  }, []);

  return (
    <>
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
