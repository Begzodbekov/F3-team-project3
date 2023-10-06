import React from "react";
import "./Analyzer.scss";
import { analyzer } from "../../lib/Data";
import { Link } from "react-router-dom";
function Analyzer() {
  return (
    <div className="Analyzer">
      <div className="container">
        <div className="analyzer__inner">
          <div className="analyzer__top">
            <span className="analyzer__top__one">
              <h2>Биохимические анализаторы</h2>
            </span>
            <span className="analyzer__top__two"> 
            <a href="#/">Главная</a>
              <p> / Продукция / биохимические анализаторы</p>
            </span>
          </div>
          <div className="analyzer__center">
            <ul className="analyzer__list">
              {
              analyzer?.map((item, index) => (
                <li className="analyzer__item" key={index}>
                  <img src={item.img} alt="img" />
                  <span className="analyzer__name">{item.name}</span>
                  <span className="analyzer__side">
                    <p>Страна:</p>
                   <span>
                      {item.side}
                   </span>
                  </span>
                  <span className="analyzer__manufacturer">
                    <p>
                    Производитель: 
                    </p>
                    <span>
                        {item.manufacturer}
                   </span>
                  </span>
<span className="span__btn">

  <Link className="bottom"  to={`/tovarD/${item.id}`}>Подробнее</Link>
</span>


                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyzer;
