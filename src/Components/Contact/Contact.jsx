import React from 'react'
import "./Contact.scss";
import map from '../../assets/img/map.png'
function Contact() {
  return (
    <div className='Contact'>
        <div className="container">
            <div className="contact_title">
                <h2>Контакты и обратная связь</h2>
                <p>
                Главная 
                    <span>
                    / Контакты и обратная связь
                    </span>
                </p>
            </div>
            <div className="contact_top">
                <div className="contact_tashkent">
                    <div className="info">
                        <h3>Главный офис в Ташкенте</h3>
                            <div>
                            <i class="bi bi-geo-alt-fill"></i>
                            <p>
                            г.Ташкент, Чиланзар <br />
                            10 квартал, дом 3/1
                            </p>
                            </div>
                            <div>
                            <i class="bi bi-telephone-fill"></i>
                            <p>
                            +998 71 276-62-53 <br />
                            +998 71 276-62-54
                            </p>
                            </div>
                            <div>
                            <i class="bi bi-envelope-fill"></i>
                           <p>
                           info@medol.uz  
                           </p>
                            </div>
                            <div>
                                <button>
                                Оставить заявку
                                </button>
                            </div>
                    </div>
                    <div className="map">
                        <img src={map} alt="" />
                    </div>
                </div>
                <h3 className='s'>Наши филиалы в других регионах</h3>
                <div className="contact_viloyat">
                    <div className="fergana">
                   <h3>Ферганская область:</h3>
                        <div><i class="bi bi-geo-alt-fill"></i>
                            <p>
                            г.Фергшана, Алишер. Н <br />
                             10 квартал, дом 3/1
                            </p>
                            </div>
                            <div>
                            <i class="bi bi-telephone-fill"></i>
                            <p>
                            +998 71 276-62-53 <br />
                            +998 71 276-62-54
                            </p>
                            </div>
                            <div>
                            <i class="bi bi-envelope-fill"></i>
                           <p>
                           info@medol.uz  
                           </p>
                            </div>
                            <div>
                                <button>
                                На карте
                                </button>
                    </div>
                    </div>
                    <div className="samarqand">
                        <h3>Самаркандская область:</h3>
                    <i class="bi bi-geo-alt-fill"></i>
                            <p>
                            г.Самарканд, Навои <br />
                             10 квартал, дом 3/1
                            </p>
                           
                            <div>
                            <i class="bi bi-telephone-fill"></i>
                            <p>
                            +998 71 276-62-53 <br />
                            +998 71 276-62-54
                            </p>
                            </div>
                            <div>
                            <i class="bi bi-envelope-fill"></i>
                           <p>
                           info@medol.uz  
                           </p>
                            </div>
                            <div>
                                <button>
                                На карте
                                </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact