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
      <div className="mainPage p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {GPU.map((gpu) => (
            <div
              key={gpu.id}
              className="font-bold singleProduct p-4 border rounded shadow w-80 h-auto flex flex-col justify-between" // Fixed width and height
            >
              <h2
                className="text-xl font-semibold mb-2"
                style={{
                  color:
                    gpu.brand === "AMD"
                      ? "#970A1B"
                      : gpu.brand === "NVIDIA"
                      ? "#76B900"
                      : gpu.brand === "Intel"
                      ? "#0071C5"
                      : "black",
                  textAlign: "center",
                  border:
                    gpu.brand === "AMD"
                      ? "2px solid #970A1B"
                      : gpu.brand === "NVIDIA"
                      ? "2px solid #76B900"
                      : gpu.brand === "Intel"
                      ? "2px solid #0071C5"
                      : "black",
                  borderRadius: "5px",
                }}
              >
                {gpu.model}
              </h2>
              <div className="productImage h-40 w-full mb-2">
                <img
                  src={gpu.image}
                  alt={gpu.model}
                  className="w-full h-full object-cover" // Fixed height for image with object-cover
                />
              </div>

              <ul className="text-left">
                <li className="text-sm">
                  Brand:{" "}
                  <span
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
                  >
                    {gpu.brand}
                  </span>
                </li>
                <li className="text-sm text-gray-500">
                  Memory: <span className="text-black">{gpu.memory}</span>
                </li>
                <li className="text-sm text-gray-500">
                  Core Clock:{" "}
                  <span className="text-black">{gpu.coreClock}</span>
                </li>
                <li className="text-sm text-gray-500">
                  TDP:{" "}
                  <span className="text-black">
                    {gpu.tdp ? `${gpu.tdp}W` : "N/A"}
                  </span>
                </li>
                <li className="text-sm text-gray-500">
                  Interface: <span className="text-black">{gpu.interface}</span>
                </li>
              </ul>

              <div className="mt-4 text-2xl ">
                Price:{" "}
                <span
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
                >
                  ${gpu.price ? gpu.price : "N/A"}
                </span>
              </div>

              <div className="mt-2">
                <a
                  href="#_"
                  className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative">ADD TO CART</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
