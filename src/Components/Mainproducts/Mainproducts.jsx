import React from 'react'
import './Mainproducts.scss'

function Mainproducts() {
  return (
    <div className='mainproducts'>
        <h2>ПРОДУКЦИЯ</h2>
        <p> Гланая<span>продукция</span></p>
        <nav>
            <p>Фильтр:</p>
      <div class="btn-group nav_btnLanguage" role="group">
                    <img src="" alt="" />
                    <p className='nav_btn_languagename'></p>
                      <ul class="dropdown-menu">
                        <li><a  class="dropdown-item" href="#">Русский</a></li>
                        <li><a  class="dropdown-item" href="#">Uzbek</a></li>
                        <li><a  class="dropdown-item" href="#">English</a></li>
                      </ul>
                      <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                </div>
                <div class="btn-group nav_btnLanguage" role="group">
                    <img src="" alt="" />
                    <p className='nav_btn_languagename'></p>
                      <ul class="dropdown-menu">
                        <li><a  class="dropdown-item" href="#">Русский</a></li>
                        <li><a  class="dropdown-item" href="#">Uzbek</a></li>
                        <li><a  class="dropdown-item" href="#">English</a></li>
                      </ul>
                      <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                </div>
                <div class="btn-group nav_btnLanguage" role="group">
                    <img src="" alt="" />
                    <p className='nav_btn_languagename'></p>
                      <ul class="dropdown-menu">
                        <li><a  class="dropdown-item" href="#">Русский</a></li>
                        <li><a  class="dropdown-item" href="#">Uzbek</a></li>
                        <li><a  class="dropdown-item" href="#">English</a></li>
                      </ul>
                      <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                </div>
        </nav>
    </div>
  )
}

export default Mainproducts
