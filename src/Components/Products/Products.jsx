import React from 'react'
import './Products.scss'
import  hirurgiyaImg from '../../assets/img/hirurg-img.png'
import  lobaratoryImg from '../../assets/img/lobaratory-img.png'
import  kardiohirurgImg from '../../assets/img/kardiohirurg-img.png'
import  diabetImg from '../../assets/img/diabet-img.png'
import  endourologImg from '../../assets/img/endourolog-img.png'
import  aritmologiyaImg from '../../assets/img/aritmalogiya-img.png'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div className='Product'>
      <div className="container">
        <h2 className='product__tittle'>ПРОДУКЦИЯ</h2>
        <ul className="product__list">
            <li className='product__list-item'>
                <img className='product__first-img' src={hirurgiyaImg} alt="" />
                <p className='f-info'>Эндоваскулярная <br /> хирургия</p> 
                <button className='f-btn' >Посмотреть все</button>
            </li>
            <li className='product__list-item'>
                <img className='product__second-img' src={lobaratoryImg} alt="" />
                <p className='s-info'>Лабораторная <br /> диагностика</p>
                <button className='s-btn'>Посмотреть все</button>
            </li>
            <li className='product__list-item'>
                <img className='product__third-img' src={kardiohirurgImg} alt="" />
                <p className='t-info'>Кардиохирургия</p>
                <button className='t-btn'>Посмотреть все</button>
            </li>
            <li className='product__list-item'>
                <img className='product__fours-img' src={diabetImg} alt="" />
                <p className='fo-info'>ДИАБЕТ</p>
                <button className='fo-btn'>Посмотреть все</button>
            </li>
            <li className='product__list-item'>
                <img className='product__fivs-img' src={endourologImg} alt="" />
                <p className='fi-info'>ЭНДОУРОЛОГИЯ</p>
                <button className='fi-btn'>Посмотреть все</button>
            </li>
            <li className='product__list-item'>
                <img className='product__last-img' src={aritmologiyaImg} alt="" />
                <p className='si-info'>АРИТМОЛОГИЯ</p>
                <button className='si-btn'>Посмотреть все</button>
            </li>
        </ul>
        <Link>Перейти в каталог нашей продукции </Link>
       
      </div>
    </div>
  )
}

export default Products
