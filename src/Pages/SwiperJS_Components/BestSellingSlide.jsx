import { Autoplay } from "swiper/modules";
import { FreeMode, Mousewheel, Navigation, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ProviderContext } from "../../ContextAPI/CartContext";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSellingSlide = () => {
  const { Item, addToCartHandler } = useContext(ProviderContext);
  return (
    <>
      <h1 className="BestSellingHeader center">Best Selling Products</h1>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        slidesPerView={6}
        spaceBetween={25}
        modules={[FreeMode, Mousewheel, Navigation, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {Item &&
          Item.map((product) => (
            <SwiperSlide className="product-slide" key={product.id}>
              <img
                src={product.image}
                alt={product.model}
                className="product-image"
              />
              <div>
                <h1>
                  <strong>{product.model}</strong>
                </h1>
                <h3>{product.brand}</h3>
                <p>{product.type}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCartHandler(product)}
                >
                  ${product.price}
                  <i
                    style={{ paddingLeft: "1rem" }}
                    className="fa-solid fa-cart-plus"
                  ></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default BestSellingSlide;
