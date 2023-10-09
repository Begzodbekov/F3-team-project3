import React, {  useState } from "react";
import "./Uslugi.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataUslugi } from "../../lib/DataUslugi";
import servic1 from "../../assets/img/servic1.png"
import uslugi2 from "../../assets/img/uslugiImg2.png"
import uslugi3 from "../../assets/img/uslugi3.png"
import UslugiBlur from "../../assets/img/uslugiBlur.png"

function Uslugi() {
  const [vWidth, setVWidth] = useState(window.innerWidth)

  window.addEventListener('resize', ()=>{
    setVWidth(window.innerWidth)
  })
  return (

    <div className="container">
        <h1 className="frame__title1">Услуги</h1>
        <ul className="frame__1">
          <>
          <Swiper
          slidesPerView={vWidth >= 1246 ? 3 : 2 && vWidth >= 662 ? 2 : 1}
          pagination={true} modules={[Pagination]}
          className="uslugiswiper"
          >
              {
                dataUslugi?.map((item,index)=>(
                  <SwiperSlide>
                    <li key={index} className="item__1">
                      <img className="frame__img" src={item.img} alt="" />
                      <h4 className="item__1__text__1">{item.text1}</h4>
                      <p className="item__1__text__2">{item.text}</p>
                      <button className="item__1__btn__1">Подробнее</button>
                    </li>
                  </SwiperSlide>
                ))
              }
          </Swiper>
          </>
        </ul>
      </div>
  );
}

export default Uslugi;
