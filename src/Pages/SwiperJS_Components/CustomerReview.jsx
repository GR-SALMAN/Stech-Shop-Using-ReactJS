// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function CustomerReview() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true} // Enable loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      // pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="ReviewSwiper"
    >
      <SwiperSlide>
        <p>
          <img
            src="https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-600nw-2460702995.jpg"
            alt=""
          />
          <strong>David Wilson</strong> <br />
          <span className="stars">★★★★★</span> <br />
          &quot;Absolutely loved it! Exceeded my expectations.&quot;
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          <img
            src="https://us.images.westend61.de/0001456573pw/close-up-of-cute-smiling-girl-against-white-background-SDAHF00984.jpg"
            alt="customer image"
          />
          <strong>Sophie Brown</strong> <br />
          <span className="stars">★★★★★</span> <br />
          &quot;Great quality and fast shipping. Would recommend!&quot;
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          <img
            src="https://freedesignfile.com/upload/2018/01/Stylish-young-asian-man-Stock-Photo.jpg"
            alt=""
          />
          <strong>Liam Carter</strong> <br />
          <span className="stars">★★★★☆</span> <br />
          &quot;Good, but shipping took longer than expected.&quot;
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          <img
            src="https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?s=612x612&w=0&k=20&c=6d8f-zZySNoqNYq2DpJP6bCHd7eyEuKj7T6M0O_RhGo="
            alt=""
          />
          <strong>Emily Davis</strong> <br />
          <span className="stars">★★★★★</span> <br />
          &quot;In love with the product! It’s the best one so far.&quot;
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
