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
      <div className="flex justify-start m-5 border-l-[0.5rem] lg:border-l-[1rem] border-[#3b72ec]">
        <span className="ml-3 text-blue-600 font-semibold text-2xl lg:text-5xl">
          Flash Sale
        </span>
      </div>

      <div className="mx-auto">
        <Swiper
          loop={true}
          cssMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          keyboard={true}
          // spaceBetween={25}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 1 },
            400: { slidesPerView: 2, spaceBetween: 25 },
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 25 },
            1536: { slidesPerView: 6, spaceBetween: 25 },
          }}
          modules={[FreeMode, Mousewheel, Navigation, Keyboard, Autoplay]}
          className="mySwiper mx-auto w-[95%] overflow-auto"
        >
          {uniqueItems &&
            uniqueItems.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="product-slide overflow-hidden
                 lg:h-auto lg:w-full w-[200px] md:h-[280px] h-[280px] flex flex-col gap-1 "
                >
                  <img
                    src={product.image}
                    alt={product.model}
                    className="product-image lg:aspect-[300/365] aspect-[1.5/1]"
                  />
                  <div className="lg:w-[200px] lg:h-[150px] text-left">
                    <h1>
                      <strong
                        style={{
                          color: "blue",
                          whiteSpace: "nowrap" /* Prevent text wrapping */,
                          overflow: "hidden" /* Hide overflow */,
                          textOverflow:
                            "ellipsis" /* Show '...' if the text overflows */,

                          maxWidth: "90%",
                          display:
                            "inline-block" /* Ensure it respects the width */,
                        }}
                        className="text-xs lg:text-xl"
                      >
                        {product.model}
                      </strong>
                    </h1>

                    <h3 className="text-xs">{product.brand}</h3>
                    <p className="text-xs">{product.type}</p>
                    <p className="text-xs">
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
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
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default BestSellingSlide;
