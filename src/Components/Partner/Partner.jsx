import React from "react";
import "./Partner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Part1 from '../../assets/img/Part1.png'
import Parts1 from '../../assets/img/'
import Part2 from '../../assets/img/Part2.png'
import Part3 from '../../assets/img/Part3.png'
import Part4 from '../../assets/img/Part4.png'
import Part5 from '../../assets/img/Part5.png'
import Part6 from '../../assets/img/Part6.png'
import Part7 from '../../assets/img/Part7.png'
import Part8 from '../../assets/img/Part8.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Grid, Navigation } from "swiper/modules";

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
          modules={[Grid,Navigation]}
          className="mySwiperbox"
        > 
          <SwiperSlide><img src={Part1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Part8} alt="" /></SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> 
      </div>
    </div>
  );
}

export default Partner;
