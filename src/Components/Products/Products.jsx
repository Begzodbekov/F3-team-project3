import React, { useState } from 'react'
import './Products.scss'
import  hirurgiyaImg from '../../assets/img/hirurg-img.png'
import  lobaratoryImg from '../../assets/img/lobaratory-img.png'
import  kardiohirurgImg from '../../assets/img/kardiohirurg-img.png'
import  diabetImg from '../../assets/img/diabet-img.png'
import  endourologImg from '../../assets/img/endourolog-img.png'
import  aritmologiyaImg from '../../assets/img/aritmalogiya-img.png'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
function Products() {
  const [vWidth, setVWidth] = useState(window.innerWidth)

  window.addEventListener('resize', ()=>{
    setVWidth(window.innerWidth)
  })
  return (
    <div className='Product'>
      <div className="container">
        <div className="product_inner">
        <h2 className='product__tittle'>ПРОДУКЦИЯ</h2>
        <div className="product_list_father">
        <ul className="product__list">
        <Swiper
        slidesPerView={vWidth >= 1246 ? 6 : 2 && vWidth >= 662 ? 2 : 1}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='product_slider'><li className='product__list-item'>
                <img className='product__first-img' src={hirurgiyaImg} alt="" />
                <p className='f-info'>Эндоваскулярная <br /> хирургия</p> 
                <button className='f-btn' >Посмотреть все</button>
            </li></SwiperSlide>
        <SwiperSlide><li className='product__list-item'>
                <img className='product__third-img' src={kardiohirurgImg} alt="" />
                <p className='t-info'>Кардиохирургия</p>
                <button className='t-btn'>Посмотреть все</button>
            </li></SwiperSlide>
        <SwiperSlide><li className='product__list-item'>
                <img className='product__second-img' src={lobaratoryImg} alt="" />
                <p className='s-info'>Лабораторная <br /> диагностика</p>
                <button className='s-btn'>Посмотреть все</button>
            </li></SwiperSlide>
        <SwiperSlide> <li className='product__list-item'>
                <img className='product__third-img' src={kardiohirurgImg} alt="" />
                <p className='t-info'>Кардиохирургия</p>
                <button className='t-btn'>Посмотреть все</button>
            </li></SwiperSlide>
        <SwiperSlide><li className='product__list-item'>
                <img className='product__fours-img' src={diabetImg} alt="" />
                <p className='fo-info'>ДИАБЕТ</p>
                <button className='fo-btn'>Посмотреть все</button>
            </li></SwiperSlide>
        <SwiperSlide><li className='product__list-item'>
                <img className='product__fivs-img' src={endourologImg} alt="" />
                <p className='fi-info'>ЭНДОУРОЛОГИЯ</p>
                <button className='fi-btn'>Посмотреть все</button>
            </li></SwiperSlide>
        <SwiperSlide> <li className='product__list-item'>
                <img className='product__last-img' src={aritmologiyaImg} alt="" />
                <p className='si-info'>АРИТМОЛОГИЯ</p>
                <button className='si-btn'>Посмотреть все</button>
            </li></SwiperSlide>
      </Swiper>

           
        </ul>
        </div>
      </div>
        
        <Link className='product__link'>Перейти в каталог нашей продукции
        <i class="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  )
}

export default Products
