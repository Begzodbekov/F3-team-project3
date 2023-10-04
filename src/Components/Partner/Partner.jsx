import React from "react";
import "./Partner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Part1 from "../../assets/img/part1.png";
import Part2 from "../../assets/img/part2.png";
import Part3 from "../../assets/img/part3.png";
import Part4 from "../../assets/img/part4.png";
import Part5 from "../../assets/img/part5.png";
import Part6 from "../../assets/img/part6.png";
import Part7 from "../../assets/img/part7.png";
import Part8 from "../../assets/img/part8.png";

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
          modules={[Grid, Navigation]}
          className="mySwiperbox"
        >
          <SwiperSlide>
            <img className="partimg" src={Part1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="partimg" src={Part8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Partner;
