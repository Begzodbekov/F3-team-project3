import React from "react";
import "./Uslugi.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataUslugi } from "../../lib/DataUslugi";

function Uslugi() {
  return (
    <div className="container">
      <div className="Uslugi__con">
        <h1 className="frame__title1">Услуги</h1>
        <ul className="frame__con">
          <>
            <Swiper pagination={true} modules={[Pagination]} className="swiper__1">
              {dataUslugi?.map((item, index) => (
                <SwiperSlide>
                  <li className="frame__1" key={index}>
                    <div className="item__1">
                      <img
                        className="item__1__img__1"
                        src={item.img1}
                        alt="ser"
                      />
                      <h4>{item.text1}</h4>
                      <p>{item.text2}</p>
                      <button className="item__1__btn__1">Подробнее</button>
                    </div>
                    <div className="item__1">
                      <img
                        className="item__1__img__1"
                        src={item.img2}
                        alt="ser"
                      />
                      <h4>{item.text3}</h4>
                      <p>{item.text4}</p>
                      <button className="item__1__btn__1">Подробнее</button>
                    </div>
                    <div className="item__1">
                      <img
                        className="item__1__img__1"
                        src={item.img3}
                        alt="ser"
                      />
                      <h4>{item.text5}</h4>
                      <p>{item.text6}</p>
                      <button className="item__1__btn__1">Подробнее</button>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </ul>
      </div>
    </div>
  );
}

export default Uslugi;
