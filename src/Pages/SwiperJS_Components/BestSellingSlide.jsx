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

  const uniqueItems = Item.filter(
    (el, index, self) => index === self.findIndex((item) => item.id === el.id)
  );

  let discount = (price) => {
    let amount = (10 / 100) * price;
    return amount + price;
  };

  return (
    <>
      <h1 className="HeaderQuote center">Flash Sale</h1>
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
        {uniqueItems &&
          uniqueItems.map((product) => (
            <SwiperSlide className="product-slide" key={product.id}>
              <img
                src={product.image}
                alt={product.model}
                className="product-image"
              />
              <div>
                <h1>
                  <strong
                    style={{
                      color: "blue",
                      whiteSpace: "nowrap" /* Prevent text wrapping */,
                      overflow: "hidden" /* Hide overflow */,
                      textOverflow:
                        "ellipsis" /* Show '...' if the text overflows */,
                      fontSize: "1rem" /* Adjust the font size */,
                      maxWidth:
                        "100%" /* Ensure it fits within the container */,
                      display:
                        "inline-block" /* Ensure it respects the width */,
                    }}
                  >
                    {product.model}
                  </strong>
                </h1>

                <h3>{product.brand}</h3>
                <p>{product.type}</p>
                <p>
                  <span
                    style={{ textDecoration: "line-through", color: "gray" }}
                  >
                    {Math.round(discount(product.price))}$
                  </span>{" "}
                  <span style={{ color: "green" }}>
                    {Math.round(product.price) - 0.01}$
                  </span>
                  <span style={{ color: "brown" }}> (-10%)</span>
                </p>

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
