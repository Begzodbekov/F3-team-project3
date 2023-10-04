import React, { useRef, useState } from 'react';
import './Hero.scss'
import Hero_background from '../../assets/img/hero_background.png'
import Hozirchalik from '../../assets/img/uslugiImg2.png'
import { HeroData, herodata } from '../../lib/HeroData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function Hero() {
  return (
    <div className='Hero'>
        <img className='hero_background' src={Hero_background} alt="" />
        <div className="container">
            <div className="hero_inner">
                <div className="hero_slider_father">
                    <ul className="hero_slider">
                    <>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {
                            HeroData?.map((item, index) =>(
                                <SwiperSlide>
                                <li className="hero_left" key={index}>
                                    <div className="hero_left_top">
                                        <h1>{item.name} </h1>
                                        <p>{item.title}</p>
                                        <button>Подробнее</button>
                                    </div>
                                    <div className="hero_right">
                                        <img src={item.img} alt="" />
                                     </div>
                                </li>
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </>
                    
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero