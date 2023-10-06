import React from 'react'
import './ServicesContent.scss'
import img1 from '../../assets/img/services1.png'
import img2 from '../../assets/img/services2.png'
import img3 from '../../assets/img/services3.png'
import img4 from '../../assets/img/services4.png'
import img5 from '../../assets/img/services7.png'
import img6 from '../../assets/img/services6.png'

function ServicesContent() {
  return (
    <div className='ServicesContent'>
        <div className="container">
         <div className="services_title">
         <h1>Наши услуги</h1>
         <p>
         Главная 
          <span>
           / Наши услуги
          </span>
         </p>
         </div>
         <div className="services_content">
          <div className="content">
            <img src={img1} alt="" />
            <p>Гарантийное и пост-гарантийноесервисное обслужива медицинского оборудования</p>
          </div>
          <div className="content off">
            <img src={img2} alt="" />
            <p>Государственная регистрация медицинских изделий на территории Республики Узбекистан</p>
          </div>
          <div className="content">
            <img src={img3} alt="" />
            <p>Таможенное оформление под ключ</p>
          </div>
          <div className="content">
            <img src={img4} alt="" />
            <p>Инсталляция и пуско-наладочные работы медицинского оборудования</p>
          </div>
          <div className="content on">
            <img src={img5} alt="" />
            <p>Обучение медицинского персонала работе с медицинским оборудованием</p>
          </div>
          <div className="content on">
            <img src={img6} alt="" />
            <p>Ремонт медицинского оборудования Консультация по медицинскому оборудованию</p>
          </div>
         </div>
        </div>
    </div>
  )
}

export default ServicesContent