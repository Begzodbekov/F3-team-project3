import React from 'react'
import './Mainproducts.scss'
import { mahsulotdata } from '../../lib/MahsulotData'

function Mainproducts() {
  return (
    <div className='mainproducts'>
       <div className="container">
       <h2 className='mproduct__tittle'>ПРОДУКЦИЯ</h2>
        <p className='main__p'> Гланая<span>/продукция</span></p>
        <nav className='mainpr__nav'>
            <p className='filt__prod'>Фильтр:</p>
            <ul className='mproduct__btn-list'>
              <li className='p-list__item'>
              <button type="button" class="btn1 btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Бренд</button>
              </li>
              <li  className='p-list__item'>  
              <button type="button" class="btn2 btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Категория</button>
              </li>
              <li className='p-list__item'>
              <button type="button" class="btn3 btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Направление</button>
              </li>
            </ul>
        </nav>
        <ul className='mproduct__list'>
        {
          mahsulotdata?.map((item,index) =>(
            <li key={index}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <button>Посмотреть все</button>
            </li>
          ))
        }
        </ul>
       </div>
    </div>
  )
}

export default Mainproducts