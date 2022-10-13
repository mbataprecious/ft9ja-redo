import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
// import required modules
import { Pagination } from "swiper";
import Testimony from "../components/Testimony";
import { testimonies } from "../utils/landingUtils";

// import "./styles.css";

const Testimonials = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className=" w-full"
    >
      {testimonies.map((testimony) => (
        <SwiperSlide key={testimony.id}>
          <Testimony {...testimony} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
