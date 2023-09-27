import React from 'react'
import './Hero.scss'
import Hero_background from '../../assets/img/hero_background.png'
function Hero() {
  return (
    <div className='Hero'>
        <img className='hero_background' src={Hero_background} alt="" />
        <div className="container">
            <div className="hero_inner">
                <div className="hero_slider">
                    <div className="hero_left">
                        <h1>Анализатор ABL800 FLEX</h1>
                        <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero