import React from "react";
import "./Footer.scss";
import Icona from "../../assets/img/icon_a.png";
import Iconb from "../../assets/img/icon_b.png";
import Iconc from "../../assets/img/icon_c.png";
import Logotip from "../../assets/img/logotip.png";

function Footer() {
  return (
    <div className="background_img">
      <div className="container">
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
                  <button className="btn">Оставить заявку</button>
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
              <p className="text_footer_bold">О компании</p>
              <div className="text_footer_hack">
                История <br />
                Партнеры <br />
                Вакансии
              </div>
            </div>
            <div className="column_text">
              <p className="text_footer_bold">Продукция</p>
              <div className="text_footer_hack">
                Эндоваскулярная <br /> хирургия <br /> Аритмология <br />
                Кардиохирургия <br /> Лабораторная диагностика <br /> Хирургия
                <br /> Эндоурология <br /> Нейрохирургия <br /> Анестезиология и
                реанимация <br /> Диабет
              </div>
            </div>
            <div className="column_text">
              <p className="text_footer_bold">Услуги</p>
              <div className="text_footer_hack">
                Сервис <br /> Регистрации <br /> Услуги логистики
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
