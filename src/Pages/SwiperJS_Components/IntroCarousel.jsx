// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
Link;
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function IntroCarousel() {
  const products = [
    {
      image: "https://cdn.mos.cms.futurecdn.net/tRa2VBBqADbN4G8mDwgNhF.jpg",
      text: "Latest Graphics cards to gear up your gaming life", // GPU
    },
    {
      image: "https://i.ytimg.com/vi/S3k9r9tExaY/maxresdefault.jpg",
      text: "Top-tier keyboards and accessories for your gaming setup", // Keyboard (Computer Accessories)
    },
    {
      image:
        "https://assetsio.gnwcdn.com/05-heatsink-of-pc-gaming-beenefit%402x_WUTyPQU.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      text: "High-performance SSDs and components to boost your PC", // SSD (Component)
    },
    {
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/201110165833-best-gaming-consoles-lead.jpg?q=x_0,y_0,h_1975,w_3509,c_fill",
      text: "The best gaming consoles for immersive entertainment", // Console
    },
    {
      image:
        "https://assets3.razerzone.com/S2lCh_kdbgSDDBMpPHe0ZgRi0jw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe3%2Fh62%2F9249241727006%2F211021-enki-green-1500x1000-1.jpg",
      text: "Ergonomic gaming chairs to enhance your comfort", // Gaming Chair
    },
    {
      image:
        "https://www.pcworld.com/wp-content/uploads/2024/03/alienware-gaming-laptop.jpg?quality=50&strip=all",
      text: "Powerful gaming laptops for performance on the go", // Gaming Laptop
    },
  ];

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      autoplay={{
        delay: 2000, // Set autoplay delay to 3 seconds
        disableOnInteraction: true, // Keep autoplay on interaction
      }}
      className="mySwiper"
      style={{
        height: "inherit",
      }}
      loop={true}
    >
      {products.map((el) => (
        <SwiperSlide key={el.image}>
          <div
            className="SlideShowText"
            style={{
              backgroundImage: `url(${el.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "inherit",
              height: "inherit",
              color: "white",
              fontFamily: "Orbitron",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <h1 className="slideText animatePopup">{el.text}</h1>

            <Link to="products">
              {" "}
              <button
                id="SlideShop"
                className="animatePopup"
                style={{
                  padding: "1rem",
                  color: "white",
                  fontWeight: "bolder", // Use camelCase for the property name
                }}
              >
                SHOP NOW <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
