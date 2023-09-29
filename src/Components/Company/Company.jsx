import React from "react";
import './Company.scss'
import  headerLogo from '../../assets/img/header-logo.png'
function Company() {
  return (
    <div className="Company">
      <div className="container">
        <div className="company__inner">
          <div className="company__top">
            <h2>О КОМПАНИИ</h2>
          </div>
          <div className="company__bottom">
          <div className="company__left">
            <span className="left__1">
            <div className="left-2-small">

</div>
            </span>
            <span className="left__2">
            <div className="left-2-small">

            </div>
              </span>
            <span className="left__3">
                    <img src={headerLogo} alt="img" />
                </span>
          </div>
          <div className="company__right">
            <span className="right__1">
              <p>
                    Группа компаний MEDOL создавалась высококвалифицированными
                    специалистами в сфере медицины, инженерии и экономики, за
                    плечами которых значительный опыт на рынке высоких медицинских
                    технологий, которая имеет свои представительства в разных
                    уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане
                    ИП ООО “Medical Online Services". Цель компании построить
                    прозрачный долгосрочный бизнес, принести пользу обществу путем
                    развития и внедрения передовых технологий в систему
                    здравоохранения Республики Узбекистан.
              </p>
            </span>
            <span className="right__2">
                <button >
                    Узнать больше
                </button>
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
