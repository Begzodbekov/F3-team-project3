import React from "react";
import "./Partner.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Grid, Pagination, Navigation } from "swiper/modules";

function Partner() {
  return (
    <div className="container">
      <h1 className="text_one">ПАРТНЕРЫ</h1>
      <div className="partner_bigbox">
        <Swiper
          navigation={true}
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Grid, Pagination, Navigation]}
          className="mySwiperbox"
        > className="inswap"
          <SwiperSlide className="inswap">Slide 1</SwiperSlide>
          <SwiperSlide className="inswap">Slide 2</SwiperSlide>
          <SwiperSlide className="inswap">Slide 3</SwiperSlide>
          <SwiperSlide className="inswap">Slide 4</SwiperSlide>
          <SwiperSlide className="inswap">Slide 5</SwiperSlide>
          <SwiperSlide className="inswap">Slide 6</SwiperSlide>
          <SwiperSlide className="inswap">Slide 7</SwiperSlide>
          <SwiperSlide className="inswap">Slide 8</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
          <SwiperSlide className="inswap">Slide 9</SwiperSlide>
        </Swiper> 
      </div>
    </div>
  );
}

export default Partner;
