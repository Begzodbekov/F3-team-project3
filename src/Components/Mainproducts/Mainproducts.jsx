import React, { useState } from 'react'
import './Mainproducts.scss'
import { mahsulotdata } from '../../lib/MahsulotData'

function Mainproducts() {
  // const [vWidth, setVWidth] = useState(window.innerWidth)

  // window.addEventListener('resize',()=>{
  //   setVWidth(window.innerWidth)
  // })
  return (
    <div className='mainproducts'>
       <div className="container">
       <h2 className='mproduct__tittle'>ПРОДУКЦИЯ</h2>
        <p className='main__p'> Гланая<span>/продукция</span></p>
        <nav className='mainpr__nav'>
            <p className='filt__prod'>Фильтр:</p>
            <ul className='mproduct__btn-list'>
              <li className='p-list__item'>
              <div class="btn-group nav_btnLanguage" role="group">
                              
                              <p className='nav_btn_languagename'></p>
                                <ul class="dropdown-menu">
                                  <li><a  class="dropdown-item" href="#">Бренд</a></li>
                                  <li><a  class="dropdown-item" href="#">Категория</a></li>
                                  <li><a  class="dropdown-item" href="#">Направление</a></li>
                                </ul>
                                <button type="button" class="btn1 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Бренд</button>
                      </div>
              </li>
              <li  className='p-list__item'>  
              <div class="btn-group nav_btnLanguage" role="group">
                              
                              <p className='nav_btn_languagename'></p>
                                <ul class="dropdown-menu">
                                  <li><a  class="dropdown-item" href="#">Бренд</a></li>
                                  <li><a  class="dropdown-item" href="#">Категория</a></li>
                                  <li><a  class="dropdown-item" href="#">Направление</a></li>
                                </ul>
                                <button type="button" class="btn2 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Категория</button>
                      </div>
              </li>
              <li className='p-list__item'>
              <div class="btn-group nav_btnLanguage" role="group">
                              
                              <p className='nav_btn_languagename'></p>
                                <ul class="dropdown-menu">
                                  <li><a  class="dropdown-item" href="#">Бренд</a></li>
                                  <li><a  class="dropdown-item" href="#">Категория</a></li>
                                  <li><a  class="dropdown-item" href="#">Направление</a></li>
                                </ul>
                                <button type="button" class="btn3 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Направление</button>
                      </div>
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