import React, { useRef, useState } from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import Locationimg from '../../assets/img/header_locaton_img.png'
import Headerphone from '../../assets/img/header_phone.png'
import Herolupa from '../../assets/img/hero_search_lupa.png'
import Facebook from '../../assets/img/hero_facebook.png'
import Russiaflug from '../../assets/img/header_russia_fag.png'
import NavbarResponsive from '../../assets/img/header_navbar_responsive.png'
import { Link, useLocation } from 'react-router-dom'
function Header() {
  const [language, setLanguage] = useState('Русский')
  const [languageImg, setLanguageImg] = useState("https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png")
  // if(language == 'Uzbek'){
  //   languageImg="https://oltiariqped.uz/frontend/img/png/uzb.png"
  // }
  const location = useLocation().pathname
  const uzb = useRef()
  // console.log(uzb.current.value);
  // console.log(language);

  let languagesValue = document.querySelectorAll(".dropdown-item");
  // console.log(languagesValue);
  function languageChange(){
    setLanguage(languageChange.current.value)
  }
  function languagebtn (){
    setLanguage("Uzbek")
    setLanguageImg("https:// .uz/frontend/img/png/uzb.png")
  }



  const navBottom = useRef()
  const Navbar = ()=>{
    navBottom.current.classList.toggle('responsive_navbar')
  }
  const Searchref = useRef()
  const Searchinp = useRef()
  const search = ()=>{
    Searchref.current.classList.toggle('nav_list_search')
    Searchinp.current.classList.toggle('nav_serch_inp')
  }
  // <script src='http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate'></script>
  // function loadGoogleTranslate(){
  //   new loadGoogleTranslate.translate.TranslateElement("nav_bottom")
  // }
          return (
            <div className={location != '/'? 'Headers': 'Header'}>

              <div className="container">
                <div className="nav_inner">
                  <nav className='nav'>
                    <ul className='nav_list'>
                      <li className='nav_list_item'>
                              <span className='nav_location'>
                                <a href="">
                                  <img src={Locationimg} alt="" />
                                  {/* <input type="" /> */}
                                </a>
                              </span>
                              <span className='nav_list_item_address'>
                                <p> г.Ташкент, Чиланзар</p>
                                <p>10 квартал, дом 3/1</p>
                              </span>
                      </li>
                      <li className='nav_list_item nav_calll'>
                        <a href="">
                             <img className='header_phone' src={Headerphone} alt="" />
                        </a>
                                <span className='nav_list_item_phone' >
                                  <p> +998 71 276-62-53</p>
                                  <p>+998 71 276-62-54</p>  
                                </span>         
                      </li>
                      <li className='nav_list_item header_logo'>
                        <a href="">
                          <img src={logo} alt="" />
                        </a>
                      </li>
                      <li ref={Searchref} className='nav_list_item '>
                                <span className='nav_search'>
                                    <img onClick={search} src={Herolupa} alt="" />
                                </span>
                                <input ref={Searchinp} className='nav_serch_inp1' type="text" name="" id="" placeholder='Поиск по сайту' />
                      </li>
                      <li className='nav_list_item '>
                                <span className='nav_facebook'>
                                  <a href="">
                                  <img src={Facebook} alt="" />
                                  </a>
                                  <p>
                                             Мы на Facebook
                                  </p>
                                </span>
                      </li>
                      <li className='nav_list_item'>
                        <div class="btn-group nav_btnLanguage" role="group">
                           <img className='languageimg' src={languageImg} alt="" />
                                <p className='nav_btn_languagename'>{language}</p>
                                  <ul onChange={()=> setLanguage(uzb.current)}  class="dropdown-menu">
                                    <li><a onClick={()=> setLanguage("Русский")} class="dropdown-item" href="#">
                                      <img src={Russiaflug} alt="" />
                                      Русский</a>
                                      </li>
                                    <li><a  onClick={ languagebtn} class="dropdown-item" href="#"> <img src="https://oltiariqped.uz/frontend/img/png/uzb.png" alt="" />Uzbek</a></li>
                                    <li><a onClick={()=> setLanguage("English")}  class="dropdown-item" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" />English</a></li>
                                  </ul>
                                  <button onChange={languageChange} type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                        </div>
                      </li>             
                      <li  className='hero_navbar_responsive'>
                        <img onClick={Navbar} src={NavbarResponsive} alt="" />  
                      </li>               
                    </ul>
                  </nav>
                  <div ref={navBottom} className="nav_bottom" id='nav_bottom'>
                    <ul  className='nav_bottom_list'>
                      <li  className='nav_bottom_item1'>
                        <Link to={'/'}  className={location == '/' ?'nav_bottom_a2':null}> 
                          <span className={language!= "Русский"?"none":'block'}>МАГАЗИН</span>
                          <span className={language == "Uzbek"? "block": "none"} >MAGAZIN</span>
                          <span className={language != "English"? "none":"block"}>SHOP</span>
                        </Link>
                      </li>
                      <li className='nav_bottom_itemO'> 
                        <Link  className={location == '/company' ?'nav_bottom_a2':null}> О КОМПАНИИ </Link>
                      </li>
                      <li><Link to='/mahsulot' className={location == '/mahsulot' ?'nav_bottom_a2':null}>ПРОДУКЦИЯ</Link></li>
                      <li> <Link to='/services' className={location == '/services' ?'nav_bottom_a2':null}>УСЛУГИ</Link></li>
                      <li> <Link className={location == '/news' ?'nav_bottom_a2':null}>АКЦИИ И НОВОСТИ </Link></li>
                      <li className='nav_bottom_item6'><Link className={location == '/aloqa' ?'nav_bottom_a2':null}>ОБРАТНАЯ СВЯЗЬ</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
           </div>
          )
}

export default Header