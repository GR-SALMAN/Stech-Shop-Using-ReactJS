import { useContext } from "react";
import { ProviderContext } from "../../ContextAPI/CartContext";

// swiper elements import
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Autoplay } from "swiper/modules"; // Correctly import Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

const TopCategoriesSlide = () => {
  const { Item } = useContext(ProviderContext);

  const filteredItems = Item.filter(
    (el) =>
      el.type !== "Computer Graphics Card" &&
      el.type !== "Gaming Console" &&
      el.type !== "Gaming Laptop"
  );

  return (
    <div className="TopCtgr">
      <Swiper
        autoplay={{
          delay: 2000, // Set your desired delay
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        // pagination={true}
        modules={[EffectFlip, Pagination, Autoplay]} // Include Autoplay here
        className="mySwiper"
      >
        <h1>Graphics Cards</h1>
        {Item.map(
          (el) =>
            el.type === "Computer Graphics Card" && (
              <SwiperSlide key={el.id}>
                <img src={el.image} alt={el.model} title={el.model} />
              </SwiperSlide>
            )
        )}
      </Swiper>

      <Swiper
        autoplay={{
          delay: 2050,
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        // pagination={true}
        modules={[EffectFlip, Pagination, Autoplay]} // Include Autoplay here
        className="mySwiper"
      >
        <h1>Consoles</h1>
        {Item.map(
          (el) =>
            el.type.includes("Console") && ( // Changed 'contains' to 'includes'
              <SwiperSlide key={el.id}>
                <img src={el.image} alt={el.model} title={el.model} />
              </SwiperSlide>
            )
        )}
      </Swiper>

      <Swiper
        autoplay={{
          delay: 2100,
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        // pagination={true}
        modules={[EffectFlip, Pagination, Autoplay]} // Include Autoplay here
        className="mySwiper"
      >
        <h1>Laptops</h1>
        {Item.map(
          (el) =>
            el.type === "Gaming Laptop" && (
              <SwiperSlide key={el.id}>
                <img src={el.image} alt={el.model} title={el.model} />
              </SwiperSlide>
            )
        )}
      </Swiper>

      <Swiper
        autoplay={{
          delay: 2150,
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        // pagination={true}
        modules={[EffectFlip, Pagination, Autoplay]} // Include Autoplay here
        className="mySwiper"
      >
        <h1>Accessories</h1>
        {filteredItems.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.image} alt={el.model} title={el.model} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCategoriesSlide;
