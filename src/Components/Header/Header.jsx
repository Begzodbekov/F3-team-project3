import React, { useRef, useState } from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import Locationimg from '../../assets/img/header_locaton_img.png'
import Headerphone from '../../assets/img/header_phone.png'
import Herolupa from '../../assets/img/hero_search_lupa.png'
import Facebook from '../../assets/img/hero_facebook.png'
import Russiaflug from '../../assets/img/header_russia_fag.png'
function Header() {
  const [language, setLanguage] = useState('Русский')
  const uzb = useRef()
  let languagearray = []
  // console.log(languagearray);
  // if(window.localStorage.getItem('language')){
  //   languagearray = JSON.parse(window.localStorage.getItem('language'))
  // }
  function LanguageChange (){
    languagearray.push(uzb.current.value)
    window.localStorage.setItem('language', JSON.stringify(languagearray))
  }
  // const languageChoice = JSON.parse(window.localStorage.getItem('language'))
  // languageChoice?.map((item)=>(
  //   setLanguage(item)
  // ))
  function Onlanguagechange(){

  }
  console.log(language);
          return (
            <div className='Header'>
              <div className="container">
                <div className="nav_inner">
                  <nav className='nav'>
                    <ul className='nav_list'>
                      <li className='nav_list_item'>
                              <span className='nav_location'>
                                <img src={Locationimg} alt="" />
                              </span>
                              <span className='nav_list_item_address'>
                                <p> г.Ташкент, Чиланзар</p>
                                <p>10 квартал, дом 3/1</p>
                              </span>
                      </li>
                      <li className='nav_list_item nav_calll'>
                                <img className='header_phone' src={Headerphone} alt="" />
                                <span className='nav_list_item_phone' >
                                  <p> +998 71 276-62-53</p>
                                  <p>+998 71 276-62-54</p>  
                                </span>         
                      </li>
                      <li className='nav_list_item header_logo'>
                        <img src={logo} alt="" />
                      </li>
                      <li className='nav_list_item'>
                                <span className='nav_search'>
                                  <img src={Herolupa} alt="" />
                                </span>
                      </li>
                      <li className='nav_list_item '>
                                <span className='nav_facebook'>
                                  <img src={Facebook} alt="" />
                                  <p>
                                             Мы на Facebook
                                  </p>
                                </span>
                      </li>
                      <li className='nav_list_item'>
                        <div class="btn-group nav_btnLanguage" role="group">
                                <img src={Russiaflug} alt="" />
                                <p className='nav_btn_languagename'>{language}</p>
                                  <ul onChange={Onlanguagechange} class="dropdown-menu">
                                    <li><a  class="dropdown-item" href="#">Русский</a></li>
                                    <li><a onClick={LanguageChange} ref={uzb} class="dropdown-item" href="#">Uzbek</a></li>
                                    <li><a  class="dropdown-item" href="#">English</a></li>
                                  </ul>
                                  <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                        </div>
                      </li>                            
                    </ul>
                  </nav>
                  <div className="nav_bottom">
                    <ul className='nav_bottom_list'>
                      <li>МАГАЗИН</li>
                      <li> О КОМПАНИИ</li>
                      <li>ПРОДУКЦИЯ</li>
                      <li>УСЛУГИ</li>
                      <li>АКЦИИ  И НОВОСТИ</li>
                      <li> ОБРАТНАЯ СВЯЗЬ</li>
                    </ul>
                  </div>
                </div>
              </div>
           </div>
          )
}

export default Header