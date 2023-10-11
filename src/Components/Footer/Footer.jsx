import React, { useState } from "react";
import "./Footer.scss";
import Icona from "../../assets/img/icon_a.png";
import Iconb from "../../assets/img/icon_b.png";
import Iconc from "../../assets/img/icon_c.png";
import Logotip from "../../assets/img/logotip.png";

function Footer() {
const [shadow , setShadow]=useState(false)
console.log(shadow);
  return (
    <div className="background_img">
      <div className="container">
      <div className="shadow__inner">
      <div className="shadow">
       <h2>Оставьте заявку</h2>
       <input className="name" type="text" placeholder="ФИО"/>
        <input className="tel" type="text" placeholder="Номер телефона*"/>
        <input className="thre" type="text" placeholder="Тема обращения*" />
        <textarea className="big__inp"  cols="30" rows="5"></textarea>
       <span className="chek__big">
       <input className="chek" type="checkbox"  />
        <p>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
       </span>
        <button className="btn__shadow">Отправить</button>
      </div>
      </div>
        <div className="footer_big_box">
          <div className="left_box">
            <div className="left_top_box">
              <div className="column_a">
                <div className="relate_box_b">
                  <img src={Logotip} alt="" className="footer_img" />
                </div>
                <p className="first_text">Контакты</p>
                <div className="first_text_box_in">
                  <div className="a_inner">
                    <div className="footer_icon">
                      <img src={Icona} alt="" />
                    </div>
                    <p className="footer_text">
                      г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                    </p>
                  </div>
                  <div className="a_inner">
                    <div className="footer_icon">
                      <img src={Iconc} alt="" />
                    </div>
                    <p className="footer_text">
                      +998 71 276-62-53 <br /> +998 71 276-62-54
                    </p>
                  </div>
                </div>
              </div>

              <div className="column_b">
                <div className="boxive"></div>
                <div className="a_inner">
                  <div className="footer_icon">
                    <img src={Iconb} alt="" />
                  </div>
                  <p className="footer_text">info@medol.uz </p>
                </div>
                <div className="b_inner">
                  <button onClick={()=>setShadow(!shadow)} className="btn">Оставить заявку</button>
                </div>

              </div>
            </div>

            <div className="left_bottom_box">
              <div className="relate_box_a">
                <img src={Logotip} alt="" className="footer_img" />
              </div>
              <div className="max_text">
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить
                огромную пользу населению, путем решения глобальных вопросов.
                Внедряя инновационные технологии на рынок Узбекистана.
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="column_text">
              <div className="text_footer_hack">
                <ul className="foot_text_mine">
                  <p className="text_footer_bold">О<i>.</i>компании</p>
                  <li>История</li>
                  <li>Партнеры</li>
                  <li>Вакансии</li>
                </ul>
              </div>
            </div>
            <div className="column_text">
              <div className="text_footer_hack">
                <ul className="foot_text_mine">
                  <p className="text_footer_bold">Продукция</p>
                  <li>Эндоваскулярна хирургия</li>
                  <li>Аритмология</li>
                  <li>Кардиохирургия</li>
                  <li>Лабораторная диагностика</li>
                  <li>Хирургия</li>
                  <li>Эндоурология</li>
                  <li>Нейрохирургия</li>
                  <li>Анестезиология и реанимация</li>
                  <li>Диабет</li>
                </ul>
              </div>
            </div>
            <div className="column_text">
              <div className="text_footer_hack">
                <ul className="foot_text_mine">
                  <p className="text_footer_bold">Услуги</p>
                  <li>Сервис</li>
                  <li>Регистрации</li>
                  <li>Услуги логистики</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
