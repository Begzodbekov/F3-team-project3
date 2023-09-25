import React from 'react'
import "./Uslugi.scss"
import services1 from "../../assets/img/servic 1.png"
import uslugiImg2 from "../../assets/img/uslugiImg2.png"
import uslugiImg3 from "../../assets/img/uslugi3.png"


function Uslugi() {
  return (
    <div className='Uslugi__con'>
        <h1 className='frame__title1'>Услуги</h1>
        <div className="frame__1">
            <div className="item__1">
                <img className='item__1__img__1' src={services1} alt="" />
                <h3 className='item__1__text__1'>СЕРВИС ОБОРУДОВАНИЯ</h3>
                <p className='item__1__text__2'>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                <button className='item__1__btn__1'>Подробнее</button>
            </div>
            <div className="item__2">
                <img className='item__2__img__1' src={uslugiImg2} alt="img" />
                <h3 className='item__2__text__1'>РЕГИСТРАЦИИ</h3>
                <p className='item__2__text__2'>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                <button className='item__2__btn__1'>Подробнее</button>
            </div>
            <div className="item__3">
                <img className='item__3__img__1' src={uslugiImg3} alt="" />
                <h3 className='item__3__text__1'>СЕРВИС ОБОРУДОВАНИЯ</h3>
                <p className='item__3__text__2'>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                <button className='item__3__btn__1'>Подробнее</button>
            </div>
        </div>
    </div>
  )
}

export default Uslugi