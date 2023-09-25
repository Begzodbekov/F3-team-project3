import React from 'react'
import logo from '../../assets/img/logo.png'
function Header() {
          return (
            <div className='Header'>
              <nav>
                <div className="container">
                    <ul>
                      <li>
                              <span>
                                        <i className="bi bi-geo-alt"></i>
                              </span>
                              <span>
                              <p>
                              г.Ташкент, Чиланзар
                               10 квартал, дом 3/1
                              </p>
                              </span>
                    </li>
                    <li>
                              <span>
                                        <i className="bi bi-telephone-outbound-fill"></i>          
                              </span>     
                              <span>
                              +998 71 276-62-53 +998 71 276-62-54          
                              </span>         
                    </li>
                    <li>
                     <img src={logo} alt="" />
                    </li>
                    <li>
                              <span>
                              <i className="bi bi-search"></i>
                              </span>
                    </li>
                    <li>
                              <span>
                              <i class="bi bi-facebook"></i>
                              <p>
                                         Мы на Facebook
                              </p>
                              </span>
                    </li>
                    <li>
                    <div class="btn-group" role="group">
                              <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              
                              </button>
                              <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Русский</a></li>
                              <li><a class="dropdown-item" href="#">Uzb</a></li>
                              </ul>
                    </div>
                    </li>                            
                    </ul>
                </div>
              </nav>
           </div>
          )
}

export default Header