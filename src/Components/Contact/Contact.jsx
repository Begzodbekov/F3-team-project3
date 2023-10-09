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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987279827!2d69.11456007869414!3d41.282737945802886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1696845765997!5m2!1sru!2s" frameborder="0"></iframe>

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
            <div className="contact_bottom">
                <h3>Свяжитесь с нами</h3>
                <div className="contact_input">
                    <div className="first_input">
                    <i class="bi bi-person-fill"></i>
                    <input type="text" placeholder='Ваше имя'/>
                    </div>
                    <div className="first_input">
                    <i class="bi bi-journal-medical"></i>
                    <input type="text" placeholder='Тема обращения'/>
                    </div>
                    <div className="first_input">
                    <i class="bi bi-pen-fill"></i>
                    <input type="text" placeholder='Email или телефон'/>
                    </div>
                </div>
                <div className="contact_area">
                    <textarea name='' cols="140" rows="10" placeholder='Сообщение'></textarea>
                </div>
                <div className="bottom_text">
                    <input type="checkbox" />
                    <p>Я даю согласие OOO Medol и его аффилированным лицам на обработку моих персональныхданныхцеляхрассмомоего обращения, определенных в Положении об обработке персональных данных. </p>
                </div>
                <div className="btn">
                    <button>
                    Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact