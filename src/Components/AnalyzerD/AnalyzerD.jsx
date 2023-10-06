import React, { useState } from "react";
import "./AnalyzerD.scss";
import { Link, useParams } from "react-router-dom";
import { analyzer } from "../../lib/Data";
function AnalyzerD() {
  const { slug } = useParams();
  const [analyzerD, setAnalyzerD] = useState(
    analyzer.find((item) => item.id == slug)
  );
  return (
    <div className="AnalyzerD">
      <div className="container">
        <div className="analyzerD__iner">
          <div className="analyzerD__top">
            <span>
              <h2>Анализатор гемостаза Yumizen G800</h2>
            </span>
            <span className="analyzerD__top__two">
              <span>
                <Link to={'/'}>Главная / </Link>
              <Link to={'/tavar'}>Продукция</Link>
              </span>/ Анализатор гемостаза Yumizen
              G800
            </span>
          </div>
          <div className="analyzerD__center">
            <div className="analyzerD__item">
              {analyzer
                .filter((item) => item.id == slug).map((item) => (
                  <div className="analyzer__center__itemD">
                    <div className="big">
                    <div className="analyzerD__item__left">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="analyzerD__item__right">
                      <span className="side">
                        Страна:
                        <span>{item.side}</span>
                      </span>
                      <span className="category">
                        Категория:
                        <span>Гемостаз</span>
                      </span>
                      <span className="manufacturer">
                      Производитель: 
                      <span>{item.manufacturer}</span>
                      </span>
                      <span className="info">
                        Автоматический настольный анализатор гемостаза для
                        лабораторий среднего размера.
                      </span>
                      <div className="button__price">
                        <span className="button__price__one">
                          <button>Запросить цену</button>
                        </span>
                        <span className="button__price__two"><button>Оставить заявку</button></span>
                      </div>
                      <div className="button__send">
                        <button >Поделится   <span>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-telegram"></i>
                        </span> </button>
                      
                      </div>
                    </div>
                    </div>
                    <div className="analyzerD__item__bottom">
                      <div className="analyzerD__item__bottom__button">
                        <span className="analyzerD__item__bottom__button1">
                          <button>Описание</button>
                        </span>
                        <span className="analyzerD__item__bottom__button2">
                          <button>Приложенные документы</button>
                        </span>
                      </div>
                      <div className="analyzerD__item__bottom__info">
                        <ul className="analyzerD__item__bottom__info__list">
                        <p>
                          <b>Производитель: Horiba</b>  <br /> <br />
                           <b>Анализатор  гемостаза Yumizen G800</b> <br /> <br />
                           Автоматический настольный анализатор гемостаза для лабораторий среднего размера. <br /> <br />
                           <b> Умный способ  тестирования</b> <br />
                          
                          <li>4 независимых измерительных канала</li>  
                          <li>14 охлаждаемых + 4 встроенных реагента</li> 
                           <li>10 образцов + 5 положений образца STAT   
                           </li>
                           <li> Автоматическая рефлекси способность к повторному запуску</li>
                           <li> Основная калибровочная кривая (калибровка не требуется)</li>
                          <b>Комплексная безопасность</b> 
                          
                          
                         <li> Положительная идентификация </li>
                          <li>Внутреннее хранилище данных, встроенный компьютер</li>
                          <li>Готовые к использованию реагенты </li>
                           <b>Повышенная эффективность</b>   
                          <li>3 эталонных метода измерения: коагуляционный, иммунотурбидиметрический и хромогенный </li>
                          
                          <li>Непрерывная загрузка: 60 образцов/600  кювет</li>
                         <li> Производительность 160 тестов в час </li>
                          <li>Бесплатная  поддержка </li>
                         
                           <b>Удобные функции</b> 
                           <li>Интеллектуальное управление контролем качества</li>
                            <li>Инновационный пользовательский интерфейс</li>
                         
                            <li>  Несколько подключений: Лабораторная  информационная система - VPN </li>
                         
                        </p>
                        </ul>
                       
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyzerD;
