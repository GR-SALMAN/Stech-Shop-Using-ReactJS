import { useEffect, useState } from "react";

function HomePage() {
  const [GPU, setGPU] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/Products`)
      .then((res) => res.json())
      .then((data) => setGPU(data));
  }, []);

  return (
    <>
      <div className="mainPage">
        <h1>Choose What yout want</h1>
        <div>
          {GPU.map((gpu) => (
            <div key={gpu.id} className="Single">
              <h2
                style={{
                  color:
                    gpu.brand === "AMD"
                      ? "#970A1B"
                      : gpu.brand === "NVIDIA"
                      ? "#76B900"
                      : gpu.brand === "Intel"
                      ? "#0071C5"
                      : "black",
                }}
                className="model"
              >
                {gpu.model}
              </h2>
              <img src={gpu.image} alt={gpu.model} style={{ width: "20rem" }} />
              <div>Brand: {gpu.brand}</div>
              <div>Memory: {gpu.memory}</div>
              <div>Core Clock: {gpu.coreClock}</div>
              <div>TDP: {gpu.tdp ? `${gpu.tdp}W` : "N/A"}</div>
              <div>Interface: {gpu.interface}</div>
              <div>Price: ${gpu.price ? gpu.price : "N/A"}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
