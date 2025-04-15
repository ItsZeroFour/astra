import React from "react";
import style from "./about.module.scss";
import aboutImg from "../../../assets/images/about/about-img.png";
import aboutListItemIcon1 from "../../../assets/icons/about/hourglass.svg";

const About = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__top}>
            <div className={style.about__top__left}>
              <h2>О КОМПАНИИ</h2>
              <p>
                Мы — команда профессионалов, специализирующаяся на
                проектировании, монтаже и обслуживании охранных систем,
                видеонаблюдения и домофонов. Обеспечиваем комплексную
                безопасность объектов любой сложности.Также изготавливаем
                надежные металлоконструкции и двери под заказ — от идей до
                готового решения. Качество, точность и долговечность — наш
                стандарт.
              </p>
            </div>

            <div className={style.about__top__right}>
              <img src={aboutImg} alt="about" />
            </div>
          </div>

          <div className={style.about__main}>
            <ul>
              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img src={aboutListItemIcon1} alt="30 лет на рынке" />
                </div>
                <div className={style.about__main__content}>
                  <h4>30 лет на рынке</h4>
                  <p>
                    Наша компания успешно работает в сфере охранных систем и
                    металлоконструкций уже три десятилетия. Такой опыт — это не
                    просто цифра, а гарантия стабильности, качества и доверия со
                    стороны клиентов.
                  </p>
                </div>
              </li>

              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img src={aboutListItemIcon1} alt="30 лет на рынке" />
                </div>
                <div className={style.about__main__content}>
                  <h4>30 лет на рынке</h4>
                  <p>
                    Наша компания успешно работает в сфере охранных систем и
                    металлоконструкций уже три десятилетия. Такой опыт — это не
                    просто цифра, а гарантия стабильности, качества и доверия со
                    стороны клиентов.
                  </p>
                </div>
              </li>

              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img src={aboutListItemIcon1} alt="30 лет на рынке" />
                </div>
                <div className={style.about__main__content}>
                  <h4>30 лет на рынке</h4>
                  <p>
                    Наша компания успешно работает в сфере охранных систем и
                    металлоконструкций уже три десятилетия. Такой опыт — это не
                    просто цифра, а гарантия стабильности, качества и доверия со
                    стороны клиентов.
                  </p>
                </div>
              </li>

              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img src={aboutListItemIcon1} alt="30 лет на рынке" />
                </div>
                <div className={style.about__main__content}>
                  <h4>30 лет на рынке</h4>
                  <p>
                    Наша компания успешно работает в сфере охранных систем и
                    металлоконструкций уже три десятилетия. Такой опыт — это не
                    просто цифра, а гарантия стабильности, качества и доверия со
                    стороны клиентов.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
