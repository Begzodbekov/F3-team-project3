import React, { useState } from 'react'
import "./News.scss"
import { Link } from 'react-router-dom'
import  { NewsAndPromotions1 } from "../../lib/NewsAndPromotions"
function News() {
    return (
        <div className='News__con'>
            <div className="container">
                <span className='News__head__title'>
                    <h1 className='News__title'>Новости и Акции</h1>
                    <span className='News__head__links'>
                        <Link className='news__head__link__1'>Главная / </Link>
                        <Link className='news__head__link__2'>Новости и акции</Link>
                    </span>
                </span>
                <div className="button__news">
                    <button className='news__btn1'>
                        Новости
                    </button>
                    <button className='news__btn2'>
                        Акции
                    </button>
                </div>
                <ul className='News__contents'>
                    {
                        NewsAndPromotions1?.map((item,index)=>(
                            <li key={index} className='News__item__1'>
                                <img className='item__1__img' src={item.img} alt="img" />
                                <h4 className='item__1__text1'>{item.text}</h4>
                                <h4 className='item__1__date__1'><b>{item.date}</b></h4>
                                <p className='item__1__text__2'>{item.text2}</p>
                                <button className='item__btn'>Подробнее</button>
                            </li>
                        ))

                    }
                </ul>
                <div className='item__link__con'>
                <Link className='item__link__1'>Посмотреть еще</Link>
                <i class="bi bi-arrow-up-circle arrow"></i>
                </div>
            </div>
        </div>
    )
}

export default News
