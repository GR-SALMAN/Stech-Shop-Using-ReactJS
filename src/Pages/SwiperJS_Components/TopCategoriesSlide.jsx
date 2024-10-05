import { useContext } from "react";
import { ProviderContext } from "../../ContextAPI/CartContext";

//swiper elements import
import { Swiper, SwiperSlide } from "swiper/react";
Autoplay;

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

const TopCategoriesSlide = () => {
  const { Item } = useContext(ProviderContext);

  const Components = Item.filter(
    (gpu) => gpu.type === "Computer Graphics Card"
  );
  const Consoles = Item.filter((el) => el.type === "Gaming Console");
  const Laptops = Item.filter((el) => el.type === "Gaming Laptop");

  return (
    <div className="TopCtgr">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <h1>Graphics Cards</h1>
        {Components.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.image} alt={el.model} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <h1>Consoles</h1>
        {Consoles.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.image} alt={el.model} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"flip"}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {" "}
        <h1>Laptops</h1>
        {Laptops.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.image} alt={el.model} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCategoriesSlide;
