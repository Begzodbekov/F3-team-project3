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
            <ul className='mproduct__list'>
              <li className='p-list__item'>
              <button type="button" class="btn1 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
              </li>
              <li  className='p-list__item'>  
              <button type="button" class="btn1 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
              </li>
              <li className='p-list__item'>
              <button type="button" class="btn1 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
              </li>
            </ul>
        </nav>
        <ul>
          
        {
          mahsulotdata?.map((item, index)=>(
            <li key={index}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
            </li>
          ))
        }
        </ul>
       </div>
    </div>
  )
}

export default Mainproducts

      // <div class="btn-group nav_btnLanguage" role="group">
      //               <img src="" alt="" />
      //               <p className='nav_btn_languagename'></p>
      //                 <ul class="dropdown-menu">
      //                   <li><a  class="dropdown-item" href="#">Русский</a></li>
      //                   <li><a  class="dropdown-item" href="#">Uzbek</a></li>
      //                   <li><a  class="dropdown-item" href="#">English</a></li>
      //                 </ul>
      //                 <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
      //           </div>
      //           <div class="btn-group nav_btnLanguage" role="group">
      //               <img src="" alt="" />
      //               <p className='nav_btn_languagename'></p>
      //                 <ul class="dropdown-menu">
      //                   <li><a  class="dropdown-item" href="#">Русский</a></li>
      //                   <li><a  class="dropdown-item" href="#">Uzbek</a></li>
      //                   <li><a  class="dropdown-item" href="#">English</a></li>
      //                 </ul>
      //                 <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
      //           </div>
      //           <div class="btn-group nav_btnLanguage" role="group">
      //               <img src="" alt="" />
      //               <p className='nav_btn_languagename'></p>
      //                 <ul class="dropdown-menu">
      //                   <li><a  class="dropdown-item" href="#">Русский</a></li>
      //                   <li><a  class="dropdown-item" href="#">Uzbek</a></li>
      //                   <li><a  class="dropdown-item" href="#">English</a></li>
      //                 </ul>
      //                 <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
      //           </div>