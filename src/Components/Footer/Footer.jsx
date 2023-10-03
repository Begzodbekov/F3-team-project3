import React from "react";
import "./Footer.scss";
import Icona from "../../assets/img/icon_a.png";
import Iconb from "../../assets/img/icon_b.png";
import Iconc from "../../assets/img/icon_c.png";
import Logotip from "../../assets/img/logotip.png";

function Footer() {
  return (
    <div className="container">
      <div className="background_img">
        <div className="left_box">
          <div className="left_top_box">
            <p className="first_text">Контакты</p>

            <div className="column_a">
              <div className="a_inner_a">
                <img src={Icona} alt="" className="footer_icon" />
                <p className="footer_text">
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </p>
              </div>
              <div className="a_inner_b">
                <img src={Iconb} alt="" className="footer_icon" />
                <p className="footer_text">
                  +998 71 276-62-53 <br /> +998 71 276-62-54
                </p>
              </div>
            </div>

            <div className="column_b">
              <div className="b_inner_a">
                <img src={Iconc} alt="" className="footer_icon" />
                <p className="footer_text">info@medol.uz </p>
              </div>
              <div className="b_inner_b">
                <button className="btn"></button>
              </div>
            </div>
          </div>

          <div className="left_bottom_box">
            <img src={Logotip} alt="" className="footer_img" />
            <div className="max_text"></div>
          </div>
        </div>

        <div className="right_box"></div>
      </div>
    </div>
  );
}

export default Footer;
